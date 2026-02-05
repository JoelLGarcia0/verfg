export const metadata = {
  title: "Services - VERA Financial Group",
  description:
    "Solutions tailored to your needs: Tax Preparation & Planning, Financial Management Programs, and Business Advisory.",
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

      {/* Services Grid (3 boxes) */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 1) Tax Preparation & Planning */}
            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Tax Preparation &amp; Planning
              </h2>

              <ul className="body-font text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-darkred/70" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Individual
                    </span>
                    <span className="text-gray-600">: starting at </span>
                    <span className="inline-flex items-center rounded-full border border-darkred/20 bg-darkred/5 px-2 py-0.5 text-sm font-semibold text-darkred">
                      $150
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-darkred/70" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Business tax returns
                    </span>
                    <span className="text-gray-600">: starting at </span>
                    <span className="inline-flex items-center rounded-full border border-darkred/20 bg-darkred/5 px-2 py-0.5 text-sm font-semibold text-darkred">
                      $300
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-darkred/70" />
                  <div className="leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      Business annual accounting
                    </span>
                    <span className="text-gray-600">: starting at </span>
                    <span className="inline-flex items-center rounded-full border border-darkred/20 bg-darkred/5 px-2 py-0.5 text-sm font-semibold text-darkred">
                      $250
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 2) Financial Management Programs */}
            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Financial Management Programs
              </h2>

              <p className="body-font text-gray-700 mb-6 leading-relaxed">
                We handle accounting, compliance reports, and financial
                statements so you can stay focused on running and growing your
                business.
              </p>

              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Monthly or quarterly bookkeeping</li>
                <li>Payroll services and sales tax reporting</li>
                <li>Financial reporting (P&amp;L, Balance Sheet, Cash Flow)</li>
                <li>Business workflow automation</li>
              </ul>
            </div>

            {/* 3) Business Advisory */}
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
                <li>Business budgeting &amp; forecasting</li>
                <li>Growth planning</li>
                <li>Workflow analysis and improvement</li>
              </ul>
            </div>
          </div>

          {/* disclosure */}
          <p className="body-font mt-6 text-[11px] md:text-xs text-gray-500">
            * Depending on complexity, prices may vary. We provide free
            estimates on consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
