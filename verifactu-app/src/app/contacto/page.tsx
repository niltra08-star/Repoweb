import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto - VeriFactu.dev",
  description: "Contacta con nosotros para resolver tus dudas sobre Verifactu. Respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contacto</h1>
          <p className="text-xl text-slate-600">
            ¿Tienes preguntas sobre Verifactu? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Escríbenos</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hola@verifactu.dev" className="text-blue-600 hover:underline">
                    hola@verifactu.dev
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Para todo tipo de consultas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Comunidad</h3>
                  <p className="text-slate-600">Únete a nuestra comunidad de developers</p>
                  <p className="text-sm text-slate-500 mt-1">Próximamente...</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Horario</h3>
                  <p className="text-slate-600">Lunes a viernes, 9:00 - 18:00 (CET)</p>
                  <p className="text-sm text-slate-500 mt-1">Respondemos en menos de 24h</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 text-green-700">
                <Check className="w-5 h-5" />
                <span className="font-medium">Tiempo de respuesta medio: 4 horas</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="bg-slate-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Envíanos un mensaje</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="technical">Consulta técnica</option>
                    <option value="sales">Información sobre precios</option>
                    <option value="partnership">Colaboración</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas frecuentes</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "¿Puedo probar la API gratis?",
                a: "Sí, el plan Hacker es completamente gratuito con 100 facturas al mes.",
              },
              {
                q: "¿Ofrecéis soporte en español?",
                a: "Sí, todo nuestro soporte está en español.",
              },
              {
                q: "¿Podéis ayudarme con la integración?",
                a: "Sí,emos soporte técnico para ayudarte con la integración. Contacta con nosotros.",
              },
              {
                q: "¿Tenéis planes para empresas?",
                a: "Sí, nuestros planes Studio y Scale están diseñados para empresas con mayores necesidades.",
              },
            ].map((faq, index) => (
              <details key={index} className="bg-slate-50 rounded-lg p-4 cursor-pointer">
                <summary className="font-medium text-slate-900 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400">+</span>
                </summary>
                <p className="text-slate-600 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}