import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VeriFactu.dev - Stripe-like API for Spain's mandatory e-invoicing",
  description: "API para cumplir con Verifactu de forma sencilla. 100 facturas gratis al mes. JSON no XML. Integra en 5 minutos.",
  keywords: ["Verifactu", "facturación electrónica", "API", "AEAT", "facturación España"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}