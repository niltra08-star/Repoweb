'use client';

import { useState, useEffect } from 'react';
import { useUser } from '../layout';
import { Key, Copy, Check, Plus, Trash2, AlertTriangle } from 'lucide-react';

interface ApiKey {
  id: string;
  name: string;
  lastUsed: string | null;
  createdAt: string;
  revoked: boolean;
}

export default function KeysPage() {
  const { token } = useUser();
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewKey, setShowNewKey] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKey, setNewKey] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetch('/api/v1/keys', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setKeys(data.keys || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [token]);

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const createKey = async () => {
    if (!newKeyName.trim()) return;
    
    const res = await fetch('/api/v1/keys', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newKeyName }),
    });
    
    const data = await res.json();
    setNewKey(data.key);
    setShowNewKey(false);
    setNewKeyName('');
    
    setKeys([{ id: data.id, name: data.name, lastUsed: null, createdAt: new Date().toISOString(), revoked: false }, ...keys]);
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
          <h1 className="text-3xl font-bold text-white">API Keys</h1>
          <p className="text-slate-400 mt-1">Gestiona las claves de acceso a tu API</p>
        </div>
        <button
          onClick={() => setShowNewKey(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Nueva key
        </button>
      </div>

      {showNewKey && (
        <div className="bg-slate-800 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Nueva API Key</h3>
          <div className="flex gap-4">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="Nombre (ej: Producción, Desarrollo)"
              className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={createKey}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Crear
            </button>
            <button
              onClick={() => setShowNewKey(false)}
              className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {newKey && (
        <div className="bg-green-900/30 border border-green-600 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 text-green-400 mb-4">
            <AlertTriangle size={20} />
            <span className="font-semibold">Guarda esta key ahora - no volverás a verla</span>
          </div>
          <div className="flex gap-4">
            <code className="flex-1 px-4 py-3 bg-slate-900 text-green-400 rounded-lg font-mono text-sm break-all">
              {newKey}
            </code>
            <button
              onClick={() => copyKey(newKey)}
              className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {copied === newKey ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      )}

      <div className="bg-slate-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-700/50">
            <tr>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Nombre</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Último uso</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Creada</th>
              <th className="px-6 py-4 text-left text-slate-400 font-medium">Estado</th>
              <th className="px-6 py-4 text-right text-slate-400 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {keys.map((key) => (
              <tr key={key.id} className="hover:bg-slate-700/30">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Key size={18} className="text-slate-400" />
                    <span className="text-white font-medium">{key.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400">
                  {key.lastUsed ? new Date(key.lastUsed).toLocaleDateString('es-ES') : 'Nunca'}
                </td>
                <td className="px-6 py-4 text-slate-400">
                  {new Date(key.createdAt).toLocaleDateString('es-ES')}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    key.revoked ? 'bg-red-900/30 text-red-400' : 'bg-green-900/30 text-green-400'
                  }`}>
                    {key.revoked ? 'Revocada' : 'Activa'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-slate-400 hover:text-red-400 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {keys.length === 0 && (
          <div className="p-12 text-center">
            <Key size={48} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400">No tienes API keys todavía</p>
            <button
              onClick={() => setShowNewKey(true)}
              className="mt-4 text-blue-400 hover:text-blue-300"
            >
              Crear tu primera key
            </button>
          </div>
        )}
      </div>
    </div>
  );
}