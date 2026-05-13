import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Verifactu Online 2026 - Software especializado en Verifactu",
  description: "Review de Verifactu Online. Software especializado 100% en facturación electrónica verificada. Características y precio.",
};

export default function VerifactuOnlinePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/directorio" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al directorio
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center text-white text-xl font-bold">VO</div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Verifactu Online</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 3 ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                  ))}
                </div>
                <span className="text-slate-600">3.8/5 (89 opiniones)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-600">Software especializado en Verifactu. Enfoque 100% en la facturación electrónica verificada.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Precio y planes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Básico</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€18<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">Hasta 100 facturas/mes</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Profesional</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€35<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">Hasta 1.000 facturas/mes</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold text-lg mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-slate-900 mb-4">€75<span className="text-sm font-normal">/mes</span></div>
              <p className="text-sm text-slate-600">Facturas ilimitadas</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Características</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Verifactu nativo", "API disponible", "Soporte especializado", "Entorno de pruebas", "Generación QR", "Registro AEAT"].map((f, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-green-500" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ventajas</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Especializado 100% en Verifactu - no tiene funcionalidades extras innecesarias</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>API REST bien documentada para integraciones</span>
            </li>
            <li className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Soporte técnico especializado en Verifactu</span>
            </li>
          </ul>
        </section>

        <section className="bg-teal-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Probar Verifactu Online?</h2>
          <p className="text-slate-600 mb-6">Prueba gratis 30 días.</p>
          <a href="https://verifactuonline.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700">
            Probar gratis <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
}