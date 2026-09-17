import type {
  BusinessBootstrap,
  Transaction,
} from "@workspace/api-client-react";

export const categoryColors = ["#317f6c", "#de9b42", "#5a91a8", "#b87363", "#8272a5"];

export const inr = (n: number) =>
  `₹${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.max(0, n))}`;

export const compact = (n: number) =>
  Math.abs(n) >= 100000
    ? `₹${(n / 100000).toFixed(1)}L`
    : inr(n);

const monthLabel = (date: string) =>
  new Intl.DateTimeFormat("en-IN", { month: "short" }).format(new Date(`${date}T00:00:00`));

export function calculateFinancials(data?: BusinessBootstrap) {
  const transactions = data?.transactions ?? [];
  const expenses = transactions.filter((item) => item.type === "expense");
  const revenueEntries = transactions.filter((item) => item.type === "revenue");
  const revenue = revenueEntries.reduce((sum, item) => sum + item.amount, 0);
  const expenseTotal = expenses.reduce((sum, item) => sum + item.amount, 0);
  const receivables = (data?.receivables ?? []).reduce((sum, item) => sum + item.amount, 0);
  const payables = (data?.payables ?? []).reduce((sum, item) => sum + item.amount, 0);
  const categories = Array.from(
    expenses.reduce((map, item) => {
      map.set(item.category, (map.get(item.category) ?? 0) + item.amount);
      return map;
    }, new Map<string, number>()),
  ).map(([name, value], index) => ({
    name,
    value,
    color: categoryColors[index % categoryColors.length],
  }));
  const vendorSpend = Array.from(
    expenses.reduce((map, item) => {
      if (item.vendor) map.set(item.vendor, (map.get(item.vendor) ?? 0) + item.amount);
      return map;
    }, new Map<string, number>()),
  )
    .map(([name, spend]) => ({ name, spend }))
    .sort((a, b) => b.spend - a.spend);
  const monthlyMap = new Map<string, { month: string; revenue: number; expenses: number; cash: number }>();
  transactions.forEach((item) => {
    const month = monthLabel(item.date);
    const current = monthlyMap.get(month) ?? { month, revenue: 0, expenses: 0, cash: 0 };
    if (item.type === "revenue") current.revenue += item.amount;
    else current.expenses += item.amount;
    current.cash = current.revenue - current.expenses;
    monthlyMap.set(month, current);
  });
  const monthly = Array.from(monthlyMap.values()).slice(-12);
  const netCashFlow = revenue - expenseTotal;
  const currentCash = (data?.business.openingCash ?? 0) + netCashFlow;
  const populated = transactions.length > 0;
  const score = !populated
    ? 0
    : Math.min(
        100,
        Math.round(
          42 +
            Math.min(24, revenue > expenseTotal ? 24 : 8) +
            Math.min(18, receivables > 0 ? 10 : 18) +
            Math.min(16, payables < currentCash ? 16 : 6),
        ),
      );
  const forecast = [30, 60, 90].map((days, index) => ({
    days,
    label: `${days} days`,
    inflow: revenue * (0.18 + index * 0.08),
    outflow: expenseTotal * (0.18 + index * 0.07),
    balance: currentCash + netCashFlow * (0.35 + index * 0.38),
  }));

  return {
    transactions,
    expenses,
    revenueEntries,
    revenue,
    expenseTotal,
    netCashFlow,
    currentCash,
    receivables,
    payables,
    categories,
    vendorSpend,
    monthly,
    forecast,
    score,
    populated,
  };
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(
    new Date(`${date}T00:00:00`),
  );
}

export function transactionToForm(transaction: Transaction) {
  return {
    description: transaction.description,
    amount: String(transaction.amount),
    category: transaction.category,
    vendor: transaction.vendor ?? "",
    date: transaction.date,
    status: transaction.status,
  };
}