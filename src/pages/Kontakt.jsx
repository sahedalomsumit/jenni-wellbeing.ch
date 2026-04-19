import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-black text-text mb-8">Kontakt & <span className="text-primary">Anfahrt</span></h1>
          <p className="text-xl text-text/60 font-medium">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:bg-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-primary group-hover:text-white mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text group-hover:text-white mb-2">Telefon</h3>
                <a href="tel:+41792672208" className="text-text/60 group-hover:text-white/80 font-medium">+41 79 267 22 08</a>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="glass-card p-8 group hover:bg-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center text-primary group-hover:text-white mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text group-hover:text-white mb-2">E-Mail</h3>
                <a href="mailto:info@jenni-wellbeing.ch" className="text-text/60 group-hover:text-white/80 font-medium">info@jenni-wellbeing.ch</a>
              </motion.div>
            </div>

            <div className="glass-card p-10">
              <div className="flex items-start gap-6 mb-8 border-b border-primary/5 pb-8">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">Unsere Adresse</h3>
                  <p className="text-text/60 leading-relaxed">
                    Waldhöheweg 30<br />3013 Bern, Schweiz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text mb-2">Anfahrt</h3>
                  <p className="text-text/60 leading-relaxed">
                    Zentral gelegen und gut mit öffentlichen Verkehrsmitteln erreichbar (Buslinie 20 bis Haltestelle Gewerbeschule). Parkplätze sind in der blauen Zone vorhanden.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Simple Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-64 border-4 border-white shadow-soft"
            >
              <img 
                src={`${import.meta.env.BASE_URL}img/contact.png`} 
                alt="Standort Bern" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-10 md:p-12">
              <h2 className="text-3xl font-heading font-black text-text mb-8">Schreiben Sie uns</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text/40 uppercase tracking-widest px-1">Name</label>
                    <input type="text" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-soft-inner" placeholder="Ihr Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text/40 uppercase tracking-widest px-1">E-Mail</label>
                    <input type="email" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-soft-inner" placeholder="ihre@email.ch" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/40 uppercase tracking-widest px-1">Betreff</label>
                  <input type="text" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-soft-inner" placeholder="Wie können wir helfen?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text/40 uppercase tracking-widest px-1">Nachricht</label>
                  <textarea rows="5" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-soft-inner" placeholder="Ihre Nachricht an uns..."></textarea>
                </div>
                <button type="submit" className="btn-cta w-full py-5 rounded-2xl mt-4">
                  <Send className="w-6 h-6" />
                  <span>Nachricht senden</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
