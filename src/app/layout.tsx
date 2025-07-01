'use client'

import { Lexend } from "next/font/google";
import NavbarWorld from "@/components/navbar";
import "./globals.css";
import { LoadingProvider } from "@/context/world-context";

const lexend = Lexend({
  subsets: ["latin"],
});

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.className}>
      <body className="bg-neutral-900 text-white dark">
        <LoadingProvider>
          <NavbarWorld />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}