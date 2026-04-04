import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crusty - Your AI Employee",
  description: "Transform your business with an intelligent AI employee that works 24/7 to boost productivity and growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-white`}>
        {children}
      </body>
    </html>
  );
}
