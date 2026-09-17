
````markdown
# FinSight

## From Transactions to Smarter Business Decisions

**FinSight** is a financial intelligence platform designed for **Micro, Small and Medium Enterprises (MSMEs)**.

It combines expense and revenue tracking with financial analytics, risk detection, cash-flow forecasting, what-if simulation, invoice intelligence, and AI-assisted business insights.

---

## 🚀 Overview

Many MSMEs manage their finances using spreadsheets, notebooks, invoices, and disconnected tools. This makes it difficult to understand the current financial position and take timely decisions.

FinSight provides a centralized platform where businesses can:

- Track expenses and revenue
- Manage receivables and payables
- Monitor vendors and customers
- Analyze financial trends
- Detect unusual spending and financial risks
- Forecast future cash flow
- Simulate financial scenarios
- Extract information from invoices
- Ask financial questions using an AI Business Copilot

### Core Intelligence Flow

```text
┌──────────────┐
│   BUSINESS   │
│    DATA      │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│      FINsight        │
│  Financial Engine    │
└──────────┬───────────┘
           │
     ┌─────┼─────┬─────────┬──────────┐
     ▼     ▼     ▼         ▼          ▼
  Analyze Detect Forecast Simulate  Explain
     │     │     │         │          │
     └─────┴─────┴─────────┴──────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ SMART INSIGHTS  │
              │ & ACTIONS       │
              └─────────────────┘
````

---

# 🎯 Problem Statement

### FT-05 — Digital Expense Tracking and Analytics Platform for MSMEs

MSMEs often face challenges such as:

* Manual financial record keeping
* Scattered expense and revenue information
* Limited visibility into receivables and payables
* Difficulty identifying unusual expenses
* Lack of cash-flow forecasting
* Limited financial scenario planning
* Delayed decision-making due to fragmented data

FinSight addresses these challenges by transforming financial records into actionable business intelligence.

---

# 💡 Our Solution

FinSight follows a complete financial intelligence pipeline:

```text
TRACK
  ↓
ANALYZE
  ↓
DETECT
  ↓
FORECAST
  ↓
SIMULATE
  ↓
RECOMMEND
  ↓
ACT
```

Instead of only answering:

> "Where did my money go?"

FinSight helps answer:

> "What is happening, what could happen next, and what should I consider doing?"

---

# ✨ Key Features

## 📊 Financial Dashboard

Provides a centralized overview of the business:

* Total Revenue
* Total Expenses
* Net Cash Flow
* Current Cash
* Receivables
* Payables
* Financial Health
* Revenue vs Expenses
* Expense Breakdown
* Cash-Flow Trends
* Top Vendors

---

## 💰 Expense & Revenue Management

Businesses can record and manage:

* Business expenses
* Revenue
* Categories
* Vendors
* Customers
* Transaction dates
* Amounts

All financial information is stored and used by the analytics layer.

---

## 📥 Receivables & Payables

### Receivables

Track:

* Customer
* Invoice
* Amount
* Due date
* Payment status
* Overdue amount

### Payables

Track:

* Vendor
* Bill
* Amount
* Due date
* Priority
* Payment status

---

## 🔍 Risk & Action Center

FinSight identifies financial situations that may require attention.

Examples:

```text
┌─────────────────────────────┐
│       RISK & ACTION CENTER  │
└──────────────┬──────────────┘
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
Overdue     Unusual   Upcoming
Payments    Spending  Payables
     │         │         │
     └─────────┼─────────┘
               ▼
        Recommended Action
```

Examples include:

* Overdue receivables
* Upcoming payables
* Unusual expenses
* Significant spending changes
* Potential cash-flow pressure

---

# 📈 Cash-Flow Forecast

FinSight uses available business financial data to estimate future cash-flow trends.

```text
Historical Data
      │
      ▼
Revenue + Expenses
      │
      ▼
Financial Analysis
      │
      ▼
Forecast Engine
      │
      ├──────────────┐
      ▼              ▼
   30 Days        60/90 Days
      │              │
      └──────┬───────┘
             ▼
      Future Cash Flow
```

The forecast is based on available business data rather than fabricated financial values.

---

# 🎯 What-If Financial Simulator

Businesses can explore possible financial scenarios before making decisions.

### Example scenarios

* Revenue increases
* Revenue decreases
* Expenses increase
* Expenses decrease
* Customer payment delays
* Receivables collection
* Large planned purchase

### Simulation Flow

```text
Current Business Data
          │
          ▼
    Select Scenario
          │
          ▼
┌─────────────────────────┐
│ Revenue Change          │
│ Expense Change          │
│ Payment Delay           │
│ Large Purchase          │
└────────────┬────────────┘
             │
             ▼
      Scenario Engine
             │
             ▼
┌─────────────────────────┐
│ Projected Revenue       │
│ Projected Expenses      │
│ Projected Cash Flow     │
│ Cash Impact             │
└─────────────────────────┘
```

---

# 🤖 FinSight AI Business Copilot

The AI Business Copilot provides a natural-language interface for exploring business financial data.

Example questions:

```text
"Why did my expenses increase?"

"Which vendor has the highest spending?"

"How much money is currently outstanding?"

"Which receivables are overdue?"

"Can the business afford a ₹2,00,000 purchase?"
```

### AI Data Flow

```text
User Question
      │
      ▼
Business Context
      │
      ▼
Relevant Financial Data
      │
      ▼
AI Business Copilot
      │
      ▼
Data-Grounded Response
```

The Copilot should use the authenticated business's data and should not invent unavailable financial information.

---

# 🧾 Invoice Intelligence

FinSight can process invoice documents and extract structured information.

### Supported information

* Vendor
* Invoice number
* Invoice date
* Due date
* Subtotal
* GST
* Total amount
* Category

### Processing Flow

```text
Invoice PDF / Image
        │
        ▼
       OCR
        │
        ▼
Text Extraction
        │
        ▼
Financial Field Extraction
        │
        ▼
Review
        │
        ▼
Save to Business Records
```

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │        USER          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   React + TypeScript │
                         │      Frontend        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      API SERVER      │
                         │ Authentication       │
                         │ Business Logic       │
                         │ CRUD Operations      │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
      ┌──────────────┐      ┌───────────────┐     ┌──────────────┐
      │ Financial    │      │ Intelligence  │     │   Invoice    │
      │ Analytics    │      │ Engine        │     │ Processing   │
      └──────┬───────┘      └───────┬───────┘     └──────┬───────┘
             │                      │                    │
             └──────────────────────┼────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      PostgreSQL      │
                         │       Database       │
                         └──────────────────────┘
```

---

# 🗂️ Data Architecture

FinSight organizes financial information around each business.

```text
                         ┌──────────────┐
                         │     USER     │
                         └──────┬───────┘
                                │
                                ▼
                         ┌──────────────┐
                         │   BUSINESS   │
                         └──────┬───────┘
                                │
       ┌────────────┬───────────┼───────────┬─────────────┐
       │            │           │           │             │
       ▼            ▼           ▼           ▼             ▼
  Expenses      Revenue   Transactions Receivables    Payables
       │            │           │           │             │
       └────────────┴───────────┼───────────┴─────────────┘
                                │
                    ┌───────────┼───────────┐
                    ▼           ▼           ▼
                 Vendors    Customers    Invoices
```

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Recharts
* Lucide Icons

## Backend

* Node.js
* API-based architecture
* Drizzle ORM
* PostgreSQL

## Intelligence Layer

* Financial analytics
* Cash-flow forecasting
* Anomaly detection
* Scenario simulation
* AI-assisted financial analysis

## Document Processing

* OCR
* PDF processing
* Image processing
* Structured data extraction

## Security

* Authentication
* Business-scoped data
* User/business isolation
* Database-backed persistence

---

# 📁 Project Structure

```text
FinSight/
│
├── artifacts/
│   └── finsight/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── hooks/
│       │   ├── lib/
│       │   └── App.tsx
│       │
│       ├── public/
│       └── ...
│
├── api/
│   └── ...
│
├── lib/
│   └── ...
│
├── drizzle/
│   └── ...
│
├── openapi.yaml
├── package.json
├── pnpm-lock.yaml
├── README.md
└── ...
```

> The exact directory structure may change as the project evolves.

---

# 🔐 Data & Security

FinSight is designed around authenticated, business-scoped financial data.

```text
User A
   │
   ▼
Business A
   │
   ├── Transactions
   ├── Expenses
   ├── Revenue
   └── Financial Analytics


User B
   │
   ▼
Business B
   │
   ├── Transactions
   ├── Expenses
   ├── Revenue
   └── Financial Analytics
```

Financial records should remain isolated between businesses.

Sensitive credentials such as API keys and database credentials must be stored as environment variables or secure deployment secrets.

---

# 📋 Example Business

FinSight can be demonstrated using:

### Shree Packaging Solutions

| Field          | Value                     |
| -------------- | ------------------------- |
| Industry       | Packaging & Manufacturing |
| Location       | Pune, Maharashtra, India  |
| Currency       | INR                       |
| Financial Year | April – March             |

The platform also supports starting with an empty business workspace and adding business data.

---

# 🔄 End-to-End Workflow

```text
┌──────────────┐
│ Register /   │
│ Login        │
└──────┬───────┘
       ▼
┌──────────────┐
│ Create       │
│ Business     │
└──────┬───────┘
       ▼
┌──────────────┐
│ Add Financial│
│ Data         │
└──────┬───────┘
       ▼
┌─────────────────────────────┐
│ Expenses / Revenue / Bills  │
│ Receivables / Payables      │
│ Vendors / Invoices          │
└──────────────┬──────────────┘
               ▼
        ┌─────────────┐
        │  ANALYTICS  │
        └──────┬──────┘
               ▼
     ┌─────────┼─────────┐
     ▼         ▼         ▼
   Risks    Forecast   Insights
     │         │         │
     └─────────┼─────────┘
               ▼
       What-If Simulation
               │
               ▼
       AI Business Copilot
               │
               ▼
        Smarter Decisions
```

---

# 🌟 What Makes FinSight Different?

Traditional expense tracking:

```text
Transaction
     ↓
Record
     ↓
Report
```

FinSight:

```text
Transaction
     ↓
Analysis
     ↓
Risk Detection
     ↓
Forecast
     ↓
Scenario Simulation
     ↓
AI Explanation
     ↓
Recommended Action
```

FinSight combines **descriptive, predictive, and decision-support capabilities** into one MSME-focused platform.

---

# 📊 Expected Impact

FinSight is designed to help MSMEs:

* Reduce manual financial tracking
* Improve financial visibility
* Monitor cash position
* Identify financial risks earlier
* Understand spending patterns
* Track customer and vendor obligations
* Plan future cash requirements
* Evaluate possible financial decisions
* Make data-informed business decisions

---

# 🔮 Future Scope

Potential future extensions include:

* Bank account integration
* Automated transaction categorization
* GST and accounting integrations
* Advanced financial forecasting
* Mobile application
* Automated invoice reconciliation
* Payment reminders
* Financial report generation
* Multi-business management
* Advanced AI financial planning

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* pnpm
* PostgreSQL

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd FinSight
```

Install dependencies:

```bash
pnpm install
```

Configure environment variables:

```env
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_api_key
```

Run the development server:

```bash
pnpm dev
```

---

# ⚠️ Environment Variables

Never commit secrets to GitHub.

Add the required credentials through environment variables or deployment secrets.

Example:

```env
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_api_key
```

Add `.env` to `.gitignore`:

```text
.env
.env.local
.env.*.local
```

---

# 🧪 Project Verification

The project should be verified for:

* Authentication
* Business creation
* Database persistence
* CRUD operations
* Dashboard calculations
* Business data isolation
* Financial analytics
* Forecasting
* Scenario simulation
* AI data grounding
* Invoice processing

---

# 🎥 Demo & Presentation

# 🎥 Demo & Presentation

- 🚀 **[Live Demo](https://youtu.be/_rRKMDO66Og)**
- 📊 **[Project Presentation](https://docs.google.com/presentation/d/1rJxsQKeAxaM1GYZuOY3jT6OCizzWDOU3/edit?usp=sharing)**
---

# 🏆 Competition

**Problem Statement:** FT-05

**Challenge:** Develop a Digital Expense Tracking and Analytics Platform for MSMEs.

FinSight was developed to provide MSMEs with a centralized platform for financial tracking, analytics, risk detection, forecasting, scenario simulation, and AI-assisted decision support.

---

# 👥 Team

### FinSight

**From Transactions to Smarter Business Decisions.**

---

