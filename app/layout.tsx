import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saudi School Finder | دليل مدارس السعودية",
  description: "ابحث، قارن، واختر المدرسة الأنسب لطفلك في السعودية.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
