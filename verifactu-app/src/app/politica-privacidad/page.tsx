import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - VeriFactu.dev",
  description: "Política de privacidad y protección de datos de VeriFactu.dev",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Responsable del tratamiento</h2>
            <p className="text-slate-600">
              El responsable del tratamiento de los datos personales es [Titular pendiente de registro], con email de contacto: hola@verifactu.dev
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Datos que recopilamos</h2>
            <p className="text-slate-600">
              Recopilamos los siguientes datos personales:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Contacto:</strong> Nombre, email, teléfono cuando contactas a través del formulario</li>
              <li><strong>Cuenta API:</strong> Email, nombre, contraseña encriptada, plan seleccionado</li>
              <li><strong>Uso de la API:</strong> Datos de facturación procesados a través de nuestra API</li>
              <li><strong>Analytics:</strong> Datos de navegación anónimos (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Finalidad del tratamiento</h2>
            <p className="text-slate-600">
              Tratamos tus datos personales para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Contacto:</strong> Responder a tus consultas y solicitudes de información</li>
              <li><strong>Cuenta API:</strong> Gestionar tu cuenta, acceso a la API y facturación</li>
              <li><strong>Facturación:</strong> Procesar facturas electrónicas según la normativa Verifactu</li>
              <li><strong>Mejora:</strong> Analizar el uso del sitio para mejorar nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Base legal</h2>
            <p className="text-slate-600">
              La base legal para el tratamiento de tus datos es:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Contacto:</strong> Tu consentimiento explícito</li>
              <li><strong>Cuenta API:</strong> Ejecución del contrato de prestación de servicios</li>
              <li><strong>Facturación:</strong> Cumplimiento de obligaciones legales (Verifactu)</li>
              <li><strong>Analytics:</strong> Interés legítimo en mejorar el servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Destinatarios</h2>
            <p className="text-slate-600">
              Tus datos podrán ser comunicados a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li>Proveedores de hosting y cloud (Vercel, Neon)</li>
              <li>Proveedores de análisis (Google Analytics)</li>
              <li>Autoridades fiscales (AEAT) - solo datos de facturación obligatorios</li>
              <li>No vendemos tus datos a terceros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Transferencias internacionales</h2>
            <p className="text-slate-600">
              Algunos de nuestros proveedores están ubicados fuera del Espacio Económico Europeo. En tales casos, garantizamos que las transferencias se realizan bajo cláusulas contractuales tipo de la Comisión Europea o mecanismos equivalentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Plazo de conservación</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Datos de contacto:</strong> Hasta que solicites su eliminación</li>
              <li><strong>Cuenta API:</strong> Durante la vigencia del contrato + 3 años</li>
              <li><strong>Datos de facturación:</strong> Según establecen las obligaciones fiscales (6 años)</li>
              <li><strong>Analytics:</strong> 14 meses (configuración de Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Tus derechos</h2>
            <p className="text-slate-600">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li><strong>Acceso:</strong> Solicitar qué datos tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Para ejercer estos derechos, contacta con: hola@verifactu.dev
            </p>
            <p className="text-slate-600 mt-2">
              También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Medidas de seguridad</h2>
            <p className="text-slate-600">
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
              <li>Cifrado de datos en tránsito (HTTPS)</li>
              <li>Contraseñas encriptadas con bcrypt</li>
              <li>Acceso limitado a datos personales</li>
              <li>Copias de seguridad regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Menores de edad</h2>
            <p className="text-slate-600">
              Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos conscientemente datos de menores sin el consentimiento de sus padres o tutores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Cambios en la política</h2>
            <p className="text-slate-600">
              Podemos actualizar esta política periódicamente. Notificaremos cualquier cambio significativo a través del sitio web. La última actualización fue en mayo de 2026.
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