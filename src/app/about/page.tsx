export const metadata = {
  title: "About Us - VERA Financial Group",
  description:
    "Learn about VERA Financial Group, led by Founder Olga Terron. Professional financial services with integrity and innovation.",
};

export default function About() {
  return (
    <div className="bg-offwhite">
      {/* Header band */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <h1 className="title-font text-4xl md:text-5xl lg:text-6xl text-darkred">
            About Us
          </h1>
          <div className="mt-5 mx-auto h-px w-24 bg-darkred/20" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="bg-white p-8 md:p-12 border border-black/5 shadow-sm body-font text-gray-700 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800">
              At VERA Financial Group, we blend trusted expertise with modern
              financial strategy.
            </p>

            <p className="leading-relaxed">
              Led by Founder Olga Terron, VERA Financial Group was established
              to provide individuals and businesses with professional, accurate,
              and personalized financial services. We blend innovative
              strategies with a steadfast commitment to integrity, building
              lasting relationships rooted in trust and results.
            </p>

            <p className="leading-relaxed">
              With a strong background in accounting and tax preparation,
              combined with extensive studies and experience in business
              automation and valuation, we mastered the knowledge and tools to
              improve your operations and help you grow your business with
              financial clarity and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="bg-darkred text-beige p-8 md:p-12 border border-black/10 shadow-sm text-center">
            <h2 className="title-font text-3xl md:text-4xl mb-4">
              Our Mission
            </h2>
            <p className="body-font text-base md:text-lg text-beige/90 leading-relaxed">
              Our mission is to deliver accurate, timely, and professional
              financial solutions that give clients peace of mind and confidence
              in their decisions. Guided by this commitment, our vision is to
              become a reliable financial partner for individuals and businesses
              across Florida and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
