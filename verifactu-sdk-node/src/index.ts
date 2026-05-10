import axios, { AxiosInstance, AxiosError } from 'axios';

export interface VeriFactuConfig {
  apiKey: string;
  baseUrl?: string;
}

export interface Emitter {
  nif: string;
  name: string;
}

export interface Receiver {
  nif: string;
  name: string;
}

export interface InvoiceLine {
  description: string;
  amount: number;
  vat: number;
}

export interface CreateInvoiceOptions {
  emitter: Emitter;
  receiver: Receiver;
  lines: InvoiceLine[];
  series?: string;
  date?: string;
}

export interface Invoice {
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

export interface UserStats {
  plan: string;
  invoicesUsed: number;
  invoicesLimit: number;
  nifsAllowed: number;
  nifsLimit: number;
  apiKeysCount: number;
  totalInvoices: number;
}

export interface ApiKey {
  id: string;
  name: string;
  lastUsed: string | null;
  createdAt: string;
  revoked: boolean;
}

export class VeriFactuError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'VeriFactuError';
  }
}

export class VeriFactu {
  private client: AxiosInstance;

  constructor(config: VeriFactuConfig) {
    const baseUrl = config.baseUrl || 'https://api.verifactu.dev';
    
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const message = (error.response?.data as any)?.error || error.message;
        throw new VeriFactuError(message, error.response?.status, error.code);
      }
    );
  }

  // Health Check
  async health(): Promise<{ status: string; version: string }> {
    const { data } = await this.client.get('/api/v1/health');
    return data;
  }

  // Invoices
  async createInvoice(options: CreateInvoiceOptions): Promise<Invoice> {
    const { data } = await this.client.post('/api/v1/invoices', options);
    return data;
  }

  async listInvoices(limit = 50, offset = 0): Promise<Invoice[]> {
    const { data } = await this.client.get('/api/v1/invoices', {
      params: { limit, offset },
    });
    return data.invoices;
  }

  async getInvoice(id: string): Promise<Invoice> {
    const { data } = await this.client.get(`/api/v1/invoices/${id}`);
    return data.invoice;
  }

  async cancelInvoice(id: string): Promise<Invoice> {
    const { data } = await this.client.post(`/api/v1/invoices/${id}`, {
      action: 'cancel',
    });
    return data.invoice;
  }

  // API Keys (requires JWT token)
  async listApiKeys(token: string): Promise<ApiKey[]> {
    const { data } = await this.client.get('/api/v1/keys', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.keys;
  }

  async createApiKey(token: string, name: string): Promise<{ key: string; name: string; id: string }> {
    const { data } = await this.client.post('/api/v1/keys', { name }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }

  // User Stats (requires JWT token)
  async getStats(token: string): Promise<UserStats> {
    const { data } = await this.client.get('/api/v1/user/stats', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  }
}

// Helper functions
export function createClient(apiKey: string, baseUrl?: string): VeriFactu {
  return new VeriFactu({ apiKey, baseUrl });
}

// Auth helpers (server-side)
export async function register(email: string, password: string, name?: string, baseUrl?: string) {
  const { data } = await axios.post(`${baseUrl || 'https://api.verifactu.dev'}/api/auth/register`, {
    email,
    password,
    name,
  });
  return data;
}

export async function login(email: string, password: string, baseUrl?: string) {
  const { data } = await axios.post(`${baseUrl || 'https://api.verifactu.dev'}/api/auth/login`, {
    email,
    password,
  });
  return data;
}

export default VeriFactu;