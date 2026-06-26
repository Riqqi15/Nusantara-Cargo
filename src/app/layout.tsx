import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nusantara Cargo | Membawa Bisnis Anda Mengudara",
  description: "Solusi kargo udara premium, cepat, dan aman untuk pengiriman logistik Nusantara & global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${nunito.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white">{children}</body>
    </html>
  );
}
