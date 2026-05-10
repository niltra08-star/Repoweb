import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal - VeriFactu.dev",
  description: "Aviso legal de VeriFactu.dev - Información sobre el titular del sitio web.",
};

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Aviso Legal</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Información del titular</h2>
            <p className="text-slate-600">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa de los siguientes datos:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Titular:</strong> [Datos pendientes de registro]</li>
              <li><strong>Email:</strong> hola@verifactu.dev</li>
              <li><strong>Web:</strong> https://verifactu.dev</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Objeto</h2>
            <p className="text-slate-600">
              El presente aviso legal regula el acceso y uso del sitio web https://verifactu.dev (en adelante, &quot;el Sitio Web&quot;), propiedad de [Titular pendiente de registro].
            </p>
            <p className="text-slate-600 mt-2">
              El Sitio Web tiene por objeto proporcionar información sobre Verifactu, un sistema de facturación electrónica obligatoria en España, comparar y dirigir a usuarios hacia programas de facturación electrónica, y proporcionar acceso a una API para desarrolladores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Condiciones de uso</h2>
            <p className="text-slate-600">
              El acceso y utilización del Sitio Web implica la aceptación plena y sin reservas de las condiciones contenidas en el presente aviso legal. El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, la moral, el orden público y las presentes condiciones.
            </p>
            <p className="text-slate-600 mt-2">
              Queda prohibido el uso del Sitio Web para fines ilícitos, dañinos o que puedan afectar los derechos e intereses de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Propiedad intelectual</h2>
            <p className="text-slate-600">
              Todos los contenidos del Sitio Web, incluyendo textos, gráficos, logos, imágenes, código fuente y cualquier otro material, están protegidos por derechos de propiedad intelectual y correspondenen a [Titular pendiente] o a terceros que han autorizado su uso.
            </p>
            <p className="text-slate-600 mt-2">
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra utilización de los contenidos sin autorización previa y por escrito del titular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Enlaces externos</h2>
            <p className="text-slate-600">
              El Sitio Web puede contener enlaces a sitios web de terceros. El titular no se hace responsable de los contenidos, políticas de privacidad o prácticas de dichos sitios externos. El acceso a estos sitios es responsabilidad del usuario.
            </p>
            <p className="text-slate-600 mt-2">
              Los programas de facturación incluidos en el directorio son propiedad de sus respectivos titulares. Este sitio participa en programas de afiliados y puede recibir compensación por las recomendaciones realizadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Limitación de responsabilidad</h2>
            <p className="text-slate-600">
              El titular no garantiza la disponibilidad, exactitud, exhaustividad ni actualidad de la información contenida en el Sitio Web. El usuario exonera al titular de cualquier responsabilidad por daños derivados del uso del Sitio Web o de la información en él contenida.
            </p>
            <p className="text-slate-600 mt-2">
              Las recomendaciones de programas de facturación se basan en información pública y no constituyen asesoramiento financiero o legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Programa de afiliados</h2>
            <p className="text-slate-600">
              Este Sitio Web participa en programas de afiliados de terceros, incluyendo Holded, Quipu, FacturaDirecta y otros programas de facturación. Esto significa que podemos recibir una comisión cuando los usuarios contratan servicios a través de los enlaces proporcionados en nuestro directorio.
            </p>
            <p className="text-slate-600 mt-2">
              Las comisiones recibidas no afectan al precio que el usuario paga por los servicios. Los programas de facturación recomendados lo son basándose en criterios objetivos de calidad y utilidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Modificaciones</h2>
            <p className="text-slate-600">
              El titular se reserva el derecho de modificar, en cualquier momento y sin previo aviso, el contenido del presente aviso legal. El uso continuado del Sitio Web tras la publicación de modificaciones implica la aceptación de las mismas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Ley aplicable y jurisdicción</h2>
            <p className="text-slate-600">
              El presente aviso legal se rige por la legislación española. Para cualquier спор sobre su interpretación o cumplimiento, las partes se someten a los Juzgados y Tribunales de la ciudad de Madrid, con renuncia a cualquier otro fuero que pudiera corresponderles.
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