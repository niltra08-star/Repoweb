import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Lucía Jiménez | Interior Design & Art Direction",
  description: "Portfolio y Diario de Progreso de Lucía Jiménez, Diseñadora de Interiores y Directora de Arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${dmSerif.variable} ${outfit.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
