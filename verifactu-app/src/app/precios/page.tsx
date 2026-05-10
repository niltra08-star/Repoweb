import type { Metadata } from "next";
import { Check, X, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios - API Verifactu",
  description: "Planes透明的 precios para la API de facturación electrónica Verifactu. Desde €0 hasta €199/mes. Sin letra pequeña.",
};

const plans = [
  {
    name: "Hacker",
    price: "Free",
    period: "",
    description: "Perfecto para probar y desarrollar",
    features: [
      { name: "Sandbox ilimitado", included: true },
      { name: "100 facturas/mes en producción", included: true },
      { name: "1 NIF emisor", included: true },
      { name: "Documentación completa", included: true },
      { name: "SDK Node.js + Python + PHP", included: true },
      { name: "Soporte por email", included: false },
      { name: "Webhooks", included: false },
      { name: "Certificado gestionado", included: false },
    ],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Indie",
    price: "€9",
    period: "/mes",
    description: "Para freelancers y agencias",
    features: [
      { name: "Sandbox ilimitado", included: true },
      { name: "1.500 facturas/mes", included: true },
      { name: "3 NIFs emisores", included: true },
      { name: "SDKs completos", included: true },
      { name: "Webhooks", included: true },
      { name: "Soporte por email", included: true },
      { name: "Trae tu propio certificado", included: true },
      { name: "Certificado gestionado", included: false },
    ],
    cta: "Empezar",
    highlight: true,
  },
  {
    name: "Studio",
    price: "€49",
    period: "/mes",
    description: "Para pequeñas empresas",
    features: [
      { name: "Sandbox ilimitado", included: true },
      { name: "10.000 facturas/mes", included: true },
      { name: "20 NIFs emisores", included: true },
      { name: "SDKs completos", included: true },
      { name: "Webhooks", included: true },
      { name: "Soporte prioritario", included: true },
      { name: "Dashboard team", included: true },
      { name: "Certificado gestionado", included: true },
    ],
    cta: "Empezar",
    highlight: false,
  },
  {
    name: "Scale",
    price: "€199",
    period: "/mes",
    description: "Para grandes volúmenes",
    features: [
      { name: "Sandbox ilimitado", included: true },
      { name: "100.000 facturas/mes", included: true },
      { name: "NIFs ilimitados", included: true },
      { name: "SDKs completos", included: true },
      { name: "Webhooks", included: true },
      { name: "Soporte prioritario + teléfono", included: true },
      { name: "SLA 99.9%", included: true },
      { name: "Enterprise SSO", included: true },
    ],
    cta: "Contactar",
    highlight: false,
  },
];

const faqs = [
  {
    question: "¿Qué incluye el plan gratuito?",
    answer: "El plan Hacker incluye acceso al sandbox para pruebas ilimitadas y 100 facturas reales al mes en producción. Ideal para desarrollar y probar tu integración.",
  },
  {
    question: "¿Puedo cambiar de plan después?",
    answer: "Sí, puedes actualizar o downgrade de plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación.",
  },
  {
    question: "¿Qué pasa si excedo mi límite de facturas?",
    answer: "Te notificaremos cuando alcances el 80% de tu límite. Si lo excedes, las facturas adicionales se cobraran a €0.01 cada una.",
  },
  {
    question: "¿Necesito certificado digital?",
    answer: "Depende del plan. En IndieTrae tu propio certificado. En Studio y Scale, nosotros gestionamos el certificado.",
  },
  {
    question: "¿Hay período de prueba?",
    answer: "El plan gratuito te permite probar la API sin límite de tiempo. Puedes enviar hasta 100 facturas reales al mes.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Precios transparentes</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sin letra pequeña. Sin precios ocultos. Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-xl p-6 border ${plan.highlight ? "border-blue-500 ring-2 ring-blue-100 relative" : "border-slate-200"}`}>
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                  Más popular
                </span>
              )}
              <h3 className="font-semibold text-lg">{plan.name}</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-slate-500">{plan.period}</span>}
              </div>
              <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Comparación con competidores</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="py-4 px-4 text-center bg-blue-50">VeriFactu.dev</th>
                  <th className="py-4 px-4 text-center text-slate-500">Verifacti</th>
                  <th className="py-4 px-4 text-center text-slate-500">Quaderno</th>
                  <th className="py-4 px-4 text-center text-slate-500">B2Brouter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-4">Precio público</td>
                  <td className="py-4 px-4 text-center bg-blue-50 text-green-600 font-medium">✓ Desde €0</td>
                  <td className="py-4 px-4 text-center text-slate-500">Contact us</td>
                  <td className="py-4 px-4 text-center text-slate-500">Contact us</td>
                  <td className="py-4 px-4 text-center text-slate-500">Gratis hasta 24</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">Free tier real</td>
                  <td className="py-4 px-4 text-center bg-blue-50 text-green-600 font-medium">✓ 100 facturas</td>
                  <td className="py-4 px-4 text-center text-slate-500">Solo sandbox</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗</td>
                  <td className="py-4 px-4 text-center text-slate-500">✓ 24 facturas</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">JSON API</td>
                  <td className="py-4 px-4 text-center bg-blue-50 text-green-600 font-medium">✓</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗ XML</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗ XML</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-4">SDKs modernos</td>
                  <td className="py-4 px-4 text-center bg-blue-50 text-green-600 font-medium">✓ Node/Python/PHP</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗</td>
                  <td className="py-4 px-4 text-center text-slate-500">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas frecuentes</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">¿Necesitas algo personalizado?</p>
          <a href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contactar <Check className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}