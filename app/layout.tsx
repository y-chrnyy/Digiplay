import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import { Header } from "../components";

const yanone = Yanone_Kaffeesatz({ subsets: ['cyrillic', 'latin'], variable: '--font-yanone' });
const kurut = localFont({ src: './KurutRegular.woff', display: 'swap', variable: '--font-kurut' })

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
      <body className={`${yanone.className} ${kurut.variable} ${yanone.variable} bg-black text-white`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}


function showBurgerMenuContent() {

}