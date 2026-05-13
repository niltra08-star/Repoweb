import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo elegir software Verifactu - Guía completa",
  description: "Guía para elegir el mejor programa de facturación con Verifactu. Criterios, preguntas clave y recomendaciones.",
};

export default function ElegirSoftwarePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">Guía</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Cómo elegir software Verifactu</h1>
            <p className="text-xl text-slate-600">Criterios para elegir el mejor programa de facturación para tu negocio.</p>
          </header>

          <div className="prose max-w-none">
            <h2>Criterios esenciales</h2>
            <ol>
              <li><strong>Verifactu integrado</strong> - Debe cumplir la normativa AEAT</li>
              <li><strong>Precio</strong> - Ajustado a tu volumen de facturas</li>
              <li><strong>Facilidad de uso</strong> - Intuitivo y rápido de aprender</li>
              <li><strong>Soporte</strong> - Puedes contactar si hay problemas</li>
              <li><strong>Integraciones</strong> - Conecta con tu banco, banco, etc.</li>
            </ol>

            <h2>Preguntas clave antes de elegir</h2>
            <ul>
              <li>¿Cuántas facturas emito al mes?</li>
              <li>¿Necesito contabilidad integrada?</li>
              <li>¿Quiero asesoría fiscal incluida?</li>
              <li>¿Tengo conocimientos técnicos?</li>
              <li>¿Necesito multi-usuario?</li>
            </ul>

            <h2>Por tipo de usuario</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold">Autónomo pequeño</h3>
                <p className="text-sm text-slate-600">Billin, Quipu o FacturaDirecta (6-15€/mes)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold">Freelancer</h3>
                <p className="text-sm text-slate-600">Holded o Billin (9-14€/mes)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold">Pyme</h3>
                <p className="text-sm text-slate-600">Holded Pro o Declarando (19-35€/mes)</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold">Desarrollador</h3>
                <p className="text-sm text-slate-600">API VeriFactu.dev (gratis hasta 100)</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">Comparar programas</h3>
              <Link href="/directorio" className="text-blue-600 hover:underline flex items-center gap-2">
                Ver directorio completo <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}