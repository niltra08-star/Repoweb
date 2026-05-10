import type { Metadata } from "next";
import { Check, Star, ExternalLink, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Directorio de programas Verifactu - Comparativa 2026",
  description: "Comparativa de programas de facturación con Verifactu. Encuentra el mejor software para tu negocio. Holded, Quipu, Billin y más.",
};

const programs = [
  {
    name: "Holded",
    logo: "H",
    rating: 4.5,
    price: "Desde €9/mes",
    description: "Software de facturación en la nube con Verifactu integrado. Ideal para autónomos y pequeñas empresas.",
    features: ["Verifactu integrado", "Facturación ilimitada", "Gestión de clientes", "Informes"],
    affiliate: "https://holded.com",
    highlight: true,
  },
  {
    name: "Quipu",
    logo: "Q",
    rating: 4.3,
    price: "Desde €8/mes",
    description: "Facturación y contabilidad para autónomos. Interfaz sencilla y precio competitivo.",
    features: ["Verifactu integrado", "Contabilidad básica", "Declaraciones", "Asesoría incluida"],
    affiliate: "https://quipu.co",
    highlight: false,
  },
  {
    name: "Billin",
    logo: "B",
    rating: 4.2,
    price: "Desde €7/mes",
    description: "Software de facturación diseñado para autónomos y freelancers. Simple y eficaz.",
    features: ["Verifactu integrado", "Facturas ilimitadas", "Exportación contable", "Modelo 130"],
    affiliate: "https://billin.com",
    highlight: false,
  },
  {
    name: "FacturaDirecta",
    logo: "FD",
    rating: 4.0,
    price: "Desde €6/mes",
    description: "Programa de facturación online para autónomos y empresas. Sin complicaciones.",
    features: ["Verifactu integrado", "Multi-empresa", "Albaranes", "Presupuestos"],
    affiliate: "https://facturadirecta.com",
    highlight: false,
  },
  {
    name: "Declarando",
    logo: "D",
    rating: 4.4,
    price: "Desde €15/mes",
    description: "Asesoría online + software. Ideal para autónomos que quieren despreocuparse fiscalmente.",
    features: ["Verifactu integrado", "Asesoría ilimitada", "Declaraciones auto", "Gestión trimestral"],
    affiliate: "https://declarando.com",
    highlight: false,
  },
  {
    name: "Verifactu Online",
    logo: "VO",
    rating: 3.8,
    price: "Desde €18/mes",
    description: "Software especializado en Verifactu. Enfoque 100% en la facturación verificada.",
    features: ["Verifactu nativo", "API disponible", "Soporte especializado", "Entorno de pruebas"],
    affiliate: "https://verifactuonline.com",
    highlight: false,
  },
];

const filters = ["Todos", "Desde €5", "Desde €10", "Con asesoría", "Con API"];

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Directorio de programas Verifactu
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Encuentra el mejor software de facturación para tu negocio. Comparativa actualizada con precios y características.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border ${
                program.highlight ? "border-blue-500 ring-2 ring-blue-100" : "border-slate-200"
              } p-6 hover:shadow-lg transition-shadow`}
            >
              {program.highlight && (
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded mb-3">
                  Recomendado
                </span>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{program.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(program.rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-slate-500 ml-1">{program.rating}</span>
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-sm font-bold">
                  {program.logo}
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4">{program.description}</p>

              <div className="text-2xl font-bold text-slate-900 mb-4">
                {program.price}
              </div>

              <ul className="space-y-2 mb-6">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={program.affiliate}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Probar gratis <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-xs text-slate-500 text-center mt-3">
                * Enlace de afiliación. Nos apoyas sin coste extra.
              </p>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-slate-50 rounded-xl p-8">
          <h2 className="text-xl font-bold mb-4">¿Cómo elegimos estos programas?</h2>
          <p className="text-slate-600 mb-4">
            Esta lista se actualiza regularmente basándonos en criterios objetivos:
          </p>
          <ul className="space-y-2 text-slate-600">
            <li>• <strong>Verifactu integrado</strong>: Cumplen con la normativa actual</li>
            <li>• <strong>Precio</strong>: Relación calidad-precio competitiva</li>
            <li>• <strong>Características</strong>: Funcionalidades útiles para autónomos y empresas</li>
            <li>• <strong>Opiniones</strong>: Valoraciones de usuarios reales</li>
          </ul>
          <p className="text-slate-500 text-sm mt-4">
            ¿Conoces algún programa que deberíamos añadir? <a href="/contacto" className="text-blue-600 hover:underline">Contáctanos</a>
          </p>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>¿Qué es un programa con Verifactu?</h2>
          <p>
            Un programa de facturación con Verifactu es un software que cumple con los requisitos técnicos establecidos por la AEAT para la facturación electrónica verificada. Estos programas generan facturas que incluyen hash criptográfico, código QR y se comunican con los sistemas de la Agencia Tributaria.
          </p>
          <h2>¿Cuánto cuesta un programa Verifactu?</h2>
          <p>
            Los precios varían desde opciones gratuitas (limitadas) hasta soluciones profesionales de más de 50€/mes. En general:
          </p>
          <ul>
            <li><strong>Básico</strong>: 5-15€/mes - Facturación simple para autónomos</li>
            <li><strong>Profesional</strong>: 15-30€/mes - Con contabilidad y declaraciones</li>
            <li><strong>Enterprise</strong>: 30-100€/mes - Para empresas con necesidades complejas</li>
          </ul>
        </div>
      </div>
    </div>
  );
}