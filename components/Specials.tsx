'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const specialties = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M12 32C12 32 8 28 8 22C8 16 12 12 18 12C22 12 24 14 24 14C24 14 26 12 30 12C36 12 40 16 40 22C40 28 36 32 36 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 32V38C16 40 18 42 24 42C30 42 32 40 32 38V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20L22 24L26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Empanadas',
    description: 'Jugosas empanadas criollas rellenas de carne, pollo, jamón-queso y mucho más. Preparadas al horno o fritas, con el sabor auténtico de la abuela.',
    gradient: 'from-terracotta/10 to-terracotta/5',
    color: 'text-terracotta',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="16" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 22H38" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16V12C16 10 18 8 24 8C30 8 32 10 32 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="26" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Canelones',
    description: 'Canelones caseros rellenos de carne o verdura, bañados en salsa tomate casera y gratinados con queso derretido. Pura tradición italiana-argentina.',
    gradient: 'from-sage/10 to-sage/5',
    color: 'text-olive',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 34C14 34 10 30 10 24C10 18 14 14 20 14H28C34 14 38 18 38 24C38 30 34 34 34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 34V38C18 40 20 42 24 42C28 42 30 40 30 38V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20L22 24L26 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Pollo con Papas al Horno',
    description: 'Tierno pollo marinado con hierbas argentinas, acompañado de papas doradas al horno con papas rústicas. Un clásico de la cocina criolla.',
    gradient: 'from-sand/20 to-terracotta/10',
    color: 'text-warm-brown',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="28" rx="14" ry="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 28C14 28 16 18 24 14C32 18 34 28 34 28" stroke="currentColor" strokeWidth="2" />
        <path d="M20 14V10C20 8 22 6 24 6C26 6 28 8 28 10V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="26" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: 'Pastelería Fina',
    description: 'Medialunas, facturas, tortas y dulces tradicionales argentinos. Desde clásicas medialunas de manteca hasta creaciones especiales para cada ocasión.',
    gradient: 'from-terracotta/10 to-sand/20',
    color: 'text-terracotta',
  },
];

export default function Specials() {
  return (
    <section id="especialidades" className="py-24 md:py-32 bg-gradient-to-b from-cream to-sand/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-terracotta/40" />
            <Sparkles size={16} className="text-terracotta" />
            <div className="w-12 h-[1px] bg-terracotta/40" />
          </div>
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Lo Más Pedido
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown">
            Nuestras Especialidades
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/5 hover:border-terracotta/20 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>

                <h3 className="font-serif text-xl font-bold text-dark-brown mb-3 group-hover:text-terracotta transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-warm-brown/70 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-terracotta/0 group-hover:border-terracotta/20 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-terracotta/0 group-hover:border-terracotta/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-warm-brown/60 text-sm italic">
            Y mucho más... Consulta por nuestro menú completo y comidas personalizadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
