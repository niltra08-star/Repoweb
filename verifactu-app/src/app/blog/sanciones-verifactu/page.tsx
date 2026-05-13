import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sanciones Verifactu - Multas por incumplimiento",
  description: "Sanciones y multas por no cumplir con Verifactu. Consecuencias legales y administrativos. Evita sanciones cumpliendo la normativa.",
};

export default function SancionesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">Sanciones</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Sanciones por incumplimiento Verifactu</h1>
            <p className="text-xl text-slate-600">Multas y consecuencias por no cumplir la facturación electrónica obligatoria.</p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <span className="font-bold text-red-900 text-lg">Hasta 10.000€ de multa</span>
              </div>
            </div>

            <h2>Infracciones y sanciones</h2>
            <table className="w-full mb-8 border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-left border">Tipo de infracción</th>
                  <th className="p-4 text-left border">Sanción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border">Leve</td>
                  <td className="p-4 border">Hasta 2.000€</td>
                </tr>
                <tr>
                  <td className="p-4 border">Grave</td>
                  <td className="p-4 border">2.001€ - 10.000€</td>
                </tr>
                <tr>
                  <td className="p-4 border">Muy Grave</td>
                  <td className="p-4 border">Hasta 150.000€</td>
                </tr>
              </tbody>
            </table>

            <h2>¿Qué conductas sancionan?</h2>
            <ul>
              <li>No emitir factura electrónica con Verifactu</li>
              <li>No enviar los registros a la AEAT</li>
              <li>Emitir facturas con datos incorrectos</li>
              <li>No conservar las facturas el tiempo requerido</li>
            </ul>

            <h2>Cómo evitar sanciones</h2>
            <ol>
              <li>Usa software homologado con Verifactu</li>
              <li>Verifica que las facturas se envían correctamente</li>
              <li>Conserva todas las facturas emitidas</li>
              <li>Consulta con un asesor si tienes dudas</li>
            </ol>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">¿Quieres evitar sanciones?</h3>
              <Link href="/directorio" className="text-blue-600 hover:underline flex items-center gap-2">
                Ver programas con Verifactu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}