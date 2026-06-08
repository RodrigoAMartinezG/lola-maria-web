'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DailyMenu() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-5 py-2.5 bg-terracotta hover:bg-terracotta-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
        aria-label="Ver menú del día"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
        <span className="hidden sm:inline">Menú del Día</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Menú del día"
        >
          {/* Modal Content */}
          <div className="relative bg-cream rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden animate-slide-up">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Cerrar menú"
            >
              <X size={20} className="text-dark-brown" />
            </button>

            {/* Header */}
            <div className="bg-terracotta px-6 py-4">
              <h2 className="text-2xl font-bold text-white text-center">
                🍽️ Menú del Día
              </h2>
              <p className="text-white/80 text-center text-sm mt-1">
                Consulta nuestro menú diario
              </p>
            </div>

            {/* Image */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src="/images/menu-del-dia.png"
                  alt="Menú del día - Lola María"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Footer Note */}
              <p className="text-center text-warm-brown/70 text-xs mt-4">
                * El menú puede variar según la disponibilidad de ingredientes.
                <br />
                Consultá con el personal para alergias o intolerancias.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
