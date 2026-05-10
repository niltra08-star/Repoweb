import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Artículos sobre Verifactu",
  description: "Noticias, guías y tutoriales sobre Verifactu, la facturación electrónica obligatoria en España.",
};

const posts = [
  {
    slug: "guia-verifactu-2027",
    title: "Guía completa Verifactu 2027: Todo lo que debes saber",
    excerpt: "Todo sobre Verifactu, la facturación electrónica obligatoria. Fechas, sanciones, programas y cómo cumplir con la normativa.",
    category: "Guía",
    date: "10 mayo 2026",
    readTime: "10 min",
  },
  {
    slug: "que-es-verifactu",
    title: "Qué es Verifactu y por qué te afecta en 2026-2027",
    excerpt: "Todo lo que necesitas saber sobre Verifactu, el sistema de facturación electrónica obligatoria en España. Fechas, obligaciones y cómo cumplir.",
    category: "Guía",
    date: "10 mayo 2026",
    readTime: "8 min",
  },
  {
    slug: "comparativa-programas-facturacion",
    title: "Comparativa mejores programas de facturación 2026",
    excerpt: "Compara los mejores programas de facturación para España. Holded, Quipu, FacturaDirecta y más. Precios y características.",
    category: "Comparativa",
    date: "9 mayo 2026",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
          <p className="text-xl text-slate-600">
            Noticias, guías y tutoriales sobre Verifactu y la facturación electrónica en España.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="text-blue-600 font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600">{post.excerpt}</p>
                <div className="mt-4 text-blue-600 font-medium flex items-center gap-1">
                  Leer más <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quieres recibir artículos en tu email?</h2>
          <p className="text-slate-600 mb-6">Suscríbete a nuestra newsletter y recibirás las últimas noticias sobre Verifactu.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}