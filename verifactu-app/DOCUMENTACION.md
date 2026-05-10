# VeriFactu.dev - Documentación Completa

> Estado: Proyecto en desarrollo - Landing funcional, backend pendiente

---

## 📋 Resumen Ejecutivo

| Aspecto | Detalle |
|---------|---------|
| **Nombre** | VeriFactu.dev |
| **Tipo** | SaaS B2D + Directorio de afiliación |
| **Sector** | RegTech / Facturación electrónica España |
| **Misión** | Hacer que cumplir con Verifactu sea tan fácil como integrar Stripe |
| **Mercado** | ~6,5M autónomos + empresas obligadas a Verifactu |
| **Coste mensual** | €12-32 (dominio + hosting opcional) |
| **Revenue actual** | 0€ (pre-revenue) |

---

## 🎯 QUÉ ES VERIFACTU.DEV

### Problema que resuelve

España ha implementado **Verifactu** (RD 1007/2023 + RD-ley 15/2025), un sistema obligatorio de facturación electrónica verificada:

| Fecha | Obligados |
|-------|-----------|
| **29 julio 2025** | Fabricantes de software (YA PASÓ) |
| **1 enero 2027** | Sociedades |
| **1 julio 2027** | Autónomos |

**Sanciones**: Hasta 150.000€/año para fabricantes, 50.000€/año para usuarios.

El dolor actual:
- XML/SOAP complejo
- Certificados digitales difíciles de gestionar
- Sin librerías oficiales de la AEAT
- Competidores con pricing opaco ("contact us")

### Solución

API REST + SDKs que abstrae toda la complejidad:
```typescript
// npm install @verifactu/node
import { VeriFactu } from '@verifactu/node';

const invoice = await client.invoices.create({
  emitter: { nif: 'B12345678', name: 'Tu Empresa' },
  receiver: { nif: '12345678A', name: 'Cliente' },
  lines: [{ description: 'Desarrollo', amount: 1000, vat: 21 }]
});
```

---

## ✅ QUÉ YA ESTÁ HECHO

### Páginas creadas (10)

| Página | URL | Estado |
|--------|-----|--------|
| Landing principal | `/` | ✅ Completa |
| Precios | `/precios` | ✅ Completa |
| Documentación API | `/documentacion` | ✅ Completa |
| Blog índice | `/blog` | ✅ Completa |
| Blog: Qué es Verifactu | `/blog/que-es-verifactu` | ✅ Completo |
| Directorio programas | `/directorio` | ✅ Completo (con afiliación) |
| Contacto | `/contacto` | ✅ Completo |

### SEO técnico

- ✅ `sitemap.xml` con todas las URLs
- ✅ `robots.txt` configurado
- ✅ Metadata en layout (title, description, OpenGraph)
- ✅ estructura de URLs amigable para SEO

### Components

- ✅ Header (navegación responsive)
- ✅ Footer (links, redes sociales)

### Stack técnico

```
Framework: Next.js 14 (App Router)
Styling: Tailwind CSS
Deployment: Vercel (ready)
Hosting: Neon Postgres (free tier ready)
Email: Resend (free tier ready)
Pagos: Polar.sh (pendiente configurar)
```

---

## ⏳ QUÉ FALTA POR HACER

### Urgente (Semana 1-2)

| Prioridad | Tarea | Estado |
|----------|------|--------|
| 🔴 Crítico | **Desplegar a Vercel** | ⏳ Pendiente |
| 🔴 Crítico | **Comprar dominio** (verifactu.dev) | ⏳ Pendiente |
| 🔴 Crítico | **API Backend** - Sandbox de pruebas | ⏳ Pendiente |
| 🟡 Alto | **SDK Node.js** (publicar en npm) | ⏳ Pendiente |
| 🟡 Alto | **SDK Python** (publicar en PyPI) | ⏳ Pendiente |
| 🟡 Alto | **SDK PHP** (publicar en Packagist) | ⏳ Pendiente |
| 🟡 Alto | **Más artículos blog** (faltan 9) | ⏳ Pendiente |
| 🟢 Medio | **Configurar Google Analytics** | ⏳ Pendiente |
| 🟢 Medio | **Configurar Google Search Console** | ⏳ Pendiente |

### Post-lanzamiento (Mes 1-3)

| Tarea | Descripción |
|-------|-------------|
| Product Hunt | Lanzamiento oficial |
| Show HN | Publicar en Hacker News |
| Outreach devs | Email a 200 agencies desarrollo España |
| SEO content | +20 artículos blog |
| Newsletter | Configurar Resend |
| Google Ads | 50-100€/mes (si hay budget) |

---

## 💰 MODELO DE NEGOCIO

### Flujos de ingresos

| Flujo | Inicio | Potencial |
|-------|--------|------------|
| **Afiliación** | Día 1 | 500-2000€/mes |
| **SaaS API** | Mes 2-3 | 3000-10000€/mes |
| **Adsense** | Mes 6+ | 200-1000€/mes |

### Pricing planes

| Plan | Precio | Incluye |
|------|--------|---------|
| **Hacker** | Free | Sandbox + 100 facturas/mes |
| **Indie** | €9/mes | 1.500 facturas + 3 NIFs + SDKs |
| **Studio** | €49/mes | 10.000 facturas + 20 NIFs + soporte |
| **Scale** | €199/mes | 100.000 facturas + ilimitados + SLA |

### Afiliaciones configuradas

| Programa | URL (pendiente configurar) | Comisión |
|----------|---------------------------|----------|
| Holded | holded.com (por confirmar) | 20-30% |
| Quipu | quipu.co (por confirmar) | 20-30% |
| Billin | billin.com (por confirmar) | 20-30% |
| FacturaDirecta | facturadirecta.com | 15-25% |
| Declarando | declarando.com | 15-25% |

---

## 🔧 SPECS TÉCNICAS

### Endpoints API planeados

```
POST   /v1/invoices          - Crear factura
GET    /v1/invoices/:id      - Obtener factura
GET    /v1/invoices          - Listar facturas
POST   /v1/invoices/:id/cancel    - Cancelar factura
POST   /v1/invoices/:id/refund    - Factura rectificativa
GET    /v1/health            - Estado API
```

### Variables de entorno needed

```
DATABASE_URL=postgresql://...
API_KEY=sk_live_xxx
POLAR_SECRET_KEY=sk_live_xxx
RESEND_API_KEY=re_xxx
AEAT_WSDL_URL=https://...
AEAT_CERT_PATH=/path/to/cert.p12
```

### Servidor recomendado

- **Hetzner CX22**: 4€/mes (2 vCPU, 4GB RAM, 40GB SSD)

---

## 📊 COMPETIDORES

### APIs Verifactu

| Competidor | Precio | Fortalezas | Debilidades |
|------------|--------|------------|-------------|
| Verifacti | ~2,9€/NIF | Collab Social | Sin pricing público, XML |
| Quaderno | "Contact us" | Maduro | Enterprise, sin SDKs |
| B2Brouter | Gratis (24) | Gratis | Solo 24 facturas |
| EasyVerifactu | 14,95-99,95€ | WooCommerce | Solo e-commerce |

### Tu diferenciación

✅ **Precios públicos** (ninguno tiene esto)
✅ **Free tier 100 facturas** (ninguno ofrece esto)
✅ **SDKs modernos** (ninguno tiene Node/Python/PHP)
✅ **JSON, no XML** (más fácil de usar)
✅ **Directorio SEO** (tráfico orgánico)

---

## 📈 ESTRATEGIA MARKETING

### Canales orgánicos

| Canal | Acción | Estado |
|-------|--------|--------|
| X/Twitter | Responder a todo mention de Verifactu | ⏳ Pendiente |
| Hacker News | Show HN lanzamiento | ⏳ Pendiente |
| Reddit | Posts en r/spain, r/programacion | ⏳ Pendiente |
| LinkedIn | Articles sobre regulación | ⏳ Pendiente |
| GitHub | Publicar SDKs open source | ⏳ Pendiente |

### SEO keywords objetivo

| Keyword | Intención | Dificultad |
|---------|-----------|------------|
| Verifactu | Informacional | Media |
| programa facturación Verifactu | Comercial | Baja |
| cómo cumplir Verifactu | Navegacional | Baja |
| API Verifactu | Comercial | Baja |
| mejores programas facturación | Comercial | Media |

---

## 🚀 PRÓXIMOS PASOS

### Día 1-7 (Validación)

1. [ ] Desplegar a Vercel
2. [ ] Comprar dominio verifactu.dev
3. [ ] Setup Google Analytics
4. [ ] Setup Google Search Console
5. [ ] Primer outreach (20 devs + 5 agencies)
6. [ ] Publicar waitlist

### Semana 2-4 (Build)

1. [ ] Backend API con sandbox
2. [ ] Publicar SDK Node.js
3. [ ] Más artículos blog
4. [ ] Product Hunt launch
5. [ ] Show HN

### Mes 2-3 (Growth)

1. [ ] Primeros clientes de pago
2. [ ] Publicar más SDKs
3. [ ] Outreach agencies
4. [ ] Empezar Google Ads (si budget)

---

## 📁 ESTRUCTURA ACTUAL

```
verifactu-app/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
├── DOCUMENTACION.md
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (landing)
│   │   ├── globals.css
│   │   ├── precios/page.tsx
│   │   ├── documentacion/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── que-es-verifactu/page.tsx
│   │   ├── directorio/page.tsx
│   │   └── contacto/page.tsx
│   └── components/
│       ├── Header.tsx
│       └── Footer.tsx
```

---

## 💡 NOTAS IMPORTANTES

1. **El modelo self-hosted es clave**: Clients bring their own certificate, no need for Collaborator Social status initially.

2. **先把流量做起来**: Focus on SEO content and directory before building API backend.

3. **Competidores son lentos**: They have enterprise pricing and no developer-first approach. Your advantage is speed + simplicity.

4. **Deadline is real**: January 2027 for societies, July 2027 for autónomos. The pain is NOW for software manufacturers (already July 2025).

---

## 📞 CONTACTO

- Email: hola@verifactu.dev
- Web: https://verifactu.dev/contacto

---

*Documento actualizado: 10 mayo 2026*
*Versión: 1.0*