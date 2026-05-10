import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies - VeriFactu.dev",
  description: "Política de cookies de VeriFactu.dev - información sobre el uso de cookies",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Cookies</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-slate-600">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, móvil, tablet) cuando visitas un sitio web. Las cookies permiten que el sitio web reconozca tu navegador y recuerde información sobre tu visita, como tu idioma preferido u otras configuraciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Tipos de cookies que usamos</h2>
            
            <div className="mt-6 space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Cookies esenciales</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Necesarias para el funcionamiento básico del sitio. El sitio no puede funcionar correctamente sin estas cookies.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Duración:</strong> Sesión</p>
                  <p><strong>Origen:</strong> Propias</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Cookies analíticas</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Proveedor:</strong> Google Analytics</p>
                  <p><strong>Duración:</strong> 14 meses</p>
                  <p><strong>Finalidad:</strong> Análisis de visitas y rendimiento</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Cookies de preferencias</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Permiten recordar información que cambia el comportamiento o aspecto del sitio, como tu idioma preferido o la región en la que estás.
                </p>
                <div className="text-sm text-slate-500">
                  <p><strong>Duración:</strong> 1 año</p>
                  <p><strong>Origen:</strong> Propias</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Cookies de terceros</h2>
            <p className="text-slate-600">
              Algunos terceros también pueden establecer cookies cuando visitas nuestro sitio:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Google Analytics:</strong> Análisis web, estadísticas de посещения</li>
              <li><strong>Vercel:</strong> Funcionalidad técnica de la plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Gestionar las cookies</h2>
            <p className="text-slate-600">
              Puedes gestionar tus preferencias de cookies de las siguientes formas:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Banner de cookies:</strong> Al acceder al sitio, puedes aceptar o rechazar las cookies no esenciales</li>
              <li><strong>Configuración del navegador:</strong> La mayoría de navegadores permiten ver, eliminar y bloquear cookies</li>
              <li><strong>Herramientas de terceros:</strong> Puedes usar herramientas como Ghostery o similar</li>
            </ul>
            <p className="text-slate-600 mt-4">
              A continuación te indicamos cómo configurar las cookies en los principales navegadores:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Chrome:</strong> Configuración → Privacidad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad → Cookies</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
              <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Consecuencias de desactivar cookies</h2>
            <p className="text-slate-600">
              Si desactivas las cookies esenciales, es posible que algunas funciones del sitio no funcionen correctamente. Si desactivas las cookies analíticas, no podremos analizar el rendimiento del sitio, lo que nos dificultará mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Actualizaciones</h2>
            <p className="text-slate-600">
              Esta política de cookies puede actualizarse periódicamente. Cualquier cambio significativo será comunicado a través de un aviso en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contacto</h2>
            <p className="text-slate-600">
              Si tienes preguntas sobre nuestra política de cookies, contacta con nosotros en: hola@verifactu.dev
            </p>
          </section>

          <div className="mt-12 p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-500">
              <strong>Fecha de última actualización:</strong> Mayo 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}