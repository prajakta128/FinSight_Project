import { Router, type IRouter } from "express";
import { and, eq } from "drizzle-orm";
import {
  CreateBudgetBody,
  CreateCustomerBody,
  CreateInvoiceBody,
  CreatePayableBody,
  CreateReceivableBody,
  CreateRecurringExpenseBody,
  CreateRevenueBody,
  CreateTransactionBody,
  CreateVendorBody,
  CreateBusinessBody,
} from "@workspace/api-zod";
import { db } from "@workspace/db";
import {
  businesses,
  budgets,
  customers,
  invoices,
  payables,
  receivables,
  recurringExpenses,
  transactions,
  vendors,
} from "@workspace/db/schema";
import { requireAuth } from "../middlewares/requireAuth";

const router: IRouter = Router();
router.use(requireAuth);

const today = "2025-03-08";
const money = (value: string | number) => Number(value);
const dbDate = (value: Date) => value.toISOString().slice(0, 10);
const withBusinessId = (userId: string) =>
  db.select({ id: businesses.id }).from(businesses).where(eq(businesses.userId, userId)).limit(1);

async function currentBusiness(userId: string) {
  const rows = await withBusinessId(userId);
  return rows[0];
}

function dateOnly(value: Date | string) {
  return value instanceof Date ? value.toISOString() : value;
}

function businessResponse(row: typeof businesses.$inferSelect) {
  return {
    id: row.id,
    name: row.name,
    industry: row.industry,
    location: row.location,
    currency: row.currency,
    financialYear: row.financialYear,
    openingCash: money(row.openingCash),
    monthlyRevenueTarget: money(row.monthlyRevenueTarget),
    createdAt: row.createdAt.toISOString(),
  };
}

function transactionResponse(row: typeof transactions.$inferSelect) {
  return {
    id: row.id,
    businessId: row.businessId,
    type: row.type,
    description: row.description,
    amount: money(row.amount),
    category: row.category,
    vendor: row.vendor,
    customer: row.customer,
    date: dateOnly(row.date),
    status: row.status,
  };
}

function customerResponse(row: typeof customers.$inferSelect) {
  return { id: row.id, businessId: row.businessId, name: row.name, email: row.email, phone: row.phone };
}
function vendorResponse(row: typeof vendors.$inferSelect) {
  return { id: row.id, businessId: row.businessId, name: row.name, category: row.category, terms: row.terms };
}
function receivableResponse(row: typeof receivables.$inferSelect) {
  return { id: row.id, businessId: row.businessId, customer: row.customer, invoice: row.invoice, amount: money(row.amount), dueDate: row.dueDate, status: row.status };
}
function payableResponse(row: typeof payables.$inferSelect) {
  return { id: row.id, businessId: row.businessId, vendor: row.vendor, reference: row.reference, amount: money(row.amount), dueDate: row.dueDate, priority: row.priority, status: row.status };
}
function budgetResponse(row: typeof budgets.$inferSelect) {
  return { id: row.id, businessId: row.businessId, category: row.category, amount: money(row.amount), period: row.period };
}
function recurringResponse(row: typeof recurringExpenses.$inferSelect) {
  return { id: row.id, businessId: row.businessId, name: row.name, amount: money(row.amount), category: row.category, frequency: row.frequency };
}
function invoiceResponse(row: typeof invoices.$inferSelect) {
  return { id: row.id, businessId: row.businessId, vendor: row.vendor, invoiceNumber: row.invoiceNumber, invoiceDate: row.invoiceDate, dueDate: row.dueDate, subtotal: money(row.subtotal), gst: money(row.gst), total: money(row.total), category: row.category, status: row.status };
}

router.get("/business", async (req, res, next) => {
  try {
    const userId = res.locals.userId as string;
    const rows = await db.select().from(businesses).where(eq(businesses.userId, userId)).limit(1);
    if (!rows[0]) {
      res.status(404).json({ error: "Business not found" });
      return;
    }
    res.json(businessResponse(rows[0]));
  } catch (error) {
    next(error);
  }
});

router.post("/business", async (req, res, next) => {
  try {
    const userId = res.locals.userId as string;
    const input = CreateBusinessBody.parse(req.body);
    const existing = await currentBusiness(userId);
    if (existing) {
      res.status(409).json({ error: "A business already exists for this account" });
      return;
    }
    const [row] = await db.insert(businesses).values({
      userId,
      name: input.name,
      industry: input.industry,
      location: input.location,
      currency: input.currency,
      financialYear: input.financialYear,
      openingCash: String(input.openingCash),
      monthlyRevenueTarget: String(input.monthlyRevenueTarget),
    }).returning();
    res.status(201).json(businessResponse(row));
  } catch (error) {
    next(error);
  }
});

router.get("/business/bootstrap", async (_req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) {
      res.status(404).json({ error: "Business not found" });
      return;
    }
    const businessId = business.id;
    const [businessRow, transactionRows, customerRows, vendorRows, receivableRows, payableRows, budgetRows, recurringRows, invoiceRows] =
      await Promise.all([
        db.select().from(businesses).where(eq(businesses.id, businessId)).limit(1),
        db.select().from(transactions).where(eq(transactions.businessId, businessId)),
        db.select().from(customers).where(eq(customers.businessId, businessId)),
        db.select().from(vendors).where(eq(vendors.businessId, businessId)),
        db.select().from(receivables).where(eq(receivables.businessId, businessId)),
        db.select().from(payables).where(eq(payables.businessId, businessId)),
        db.select().from(budgets).where(eq(budgets.businessId, businessId)),
        db.select().from(recurringExpenses).where(eq(recurringExpenses.businessId, businessId)),
        db.select().from(invoices).where(eq(invoices.businessId, businessId)),
      ]);
    res.json({
      business: businessResponse(businessRow[0]),
      transactions: transactionRows.map(transactionResponse),
      customers: customerRows.map(customerResponse),
      vendors: vendorRows.map(vendorResponse),
      receivables: receivableRows.map(receivableResponse),
      payables: payableRows.map(payableResponse),
      budgets: budgetRows.map(budgetResponse),
      recurringExpenses: recurringRows.map(recurringResponse),
      invoices: invoiceRows.map(invoiceResponse),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/transactions", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) {
      res.json([]);
      return;
    }
    const type = req.query.type === "revenue" || req.query.type === "expense" ? req.query.type : undefined;
    const where = type
      ? and(eq(transactions.businessId, business.id), eq(transactions.type, type))
      : eq(transactions.businessId, business.id);
    const rows = await db.select().from(transactions).where(where);
    res.json(rows.map(transactionResponse));
  } catch (error) {
    next(error);
  }
});

router.post("/transactions", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateTransactionBody.parse(req.body);
    const [row] = await db.insert(transactions).values({
      businessId: business.id,
      type: "expense",
      description: input.description,
      amount: String(input.amount),
      category: input.category,
      vendor: input.vendor ?? null,
      date: dbDate(input.date),
      status: input.status,
    }).returning();
    res.status(201).json(transactionResponse(row));
  } catch (error) { next(error); }
});

router.post("/revenue", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateRevenueBody.parse(req.body);
    const [row] = await db.insert(transactions).values({
      businessId: business.id,
      type: "revenue",
      description: input.description,
      amount: String(input.amount),
      category: "Revenue",
      customer: input.customer ?? null,
      vendor: null,
      date: dbDate(input.date),
      status: input.status,
    }).returning();
    res.status(201).json(transactionResponse(row));
  } catch (error) { next(error); }
});

router.post("/customers", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateCustomerBody.parse(req.body);
    const [row] = await db.insert(customers).values({ ...input, businessId: business.id }).returning();
    res.status(201).json(customerResponse(row));
  } catch (error) { next(error); }
});

router.post("/vendors", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateVendorBody.parse(req.body);
    const [row] = await db.insert(vendors).values({ ...input, businessId: business.id }).returning();
    res.status(201).json(vendorResponse(row));
  } catch (error) { next(error); }
});

router.post("/receivables", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateReceivableBody.parse(req.body);
    const [row] = await db.insert(receivables).values({
      businessId: business.id,
      customer: input.customer,
      invoice: input.invoice,
      amount: String(input.amount),
      dueDate: dbDate(input.dueDate),
      status: input.status,
    }).returning();
    res.status(201).json(receivableResponse(row));
  } catch (error) { next(error); }
});

router.post("/payables", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreatePayableBody.parse(req.body);
    const [row] = await db.insert(payables).values({
      businessId: business.id,
      vendor: input.vendor,
      reference: input.reference,
      amount: String(input.amount),
      dueDate: dbDate(input.dueDate),
      priority: input.priority,
      status: input.status,
    }).returning();
    res.status(201).json(payableResponse(row));
  } catch (error) { next(error); }
});

router.post("/budgets", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateBudgetBody.parse(req.body);
    const [row] = await db.insert(budgets).values({
      businessId: business.id,
      category: input.category,
      amount: String(input.amount),
      period: input.period,
    }).returning();
    res.status(201).json(budgetResponse(row));
  } catch (error) { next(error); }
});

router.post("/recurring-expenses", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateRecurringExpenseBody.parse(req.body);
    const [row] = await db.insert(recurringExpenses).values({
      businessId: business.id,
      name: input.name,
      amount: String(input.amount),
      category: input.category,
      frequency: input.frequency,
    }).returning();
    res.status(201).json(recurringResponse(row));
  } catch (error) { next(error); }
});

router.post("/invoices", async (req, res, next) => {
  try {
    const business = await currentBusiness(res.locals.userId as string);
    if (!business) { res.status(400).json({ error: "Create a business first" }); return; }
    const input = CreateInvoiceBody.parse(req.body);
    const [row] = await db.insert(invoices).values({
      businessId: business.id,
      vendor: input.vendor,
      invoiceNumber: input.invoiceNumber,
      invoiceDate: dbDate(input.invoiceDate),
      dueDate: dbDate(input.dueDate),
      subtotal: String(input.subtotal),
      gst: String(input.gst),
      total: String(input.total),
      category: input.category,
      status: input.status,
    }).returning();
    res.status(201).json(invoiceResponse(row));
  } catch (error) { next(error); }
});

router.post("/business/demo", async (_req, res, next) => {
  try {
    const userId = res.locals.userId as string;
    const existing = await currentBusiness(userId);
    if (existing) { res.status(409).json({ error: "A business already exists for this account" }); return; }
    const result = await db.transaction(async (tx) => {
      const [business] = await tx.insert(businesses).values({
        userId,
        name: "Shree Packaging Solutions",
        industry: "Packaging manufacturing",
        location: "Pune, Maharashtra",
        currency: "INR",
        financialYear: "April – March",
        openingCash: "840000",
        monthlyRevenueTarget: "1800000",
      }).returning();
      await tx.insert(vendors).values([
        { businessId: business.id, name: "Pioneer Paper Mills", category: "Raw materials", terms: "Net 30" },
        { businessId: business.id, name: "Morya Logistics", category: "Transport", terms: "Net 15" },
        { businessId: business.id, name: "Kaveri Polymers", category: "Raw materials", terms: "Net 45" },
      ]);
      await tx.insert(customers).values([
        { businessId: business.id, name: "Apex Consumer Products", email: "accounts@apex.example", phone: null },
        { businessId: business.id, name: "Pragati Distributors", email: "finance@pragati.example", phone: null },
        { businessId: business.id, name: "Westline Retail Pvt Ltd", email: null, phone: null },
      ]);
      await tx.insert(transactions).values([
        { businessId: business.id, type: "revenue", description: "Apex Consumer Products — March order", amount: "1840000", category: "Revenue", customer: "Apex Consumer Products", vendor: null, date: today, status: "Cleared" },
        { businessId: business.id, type: "expense", description: "Kraft paper reels — 180 GSM", amount: "218000", category: "Raw materials", vendor: "Pioneer Paper Mills", customer: null, date: today, status: "Cleared" },
        { businessId: business.id, type: "expense", description: "Pune–Nashik dispatch routes", amount: "46200", category: "Transport & logistics", vendor: "Morya Logistics", customer: null, date: "2025-03-07", status: "Pending" },
        { businessId: business.id, type: "expense", description: "Plant wages — week 1", amount: "96500", category: "Labour & wages", vendor: "Shree Packaging Solutions", customer: null, date: "2025-03-05", status: "Cleared" },
        { businessId: business.id, type: "expense", description: "Polymer coating additive", amount: "87500", category: "Raw materials", vendor: "Kaveri Polymers", customer: null, date: "2025-03-04", status: "Cleared" },
      ]);
      await tx.insert(receivables).values([
        { businessId: business.id, customer: "Apex Consumer Products", invoice: "INV-24031", amount: "284000", dueDate: "2025-03-18", status: "Due soon" },
        { businessId: business.id, customer: "Pragati Distributors", invoice: "INV-24027", amount: "412500", dueDate: "2025-03-07", status: "Overdue" },
        { businessId: business.id, customer: "Westline Retail Pvt Ltd", invoice: "INV-24024", amount: "196000", dueDate: "2025-03-28", status: "Current" },
      ]);
      await tx.insert(payables).values([
        { businessId: business.id, vendor: "Pioneer Paper Mills", reference: "BILL-8832", amount: "218000", dueDate: "2025-03-12", priority: "High", status: "Open" },
        { businessId: business.id, vendor: "Morya Logistics", reference: "BILL-4471", amount: "96000", dueDate: "2025-03-16", priority: "Medium", status: "Open" },
      ]);
      await tx.insert(budgets).values([
        { businessId: business.id, category: "Raw materials", amount: "600000", period: "March 2025" },
        { businessId: business.id, category: "Transport & logistics", amount: "160000", period: "March 2025" },
      ]);
      return business;
    });
    res.status(201).json({
      business: businessResponse(result),
      transactions: [], customers: [], vendors: [], receivables: [], payables: [], budgets: [], recurringExpenses: [], invoices: [],
    });
  } catch (error) { next(error); }
});

export default router;