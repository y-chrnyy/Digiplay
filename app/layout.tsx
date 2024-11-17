import type { Metadata } from "next";
import { Yanone_Kaffeesatz } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";
import { Header } from "../components";

const yanone = localFont({
  src: [
    {
      path: "./static/YanoneKaffeesatz-Regular.ttf",
      weight: '400'
    },
    {
      path: "./static/YanoneKaffeesatz-Bold.ttf",
      weight: '700'
    },
    {
      path: "./static/YanoneKaffeesatz-SemiBold.ttf",
      weight: '600'
    },
    {
      path: "./static/YanoneKaffeesatz-Light.ttf",
      weight: '300'
    },
    {
      path: "./static/YanoneKaffeesatz-ExtraLight.ttf",
      weight: '200'
    },
  ],
  display: "swap",
  variable: "--font-yanone"
});
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