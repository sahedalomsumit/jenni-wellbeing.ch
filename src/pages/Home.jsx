import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Activity, Sparkles, Heart, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: "Medizinische Massagen",
      desc: "Gezielte Therapien zur Schmerzlinderung und Rehabilitation.",
      icon: <Activity className="w-8 h-8" />,
      color: "bg-blue-500",
      link: "/massagen-und-therapien#medizinische"
    },
    {
      title: "Ayurveda Behandlungen",
      desc: "Traditionelle indische Heilkunst für Körper und Geist.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-amber-500",
      link: "/massagen-und-therapien#ayurveda"
    },
    {
      title: "Naturheilkunde",
      desc: "Ganzheitliche Ansätze zur Stärkung der Selbstheilungskräfte.",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-emerald-500",
      link: "/massagen-und-therapien#naturheilkunde"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft text-primary font-bold text-sm tracking-wide border border-primary/5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                PRAXIS IN BERN
              </div>
              
              <h1 className="text-5xl md:text-7xl font-heading font-black text-text leading-tight">
                Ganzheitliche <span className="text-primary">Gesundheit</span> & Wohlbefinden.
              </h1>
              
              <p className="text-xl text-text/70 leading-relaxed max-w-lg">
                Geniessen Sie zentral in Bern gelegen professionelle medizinische Massagen, Ayurveda und Naturheilkunde. Wir begleiten Sie nachhaltig auf Ihrem Weg zu mehr Vitalität.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Link to="/online-terminbuchung" className="btn-cta">
                  <Calendar className="w-6 h-6" />
                  <span>Jetzt Termin buchen</span>
                </Link>
                <Link to="/massagen-und-therapien" className="btn-secondary group">
                  <span>Unser Angebot</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-primary/10 mt-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-text">15+</span>
                  <span className="text-sm text-text/50 font-medium">Jahre Erfahrung</span>
                </div>
                <div className="h-10 w-px bg-primary/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-text">100%</span>
                  <span className="text-sm text-text/50 font-medium">Zertifiziert</span>
                </div>
                <div className="h-10 w-px bg-primary/10" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-text">5/5</span>
                  <span className="text-sm text-text/50 font-medium">Bewertungen</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/img/hero.png" 
                  alt="Jenni Wellbeing Praxis Bern" 
                  className="w-full h-full object-cover aspect-[4/3] scale-105"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white glass-card flex flex-col items-center justify-center p-6 text-center animate-bounce duration-[3000ms] z-20">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-text/40 uppercase tracking-tighter mb-1">Qualifiziertes</span>
                <span className="text-lg font-bold text-text leading-tight">Fach-Team</span>
              </div>
              
              <div className="absolute -bottom-12 -left-12 w-64 h-32 bg-white glass-card flex items-center gap-4 p-6 shadow-soft z-20">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text/40 uppercase tracking-widest">Zentral in</span>
                  <span className="text-xl font-bold text-text">Bern gelegen</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-text mb-6">Unsere Leistungen</h2>
            <p className="text-lg text-text/60 max-w-2xl mx-auto">
              In unserer zentral gelegenen Praxis in Bern bieten wir ein breites Spektrum an Therapien 
              für Ihre Gesundheit und Entspannung. Ganzheitlich vereint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-card p-10 flex flex-col items-center text-center transition-all duration-300 group hover:border-primary/30"
              >
                <div className={`w-20 h-20 ${s.color} rounded-x-2xl rounded-tr-2xl rounded-bl-[2.5rem] flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-6 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{s.title}</h3>
                <p className="text-text/60 mb-8 leading-relaxed">
                  {s.desc}
                </p>
                <Link to={s.link} className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Mehr erfahren
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center bg-white/60">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-text mb-8">
                Massagen ganzheitlich erleben
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-text/70 leading-relaxed">
                  Unsere zertifizierten Mitarbeiter gehen auf Ihre individuellen Bedürfnisse ein. 
                  Gemeinsam erstellen wir ein Behandlungskonzept, das nachhaltig wirkt.
                </p>
                <p className="text-lg text-text/70 leading-relaxed">
                  Wir vereinen modernstes Wissen der Schulmedizin mit jahrtausendealter Erfahrung 
                  aus Ayurveda und Naturheilkunde.
                </p>
                <div className="pt-4">
                  <Link to="/praxis" className="btn-primary inline-flex">
                    Über unsere Praxis erfahren
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="/img/praxis.png" alt="Praxis 1" className="rounded-2xl shadow-lg" />
                <img src="/img/ayurveda.png" alt="Praxis 2" className="rounded-2xl shadow-lg mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] px-8 py-20 md:p-20 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(8,145,178,0.3)]">
            {/* Background circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              <h2 className="text-4xl md:text-6xl font-heading font-black">
                Bereit für etwas <br className="hidden md:block" /> mehr <span className="text-secondary">Wellbeing?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl font-medium">
                Buchen Sie jetzt Ihren nächsten Termin ganz einfach online und finden Sie 
                zurück zu Ihrer inneren Balance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Link to="/online-terminbuchung" className="bg-white text-primary px-10 py-5 rounded-full font-black text-xl hover:bg-secondary hover:text-white transition-all duration-300 shadow-2xl active:scale-95 flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span>Jetzt Termin buchen</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
