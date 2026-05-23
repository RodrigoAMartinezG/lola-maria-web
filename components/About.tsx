'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselImages = [
  { src: '/images/WhatsApp Image 2026-05-07 at 16.55.04.jpeg', alt: 'Empanadas frescas de Lola Maria' },
  { src: '/images/WhatsApp Image 2026-05-07 at 16.55.04 (1).jpeg', alt: 'Variedad de empanadas' },
  { src: '/images/WhatsApp Image 2026-05-07 at 16.55.05.jpeg', alt: 'Medialunas y pastelería' },
  { src: '/images/WhatsApp Image 2026-05-07 at 16.55.05 (1).jpeg', alt: 'Empanadas recién horneadas' },
  { src: '/images/WhatsApp Image 2026-05-07 at 16.55.05 (2).jpeg', alt: 'Postres y tortas' },
  { src: '/images/empanadas.jpg', alt: 'Empanadas artesanales' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sand/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Image Carousel */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <img
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 via-transparent to-transparent pointer-events-none" />

              {/* Slide counter */}
              <div className="absolute bottom-4 left-4 bg-dark-brown/60 backdrop-blur-sm text-cream text-xs px-3 py-1.5 rounded-full">
                {currentSlide + 1} / {carouselImages.length}
              </div>

              {/* Navigation dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-terracotta w-6'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={fadeInUp}>
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-8 leading-tight">
              Tradición argentina
              <br />
              <span className="text-terracotta">en cada bocado</span>
            </h2>
            <div className="space-y-6 text-warm-brown/80 leading-relaxed">
              <p>
                En Lola Maria, cada receta cuenta una historia. 
                Somos una panadería y casa de comidas caseras dedicada a mantener vivos los sabores auténticos de siempre, 
                con ingredientes frescos y mucho amor en cada preparación.
              </p>
              <p>
               Desde el pan recién horneado y las facturas calentitas, hasta tortas personalizadas, 
               pastas, tartas y comidas caseras para compartir en familia, 
               todo lo que hacemos nace del amor hacia la cocina hecha como en casa.
              </p>
              <p>
                Nuestro compromiso es llevar a tu mesa sabores ricos, caseros y auténticos, acompañados de la calidez y dedicación que nos representa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-warm-brown/10">
              {[
                { number: '100%', label: 'Natural' },
                { number: '20+', label: 'Platos' },
                { number: '∞', label: 'Amor' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-terracotta">{stat.number}</p>
                  <p className="text-sm text-warm-brown/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
