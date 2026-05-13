import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Verifactu para PYMES - Guía para pequeñas empresas",
  description: "Guía de Verifactu para pequeñas y medianas empresas. Cómo cumplir, qué software usar y obligaciones.",
};

export default function VerifactuPymesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">PYMEs</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Verifactu para PYMES</h1>
            <p className="text-xl text-slate-600">Todo lo que las pequeñas y medianas empresas deben saber sobre la facturación electrónica.</p>
          </header>

          <div className="prose max-w-none">
            <h2>¿Cuándo deben cumplir las PYMEs?</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800"><strong>Julio 2026</strong> (fecha estimada para empresas medianas)</p>
            </div>

            <h2>Qué necesitan las PYMEs</h2>
            <ul>
              <li><strong>Software de facturación con Verifactu</strong></li>
              <li><strong>Certificado digital</strong> (para algunas integraciones)</li>
              <li><strong>Conexión a internet</strong> para enviar registros</li>
            </ul>

            <h2>Opciones recomendadas para PYMEs</h2>
            <ol>
              <li><strong>Holded</strong> - Completo, buena relación precio-características</li>
              <li><strong>Declarando</strong> - Con asesoría incluida</li>
              <li><strong>FacturaDirecta</strong> - Multi-empresa, ideal para grupos</li>
            </ol>

            <h2>Beneficios para tu empresa</h2>
            <ul>
              <li>Cumplimiento normativo evade sanciones</li>
              <li>Digitalización de procesos</li>
              <li>Mejor control de facturación</li>
              <li>Integración con contabilidad</li>
            </ul>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">Ver directorio de programas</h3>
              <Link href="/directorio" className="text-blue-600 hover:underline flex items-center gap-2">
                Comparar programas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}