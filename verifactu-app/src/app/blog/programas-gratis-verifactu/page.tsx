import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programas de facturación gratuitps con Verifactu 2026",
  description: "Lista de programas de facturación gratuitos o económicos con Verifactu integrado. Encuentra la mejor opción para tu negocio.",
};

export default function ProgramasGratisPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">Ahorro</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Programas de facturación con Verifactu</h1>
            <p className="text-xl text-slate-600">Opciones gratuitas y económicas para cumplir con Verifactu sin gastar de más.</p>
          </header>

          <div className="prose max-w-none">
            <h2>Programas gratuitos o económicos</h2>
            <div className="space-y-4">
              {[
                { name: "FacturaDirecta", price: "Desde €6", desc: "Plan básico muy competitivo" },
                { name: "Quipu", price: "Desde €8", desc: "Ideal para autónomos" },
                { name: "Billin", price: "Desde €7", desc: "Simple y efectivo" },
              ].map((p, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="text-slate-600 text-sm">{p.desc}</p>
                  </div>
                  <span className="text-xl font-bold text-green-600">{p.price}</span>
                </div>
              ))}
            </div>

            <h2>¿Realmente son gratuitos?</h2>
            <p>Algunos ofrecen:</p>
            <ul>
              <li><strong>Periodo de prueba</strong> - Gratis los primeros 14-30 días</li>
              <li><strong>Plan gratuito limitado</strong> - Hasta X facturas/mes</li>
              <li><strong>Versión básica</strong> - Funcionalidades core sin coste</li>
            </ul>

            <h2>Nuestra recomendación</h2>
            <p>Si eres autónomo pequeño, los planes básicos de FacturaDirecta o Quipu (6-8€/mes) son muy económicos y cumplen con Verifactu.</p>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">Ver directorio completo</h3>
              <Link href="/directorio" className="text-blue-600 hover:underline flex items-center gap-2">
                Ver todos los programas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}