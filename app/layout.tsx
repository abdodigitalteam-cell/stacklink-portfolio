import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "StackLink | كل أنظمتك في مكان واحد", description: "StackLink شركة برمجيات مصرية تربط موقع الطلبات وتطبيق أندرويد ونظام الكاشير وإدارة المخزون في منظومة واحدة." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }
