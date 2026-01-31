VERA Financial Group — Website

A modern, responsive marketing site for VERA Financial Group built with Next.js (App Router) and Tailwind CSS v4. Typography uses Playfair Display (titles) and Poppins (body). The design features a transparent, centered-logo navbar, a left-aligned hero with right-side imagery, and clean section layouts for About, Services, and Contact.

Tech Stack
Next.js 14+ (App Router, TypeScript)
Tailwind CSS v4
next/font for Playfair Display & Poppins
Deployed on Vercel (recommended)

Brand Tokens
Dark Red: #550B14
Beige: #F3EBDF
White: #FFFFFF
Light Grey: #F5F5F5

Typography
Titles / Headings: Playfair Display
Body / Paragraphs: Poppins

Project Structure (key parts)
/
├── public/
│   ├── images/
│   │   └── hero.png              # hero image (right side)
│   └── isotipo-a-color.jpg       # centered navbar logo
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx           # simple wrapper (optional)
│   │   └── ContactForm.tsx
│   └── styles/
│       └── globals.css
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md

# 1) Install
npm install

# 2) Run dev server
npm run dev
# -> http://localhost:3000

# 3) Build and start
npm run build
npm run start

Pages & Content
Home (/):
Header: “Beyond accounting – We Build Financial Confidence”
Left-aligned headline (“Beyond” / “Accounting”) with subtle letter shadow
Subhead: “We Build Financial Confidence”
Button: “Book Your Consultation Today” → links to /contact
Right-side hero image: public/images/hero.png
Gradient background: Beige → Dark Red

About (/about):
Explains the firm, founder Olga Terron, and mission. Content provided below in “Copy”.

Services (/services):
Header: “Solutions Tailored to Your Needs”
Sections for:

Tax Preparation & Planning
Bookkeeping & Accounting
Payroll Services
Business Advisory
Each with bullet points from the copy.

Contact (/contact):
Intro: fully remote/online services, prompt response.
Form fields:

Name (required)
Email (required)
Phone (optional)
Subject
Service (dropdown): Individual Tax Return, Business Tax Return, Bookkeeping and Accounting, Payroll Services, Advisory and Planning
Message (required)
Submit button

Footer (on every page):
VERA Financial Group
Phone: (305) 317 - 2951
Email: Info@verafg.com
Hours:
Monday - Friday: 9 am - 5 pm
Copy (verbatim)

Home tagline block (under headline):
We Build Financial Confidence

Why Choose VERA?

Trusted Financial Expertise

Innovative Solutions

Tailored Guidance

“At VERA Financial Group, we combine precision, strategy, and compliance to help you navigate your accounting needs and tax requirements with peace of mind — empowering you to make confident financial decisions that drive lasting growth.”

CTA: Book Your Consultation Today → /contact

About Us page:
“At VERA Financial Group, we blend trusted expertise with modern financial strategy.
Led by Founder Olga Terron, VERA Financial Group was established to provide individuals and businesses with professional, accurate, and personalized financial services. We blend innovative strategies with a steadfast commitment to integrity, building lasting relationships rooted in trust and results.
With a strong background in accounting and tax preparation, combined with extensive studies and experience in business automation and valuation, we mastered the knowledge and tools to improve your operations and help you grow your business with financial clarity and compliance.”

Our Mission:
“Our mission is to deliver accurate, timely, and professional financial solutions that give clients peace of mind and confidence in their decisions. Guided by this commitment, our vision is to become a reliable financial partner for individuals and businesses across Florida and beyond.”

Services page:
Header: Solutions Tailored to Your Needs

Tax Preparation & Planning
“At VERA, we prepare accurate tax returns for individuals and businesses, ensuring compliance and maximizing deductions. Our proactive planning helps you reduce liabilities and avoid surprises.”

Individual tax returns

Business tax returns

Tax planning strategies

Bookkeeping & Accounting
“Keep your financial records organized and up to date. We handle reconciliations, reporting, and monthly reports so you always know where your business stands.”

Monthly or quarterly bookkeeping

Bank & credit card reconciliations

Financial reporting (P&L, Balance Sheet, Cash Flow)

Accounting procedures automation

Payroll Services
“With reliable and compliant payroll services tailored to your business, we ensure employees are paid accurately, and taxes are filed on time.”

Employee & contractor payroll

Direct deposit setup and automation

Payroll tax filings & compliance

Year-end W-2 & 1099 processing

Business Advisory
“Beyond compliance, we help businesses grow with financial insights and planning support. From budgeting to cash flow management, we provide the guidance you need to make informed decisions.”

Financial statement analysis

Business budgeting & forecasting

Growth planning

Contact page intro:
“We provide expert accounting and financial services entirely online, so you can get professional guidance from anywhere. Reach out today, and our team will respond promptly.”

Navbar

Transparent, centered logo (/isotipo-a-color.jpg)

Left links: Home, About, Services

Right links: Contact Us, Pay Your Invoice

Sticky at top with subtle blur on scroll (already implemented in Navbar.tsx)

Styling Notes

Use tokenized Tailwind colors: text-darkred, bg-beige, bg-lightgrey, text-foreground, etc.

Global gradient hero: from-beige via-beige/70 to-darkred/90

Heading shadows for “Beyond” / “Accounting” with Tailwind arbitrary:
[text-shadow:_2px_2px_3px_rgba(85,11,20,0.25)]

Form Handling

For quick launch, use Formspree or Resend API stub.

TODO: Wire /contact POST to a handler or third-party email service.

Scripts

dev — run local dev server

build — production build

start — start production server

lint — lint if enabled

Acceptance Criteria

✅ All four pages implemented with content above

✅ Responsive layout (mobile/tablet/desktop)

✅ Navbar transparent with centered logo; scroll blur

✅ Hero image pinned to bottom right; headline shadow

✅ Footer with contact info on every page

✅ Contact form client-side validation (required fields)

✅ Basic SEO (title/description per page, favicon)



