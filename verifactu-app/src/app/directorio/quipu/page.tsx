import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ExternalLink, ArrowLeft, Calculator, Users, Globe, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Quipu con Verifactu 2026 - Análisis completo, precio y características",
  description: "Review de Quipu con Verifactu integrado. Precio, ventajas, desventajas y comparativa. Elige el mejor programa de facturación para tu negocio.",
};

const program = {
  name: "Quipu",
  logo: "Q",
  rating: 4.3,
  reviews: 632,
  price: "Desde €8/mes",
  description: "Facturación y contabilidad para autónomos. Interfaz sencilla, precio competitivo y asesoría incluida en los planes superiores.",
  fullDescription: "Quipu es una solución de facturación diseñada específicamente para autónomos en España. Destaca por su simplicidad y por incluir asesoría fiscal en sus planes superiores, lo que lo hace muy atractivo para quienes buscan despreocuparse de sus obligaciones fiscales.",
  website: "https://quipu.co",
  features: [
    "Verifactu integrado",
    "Facturación ilimitada",
    "Contabilidad básica",
    "Declaraciones trimestrales",
    "Asesoría incluida (planes superiores)",
    "Gestión de clientes",
    "Informes financieros",
    "Soporte por chat",
  ],
  pros: [
    "Precio muy competitivo",
    "Asesoría fiscal incluida en planes Pro y Business",
    "Interfaz muy fácil de usar",
    "Ideal para autónomos que empiezan",
    "Sin conocimientos contables necesarios",
  ],
  cons: [
    "Funciones avanzadas limitadas vs competidores",
    "Sin integración bancaria",
    "APP móvil básica",
  ],
  pricing: [
    { plan: "Starter", price: "€8/mes", features: ["Facturación ilimitada", "Clientes y productos", "Informes básicos"] },
    { plan: "Pro", price: "€15/mes", features: ["Todo Starter", "Contabilidad", "Declaraciones", "Asesoría básica"] },
    { plan: "Business", price: "€25/mes", features: ["Todo Pro", "Asesoría ilimitada", "Gestión laboral", "Priority support"] },
  ],
  faqs: [
    { question: "¿Quipu incluye Verifactu?", answer: "Sí, Quipu tiene Verifactu integrado en todos sus planes. Las facturas se enviarán automáticamente a la AEAT." },
    { question: "¿La asesoría de Quipu es real?", answer: "Sí, Quipu trabaja con profesionales colegiados que resuelven tus dudas fiscales por chat, email y teléfono." },
    { question: "¿Puedo cambiar de plan después?", answer: "Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplican al siguiente mes." },
  ],
};

export default function QuipuPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/directorio" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al directorio
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
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

        <section className="bg-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres probar {program.name}?</h2>
          <p className="text-slate-600 mb-6">Prueba gratis durante 14 días. Sin compromiso.</p>
          <a href={program.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
            Probar gratis <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-sm text-slate-500 mt-4">* Enlace de afiliación - Nos apoyas sin coste extra</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Comparar con otros programas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/directorio/holded" className="p-4 border border-slate-200 rounded-lg hover:border-blue-500 transition-colors text-center">
              <span className="font-medium">Holded</span>
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