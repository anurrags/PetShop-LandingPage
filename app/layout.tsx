import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saffron Paws | Premium Pet Care in India",
  description: "The ultimate haven for your pet's well-being. Professional grooming, vet care, and premium nutrition at Saffron Paws.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${manrope.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
