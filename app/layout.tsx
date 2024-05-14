import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";

const yanone = Yanone_Kaffeesatz({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: "Digiplay",
  description: "Здесь создаётся искусство!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={yanone.className}>{children}</body>
    </html>
  );
}
