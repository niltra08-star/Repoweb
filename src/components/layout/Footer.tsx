export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white py-16 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h2 className="font-display text-3xl md:text-5xl text-warm-white">Lucía.</h2>
          <p className="font-body font-light text-warm-white/70 leading-relaxed text-sm">
            Estudio de diseño de interiores y dirección de arte. 
            Creamos santuarios atemporales a través de un enfoque basado en el minimalismo cálido.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs uppercase tracking-widest text-sand">Contacto</h3>
            <a href="mailto:hola@lucianavarro.com" className="font-body text-warm-white/80 hover:text-white transition-colors">
              hola@lucia.design
            </a>
            <p className="font-body text-warm-white/50 text-sm">
              Madrid, España<br/>
              (Atención con cita previa)
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-body text-xs uppercase tracking-widest text-sand">Social</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="font-body text-warm-white/80 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="font-body text-warm-white/80 hover:text-white transition-colors">Pinterest</a>
              <a href="#" className="font-body text-warm-white/80 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-warm-white/40">
          © {new Date().getFullYear()} Lucía Jiménez. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <a href="#" className="font-body text-xs text-warm-white/40 hover:text-warm-white transition-colors">Términos</a>
          <a href="#" className="font-body text-xs text-warm-white/40 hover:text-warm-white transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
