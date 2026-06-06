import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshit Jain — Aspiring Product Manager | AI Product Builder",
  description:
    "Results-driven aspiring Product Manager with hands-on AI/ML engineering experience. Scored 30/30 on all PM projects, built ₹78 Cr revenue models across 12M+ user products. Seeking APM & Product roles.",
  keywords: [
    "Product Manager",
    "APM",
    "AI Product Builder",
    "Lakshit Jain",
    "PM Portfolio",
    "Product Strategy",
    "User Research",
    "Airtribe",
  ],
  authors: [{ name: "Lakshit Jain" }],
  openGraph: {
    title: "Lakshit Jain — Aspiring Product Manager | AI Product Builder",
    description:
      "Results-driven aspiring PM with 12M+ user product experience, ₹78 Cr revenue models, and 30/30 PM scores. Let's build something meaningful.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshit Jain — Aspiring Product Manager",
    description:
      "PM portfolio showcasing product strategy, user research, and AI product building.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Lakshit Jain",
              url: "https://lakshitjain.com",
              jobTitle: "Aspiring Product Manager",
              description:
                "Results-driven aspiring Product Manager with hands-on AI/ML engineering experience.",
              email: "mail.lakshitjain@gmail.com",
              telephone: "+919538350253",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
              sameAs: ["https://www.linkedin.com/in/lakshit-jain"],
            }),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} font-body antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
