'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const menuCategories = [
  {
    id: 'empanadas',
    name: 'Empanadas',
    icon: '🥟',
    items: [
      { name: 'Empanadas de Carne', price: '$2.500', desc: 'Carne cortada a cuchillo, cebolla, morrón, ají verde, huevo, aceitunas y comino' },
      { name: 'Empanadas de Pollo', price: '$2.500', desc: 'Pechuga de pollo desmenuzada, cebolla, morrón, huevo y aceitunas' },
      { name: 'Jamón y Queso', price: '$2.300', desc: 'Jamón cocido y queso muzzarella gratinado' },
      { name: 'Empanadas de Verdura', price: '$2.300', desc: 'Mix de verduras de estación con queso y especias' },
      { name: 'Empanadas de Humita', price: '$2.500', desc: 'Choclo rallado, queso y albahaca fresca' },
      { name: 'Empanadas Cabral', price: '$2.800', desc: 'Carne, huevo, aceitunas y pasas de uva' },
    ],
  },
  {
    id: 'canelones',
    name: 'Canelones',
    icon: '🍝',
    items: [
      { name: 'Canelones de Carne', price: '$6.500', desc: 'Rellenos de carne y verdura, bañados en salsa tomate y queso muzzarella' },
      { name: 'Canelones de Verdura', price: '$5.800', desc: 'Rellenos de espinaca y ricotta, con salsa bechamel' },
      { name: 'Canelones Ricotta y Espinaca', price: '$5.800', desc: 'Combinación perfecta de ricotta fresca y espinaca' },
    ],
  },
  {
    id: 'platos',
    name: 'Platos Principales',
    icon: '🍗',
    items: [
      { name: 'Pollo con Papas al Horno', price: '$8.500', desc: 'Pollo marinado con hierbas, papas doradas y vegetales de estación' },
      { name: 'Milanesa con Papas', price: '$9.200', desc: 'Milanesa napolina con papas fritas y ensalada' },
      { name: 'Lasaña de Carne', price: '$7.800', desc: 'Capas de pasta, carne ragú, salsa bechamel y queso gratinado' },
      { name: 'Sorrentinos Caseros', price: '$7.200', desc: 'Sorrentinos de ricotta y jamón con salsa de tomate' },
      { name: 'Empanada Gigante', price: '$5.500', desc: 'Empanada individual para llevar, rellena a elección' },
    ],
  },
  {
    id: 'pasteleria',
    name: 'Pastelería',
    icon: '🧁',
    items: [
      { name: 'Medialunas de Manteca', price: '$1.200', desc: 'Medialunas artesanales de manteca, crocantes por fuera y suaves por dentro' },
      { name: 'Facturas Variadas', price: '$1.100', desc: 'Sartenes, divociones, rosquitas y más. Consultá disponibilidad diaria' },
      { name: 'Torta de Chocolate', price: '$3.500', desc: 'Bizcochuelo de chocolate con ganache y frutos rojos' },
      { name: 'Tarta de Jamón y Queso', price: '$4.200', desc: 'Tarta individual con jamón, queso y salsa bechamel' },
      { name: 'Tarta de Verdura', price: '$3.800', desc: 'Tarta con espinaca, ricotta y vegetales de estación' },
      { name: 'Dulce de Leche Brownie', price: '$2.800', desc: 'Brownie de chocolate con corazón de dulce de leche' },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-sand/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Nuestro Menú
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-6">
            Sabores que enamoran
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-terracotta/40" />
            <Heart size={14} className="text-terracotta" />
            <div className="w-12 h-[1px] bg-terracotta/40" />
          </div>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="font-serif text-3xl font-bold text-dark-brown">
                  {category.name}
                </h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-terracotta/30 to-transparent" />
              </div>

              {/* Menu Items */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-start gap-4 p-5 rounded-xl hover:bg-white/50 transition-all duration-300"
                  >
                    {/* Price */}
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="font-serif text-lg font-bold text-terracotta">
                        {item.price}
                      </span>
                    </div>
                    
                    {/* Divider */}
                    <div className="flex-shrink-0 w-8 h-[1px] bg-terracotta/20 group-hover:bg-terracotta/40 transition-colors" />
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-brown mb-1 group-hover:text-terracotta transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-warm-brown/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-white/40 rounded-2xl border border-warm-brown/5"
        >
          <p className="text-warm-brown/70 text-sm">
            📞 <strong>Hacé tu pedido con anticipación</strong> para garantizar frescura
          </p>
          <p className="text-warm-brown/50 text-xs mt-2">
            Precios sujetos a cambio sin previo aviso · Todos los platos pueden personalizarse
          </p>
        </motion.div>
      </div>
    </section>
  );
}
