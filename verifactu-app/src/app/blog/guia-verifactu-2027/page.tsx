import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía completa Verifactu 2027: Todo lo que debes saber",
  description: "Aprende todo sobre Verifactu, la facturación electrónica obligatoria en España. Fechas, sanciones, programas y cómo cumplir.",
};

export default function GuiaVerifactu2027() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <article className="prose prose-lg max-w-none">
          <h1>Guía completa Verifactu 2027: Todo lo que debes saber</h1>
          
          <p className="lead">
            La facturación electrónica obligatoria arrive a España en 2027. Esta guía te explica qué es Verifactu, 
            qué empresas están obligadas, las sanciones y cómo prepararte para cumplir con la normativa.
          </p>

          <h2>¿Qué es Verifactu?</h2>
          <p>
            Verifactu es el sistema de facturación electrónica verificada que la Agencia Tributaria (AEAT) 
            ha implementado en España para combat fraud and improve tax compliance. A partir de 2027, 
            todas las facturas emitidas deberán incluir un código QR verificable y transmitirse a la AEAT en tiempo real.
          </p>

          <h2>Fechas clave</h2>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Obligados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>29 julio 2025</td>
                <td>Fabricantes de software de facturación (ya passed)</td>
              </tr>
              <tr>
                <td>1 enero 2027</td>
                <td>Sociedades (SL, SA, etc.)</td>
              </tr>
              <tr>
                <td>1 julio 2027</td>
                <td>Autónomos y profesionales</td>
              </tr>
            </tbody>
          </table>

          <h2>Sanciones por incumplimiento</h2>
          <p>
            Las sanciones pueden ser muy graves:
          </p>
          <ul>
            <li>Hasta 150.000€/año para fabricantes de software</li>
            <li>Hasta 50.000€/año para usuarios que no cumplan</li>
            <li>Posible prohibición de actividad</li>
          </ul>

          <h2>Cómo cumplir con Verifactu</h2>
          <p>
            Para cumplir con la normativa, necesitas:
          </p>
          <ol>
            <li><strong>Software compatible</strong>: Utilizar un programa de facturación que cumpla con Verifactu</li>
            <li><strong>Certificado digital</strong>: Necesitas un certificado para identificarte ante la AEAT</li>
            <li><strong>Alta en Colaborador Social</strong>: Necesitas darte de alta para emitir facturas verificadas</li>
          </ol>

          <h2>Mejores programas de facturación Verifactu</h2>
          <p>
            Si buscas un programa compatible con Verifactu, tienes varias opciones. En nuestro 
            <a href="/directorio">directorio de programas</a> puedes comparar las principales 
            opciones del mercado.
          </p>

          <h2>Conclusión</h2>
          <p>
            El deadline de Verifactu 2027 es real y las sanciones son significativas. Ahora es el 
            momento de prepararse, evaluar tu software actual y asegurarte de que cumple con 
            la nueva normativa. No esperes al último momento.
          </p>
        </article>
      </div>
    </div>
  );
}