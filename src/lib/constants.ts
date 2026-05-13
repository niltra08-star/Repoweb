import { Project, DiaryEntry, Certificate } from "@/types";

export const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Casa Lluvia",
    category: "Residencial",
    image: "/images/placeholder-1.jpg",
    size: "span-2",
  },
  {
    id: "p2",
    title: "Estudio Ónice",
    category: "Oficina",
    image: "/images/placeholder-2.jpg",
    size: "span-1",
  },
  {
    id: "p3",
    title: "Café Tostado",
    category: "Hostelería",
    image: "/images/placeholder-3.jpg",
    size: "span-1",
  },
  {
    id: "p4",
    title: "Boutique Alba",
    category: "Comercial",
    image: "/images/placeholder-4.jpg",
    size: "span-1",
  },
  {
    id: "p5",
    title: "Loft Industrial",
    category: "Residencial",
    image: "/images/placeholder-5.jpg",
    size: "tall",
  },
  {
    id: "p6",
    title: "Pabellón Vidrio",
    category: "Efímero",
    image: "/images/placeholder-6.jpg",
    size: "wide",
  },
];

export const MOCK_DIARY: DiaryEntry[] = [
  {
    id: "d1",
    image: "/images/placeholder-diary-1.jpg",
    date: "12 Mar 2026",
    category: "Inspiración",
    height: "h-80",
  },
  {
    id: "d2",
    image: "/images/placeholder-diary-2.jpg",
    date: "05 Mar 2026",
    category: "Proceso",
    height: "h-64",
  },
  {
    id: "d3",
    image: "/images/placeholder-diary-3.jpg",
    date: "28 Feb 2026",
    category: "Boceto",
    height: "h-96",
  },
  {
    id: "d4",
    image: "/images/placeholder-diary-4.jpg",
    date: "14 Feb 2026",
    category: "Paleta",
    height: "h-[28rem]",
  },
  {
    id: "d5",
    image: "/images/placeholder-diary-5.jpg",
    date: "02 Feb 2026",
    category: "Inspiración",
    height: "h-80",
  },
  {
    id: "d6",
    image: "/images/placeholder-diary-6.jpg",
    date: "20 Ene 2026",
    category: "Proceso",
    height: "h-64",
  },
];

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    title: "Máster en Diseño de Interiores",
    institution: "Escuela de Arte Superior",
    year: "2024",
    icon: "🎓",
  },
  {
    id: "c2",
    title: "Especialización en Arquitectura Efímera",
    institution: "Instituto de Diseño Contemporáneo",
    year: "2025",
    icon: "🏗️",
  },
  {
    id: "c3",
    title: "Premio Joven Talento",
    institution: "Asociación de Interioristas",
    year: "2026",
    icon: "🏆",
  },
];
