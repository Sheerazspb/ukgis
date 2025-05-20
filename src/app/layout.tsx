import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UK Global Immigration | Expert UK Immigration Lawyers",
  description:
    "Trusted UK immigration lawyers offering expert advice on visas, residency, citizenship, and appeals. Start your UK immigration journey with confidence.",
  keywords:
    "UK immigration, visa services, immigration lawyers, UK visas, residency, citizenship, immigration appeals, UK Global Immigration Services",
  authors: [{ name: "UK Global Immigration Services" }],
  creator: "UK Global Immigration Services",
  publisher: "UK Global Immigration Services",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://ukgis.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UK Global Immigration | Expert UK Immigration Lawyers",
    description:
      "Trusted UK immigration lawyers offering expert advice on visas, residency, citizenship, and appeals. Start your UK immigration journey with confidence.",
    url: "https://ukgis.com",
    siteName: "UK Global Immigration Services",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/uk-global-immigration.png",
        width: 1200,
        height: 630,
        alt: "UK Global Immigration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Global Immigration | Expert UK Immigration Lawyers",
    description:
      "Trusted UK immigration lawyers offering expert advice on visas, residency, citizenship, and appeals.",
    images: ["/uk-global-immigration.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Include both CNAME verification and meta tag verification
    google: ["fmyrdgmdz7x3", "gv-kprtrdklxtne7w.dv.googlehosted.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
