export const metadata = {
  title: "Services - VERA Financial Group",
  description:
    "Solutions tailored to your needs: Tax Preparation & Planning, Bookkeeping & Accounting, Payroll Services, and Business Advisory.",
};

export default function Services() {
  return (
    <div className="bg-offwhite">
      {/* Header band */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl text-darkred">
            Solutions Tailored to Your Needs
          </h1>
          <div className="mt-5 mx-auto h-px w-24 bg-darkred/20" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Tax Preparation & Planning
              </h2>
              <p className="body-font text-gray-700 mb-6 leading-relaxed">
                At VERA, we prepare accurate tax returns for individuals and
                businesses, ensuring compliance and maximizing deductions. Our
                proactive planning helps you reduce liabilities and avoid
                surprises.
              </p>
              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Individual tax returns</li>
                <li>Business tax returns</li>
                <li>Tax planning strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Bookkeeping & Accounting
              </h2>
              <p className="body-font text-gray-700 mb-6 leading-relaxed">
                Keep your financial records organized and up to date. We handle
                reconciliations, reporting, and monthly reports so you always
                know where your business stands.
              </p>
              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Monthly or quarterly bookkeeping</li>
                <li>Bank & credit card reconciliations</li>
                <li>Financial reporting (P&L, Balance Sheet, Cash Flow)</li>
                <li>Accounting procedures automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Payroll Services
              </h2>
              <p className="body-font text-gray-700 mb-6 leading-relaxed">
                With reliable and compliant payroll services tailored to your
                business, we ensure employees are paid accurately, and taxes are
                filed on time.
              </p>
              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Employee & contractor payroll</li>
                <li>Direct deposit setup and automation</li>
                <li>Payroll tax filings & compliance</li>
                <li>Year-end W-2 & 1099 processing</li>
              </ul>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Business Advisory
              </h2>
              <p className="body-font text-gray-700 mb-6 leading-relaxed">
                Beyond compliance, we help businesses grow with financial
                insights and planning support. From budgeting to cash flow
                management, we provide the guidance you need to make informed
                decisions.
              </p>
              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Financial statement analysis</li>
                <li>Business budgeting & forecasting</li>
                <li>Growth planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
