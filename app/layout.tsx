import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iLab — Your AI Transformation is here",
  description: "A connected view of iLab strategy, capabilities, assets and client opportunities.",
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
