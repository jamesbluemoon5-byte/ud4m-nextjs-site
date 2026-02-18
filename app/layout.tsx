import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial XR & Digital Twin Infrastructure | UD4M",
  description: "Operational-grade XR systems for shipbuilding, energy, and smart infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
