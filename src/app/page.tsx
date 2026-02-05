// app/page.tsx (or wherever your Home page is)
import Hero from "@/components/Hero";

export const metadata = {
  title: "VERA Financial Group - Beyond Accounting",
  description:
    "We build financial confidence through precision, strategy, and compliance. Professional accounting and tax services.",
};

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative bg-offwhite overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-140px] h-[420px] w-[420px] bg-darkred/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-[-140px] h-[420px] w-[420px] bg-darkred/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14">
          <div className="mb-6 md:mb-8 text-center md:text-right">
            <h2 className="title-font text-3xl md:text-4xl lg:text-5xl text-darkred">
              Why Choose VERA?
            </h2>

            <div className="mt-5 mx-auto md:ml-auto md:mr-0 h-px w-24 bg-darkred/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-full max-w-5xl bg-white shadow-sm border border-black/5 p-8">
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-darkred/80" />

                <h3 className="title-font text-2xl md:text-3xl text-darkred mb-3">
                  Trusted Financial Expertise
                </h3>

                <p className="body-font text-gray-700 leading-relaxed max-w-3xl">
                  Years of experience in accounting and tax preparation with a
                  commitment to accuracy, compliance, and clear guidance—so you
                  always know where you stand.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                  <span>• Accurate filings</span>
                  <span>• Proactive planning</span>
                  <span>• Clear communication</span>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-offwhite/70 p-4 border border-black/5">
                    <div className="title-font text-base text-darkred">
                      Fast onboarding
                    </div>
                    <div className="body-font text-sm text-gray-600">
                      Simple, secure document upload
                    </div>
                  </div>

                  <div className="bg-offwhite/70 p-4 border border-black/5">
                    <div className="title-font text-base text-darkred">
                      Clear next steps
                    </div>
                    <div className="body-font text-sm text-gray-600">
                      Know what to expect at every stage
                    </div>
                  </div>

                  <div className="bg-offwhite/70 p-4 border border-black/5">
                    <div className="title-font text-base text-darkred">
                      Modern process
                    </div>
                    <div className="body-font text-sm text-gray-600">
                      Organized, efficient, client-first
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm border border-black/5 p-8">
              <div className="flex items-start justify-between gap-6">
                <h3 className="title-font text-xl md:text-2xl text-darkred mb-3">
                  Innovative Solutions
                </h3>
                <div className="shrink-0 w-10 h-10 bg-darkred/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-darkred"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93l1.41 1.41" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.93 19.07l1.41-1.41" />
                    <path d="M17.66 6.34l1.41-1.41" />
                    <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>
                </div>
              </div>

              <p className="body-font text-gray-700 leading-relaxed">
                Modern strategies and automation to streamline workflows, reduce
                friction, and keep your financials organized.
              </p>

              <p className="body-font mt-4 text-sm text-gray-600">
                • Efficient workflows &amp; document handling
              </p>
            </div>

            <div className="bg-white shadow-sm border border-black/5 p-8">
              <div className="flex items-start justify-between gap-6">
                <h3 className="title-font text-xl md:text-2xl text-darkred mb-3">
                  Tailored Guidance
                </h3>
                <div className="shrink-0 w-10 h-10 bg-darkred/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-darkred"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              <p className="body-font text-gray-700 leading-relaxed">
                Personalized support designed around your goals—whether you’re
                filing, catching up, or planning ahead.
              </p>

              <p className="body-font mt-4 text-sm text-gray-600">
                • Guidance that fits your situation
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mt-10 md:mt-12">
            <p className="body-font text-base md:text-lg text-gray-800 leading-relaxed">
              At VERA Financial Group, we combine precision, strategy, and
              compliance to help you navigate accounting and tax needs with
              peace of mind—empowering confident decisions that drive growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
