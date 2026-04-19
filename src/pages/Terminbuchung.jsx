import React, { useState } from 'react';
import { Calendar, CheckCircle2, ShieldCheck, User, Loader2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Terminbuchung = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary font-bold text-sm mb-6 border border-primary/10"
            >
              <Calendar className="w-4 h-4" />
              Sicheres Buchungssystem
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-text mb-6">
              Online <span className="text-primary">Terminbuchung</span>
            </h1>
            <p className="text-xl text-text/60 max-w-2xl mx-auto font-medium">
              Buchen Sie Ihren Wohlfühltermin in nur wenigen Klicks. Unser System zeigt Ihnen alle verfügbaren Zeiten in Echtzeit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {/* Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="glass-card p-6 bg-white border-primary/5">
                <h3 className="font-bold text-text mb-4 flex items-center gap-2 text-primary">
                  <User className="w-5 h-5" />
                  Kundenportal
                </h3>
                <p className="text-sm text-text/60 mb-4">
                  Haben Sie bereits einen Account? Verwalten Sie Ihre Termine im Kundenportal.
                </p>
                <a 
                  href="https://app.healthadvisor.ch/client/NmTvLZRUpcP/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary w-full py-2 text-sm justify-center"
                >
                  Zum Login
                </a>
              </div>

              <div className="glass-card p-6 bg-white border-primary/5">
                <h3 className="font-bold text-text mb-4 flex items-center gap-2 text-emerald-600">
                  <ShieldCheck className="w-5 h-5" />
                  Sicherheit
                </h3>
                <p className="text-xs text-text/50 leading-relaxed">
                  Ihre Daten werden nach höchsten Sicherheitsstandards verschlüsselt. Stornierungen sind bis 24h vor dem Termin kostenlos möglich.
                </p>
              </div>

              <div className="glass-card p-6 bg-primary/5 border-primary/10">
                <h3 className="font-bold text-text mb-4 text-sm uppercase tracking-widest opacity-40">Ablauf</h3>
                <ul className="space-y-4">
                  {[
                    "Behandlung wählen",
                    "Zeitpunkt aussuchen",
                    "Bestätigung erhalten"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm font-medium text-text/70">
                      <div className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-[10px] shrink-0">{i+1}</div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Booking Iframe */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="lg:col-span-3 relative"
            >
              <div className="glass-card bg-white overflow-hidden shadow-2xl border-primary/10 min-h-[800px] flex flex-col">
                {loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="text-primary font-bold animate-pulse">Lade Buchungssystem...</p>
                  </div>
                )}
                
                <iframe
                  id="HA-online-booking-iframe-reference"
                  src="https://app.healthadvisor.ch/bookings/8131b0c46e994d0a83aef769b495551e6e4c011a?loaderColor=%230891B2"
                  className="w-full flex-grow border-none"
                  style={{ minHeight: '800px' }}
                  onLoad={() => setLoading(false)}
                  title="HealthAdvisor Booking System"
                ></iframe>
              </div>
              
              <div className="mt-4 flex justify-center lg:hidden">
                <a 
                  href="https://app.healthadvisor.ch/bookings/8131b0c46e994d0a83aef769b495551e6e4c011a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary font-bold text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  In neuem Fenster öffnen
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center py-8 opacity-40">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Partner von HealthAdvisor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terminbuchung;
