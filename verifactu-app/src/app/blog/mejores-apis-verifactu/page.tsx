import type { Metadata } from "next";
import Link from "next/link";
import { Code, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Mejores APIs Verifactu 2026 - Comparativa técnica",
  description: "Comparativa de las mejores APIs para integrar Verifactu en tu software. Python, Node.js, PHP. Precios, características y facilidad de integración.",
};

export default function MejoresApisPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">Comparativa</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Mejores APIs Verifactu 2026</h1>
            <p className="text-xl text-slate-600">Comparativa técnica de las APIs para integrar Verifactu en tu software.</p>
          </header>

          <div className="prose max-w-none">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { name: "VeriFactu.dev", price: "Desde €0", langs: "Node, Python, PHP", highlight: true },
                { name: "Verifacti", price: "Desde €29", langs: "Node, Python", highlight: false },
                { name: "VerifacTool", price: "Desde €12", langs: "Todas", highlight: false },
              ].map((api, i) => (
                <div key={i} className={`p-6 rounded-xl border ${api.highlight ? "border-blue-500 bg-blue-50" : "border-slate-200"}`}>
                  <h3 className="font-bold text-lg">{api.name}</h3>
                  <div className="text-2xl font-bold my-2">{api.price}</div>
                  <p className="text-sm text-slate-600">{api.langs}</p>
                </div>
              ))}
            </div>

            <h2>¿Qué buscar en una API?</h2>
            <ul>
              <li><strong>SDKs disponibles</strong> - ¿Soporta tu lenguaje?</li>
              <li><strong>Documentación</strong> - ¿Es clara y completa?</li>
              <li><strong>Precios</strong> - ¿Es viable para tu volumen?</li>
              <li><strong>Soporte</strong> - ¿Puedes obtener ayuda si la necesitas?</li>
            </ul>

            <h2>Nuestras recomendaciones</h2>
            <ol>
              <li><strong>Para developers independientes</strong> - VeriFactu.dev (gratis hasta 100 facturas)</li>
              <li><strong>Para empresas</strong> - VerifacTool (más features enterprise)</li>
              <li><strong>Para integradores</strong> - Verifacti (buena documentación)</li>
            </ol>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">Ver documentación técnica</h3>
              <Link href="/documentacion" className="text-blue-600 hover:underline flex items-center gap-2">
                Ver API docs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}