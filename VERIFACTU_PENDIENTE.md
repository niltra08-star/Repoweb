# VeriFactu - Tareas Pendientes

## URLs Desplegadas
- **Frontend**: https://verifactu-app-seven.vercel.app
- **Backend API**: https://verifactu-api-nine.vercel.app
- **Dashboard**: https://verifactu-api-nine.vercel.app/dashboard/login

---

## 1. ARREGLAR DASHBOARD (PROBLEMA)

El dashboard se queda en blanco porque intenta conectar a la base de datos durante el build.

**Solución**: Configurar Neon PostgreSQL (gratis)

1. Crear cuenta en https://neon.tech
2. Crear un nuevo proyecto
3. Copiar la URL de conexión (formato: postgresql://user:pass@host.neon.tech/db?sslmode=require)
4. Ir a Vercel → verifactu-api → Settings → Environment Variables
5. Añadir: DATABASE_URL=la-url-de-neon
6. Redeploy

---

## 2. AFILIACIONES - ENLACES REALES

### Quipu
1. Ir a: https://quipu.getrewardful.com/signup
2. Registrarse con email
3. Obtener el enlace único (tipo: getquipu.com?ref=tu-codigo)
4. Actualizar el directorio en: `verifactu-app/src/app/directorio/page.tsx`

### Holded
1. Crear cuenta en https://holded.com
2. Buscar "Invitar" o "Referidos" en el menú
3. Obtener tu enlace personal
4. Actualizar el directorio

---

## 3. ACTUALIZAR DIRECTORIO CON ENLACES DE AFILIADO

Archivo: `verifactu-app/src/app/directorio/page.tsx`

Sustituir los enlaces actuales por los de afiliado.

---

## 4. TESTS

Los tests de TestSprite no se han ejecutado aún. Para ejecutarlos:
1. La web debe estar desplegada y corriendo
2. Ejecutar: `npm run testsprite` o usar TestSprite desde su web

---

## 5. MEJORAS OPCIONALES

- Comprar dominio (verifactu.dev) ~10€/año
- Configurar Google Analytics
- Añadir más artículos SEO
- Crear más contenido para el blog

---

## 6. NOTAS IMPORTANTES

- Sin autónomo/empresa no se puede cobrar legalmente las comisiones de afiliación
- El backend necesita base de datos (Neon) para funcionar completamente
- La API de facturas funciona, pero la integración real con AEAT requiere certificado digital

---

## 7. PRÓXIMOS PASOS INMEDIATOS

1. [ ] Crear cuenta en Neon y obtener URL de conexión
2. [ ] Añadir DATABASE_URL en Vercel
3. [ ] Redeploy del backend
4. [ ] Verificar que el dashboard funciona
5. [ ] Obtener enlaces de afiliado de Quipu y Holded
6. [ ] Actualizar el directorio con los enlaces reales

---

*Actualizado: 10 mayo 2026*