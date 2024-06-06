import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainMenuButtons from "@/components/MainMenuButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servo - We've got you covered (and wired, and plumbed, and...)",
  description:
    "Servo: Hassle-free solution for all your home service needs. Our app connects with a network of trusted and vetted professionals, from electricians and plumbers to cleaners and gardeners.  Book appointments, compare quotes, and manage projects - all conveniently in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MainMenuButtons />
      </body>
    </html>
  );
}
