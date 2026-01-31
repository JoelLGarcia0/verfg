import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - VERA Financial Group",
  description:
    "Get in touch with VERA Financial Group for expert accounting and financial services. We provide services entirely online with prompt responses.",
};

export default function Contact() {
  return (
    <div className="bg-offwhite">
      {/* Header band */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl text-darkred">
            Contact Us
          </h1>
          <p className="body-font mt-4 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
            We provide expert accounting and financial services entirely online,
            so you can get professional guidance from anywhere. Reach out today,
            and our team will respond promptly.
          </p>
          <div className="mt-5 mx-auto h-px w-24 bg-darkred/20" />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="bg-white p-8 md:p-12 border border-black/5 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Get in Touch
              </h2>
              <div className="body-font text-gray-700 space-y-4">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+13053172951"
                    className="text-darkred hover:underline"
                  >
                    (305) 317 - 2951
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:Info@verafg.com"
                    className="text-darkred hover:underline"
                  >
                    Info@verafg.com
                  </a>
                </p>
                <p>
                  <strong>Hours:</strong>
                  <br />
                  Monday - Friday: 9 am - 5 pm
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-black/5 shadow-sm">
              <h2 className="title-font text-2xl md:text-3xl text-darkred mb-4">
                Why Contact Us?
              </h2>
              <ul className="body-font text-gray-700 space-y-2 list-disc list-inside">
                <li>Free consultations</li>
                <li>Fully remote services</li>
                <li>Quick response times</li>
                <li>Expert financial guidance</li>
              </ul>

              <div className="mt-6">
                <Link
                  href="/services"
                  className="text-darkred hover:underline body-font"
                >
                  View our services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
