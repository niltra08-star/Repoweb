export type SpaceType = "Residencial" | "Comercial" | "Hostelería" | "Oficina" | "Efímero";
export type StyleType = "Minimalista Cálido" | "Mediterráneo" | "Industrial" | "Contemporáneo" | "Rústico Moderno";
export type BudgetRange = "< 10k€" | "10-25k€" | "25-50k€" | "50k€+";
export type Timeline = "1-3 meses" | "3-6 meses" | "6-12 meses" | "Flexible";

export interface Project {
  id: string;
  title: string;
  category: SpaceType;
  image: string;
  size: "span-2" | "span-1" | "tall" | "wide";
}

export interface DiaryEntry {
  id: string;
  image: string;
  date: string;
  category: "Inspiración" | "Proceso" | "Paleta" | "Boceto";
  height: "h-64" | "h-80" | "h-96" | "h-[28rem]";
}

export interface Certificate {
  id: string;
  title: string;
  institution: string;
  year: string;
  icon: string;
}

export interface ServiceRequest {
  spaceType?: SpaceType;
  style?: StyleType;
  budget?: BudgetRange;
  timeline?: Timeline;
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
}
