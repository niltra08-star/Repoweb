"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code, BookOpen, FileText, Mail, Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/precios", label: "Precios", icon: FileText },
  { href: "/documentacion", label: "Docs", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: Code },
  { href: "/directorio", label: "Directorio", icon: FileText },
  { href: "/contacto", label: "Contacto", icon: Mail },
];

const legalItems = [
  { href: "/aviso-legal", label: "Aviso Legal" },
  { href: "/politica-privacidad", label: "Privacidad" },
  { href: "/politica-cookies", label: "Cookies" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-xl text-slate-900">VeriFactu.dev</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/documentacion"
              className="px-4 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/precios"
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Empezar gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            ))}
            <Link
              href="/precios"
              className="block mx-4 mt-4 px-4 py-3 bg-blue-600 text-white text-center rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Empezar gratis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}