import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobeBackground from "./components/GlobeBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SageworkDigital — Digital Agency",
  description:
    "We help businesses grow online through social media management, website development, and website optimization.",
  keywords: ["digital agency", "social media management", "web development", "website optimization"],
  metadataBase: new URL("https://sageworkdigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SageworkDigital — Digital Agency",
    description:
      "We help businesses grow online through social media management, website development, and website optimization.",
    url: "https://sageworkdigital.com",
    siteName: "SageworkDigital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <GlobeBackground />
        {children}
      </body>
    </html>
  );
}
