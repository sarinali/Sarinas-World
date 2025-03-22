import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarina's World 🌎",
  description: "The world is in MY HANDS. SARINAS HANDS. 🤲🌎",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.className}>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
