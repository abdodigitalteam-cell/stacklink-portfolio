import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://stacklink-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "StackLink | كل أنظمتك في مكان واحد",

  description:
    "StackLink شركة برمجيات مصرية تربط موقع الطلبات وتطبيق أندرويد ونظام الكاشير وإدارة المخزون في منظومة واحدة.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteUrl,
    siteName: "StackLink",
    title: "StackLink | كل أنظمتك في مكان واحد",
    description:
      "StackLink شركة برمجيات مصرية تربط موقع الطلبات وتطبيق أندرويد ونظام الكاشير وإدارة المخزون في منظومة واحدة.",
  },

  twitter: {
    card: "summary",
    title: "StackLink | كل أنظمتك في مكان واحد",
    description:
      "StackLink شركة برمجيات مصرية تربط موقع الطلبات وتطبيق أندرويد ونظام الكاشير وإدارة المخزون في منظومة واحدة.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
