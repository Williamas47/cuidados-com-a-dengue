import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["400", "600"],
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mosquito Vilão — Tudo sobre a Dengue!",
  description:
    "Aprenda sobre dengue de um jeito divertido! Descubra a história do Aedes aegypti, como ele transmite a doença e como se proteger. Com quiz interativo!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${nunito.variable}`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-nunito)] antialiased">
        {children}
      </body>
    </html>
  );
}
