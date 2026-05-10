import type { Metadata } from "next";
import { Code, BookOpen, Terminal, Check, Copy } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentación API - VeriFactu.dev",
  description: "Documentación completa de la API Verifactu. Quickstart, ejemplos, referencias y guías de integración.",
};

const quickstartLanguages = [
  { name: "Node.js", icon: "📦", code: "npm install @verifactu/node" },
  { name: "Python", icon: "🐍", code: "pip install verifactu" },
  { name: "PHP", icon: "🐘", code: "composer require verifactu/sdk" },
  { name: ".NET", icon: "🔷", code: "nuget install Verifactu" },
];

const endpoints = [
  { method: "POST", path: "/v1/invoices", description: "Crear una nueva factura" },
  { method: "GET", path: "/v1/invoices/:id", description: "Obtener detalles de una factura" },
  { method: "GET", path: "/v1/invoices", description: "Listar todas las facturas" },
  { method: "POST", path: "/v1/invoices/:id/cancel", description: "Cancelar una factura" },
  { method: "POST", path: "/v1/invoices/:id/refund", description: "Crear factura rectificativa" },
  { method: "GET", path: "/v1/health", description: "Verificar estado de la API" },
];

const exampleRequest = {
  emitter: { nif: "B12345678", name: "Tu Empresa SL", address: "Calle Mayor 1, Madrid" },
  receiver: { nif: "12345678A", name: "Cliente Example SL" },
  lines: [
    { description: "Desarrollo web", amount: 1000, vat: 21 },
    { description: "Hosting mensual", amount: 50, vat: 21 },
  ],
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Documentación API</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Empieza a usar la API en 5 minutos. Guías, ejemplos y referencia completa.
          </p>
        </div>

        {/* Quickstart */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quickstart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Instalación</h3>
              <div className="space-y-4">
                {quickstartLanguages.map((lang, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{lang.icon} {lang.name}</span>
                    </div>
                    <code className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded block">
                      {lang.code}
                    </code>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-4">Ejemplo de uso</h3>
              <pre className="text-sm overflow-x-auto">
                <code>{`import { VeriFactu } from '@verifactu/node';

const client = new VeriFactu('sk_xxx');

const invoice = await client.invoices.create({
  emitter: {
    nif: 'B12345678',
    name: 'Tu Empresa SL'
  },
  receiver: {
    nif: '12345678A', 
    name: 'Cliente'
  },
  lines: [{
    description: 'Desarrollo',
    amount: 1000,
    vat: 21
  }]
});

console.log(invoice.qrCode);`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Referencia de Endpoints</h2>
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold">Método</th>
                  <th className="text-left py-4 px-6 font-semibold">Endpoint</th>
                  <th className="text-left py-4 px-6 font-semibold">Descripción</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, index) => (
                  <tr key={index} className="border-t border-slate-200">
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        endpoint.method === "GET" ? "bg-green-100 text-green-700" :
                        endpoint.method === "POST" ? "bg-blue-100 text-blue-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {endpoint.method}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-600">{endpoint.path}</td>
                    <td className="py-4 px-6 text-slate-600">{endpoint.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Request/Response */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Ejemplo de Request</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-xl p-6 text-white">
              <h3 className="font-semibold mb-4">Request</h3>
              <pre className="text-sm overflow-x-auto">
                <code>{JSON.stringify(exampleRequest, null, 2)}</code>
              </pre>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-green-800">Response</h3>
              <pre className="text-sm overflow-x-auto text-green-800">
                <code>{`{
  "id": "inv_abc123",
  "status": "verified",
  "qrCode": "VGFTUwBBTi...",
  "hash": "sha256:abc123...",
  "registeredAt": "2026-05-10T12:00:00Z",
  "aeatResponse": {
    "code": "0",
    "message": "OK"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Error Codes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Códigos de Error</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { code: "0", message: "OK - Factura verificada correctamente", type: "success" },
              { code: "100", message: "Error de autenticación - API key inválida", type: "error" },
              { code: "101", message: "NIF emisor no válido", type: "error" },
              { code: "102", message: "NIF receptor no válido", type: "error" },
              { code: "103", message: "Importe no coincide con líneas", type: "error" },
              { code: "200", message: "Error de conexión con AEAT", type: "error" },
              { code: "201", message: "Certificado expirado o inválido", type: "error" },
            ].map((error, index) => (
              <div key={index} className={`p-4 rounded-lg border ${error.type === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                <code className="font-mono font-bold">{error.code}</code>
                <p className={`text-sm mt-1 ${error.type === "success" ? "text-green-700" : "text-red-700"}`}>
                  {error.message}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Autenticación</h2>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-600 mb-4">
              La API usa autenticación por API Key. Incluye tu key en el header de cada request:
            </p>
            <pre className="bg-slate-900 text-white p-4 rounded-lg overflow-x-auto">
              <code>Authorization: Bearer sk_live_xxxxxxxxxxxxx</code>
            </pre>
            <p className="text-slate-500 text-sm mt-4">
              Para pruebas usa la key que empieza por sk_test_
            </p>
          </div>
        </section>

        {/* Webhooks */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Webhooks</h2>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-600 mb-4">
              Configura webhooks para recibir notificaciones cuando el estado de una factura cambie:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• <code className="bg-slate-100 px-1">invoice.verified</code> - Factura verificada por AEAT</li>
              <li>• <code className="bg-slate-100 px-1">invoice.rejected</code> - Factura rechazada</li>
              <li>• <code className="bg-slate-100 px-1">invoice.cancelled</code> - Factura cancelada</li>
              <li>• <code className="bg-slate-100 px-1">invoice.refunded</code> - Factura rectificada</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">¿Necesitas más ayuda?</p>
          <a href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contactar soporte
          </a>
        </div>
      </div>
    </div>
  );
}