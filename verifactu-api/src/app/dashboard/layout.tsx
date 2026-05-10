'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Key, 
  FileText, 
  CreditCard, 
  Settings, 
  LogOut,
  Menu,
  X,
  Copy,
  Check,
  Plus,
  Trash2
} from 'lucide-react';
import { useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  plan: string;
}

interface UserContextType {
  user: User | null;
  token: string | null;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({ user: null, token: null, logout: () => {} });

export function useUser() {
  return useContext(UserContext);
}

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('verifactu_token');
    const storedUser = localStorage.getItem('verifactu_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/dashboard/login');
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('verifactu_token');
    localStorage.removeItem('verifactu_user');
    setUser(null);
    setToken(null);
    router.push('/dashboard/login');
  };

  if (!user || !token) return null;

  return (
    <UserContext.Provider value={{ user, token, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <DashboardShell>{children}</DashboardShell>
    </UserProvider>
  );
}

function DashboardShell({ children }: { children: ReactNode }) {
  const { user, logout } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { icon: LayoutDashboard, label: 'Resumen', href: '/dashboard' },
    { icon: Key, label: 'API Keys', href: '/dashboard/keys' },
    { icon: FileText, label: 'Facturas', href: '/dashboard/invoices' },
    { icon: CreditCard, label: 'Plan', href: '/dashboard/plan' },
    { icon: Settings, label: 'Ajustes', href: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-slate-800 rounded-lg text-white"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-800 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white">VeriFactu</h1>
          <p className="text-sm text-slate-400">Developer Dashboard</p>
        </div>

        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => { router.push(item.href); setSidebarOpen(false); }}
              className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between text-slate-400 mb-4">
            <span className="text-sm">{user?.email}</span>
            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">{user?.plan}</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 w-full px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className="lg:ml-64 min-h-screen p-8 pt-20 lg:pt-8">
        {children}
      </main>
    </div>
  );
}