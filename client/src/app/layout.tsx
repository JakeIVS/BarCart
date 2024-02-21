import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BarCart",
  description: "A home bar inventory and cocktail recipe database",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-tr from-slate-900 via-zinc-700 to-zinc-800`}
      >
        {children}
      </body>
    </html>
  );
}
