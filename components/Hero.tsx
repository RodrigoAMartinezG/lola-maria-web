'use client';

import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/40 via-dark-brown/20 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Decorative line */}
        <motion.div
          variants={childVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 h-[1px] bg-terracotta/50" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-terracotta">
            <path d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="w-16 h-[1px] bg-terracotta/50" />
        </motion.div>

        <motion.p
          variants={childVariants}
          className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium mb-6"
        >
          Bienvenidos a
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight">
           <img 
              src="/images/logo.svg" 
              alt="Lola María - Panadería y Comida Casera" 
             
            />
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="text-xl md:text-2xl text-white font-light mb-4"
        >
          Pastelería &amp; Comida Argentina
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-base text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Sabores auténticos hechos con amor y tradición. Cada bocado es un viaje 
          a la cocina argentina, preparado con ingredientes frescos y recetas 
          que pasan de generación en generación.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group relative px-8 py-4 bg-terracotta text-cream text-sm tracking-wider uppercase font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-terracotta/20"
          >
            <span className="relative z-10">Ver Menú</span>
            <div className="absolute inset-0 bg-terracotta-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border-2 border-white/30 text-white text-sm tracking-wider uppercase font-medium rounded-full hover:border-terracotta hover:text-terracotta transition-all duration-300"
          >
            Contáctanos
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={childVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-terracotta/50">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
