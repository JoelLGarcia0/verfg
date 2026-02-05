import Link from "next/link";

export const metadata = {
  title: "Pay Your Invoice - VERA Financial Group",
  description:
    "Pay your invoice online with VERA Financial Group. Secure and convenient payment processing.",
};

export default function PayInvoice() {
  return (
    <div className="bg-offwhite">
      {/* Header band */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl text-darkred">
            Pay Your Invoice
          </h1>
          <p className="body-font mt-4 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Secure online payments are available. Use our payment portal below,
            or contact us if you need help.
          </p>
          <div className="mt-5 mx-auto h-px w-24 bg-darkred/20" />
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="bg-white p-8 md:p-12 border border-black/5 shadow-sm text-center">
            <div className="body-font text-gray-700 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-darkred/20 text-darkred text-sm">
                Secure Payment Portal
              </div>

              <p className="text-lg">
                Click below to make a payment securely through our online
                portal. If you run into any issues, reach out and we’ll assist
                you quickly.
              </p>

              {/* ✅ Payment portal button (same style) */}
              <div className="pt-2">
                <a
                  href="https://pay.verafg.com/Makeapayment-Vera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium tracking-normal
                    bg-darkred text-beige border border-darkred shadow-sm
                    transform-gpu will-change-transform
                    transition-[transform,background-color,box-shadow] duration-200 ease-out
                    hover:bg-darkred/90 hover:shadow-md hover:-translate-y-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkred/30 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
                >
                  Pay Now
                </a>

                <p className="mt-3 text-xs text-gray-500">
                  Opens in a new tab.
                </p>
              </div>

              <div className="pt-6 border-t border-black/10 space-y-2">
                <p className="text-sm text-gray-600">Contact Information</p>
                <p>
                  <a
                    href="tel:+13053172951"
                    className="text-darkred hover:underline"
                  >
                    (305) 317 - 2951
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:Info@verafg.com"
                    className="text-darkred hover:underline"
                  >
                    Info@verafg.com
                  </a>
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-medium tracking-normal
                    bg-darkred text-beige border border-darkred shadow-sm
                    transform-gpu will-change-transform
                    transition-[transform,background-color,box-shadow] duration-200 ease-out
                    hover:bg-darkred/90 hover:shadow-md hover:-translate-y-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-darkred/30 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
                 >
                  Contact Us for Payment Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
