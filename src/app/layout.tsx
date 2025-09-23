import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "AiBitSoft",
  description: "AiBitSoft",
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
