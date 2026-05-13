import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "FacturaDirecta con Verifactu 2026 - Análisis y precio",
  description: "Review de FacturaDirecta con Verifactu. Programa de facturación online para autónomos y empresas. Precio y características.",
};

export default function FacturaDirectaPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/directorio" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al directorio
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">FD</div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">FacturaDirecta</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                  ))}
                </div>
                <span className="text-slate-600">4.0/5 (312 opiniones)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-600">Programa de facturación online para autónomos y empresas. Sin complicaciones.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Precio y planes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Profesional</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€6<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">1 usuario, facturas ilimitadas</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Empresa</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€12<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">3 usuarios, multi-empresa</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Corporativo</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€25<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">Usuarios ilimitados</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Características</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Verifactu integrado", "Multi-empresa", "Albaranes", "Presupuestos", "Pedidos", "Importación XML"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-green-500" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-purple-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Probar FacturaDirecta?</h2>
          <p className="text-slate-600 mb-6">Prueba gratis 30 días.</p>
          <a href="https://facturadirecta.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">
            Probar gratis <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
}