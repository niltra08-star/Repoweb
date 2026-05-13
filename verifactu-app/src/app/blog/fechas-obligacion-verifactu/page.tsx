import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fechas de obligación Verifactu 2026-2027 - Calendario completo",
  description: "Calendario completo de obligaciones Verifactu. Fechas clave por tipo de empresa y sanciones por incumplimiento. No esperes al último momento.",
};

export default function FechasObligacionPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:underline">← Volver al blog</Link>
        </div>

        <article>
          <header className="mb-8">
            <span className="text-blue-600 font-medium">Fechas clave</span>
            <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Fechas de obligación Verifactu 2026-2027</h1>
            <p className="text-xl text-slate-600">Calendario completo de fechas límite para cumplir con la facturación electrónica obligatoria.</p>
          </header>

          <div className="prose max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-2">Importante</h3>
              <p className="text-blue-800">Las fechas de obligación pueden variar según tu situación específica. Consulta sempre con un asesor.</p>
            </div>

            <h2>Fechas clave por tipo de empresa</h2>
            <table className="w-full mb-8 border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-4 text-left border">Tipo de empresa</th>
                  <th className="p-4 text-left border">Fecha de inicio</th>
                  <th className="p-4 text-left border">Notas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border">Empresas (>50 empleados)</td>
                  <td className="p-4 border bg-green-50">1 enero 2026</td>
                  <td className="p-4 border">Obligatorio</td>
                </tr>
                <tr>
                  <td className="p-4 border">Empresas (entidades crédito)</td>
                  <td className="p-4 border bg-green-50">1 enero 2026</td>
                  <td className="p-4 border">Obligatorio</td>
                </tr>
                <tr>
                  <td className="p-4 border">Empresas (medianas)</td>
                  <td className="p-4 border bg-yellow-50">1 julio 2026</td>
                  <td className="p-4 border">Por confirmar</td>
                </tr>
                <tr>
                  <td className="p-4 border">Autónomos</td>
                  <td className="p-4 border bg-orange-50">1 enero 2027</td>
                  <td className="p-4 border">Estimado</td>
                </tr>
              </tbody>
            </table>

            <h2>Facturas afectadas</h2>
            <p>La obligación afecta a:</p>
            <ul>
              <li>Facturas emitidas a otros empresarios o profesionales</li>
              <li>Facturas emitidas a las Administraciones Públicas</li>
              <li>Facturas simplificadas</li>
            </ul>

            <h2>Sanciones por incumplimiento</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <span className="font-bold text-red-900">Multas de hasta 10.000€</span>
              </div>
              <p className="text-red-800">El incumplimiento puede conllevar:</p>
              <ul className="text-red-800 mt-2">
                <li>• Infracciones graves (hasta 10.000€)</li>
                <li>• Infracciones muy graves (hasta 150.000€)</li>
                <li>• Posible clausura de la actividad</li>
              </ul>
            </div>

            <h2>¿Qué hacer ahora?</h2>
            <ol>
              <li><strong>Evalúa tu software</strong> - Verifica si tu programa actual soporta Verifactu</li>
              <li><strong>Compara opciones</strong> - Mira nuestro directorio de programas con Verifactu</li>
              <li><strong>Planifica la migración</strong> - No esperes al último momento</li>
              <li><strong>Prueba el sistema</strong> - Asegúrate de que funciona antes de la fecha límite</li>
            </ol>

            <div className="bg-slate-100 rounded-lg p-6 mt-8">
              <h3 className="font-bold mb-4">¿Necesitas ayuda?</h3>
              <div className="flex gap-4">
                <Link href="/directorio" className="text-blue-600 hover:underline flex items-center gap-2">
                  Ver programas <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacto" className="text-blue-600 hover:underline">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}