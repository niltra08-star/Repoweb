'use client';

import { useState, useEffect } from 'react';
import { useUser } from '../layout';
import { FileText, Search, Filter, Download, Eye } from 'lucide-react';

interface Invoice {
  id: string;
  externalId: string;
  series: string;
  number: number;
  date: string;
  total: number;
  vat: number;
  status: string;
  emitterName: string;
  receiverName: string;
}

export default function InvoicesPage() {
  const { token } = useUser();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (token) {
      fetch('/api/v1/invoices?limit=100', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setInvoices(data.invoices || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [token]);

  const filteredInvoices = invoices.filter((inv) =>
    inv.emitterName.toLowerCase().includes(search.toLowerCase()) ||
    inv.receiverName.toLowerCase().includes(search.toLowerCase()) ||
    inv.series.includes(search) ||
    inv.number.toString().includes(search)
  );

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-900/30 text-yellow-400',
    created: 'bg-green-900/30 text-green-400',
    cancelled: 'bg-red-900/30 text-red-400',
    error: 'bg-red-900/30 text-red-400',
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
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Facturas</h1>
          <p className="text-slate-400 mt-1">Todas las facturas creadas con tu API</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por cliente, serie o número..."
              className="w-full pl-10 pr-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Factura</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Emisor</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Receptor</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Fecha</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Total</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Estado</th>
              <th className="px-6 py-4 text-right text-slate-400 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {filteredInvoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-slate-700/30">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-slate-400" />
                    <span className="text-white font-mono">
                      {invoice.series}{invoice.number.toString().padStart(4, '0')}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-300">{invoice.emitterName}</td>
                <td className="px-6 py-4 text-slate-300">{invoice.receiverName}</td>
                <td className="px-6 py-4 text-slate-400">
                  {new Date(invoice.date).toLocaleDateString('es-ES')}
                </td>
                <td className="px-6 py-4 text-white font-medium">
                  {(invoice.total + invoice.vat).toFixed(2)}€
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[invoice.status] || 'bg-slate-700 text-slate-400'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-blue-400 transition-colors">
                      <Eye size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-green-400 transition-colors">
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredInvoices.length === 0 && (
          <div className="p-12 text-center">
            <FileText size={48} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400">
              {search ? 'No se encontraron facturas' : 'No tienes facturas todavía'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}