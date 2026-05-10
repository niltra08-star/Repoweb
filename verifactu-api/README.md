# 🚀 VeriFactu - API de Facturación Electrónica

## Quick Start (Despliegue rápido)

### Opción 1: Vercel CLI (Recomendado - Sin GitHub)

```bash
# 1. Instala Vercel CLI globalmente
npm install -g vercel

# 2. En la carpeta verifactu-api, ejecuta:
vercel --prod

# 3. Sigue las instrucciones:
#    - Select "Import Project" → "Local Directory"
#    - Framework: Next.js
#    - ¿Set up and deploy? → Yes

# 4. Ya tienes tu API desplegada! 🎉
```

### Opción 2: Vercel Web (Arrastrar y soltar)

1. Ve a https://vercel.com
2. Desde tu dashboard, click en "Add New..."
3. Select "Project"
4. Arrastra la carpeta `verifactu-api` a la zona de upload
5. Click en "Deploy"

---

## 🌐 URLs después del despliegue

| Recurso | URL |
|---------|-----|
| **API** | `https://tu-proyecto.vercel.app` |
| **Health Check** | `https://tu-proyecto.vercel.app/api/v1/health` |
| **Dashboard** | `https://tu-proyecto.vercel.app/dashboard` |
| **Documentación** | `https://verifactu.dev/documentacion` |

---

## 🔑 Uso de la API

### 1. Regístrate
```bash
curl -X POST https://tu-proyecto.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"tu@email.com","password":"tuPassword","name":"Tu Nombre"}'
```

**Respuesta:**
```json
{
  "user": { "id": "...", "email": "tu@email.com", "plan": "hacker" },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "apiKey": "vf_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### 2. Crea una factura
```bash
curl -X POST https://tu-proyecto.vercel.app/api/v1/invoices \
  -H "Authorization: Bearer vf_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Content-Type: application/json" \
  -d '{
    "emitter": { "nif": "B12345678", "name": "Tu Empresa" },
    "receiver": { "nif": "12345678A", "name": "Cliente" },
    "lines": [
      { "description": "Servicio de desarrollo", "amount": 1000, "vat": 21 }
    ]
  }'
```

---

## 📊 Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/auth/register` | Crear cuenta |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/v1/health` | Estado de la API |
| GET/POST | `/api/v1/invoices` | Listar/Crear facturas |
| GET/POST | `/api/v1/invoices/[id]` | Ver/Cancelar factura |
| GET/POST | `/api/v1/keys` | Gestionar API Keys |
| GET | `/api/v1/user/stats` | Estadísticas de usuario |

---

## 🧪 Probar localmente

```bash
# En la carpeta verifactu-api:
npm run dev

# La API estará en: http://localhost:3000
# El dashboard en: http://localhost:3000/dashboard
```

---

## ⚙️ Variables de entorno

Si necesitas configuración adicional, añade estas en Vercel:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `JWT_SECRET` | Clave para firmar tokens | cadena aleatoria segura |
| `DATABASE_URL` | URL de PostgreSQL (Neon) | postgresql://... |

---

## 🗂️ Estructura del proyecto

```
verifactu-api/
├── prisma/
│   └── schema.prisma      # Base de datos
├── src/
│   ├── app/
│   │   ├── api/          # Endpoints de la API
│   │   └── dashboard/    # Panel de usuario
│   └── lib/
│       ├── auth.ts       # Autenticación
│       ├── api.ts        # Lógica de negocio
│       └── db.ts         # Conexión a DB
└── package.json
```

---

## 🎯 Planes disponibles

| Plan | Precio | Facturas/mes | NIFs |
|------|--------|--------------|------|
| Hacker | Gratis | 100 | 1 |
| Indie | 9€/mes | 1.500 | 3 |
| Studio | 49€/mes | 10.000 | 20 |
| Scale | 199€/mes | 100.000 | Ilimitados |

---

## 📞 Soporte

- Email: hola@verifactu.dev
- Docs: https://verifactu.dev/documentacion

---

*VeriFactu - Facturación electrónica fácil*