'use client';

import { useState, useEffect } from 'react';
import { useUser } from './layout';
import { FileText, Key, TrendingUp, Activity } from 'lucide-react';

interface Stats {
  plan: string;
  invoicesUsed: number;
  invoicesLimit: number;
  nifsAllowed: number;
  nifsLimit: number;
  apiKeysCount: number;
  totalInvoices: number;
}

export default function DashboardPage() {
  const { user, token } = useUser();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      fetch('/api/v1/user/stats', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [token]);

  const plans: Record<string, { name: string; price: string }> = {
    hacker: { name: 'Hacker', price: 'Gratis' },
    indie: { name: 'Indie', price: '9€/mes' },
    studio: { name: 'Studio', price: '49€/mes' },
    scale: { name: 'Scale', price: '199€/mes' },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Resumen</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <FileText className="text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Facturas</p>
              <p className="text-2xl font-bold text-white">
                {stats?.invoicesUsed || 0} / {stats?.invoicesLimit || 100}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-600/20 rounded-lg">
              <Key className="text-green-400" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">API Keys</p>
              <p className="text-2xl font-bold text-white">{stats?.apiKeysCount || 0}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-600/20 rounded-lg">
              <TrendingUp className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">NIFs permitidos</p>
              <p className="text-2xl font-bold text-white">
                {stats?.nifsAllowed || 1} / {stats?.nifsLimit || 1}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-600/20 rounded-lg">
              <Activity className="text-orange-400" size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-sm">Plan actual</p>
              <p className="text-2xl font-bold text-white">
                {plans[stats?.plan || 'hacker']?.name || 'Hacker'}
              </p>
              <p className="text-sm text-slate-400">
                {plans[stats?.plan || 'hacker']?.price}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Uso del plan</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">Facturas emitidas</span>
              <span className="text-white">
                {stats?.invoicesUsed || 0} de {stats?.invoicesLimit || 100}
              </span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{
                  width: `${Math.min(
                    ((stats?.invoicesUsed || 0) / (stats?.invoicesLimit || 100)) * 100,
                    100
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">¿Necesitas más?</h3>
          <p className="text-slate-400 mb-4">
            Si has superado los límites de tu plan, puedes actualizar a un plan superior.
          </p>
          <a
            href="/dashboard/plan"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver planes
          </a>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">¿Necesitas ayuda?</h3>
          <p className="text-slate-400 mb-4">
            Consulta nuestra documentación para integrar la API en tu aplicación.
          </p>
          <a
            href="/documentacion"
            target="_blank"
            className="inline-block px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
          >
            Ver documentación
          </a>
        </div>
      </div>
    </div>
  );
}