import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrar API de facturación electrónica en tu aplicación",
  description: "Aprende cómo integrar una API de facturación electrónica en tu software. Guía técnica con ejemplos en Node.js, Python y PHP.",
};

export default function ApiFacturacion() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <article className="prose prose-lg max-w-none">
          <h1>Integrar API de facturación electrónica en tu aplicación</h1>
          
          <p className="lead">
            Guía técnica para developers que necesitan añadir facturación electrónica 
            a sus aplicaciones. Ejemplos en Node.js, Python y PHP.
          </p>

          <h2>¿Por qué integrar una API de facturación?</h2>
          <p>
            Si desarrollas software para empresas, integrar una API de facturación te permite:
          </p>
          <ul>
            <li>Automatizar la creación de facturas</li>
            <li>Cumplir con Verifactu automáticamente</li>
            <li>Ofrecer más valor a tus clientes</li>
            <li>Reducir errores humanos</li>
          </ul>

          <h2>Ejemplo: Crear una factura con Node.js</h2>
          <pre><code>{`npm install @verifactu/node

import { createClient } from '@verifactu/node';

const verifactu = createClient('tu_api_key');

const invoice = await verifactu.createInvoice({
  emitter: { 
    nif: 'B12345678', 
    name: 'Tu Empresa' 
  },
  receiver: { 
    nif: '12345678A', 
    name: 'Cliente' 
  },
  lines: [
    { 
      description: 'Desarrollo web', 
      amount: 1000, 
      vat: 21 
    }
  ]
});

console.log('Factura creada:', invoice.id);`}</code></pre>

          <h2>Endpoints disponibles</h2>
          <table>
            <thead>
              <tr>
                <th>Método</th>
                <th>Endpoint</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>POST</td>
                <td>/api/v1/invoices</td>
                <td>Crear factura</td>
              </tr>
              <tr>
                <td>GET</td>
                <td>/api/v1/invoices</td>
                <td>Listar facturas</td>
              </tr>
              <tr>
                <td>GET</td>
                <td>/api/v1/invoices/:id</td>
                <td>Ver factura</td>
              </tr>
              <tr>
                <td>POST</td>
                <td>/api/v1/invoices/:id</td>
                <td>Cancelar factura</td>
              </tr>
            </tbody>
          </table>

          <h2>Planes disponibles</h2>
          <p>
            Our API has plans for every size:
          </p>
          <ul>
            <li><strong>Hacker</strong> (Free): 100 facturas/mes</li>
            <li><strong>Indie</strong> (9€/mes): 1,500 facturas/mes</li>
            <li><strong>Studio</strong> (49€/mes): 10,000 facturas/mes</li>
            <li><strong>Scale</strong> (199€/mes): 100,000 facturas/mes</li>
          </ul>

          <h2>Documentación completa</h2>
          <p>
            Consulta nuestra <Link href="/documentacion">documentación técnica</Link> para 
            ver todos los endpoints, errores y ejemplos avanzados.
          </p>
        </article>
      </div>
    </div>
  );
}