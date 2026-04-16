import { DiaryEntry } from "@/types";

export default function DiaryCard({ entry }: { entry: DiaryEntry }) {
  return (
    <div className="mb-8 break-inside-avoid shadow-lg bg-white p-3 md:p-4 hover:shadow-xl transition-shadow duration-500 group">
      <div className={`relative w-full ${entry.height} overflow-hidden bg-stone`}>
        {/* Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${entry.image})`,
            filter: "sepia(0.1) contrast(1.05)"
          }}
        />
        
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
      </div>
      
      {/* Caption area */}
      <div className="mt-4 flex justify-between items-end px-1">
        <div>
          <span className="font-body text-[10px] md:text-xs text-sand uppercase tracking-widest block mb-1">
            {entry.category}
          </span>
          <span className="font-body text-xs text-charcoal/50">
            {entry.date}
          </span>
        </div>
        
        {/* Decorative icon mapping to category */}
        <div className="text-charcoal/30 group-hover:text-sand transition-colors">
          {entry.category === "Inspiración" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.318 1.026 0 1.945 0 1.945M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
          {entry.category === "Proceso" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {entry.category === "Boceto" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          )}
          {entry.category === "Paleta" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
