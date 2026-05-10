# VeriFactu - Script de Despliegue Automático
# Ejecuta este script en PowerShell

Write-Host ""
Write-Host "🚀 VeriFactu - Despliegue Automático" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
Write-Host "📋 Verificando Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado" -ForegroundColor Red
    Write-Host "   Descárgalo desde: https://nodejs.org" -ForegroundColor White
    exit
}

# Carpeta del proyecto
$projectPath = "$PSScriptRoot\verifactu-api"

if (-not (Test-Path $projectPath)) {
    Write-Host "❌ No se encontró la carpeta verifactu-api" -ForegroundColor Red
    exit
}

Set-Location $projectPath

# Instalar dependencias
Write-Host ""
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
npm install

# Generar Prisma
Write-Host ""
Write-Host "🗄️ Configurando base de datos..." -ForegroundColor Yellow
npx prisma generate
npx prisma db push

# Build
Write-Host ""
Write-Host "🔨 Compilando aplicación..." -ForegroundColor Yellow
npm run build

Write-Host ""
Write-Host ""
Write-Host "✅ Compilación exitosa!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Ve a https://vercel.com y crea una cuenta" -ForegroundColor White
Write-Host "2. Instala Vercel CLI: npm install -g vercel" -ForegroundColor White
Write-Host "3. En la carpeta verifactu-api, ejecuta: vercel --prod" -ForegroundColor White
Write-Host "4. Listo! Tu API estará online" -ForegroundColor White
Write-Host ""
Write-Host "📍 URLs después de desplegar:" -ForegroundColor Cyan
Write-Host "   API:        https://tu-proyecto.vercel.app" -ForegroundColor White
Write-Host "   Dashboard:  https://tu-proyecto.vercel.app/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Gracias por usar VeriFactu!" -ForegroundColor Green
Write-Host ""

# Preguntar si quiere iniciar servidor local
$startLocal = Read-Host "¿Quieres probar la API localmente ahora? (s/n)"
if ($startLocal -eq "s" -or $startLocal -eq "S") {
    Write-Host ""
    Write-Host "🚀 Iniciando servidor local..." -ForegroundColor Cyan
    Write-Host "   Presiona Ctrl+C para detener" -ForegroundColor White
    Write-Host ""
    npm run dev
}