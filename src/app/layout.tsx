import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// INI ADALAH BLOK METADATA ENTERPRISE ANDA
export const metadata: Metadata = {
  title: "Dekingg | The Parent Ecosystem",
  description: "Dekingg is the holding ecosystem driving innovation across enterprise software architecture, premium precious metals brokerage, and executive mobility.",
  verification: {
    google: "RJW3mxA5Onz8896dm4HhwMRimpMwRkTQVevNdkmpHiY", // ID Verifikasi Google Anda
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}