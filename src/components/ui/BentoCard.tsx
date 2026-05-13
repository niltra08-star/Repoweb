import { Project } from "@/types";

export default function BentoCard({ project }: { project: Project }) {
  // Map size to CSS grid classes
  const spanClasses = {
    "span-2": "md:col-span-2 md:row-span-2",
    "span-1": "col-span-1 row-span-1",
    "tall": "row-span-2 md:col-span-1",
    "wide": "md:col-span-2 row-span-1",
  };

  const cssClass = spanClasses[project.size];

  return (
    <div className={`relative group overflow-hidden bg-stone cursor-pointer shadow-sm ${cssClass}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Dark overlay that appears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="font-body text-xs md:text-sm text-sand uppercase tracking-widest mb-2 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
          {project.category}
        </span>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-warm-white leading-none">
          {project.title}
        </h3>
        
        {/* Decorative inner border that appears on hover */}
        <div className="absolute inset-4 md:inset-6 border border-warm-white/0 transition-colors duration-500 delay-200 group-hover:border-warm-white/10 pointer-events-none" />
      </div>
    </div>
  );
}
