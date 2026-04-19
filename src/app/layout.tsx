import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Inburgering AI Simulator",
    template: "%s | Inburgering AI Simulator",
  },
  description:
    "Bereid je voor op het inburgeringsexamen met AI-gestuurde oefeningen voor KNM, A2 en B1. Oefen lezen, luisteren, schrijven en spreken.",
  keywords: [
    "inburgering",
    "inburgeringsexamen",
    "KNM",
    "Nederlands leren",
    "A2 examen",
    "B1 examen",
    "taalexamen",
    "Dutch integration exam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
