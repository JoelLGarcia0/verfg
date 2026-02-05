import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERA Financial Group | Beyond Accounting",
  description:
    "Professional accounting and tax services. We build financial confidence through precision, strategy, and compliance.",
  metadataBase: new URL("https://verafg.com"), 
  icons: {
    icon: "/icons/favicon.ico", 
 
  },
  keywords: [
    "tax preparation",
    "tax planning",
    "accounting services",
    "bookkeeping",
    "payroll services",
    "sales tax reporting",
    "business advisory",
    "IRS notices",
    "financial reporting",
    "Florida accounting firm",
  ],
  openGraph: {
    title: "VERA Financial Group | Beyond Accounting",
    description:
      "Tax preparation, planning, bookkeeping, and business advisory—delivered with a modern, client-first process.",
    url: "https://verafg.com/",
    siteName: "VERA Financial Group",
    images: [
      {
        url: "/images/hero4.jpeg", // ✅ uses your public/images/hero4.jpeg
        width: 1200,
        height: 630,
        alt: "VERA Financial Group - Tax preparation and accounting services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERA Financial Group | Beyond Accounting",
    description:
      "Professional tax and accounting services built around clarity, compliance, and confidence.",
    images: ["/images/hero4.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased text-gray-900`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
