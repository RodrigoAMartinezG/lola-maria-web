'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-cream/70 relative overflow-hidden">
      {/* Top border decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center">
                <span className="text-cream font-serif text-xl font-bold">L</span>
              </div>
              <span className="font-serif text-xl font-semibold text-cream tracking-wide">
                Lola Maria
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
              Auténtica comida argentina hecha con amor y tradición. 
              Cada plato es una celebración de nuestros sabores criollos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Especialidades', 'Menú', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-sm text-cream/50 hover:text-terracotta transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">
              Contacto
            </h4>
            <div className="space-y-3 text-sm text-cream/50">
              <p>Buenos Aires, Argentina</p>
              <p>Pedidos: (011) XXX-XXXX</p>
              <p>WhatsApp: +54 9 XXX XXXX</p>
            </div>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {['Instagram', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center text-cream/40 hover:text-terracotta hover:border-terracotta/30 transition-all duration-300"
                  aria-label={social}
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Lola Maria · Pastelería &amp; Comida Argentina · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
