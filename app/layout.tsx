import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iLab AI Assurance Gateway",
  description: "Independent validation and control for enterprise AI responses.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
