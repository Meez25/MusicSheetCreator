import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Créateur de partitions colorées",
  description: "Créer des partitions colorées en ligne, gratuitement. Pratique pour les enfants et les débutants en musique."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="fr">
        <body className={inter.className}>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
