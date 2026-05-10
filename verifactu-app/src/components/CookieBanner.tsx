'use client';

import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('verifactu_cookies_accepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('verifactu_cookies_accepted', 'true');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem('verifactu_cookies_accepted', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          <Cookie size={24} className="text-blue-400" />
          <p className="text-sm">
            Usamos cookies para mejorar tu experiencia. 
            <a href="/politica-cookies" className="underline hover:text-blue-400 ml-1">Más info</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}