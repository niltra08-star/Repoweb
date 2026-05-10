const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🎯 VeriFactu - Deployment Script\n');

console.log('Este script te ayudará a desplegar a Vercel sin usar GitHub.\n');

rl.question('¿Ya tienes cuenta en Vercel? (s/n): ', (answer) => {
  if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'si') {
    console.log('\n✅ Perfecto! Sigue estos pasos:\n');
    console.log('1. Instala Vercel CLI:');
    console.log('   npm i -g vercel\n');
    console.log('2. En la raíz del proyecto (verifactu-api), ejecuta:');
    console.log('   vercel --prod\n');
    console.log('3. Sigue las instrucciones en pantalla');
    console.log('   - Select "Import Project" → "Local Directory"');
    console.log('   - Framework: Next.js');
    console.log('   - Output Directory: .next (o deja el default)\n');
    console.log('4. Una vez desplegado, tu API estará en:');
    console.log('   https://tu-proyecto.vercel.app\n');
    console.log('   Y el dashboard en:');
    console.log('   https://tu-proyecto.vercel.app/dashboard\n');
  } else {
    console.log('\n📋 Pasos para crear cuenta en Vercel:\n');
    console.log('1. Ve a https://vercel.com');
    console.log('2. Click en "Sign Up"');
    console.log('3. Usa tu cuenta de GitHub (o email)');
    console.log('4. Confirma tu email\n');
  }
  
  console.log('\n📚 Después de desplegar:\n');
  console.log('1. Ve a https://vercel.com/dashboard');
  console.log('2. Selecciona tu proyecto');
  console.log('3. Ve a "Environment Variables"');
  console.log('4. Añade:');
  console.log('   - JWT_SECRET: una cadena aleatoria segura');
  console.log('   - DATABASE_URL: (si usas Neon PostgreSQL)\n');
  
  console.log('🎉 Listo! Tu API está funcionando!\n');
  
  rl.close();
});