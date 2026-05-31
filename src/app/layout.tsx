import { Lora, Playfair_Display } from "next/font/google";
import CursorDog from "@/components/cursor-dog";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.className} ${playfair.variable}`}>
      <body className="bg-white text-gray-900">
        <CursorDog />
        {children}
      </body>
    </html>
  );
}