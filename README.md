<div align="center">

# 💠 FinSight

### From Transactions to Smarter Business Decisions

**A financial intelligence platform built for Micro, Small and Medium Enterprises (MSMEs).**

Expense & revenue tracking · Financial analytics · Risk detection · Cash-flow forecasting · What-if simulation · Invoice intelligence · AI Business Copilot

[![Problem Statement](https://img.shields.io/badge/Problem%20Statement-FT--05-blueviolet)]()
[![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Node.js%20%7C%20PostgreSQL-informational)]()
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen)]()

[Live Demo](https://youtu.be/_rRKMDO66Og) · [Project Presentation](https://docs.google.com/presentation/d/1rJxsQKeAxaM1GYZuOY3jT6OCizzWDOU3/edit?usp=sharing) · [Getting Started](#-getting-started)

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Our Solution](#-our-solution)
- [Key Features](#-key-features)
- [Cash-Flow Forecast](#-cash-flow-forecast)
- [What-If Financial Simulator](#-what-if-financial-simulator)
- [AI Business Copilot](#-finsight-ai-business-copilot)
- [Invoice Intelligence](#-invoice-intelligence)
- [System Architecture](#️-system-architecture)
- [Data Architecture](#️-data-architecture)
- [Technology Stack](#️-technology-stack)
- [Project Structure](#-project-structure)
- [Data & Security](#-data--security)
- [Example Business](#-example-business)
- [End-to-End Workflow](#-end-to-end-workflow)
- [What Makes FinSight Different](#-what-makes-finsight-different)
- [Expected Impact](#-expected-impact)
- [Future Scope](#-future-scope)
- [Getting Started](#-getting-started)
- [Environment Variables](#️-environment-variables)
- [Project Verification](#-project-verification)
- [Competition](#-competition)
- [Team](#-team)

---

## 🚀 Overview

Many MSMEs still manage their finances across spreadsheets, notebooks, and paper invoices — disconnected tools that make it hard to see the current financial position, let alone act on it in time.

**FinSight** replaces that fragmentation with a single, centralized platform where businesses can:

| Capability | Description |
|---|---|
| 📒 Track | Expenses and revenue |
| 🧾 Manage | Receivables and payables |
| 🤝 Monitor | Vendors and customers |
| 📈 Analyze | Financial trends |
| 🚨 Detect | Unusual spending and financial risk |
| 🔮 Forecast | Future cash flow |
| 🧪 Simulate | Financial "what-if" scenarios |
| 🔍 Extract | Structured data from invoices |
| 🤖 Ask | Financial questions via an AI Business Copilot |

### Core Intelligence Flow

```text
┌──────────────┐
│   BUSINESS   │
│    DATA      │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│      FinSight         │
│  Financial Engine     │
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
              │  & ACTIONS      │
              └─────────────────┘
```

---

## 🎯 Problem Statement

**FT-05 — Digital Expense Tracking and Analytics Platform for MSMEs**

MSMEs commonly face:

- Manual, error-prone financial record keeping
- Scattered expense and revenue information
- Limited visibility into receivables and payables
- Difficulty spotting unusual or risky expenses
- No reliable cash-flow forecasting
- Little to no scenario planning
- Delayed decisions caused by fragmented data

FinSight turns raw financial records into actionable business intelligence.

---

## 💡 Our Solution

FinSight runs on a complete financial intelligence pipeline:

```text
TRACK → ANALYZE → DETECT → FORECAST → SIMULATE → RECOMMEND → ACT
```

Instead of only answering:

> *"Where did my money go?"*

FinSight helps answer:

> *"What is happening, what could happen next, and what should I consider doing?"*

---

## ✨ Key Features

### 📊 Financial Dashboard

A centralized view of business health:

- Total Revenue · Total Expenses · Net Cash Flow · Current Cash
- Receivables · Payables · Financial Health Score
- Revenue vs. Expenses · Expense Breakdown
- Cash-Flow Trends · Top Vendors

### 💰 Expense & Revenue Management

Record and manage expenses, revenue, categories, vendors, customers, transaction dates, and amounts — all feeding directly into the analytics layer.

### 📥 Receivables & Payables

| Receivables | Payables |
|---|---|
| Customer | Vendor |
| Invoice | Bill |
| Amount | Amount |
| Due date | Due date |
| Payment status | Priority |
| Overdue amount | Payment status |

### 🔍 Risk & Action Center

FinSight surfaces financial situations that need attention — overdue receivables, upcoming payables, unusual expenses, significant spending changes, and potential cash-flow pressure — then recommends an action.

```text
┌─────────────────────────────┐
│       RISK & ACTION CENTER  │
└──────────────┬──────────────┘
               │
     ┌─────────┼─────────┐
     ▼         ▼         ▼
 Overdue    Unusual   Upcoming
 Payments   Spending  Payables
     │         │         │
     └─────────┼─────────┘
               ▼
        Recommended Action
```

---

## 📈 Cash-Flow Forecast

FinSight projects future cash-flow trends from a business's own historical data — never fabricated figures.

```text
Historical Data → Revenue + Expenses → Financial Analysis → Forecast Engine
                                                                   │
                                                    ┌──────────────┴──────────────┐
                                                    ▼                             ▼
                                                30 Days                     60 / 90 Days
                                                    │                             │
                                                    └──────────────┬──────────────┘
                                                                   ▼
                                                         Future Cash Flow
```

---

## 🎯 What-If Financial Simulator

Explore possible financial outcomes before committing to a decision.

**Example scenarios:** revenue increase/decrease · expense increase/decrease · customer payment delays · receivables collection · a large planned purchase

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

## 🤖 FinSight AI Business Copilot

A natural-language interface for exploring your financial data — grounded strictly in the authenticated business's own records.

**Example questions:**

- *"Why did my expenses increase?"*
- *"Which vendor has the highest spending?"*
- *"How much money is currently outstanding?"*
- *"Which receivables are overdue?"*
- *"Can the business afford a ₹2,00,000 purchase?"*

```text
User Question → Business Context → Relevant Financial Data → AI Business Copilot → Data-Grounded Response
```

> The Copilot only uses the business's own data and never invents unavailable financial information.

---

## 🧾 Invoice Intelligence

FinSight processes invoice documents and extracts structured fields automatically.

**Extracted fields:** Vendor · Invoice number · Invoice date · Due date · Subtotal · GST · Total amount · Category

```text
Invoice PDF / Image → OCR → Text Extraction → Financial Field Extraction → Review → Save to Business Records
```

---

## 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │         USER          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │  React + TypeScript   │
                         │       Frontend        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      API SERVER       │
                         │  Authentication       │
                         │  Business Logic       │
                         │  CRUD Operations      │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                      │
              ▼                     ▼                      ▼
      ┌──────────────┐      ┌───────────────┐      ┌──────────────┐
      │  Financial    │      │ Intelligence  │      │   Invoice    │
      │  Analytics    │      │    Engine     │      │  Processing  │
      └──────┬───────┘      └───────┬───────┘      └──────┬───────┘
             │                      │                      │
             └──────────────────────┼──────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      PostgreSQL       │
                         │       Database        │
                         └──────────────────────┘
```

---

## 🗂️ Data Architecture

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

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React · TypeScript · Vite · Tailwind CSS · Recharts · Lucide Icons |
| **Backend** | Node.js · API-based architecture · Drizzle ORM · PostgreSQL |
| **Intelligence Layer** | Financial analytics · Cash-flow forecasting · Anomaly detection · Scenario simulation · AI-assisted analysis |
| **Document Processing** | OCR · PDF processing · Image processing · Structured data extraction |
| **Security** | Authentication · Business-scoped data · User/business isolation · Database-backed persistence |

---

## 📁 Project Structure

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
├── lib/
├── drizzle/
│
├── openapi.yaml
├── package.json
├── pnpm-lock.yaml
└── README.md
```

> The exact directory structure may evolve as the project matures.

---

## 🔐 Data & Security

FinSight is built around authenticated, business-scoped financial data, isolated per business:

```text
User A                          User B
   │                               │
   ▼                               ▼
Business A                     Business B
   │                               │
   ├── Transactions                ├── Transactions
   ├── Expenses                    ├── Expenses
   ├── Revenue                     ├── Revenue
   └── Financial Analytics         └── Financial Analytics
```

Sensitive credentials — API keys, database credentials — must always be stored as environment variables or secure deployment secrets, never committed to source control.

---

## 📋 Example Business

**Shree Packaging Solutions**

| Field | Value |
|---|---|
| Industry | Packaging & Manufacturing |
| Location | Pune, Maharashtra, India |
| Currency | INR |
| Financial Year | April – March |

The platform also supports starting from a completely empty business workspace.

---

## 🔄 End-to-End Workflow

```text
Register / Login → Create Business → Add Financial Data
                                            │
                                            ▼
                          Expenses / Revenue / Bills
                          Receivables / Payables
                          Vendors / Invoices
                                            │
                                            ▼
                                       ANALYTICS
                                            │
                              ┌─────────────┼─────────────┐
                              ▼             ▼             ▼
                            Risks       Forecast       Insights
                              │             │             │
                              └─────────────┼─────────────┘
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

## 🌟 What Makes FinSight Different?

| Traditional Tracking | FinSight |
|---|---|
| Transaction → Record → Report | Transaction → Analysis → Risk Detection → Forecast → Scenario Simulation → AI Explanation → Recommended Action |

FinSight combines **descriptive, predictive, and decision-support** capabilities into a single MSME-focused platform.

---

## 📊 Expected Impact

FinSight helps MSMEs:

- Reduce manual financial tracking
- Improve financial visibility and cash-position awareness
- Identify financial risks earlier
- Understand spending patterns
- Track customer and vendor obligations
- Plan future cash requirements
- Evaluate financial decisions before committing to them
- Make data-informed business decisions

---

## 🔮 Future Scope

- Bank account integration
- Automated transaction categorization
- GST and accounting software integrations
- Advanced financial forecasting models
- Mobile application
- Automated invoice reconciliation
- Payment reminders
- Financial report generation
- Multi-business management
- Advanced AI financial planning

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- pnpm
- PostgreSQL

### Installation

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd FinSight

# Install dependencies
pnpm install
```

Configure environment variables (see [below](#️-environment-variables)), then start the dev server:

```bash
pnpm dev
```

---

## ⚠️ Environment Variables

Never commit secrets to GitHub. Provide credentials via environment variables or your deployment platform's secret manager.

```env
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_api_key
```

Make sure your `.gitignore` includes:

```text
.env
.env.local
.env.*.local
```

---

## 🧪 Project Verification

The project should be verified across:

- [ ] Authentication
- [ ] Business creation
- [ ] Database persistence
- [ ] CRUD operations
- [ ] Dashboard calculations
- [ ] Business data isolation
- [ ] Financial analytics
- [ ] Forecasting
- [ ] Scenario simulation
- [ ] AI data grounding
- [ ] Invoice processing

---

## 🎥 Demo & Presentation

- 🚀 **[Live Demo](https://youtu.be/_rRKMDO66Og)**
- 📊 **[Project Presentation](https://docs.google.com/presentation/d/1rJxsQKeAxaM1GYZuOY3jT6OCizzWDOU3/edit?usp=sharing)**

---

## 🏆 Competition

| | |
|---|---|
| **Problem Statement** | FT-05 |
| **Challenge** | Develop a Digital Expense Tracking and Analytics Platform for MSMEs |

FinSight was built to give MSMEs a centralized platform for financial tracking, analytics, risk detection, forecasting, scenario simulation, and AI-assisted decision support.

---

## 👥 Team

### FinSight

**From Transactions to Smarter Business Decisions.**
