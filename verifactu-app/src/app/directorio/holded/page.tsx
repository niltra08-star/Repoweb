import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ExternalLink, ArrowLeft, Calculator, Users, Globe, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Holded con Verifactu 2026 - Review completa, precios y características",
  description: "Análisis completo de Holded con Verifactu integrado. Precio, características, pros y contras. Compara con otros programas en nuestro directorio.",
};

const program = {
  name: "Holded",
  logo: "H",
  rating: 4.5,
  reviews: 847,
  price: "Desde €9/mes",
  description: "Software de facturación en la nube con Verifactu integrado. Ideal para autónomos y pequeñas empresas que buscan una solución moderna y fácil de usar.",
  fullDescription: "Holded es uno de los programas de facturación más populares en España. Ofrece una interfaz moderna, integración con bancos y herramientas de gestión empresarial. Su plan incluye Verifactu obligatorio desde 2026.",
  website: "https://holded.com",
  features: [
    "Verifactu integrado",
    "Facturación ilimitada",
    "Gestión de clientes y productos",
    "Informes y dashboards",
    "Integración bancaria",
    "Presupuestos y albaranes",
    "Multi-usuario",
    "API disponible",
  ],
  pros: [
    "Interfaz muy intuitiva y moderna",
    "Integración con más de 50 bancos españoles",
    "APP móvil completa",
    "Excelente atención al cliente",
    "Actualizaciones frecuentes con nuevas funcionalidades",
  ],
  cons: [
    "El plan más básico no incluye todas las funcionalidades",
    "Sin asesoría fiscal incluida",
    "Precio aumenta si necesitas más usuarios",
  ],
  pricing: [
    { plan: "Básico", price: "€9/mes", features: ["Facturación", "Clientes", "Informes básicos"] },
    { plan: "Contabilidad", price: "€19/mes", features: ["Todo Básico", "Contabilidad", "Modelos 130/303"] },
    { plan: "Nóminas", price: "€29/mes", features: ["Todo Contabilidad", "Nóminas", "Contratos"] },
  ],
  faqs: [
    { question: "¿Holded incluye Verifactu?", answer: "Sí, todos los planes de Holded incluyen Verifactu integrado. Las facturas se enviarán automáticamente a la AEAT." },
    { question: "¿Puedo usar Holded sin ser autónomo?", answer: "Sí, Holded funciona para empresas, autónomos y profesionales. El precio varía según el tipo de actividad." },
    { question: "¿Holded ofrece soporte en español?", answer: "Sí, Holded ofrece soporte en español por email, chat y teléfono." },
  ],
};

export default function HoldedPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/directorio" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al directorio
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              {program.logo}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{program.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(program.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"}`} />
                  ))}
                </div>
                <span className="text-slate-600">{program.rating}/5 ({program.reviews} opiniones)</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-600">{program.description}</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Precio y planes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {program.pricing.map((p, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-lg mb-2">{p.plan}</h3>
                <div className="text-3xl font-bold text-slate-900 mb-4">{p.price}</div>
                <ul className="space-y-2">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Características principales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {program.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ventajas y desventajas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-green-700 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" /> Ventajas
              </h3>
              <ul className="space-y-3">
                {program.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-red-700 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Desventajas
              </h3>
              <ul className="space-y-3">
                {program.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <Calculator className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {program.faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres probar {program.name}?</h2>
          <p className="text-slate-600 mb-6">Prueba gratis durante 14 días. Sin compromiso.</p>
          <a href={program.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Probar gratis <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-slate-500 mt-4">* Enlace de afiliación - Nos apoyas sin coste extra</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Comparar con otros programas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/directorio/quipu" className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors text-center">
              <span className="font-medium">Quipu</span>
            </Link>
            <Link href="/directorio/billin" className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors text-center">
              <span className="font-medium">Billin</span>
            </Link>
            <Link href="/directorio/factura-directa" className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors text-center">
              <span className="font-medium">FacturaDirecta</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}