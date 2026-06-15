import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S&T Love Story 26",
  description: "Wedding Invitation of Oluwaseun Oni & Oluwatosin Faoyemi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
