import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    producto: [
      { label: "Precios", href: "/precios" },
      { label: "Documentación", href: "/documentacion" },
      { label: "API Reference", href: "/documentacion" },
      { label: " Estado", href: "#" },
    ],
    empresa: [
      { label: "Blog", href: "/blog" },
      { label: "Directorio", href: "/directorio" },
      { label: "Contacto", href: "/contacto" },
    ],
    legal: [
      { label: "Aviso Legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/politica-privacidad" },
      { label: "Cookies", href: "/politica-cookies" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl text-white">VeriFactu.dev</span>
            </Link>
            <p className="text-sm mb-4">
              API Stripe-like para la facturación electrónica obligatoria en España. 
              Cumple con Verifactu sin complicaciones.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hola@verifactu.dev" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              {links.producto.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} VeriFactu.dev. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Hecho en España 🇪🇸
          </p>
        </div>
      </div>
    </footer>
  );
}