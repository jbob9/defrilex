import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defrilex",
  description:
    "Defrilex is a free and open source tool for creating and sharing musical scores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col text-[hsl(0,0%,46%)] bg-[hsl(180,3%,94%)]`}
      >
        {children}
      </body>
    </html>
  );
}
