'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, Send, CheckCircle } from 'lucide-react';

// ⚠️ CAMBIÁ este número por el de WhatsApp de Lola Maria
const WHATSAPP_NUMBER = '+5491125588182';

interface OrderForm {
  name: string;
  phone: string;
  email: string;
  orderType: string;
  items: string;
  pickupDate: string;
  pickupTime: string;
  notes: string;
}

export default function Contact() {
  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    email: '',
    orderType: 'empanadas',
    items: '',
    pickupDate: '',
    pickupTime: '',
    notes: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola Lola Maria! 🥐 Quiero hacer un pedido:%0A%0A` +
      `👤 *Nombre:* ${form.name}%0A` +
      `📱 *Teléfono:* ${form.phone}%0A` +
      `📧 *Email:* ${form.email || 'No proporcionado'}%0A` +
      `🍽️ *Tipo de pedido:* ${form.orderType}%0A` +
      `📝 *Detalle del pedido:*%0A${form.items}%0A` +
      `📅 *Fecha de retiro:* ${form.pickupDate}%0A` +
      `🕐 *Hora de retiro:* ${form.pickupTime}%0A` +
      `💬 *Notas:* ${form.notes || 'Sin notas adicionales'}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-gradient-to-b from-sand/30 to-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta/20 to-transparent" />
      
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
            Visitanos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-6">
            Contacto &amp; Ubicación
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-terracotta/40" />
            <MapPin size={14} className="text-terracotta" />
            <div className="w-12 h-[1px] bg-terracotta/40" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/5 hover:border-terracotta/20 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-terracotta/10 to-terracotta/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin size={24} className="text-terracotta" />
            </div>
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
              Dirección: Gral Urquiza 116, Acassuso. 
            </h3>
            <p className="text-warm-brown/70 text-sm leading-relaxed">
              Buenos Aires, Argentina
              <br />
              <span className="text-warm-brown/50 text-xs">(Consultá la dirección exacta)</span>
            </p>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/5 hover:border-terracotta/20 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage/10 to-sage/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock size={24} className="text-olive" />
            </div>
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
              Horarios
            </h3>
            <div className="text-warm-brown/70 text-sm space-y-2">
              <p><span className="font-medium text-dark-brown">Lunes a Sabados:</span> 8:00 - 20:00</p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-warm-brown/5 hover:border-terracotta/20 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-terracotta/10 to-terracotta/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} className="text-terracotta" />
            </div>
            <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
              Pedidos
            </h3>
            <div className="text-warm-brown/70 text-sm space-y-2">
              <p><span className="font-medium text-dark-brown">WhatsApp:</span> +54 9 11 2558-8182</p>
              <p className="text-xs text-terracotta/70 mt-2">¡Hacé tu pedido por WhatsApp!</p>
            </div>
          </motion.div>
        </div>

        {/* Order Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-terracotta/40" />
              <Send size={16} className="text-terracotta" />
              <div className="w-12 h-[1px] bg-terracotta/40" />
            </div>
            <p className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Pedí Online
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-dark-brown">
              Hacé tu pedido desde acá
            </h3>
            <p className="text-warm-brown/60 mt-4 max-w-xl mx-auto">
              Completá el formulario y te redirigimos a WhatsApp con tu pedido listo para enviar. 
              ¡Así de simple!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sage/20 border border-sage/30 rounded-2xl p-10 text-center"
              >
                <CheckCircle size={48} className="mx-auto mb-4 text-olive" />
                <h4 className="font-serif text-2xl font-bold text-dark-brown mb-2">
                  ¡Pedido listo para enviar!
                </h4>
                <p className="text-warm-brown/70">
                  Se abrió WhatsApp con tu pedido. Solo tenés que presionar &quot;Enviar&quot;.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={sendToWhatsApp}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-warm-brown/5 shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown placeholder-warm-brown/30"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+54 9 XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown placeholder-warm-brown/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown placeholder-warm-brown/30"
                    />
                  </div>

                  {/* Order Type */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Tipo de pedido *
                    </label>
                    <select
                      name="orderType"
                      required
                      value={form.orderType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown"
                    >
                      <option value="empanadas">Empanadas</option>
                      <option value="canelones">Canelones</option>
                      <option value="plato_principal">Plato Principal</option>
                      <option value="pasteleria">Pastelería</option>
                      <option value="combo">Combo completo</option>
                      <option value="catering">Catering / Evento</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Order Details */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Detalle del pedido *
                    </label>
                    <textarea
                      name="items"
                      required
                      rows={4}
                      value={form.items}
                      onChange={handleChange}
                      placeholder="Ej: 20 empanadas de carne, 10 de jamón y queso, 5 canelones de ricotta..."
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown placeholder-warm-brown/30 resize-none"
                    />
                  </div>

                  {/* Pickup Date */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Fecha de retiro *
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      value={form.pickupDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown"
                    />
                  </div>

                  {/* Pickup Time */}
                  <div>
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Hora de retiro *
                    </label>
                    <input
                      type="time"
                      name="pickupTime"
                      required
                      value={form.pickupTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown"
                    />
                  </div>

                  {/* Notes */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-warm-brown mb-2">
                      Notas adicionales
                    </label>
                    <input
                      type="text"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Alergias, instrucciones especiales, etc."
                      className="w-full px-4 py-3 rounded-xl border border-warm-brown/15 bg-white/50 focus:border-terracotta focus:ring-2 focus:ring-terracotta/10 outline-none transition-all text-warm-brown placeholder-warm-brown/30"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-10 py-4 bg-green-600 text-white text-sm tracking-wider uppercase font-medium rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-600/20"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.523 5.862L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.548-5.312-1.498l-.38-.228-3.766.982.998-3.872-.25-.396A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                    Enviar pedido por WhatsApp
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-warm-brown/60 text-sm mb-6">Seguinos en redes sociales</p>
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: <Instagram size={20} />, label: 'Instagram', href: '#' },
              { icon: <Facebook size={20} />, label: 'Facebook', href: '#' },
              { icon: <Mail size={20} />, label: 'Email', href: '#' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-white/60 border border-warm-brown/10 flex items-center justify-center text-warm-brown/60 hover:text-terracotta hover:border-terracotta/30 hover:bg-terracotta/5 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-terracotta to-terracotta-dark rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="relative z-10">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              ¿Tenés un evento especial?
            </h3>
            <p className="text-cream/80 text-base mb-8 max-w-xl mx-auto">
              Hacemos catering para eventos, reuniones y celebraciones. 
              Consultanos por nuestros paquetes personalizados.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-terracotta text-sm tracking-wider uppercase font-medium rounded-full hover:bg-white transition-all duration-300 hover:shadow-xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.126 1.523 5.862L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.94 0-3.76-.548-5.312-1.498l-.38-.228-3.766.982.998-3.872-.25-.396A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Pedí por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
