import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import AppBar from "@repo/ui/appbar";
import { session } from "../lib/getSession";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Flow",
  description: "The best payment app out there.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className="min-h-screen flex flex-col bg-bg-main font-sans text-text-primary">
          <AppBar isLoggedIn={session ? true : false} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
