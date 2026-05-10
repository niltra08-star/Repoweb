"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Code, Shield, Zap, Clock, Globe, Terminal, ChevronRight, Star } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "SDKs modernos",
    description: "npm install, pip install, composer require. Tipados, con TypeScript, documentados.",
  },
  {
    icon: Zap,
    title: "JSON, no XML",
    description: "API REST. Envía JSON, recibe JSON. Bye bye complejidad SOAP.",
  },
  {
    icon: Shield,
    title: "Certificado gestionado",
    description: "Nosotros nos ocupamos del certificado. Tú te dedicas a código.",
  },
  {
    icon: Clock,
    title: "5 minutos de integración",
    description: "Copy-paste del quickstart. Envía tu primera factura verificada en minutos.",
  },
  {
    icon: Globe,
    title: "100% Spain",
    description: "Diseñado para el ecosistema español. Cumple con AEAT y normativa vigente.",
  },
  {
    icon: Terminal,
    title: "CLI + Dashboard",
    description: "Gestiona facturas desde terminal o desde nuestra UI visual.",
  },
];

const plans = [
  {
    name: "Hacker",
    price: "Free",
    description: "Perfecto para probar",
    features: ["Sandbox ilimitado", "100 facturas/mes en producción", "1 NIF emisor", "Documentación completa", "SDK Node.js + Python + PHP"],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Indie",
    price: "€9",
    period: "/mes",
    description: "Para freelancers y agencias",
    features: ["1.500 facturas/mes", "3 NIFs emisores", "SDKs completos", "Webhooks", "Soporte por email", "Trae tu propio certificado"],
    cta: "Empezar",
    highlight: true,
  },
  {
    name: "Studio",
    price: "€49",
    period: "/mes",
    description: "Para pequeñas empresas",
    features: ["10.000 facturas/mes", "20 NIFs emisores", "Soporte prioritario", "Dashboard team", "API keys ilimitadas", "Certificado incluido"],
    cta: "Empezar",
    highlight: false,
  },
  {
    name: "Scale",
    price: "€199",
    period: "/mes",
    description: "Para grandes volúmenes",
    features: ["100.000 facturas/mes", "NIFs ilimitados", "SLA 99.9%", "Enterprise SSO", "Gestor de cuenta dedicado", "Custom integrations"],
    cta: "Contactar",
    highlight: false,
  },
];

const blogPosts = [
  {
    title: "Qué es Verifactu y por qué te afecta en 2026-2027",
    excerpt: "Todo lo que necesitas saber sobre el sistema de facturación electrónica obligatoria.",
    href: "/blog/que-es-verifactu",
    category: "Guía",
  },
  {
    title: "Fechas clave Verifactu: quién debe cumplir y cuándo",
    excerpt: "Calendario completo de obligaciones. No esperes al último momento.",
    href: "/blog/fechas-obligacion",
    category: "Fechas",
  },
  {
    title: "Las 5 mejores APIs Verifactu en 2026",
    excerpt: "Comparativa de las mejores opciones para integrar Verifactu en tu proyecto.",
    href: "/blog/mejores-apis-verifactu",
    category: "Comparativa",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Obligatorio desde 2027
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            La facturación verificada no debería ser un nightmare
          </h1>
          <p className="text-xl text-slate-600 mb-8 text-balance max-w-2xl mx-auto">
            API Stripe-like para Verifactu. 100 facturas gratis al mes. JSON no XML.
            Integra en 5 minutos, no en semanas.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {submitted ? "¡Registrado!" : "Probar gratis"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          {submitted && <p className="text-green-600 mt-3 text-sm">✓ Te avisamos cuando lancemos.</p>}
          <p className="text-sm text-slate-500 mt-4">No requiere tarjeta • 100 facturas reales al mes</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">¿Por qué VeriFactu.dev?</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Los competidores son para enterprise. Esto es para developers que quieren shippar rápido.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Envía tu primera factura en 5 minutos</h2>
          <p className="text-slate-600 text-center mb-8">Código listo para copiar y pegar</p>
          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <div className="flex gap-2 px-4 py-3 bg-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-slate-300">
{`// npm install @verifactu/node
import { VeriFactu } from '@verifactu/node';

const client = new VeriFactu('sk_live_xxx');

const invoice = await client.invoices.create({
  emitter: { nif: 'B12345678', name: 'Tu Empresa' },
  receiver: { nif: '12345678A', name: 'Cliente' },
  lines: [{ description: 'Desarrollo', amount: 1000, vat: 21 }]
});

console.log(invoice.qrCode);
// ¡Factura verificada!`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Precios transparentes</h2>
          <p className="text-slate-600 text-center mb-12">Sin letra pequeña. Sin precio "contactanos". Todo público.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${plan.highlight ? "border-blue-500 ring-2 ring-blue-100 relative" : "border-slate-200"}`}>
                {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">Más popular</span>}
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <div className="my-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
                </div>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.highlight ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Últimos artículos</h2>
              <p className="text-slate-600">Noticias y guías sobre Verifactu</p>
            </div>
            <Link href="/blog" className="text-blue-600 hover:underline flex items-center gap-1">
              Ver todos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group block">
                <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                  <h3 className="font-semibold text-lg mt-3 mb-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Tienes preguntas?</h2>
          <p className="text-blue-100 mb-8 text-lg">Escríbenos. Respondemos en menos de 24h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Contactar
            </Link>
            <Link href="/documentacion" className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Ver documentación
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}