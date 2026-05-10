import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "VeriFactu.dev - API de Facturación Electrónica Obligatoria España",
    template: "%s | VeriFactu.dev",
  },
  description: "API Stripe-like para Verifactu. Cumple con la facturación electrónica obligatoria en España. 100 facturas gratis al mes. JSON, no XML. Integración en 5 minutos.",
  keywords: ["Verifactu", "facturación electrónica", "API", "AEAT", "facturación España", "obligación 2027", "software facturación"],
  authors: [{ name: "VeriFactu.dev" }],
  creator: "VeriFactu.dev",
  publisher: "VeriFactu.dev",
  metadataBase: new URL("https://verifactu.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://verifactu.dev",
    title: "VeriFactu.dev - API de Facturación Electrónica Obligatoria España",
    description: "API Stripe-like para Verifactu. Cumple con la facturación electrónica obligatoria. 100 facturas gratis al mes.",
    siteName: "VeriFactu.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "VeriFactu.dev - API para Verifactu",
    description: "Stripe-like API para la facturación electrónica obligatoria en España",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}