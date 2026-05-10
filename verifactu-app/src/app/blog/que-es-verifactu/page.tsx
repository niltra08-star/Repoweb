import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Qué es Verifactu y por qué te afecta en 2026-2027",
  description: "Todo lo que necesitas saber sobre Verifactu, el sistema de facturación electrónica obligatoria en España. Fechas, obligaciones y cómo cumplir.",
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-4">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Guía</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min lectura</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 10 mayo 2026</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Qué es Verifactu y por qué te afecta en 2026-2027
          </h1>
          <p className="text-xl text-slate-600">
            Todo lo que necesitas saber sobre Verifactu, el sistema de facturación electrónica obligatoria en España.
          </p>
        </header>

        {/* Content */}
        <div className="prose">
          <h2>¿Qué es Verifactu?</h2>
          <p>
            <strong>Verifactu</strong> (también escrito Veri*Factu) es el sistema de facturación electrónica verificada que la Agencia Tributaria (AEAT) ha implementado para garantizar la trazabilidad, integridad e inalterabilidad de las facturas emitidas en España.
          </p>
          <p>
            Este sistema forma parte del desarrollo reglamentario nacido de la <strong>Ley 11/2021 (Ley Antifraude)</strong>, cuyo objetivo es luchar contra el fraude fiscal y potenciar la digitalización en los procesos de contabilidad empresarial.
          </p>

          <h2>¿Por qué existe Verifactu?</h2>
          <p>
            Antes de Verifactu, cualquier programa de facturación podía generar facturas sin ningún control externo. Esto facilitaba la creación de facturas falseadas o la manipulación de registros contables. Verifactu cierra esa brecha exigiendo que:
          </p>
          <ul>
            <li>Cada factura genere un <strong>hash criptográfico</strong> que la identifique de forma única</li>
            <li>Las facturas se <strong>encadenen</strong> cryptográficamente (cada factura referencia la anterior)</li>
            <li>Los registros se envíen a la <strong>AEAT en tiempo real o casi real</strong></li>
            <li>Todas las facturas incluyan un <strong>código QR</strong> verificable</li>
          </ul>

          <h2>Elementos clave de Verifactu</h2>
          <h3>1. Hash criptográfico</h3>
          <p>
            Cada factura genera un hash SHA-256 que la identifica de forma única. Este hash se calcula con los datos de la factura y se encadena con el hash de la factura anterior, creando una cadena inalterable.
          </p>

          <h3>2. Código QR</h3>
          <p>
            Todas las facturas Verifactu deben incluir un código QR que contiene información sobre la factura y permite su verificación en la sede electrónica de la AEAT.
          </p>

          <h3>3. Registro de eventos</h3>
          <p>
            El software debe mantener un registro de todos los eventos que occuran en el sistema: creación de facturas, modificaciones, cancelaciones, etc.
          </p>

          <h3>4. Envío a la AEAT</h3>
          <p>
            Las facturas pueden enviarse a la AEAT en tiempo real (sistema Verifactu) o quedarse registradas localmente pero siempre disponibles para la Administración (sistema no-Verifactu).
          </p>

          <h2>¿Quién está obligado a usar Verifactu?</h2>
          <p>
            La obligación se aplica a <strong>todos los contribuyentes que desarrollen actividades económicas</strong>, tanto personas físicas (autónomos) como jurídicas (sociedades). Sin embargo, hay algunas excepciones importantes:
          </p>
          <ul>
            <li>Empresas sujetas al <strong>SII</strong> (Suministro Inmediato de Información)</li>
            <li>Contribuyentes en <strong>País Vasco y Navarra</strong> (sistemas propios: TicketBAI y NaTicket)</li>
            <li>Determinados sectores con regímenes especiales</li>
          </ul>

          <h2>Fechas clave</h2>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Obligados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>29 julio 2025</strong></td>
                <td>Fabricantes de software de facturación (YA PASÓ)</td>
              </tr>
              <tr>
                <td><strong>1 enero 2027</strong></td>
                <td>Contribuyentes del Impuesto sobre Sociedades (sociedades)</td>
              </tr>
              <tr>
                <td><strong>1 julio 2027</strong></td>
                <td>Contribuyentes del IRPF (autónomos)</td>
              </tr>
            </tbody>
          </table>

          <h2>Sanciones por incumplimiento</h2>
          <p>
            El incumplimiento de las obligaciones de Verifactu puede acarrear importantes sanciones:
          </p>
          <ul>
            <li><strong>Fabricantes de software</strong>: Hasta 150.000€/año por cada producto no conforme</li>
            <li><strong>Usuarios</strong>: Hasta 50.000€/año por usar software no conforme</li>
          </ul>

          <h2>¿Qué tengo que hacer?</h2>
          <p>
            Si usas un programa de facturación, necesitas asegurarte de que <strong>esté certificado para Verifactu</strong>. Las opciones son:
          </p>
          <ol>
            <li><strong>Cambiar a un software ya compatible</strong>: Programas como Holded, Quipu, Billin ya cumplen con Verifactu</li>
            <li><strong>Actualizar tu software actual</strong>: Si tu proveedor ya ha adaptado su producto</li>
            <li><strong>Integrar una API de Verifactu</strong>: Si eres desarrollador, usar una API como VeriFactu.dev</li>
          </ol>

          <h2>Conclusión</h2>
          <p>
            Verifactu es una realidad que afecta a millones de autónomos y empresas en España. Aunque las fechas parecen lejanas, el plazo para los fabricantes de software ya ha pasado, y las empresas deberían empezar a planificar su adaptación cuanto antes.
          </p>
          <p>
            Si eres desarrollador y necesitas integrar Verifactu en tu software, <Link href="/documentacion">consulta nuestra documentación API</Link> o <Link href="/precios">revisa nuestros planes</Link>.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-blue-50 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">¿Necesitas ayuda con Verifactu?</h3>
          <p className="text-slate-600 mb-4">Contáctanos y te ayudamos a cumplir con la normativa.</p>
          <Link href="/contacto" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contactar
          </Link>
        </div>
      </article>
    </div>
  );
}