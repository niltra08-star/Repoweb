import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Billin con Verifactu 2026 - Review, precio y características",
  description: "Análisis de Billin con Verifactu integrado. Software de facturación para autónomos. Precio, pros y contras. Compara en nuestro directorio.",
};

export default function BillinPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/directorio" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al directorio
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">B</div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Billin</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                  ))}
                </div>
                <span className="text-slate-600">4.2/5 (423 opiniones)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-600">Software de facturación diseñado para autónomos y freelancers. Simple y eficaz.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Precio y planes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Básico</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€7<span className="text-sm font-normal">/mes</span></div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Check className="w-4 h-4 text-green-500 inline" /> Facturas ilimitadas</li>
                <li><Check className="w-4 h-4 text-green-500 inline" /> Clientes y productos</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Contabilidad</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€14<span className="text-sm font-normal">/mes</span></div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Check className="w-4 h-4 text-green-500 inline" /> Modelo 130/303</li>
                <li><Check className="w-4 h-4 text-green-500 inline" /> Exportación contable</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Completo</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€19<span className="text-sm font-normal">/mes</span></div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Check className="w-4 h-4 text-green-500 inline" /> Asesorías fiscal</li>
                <li><Check className="w-4 h-4 text-green-500 inline" /> Nóminas básicas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Características</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Verifactu integrado", "Facturas ilimitadas", "Exportación contable", "Modelo 130", "Gestión de clientes", "Informes"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-green-500" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-orange-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Probar Billin?</h2>
          <p className="text-slate-600 mb-6">Prueba gratis 14 días.</p>
          <a href="https://billin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600">
            Probar gratis <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
}