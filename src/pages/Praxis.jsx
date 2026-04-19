import React from 'react';
import { motion } from 'framer-motion';
import { Quote, BookOpen, Users, Camera, Star } from 'lucide-react';

const TeamMember = ({ name, role, description, image }) => (
  <div className="glass-card group overflow-hidden">
    <div className="aspect-[3/4] overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold text-text mb-1">{name}</h3>
      <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{role}</p>
      <p className="text-text/60 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Praxis = () => {
  const team = [
    {
      name: "Gabriela Jenni",
      role: "Praxisinhaberin & Therapeutin",
      description: "Spezialisiert auf Ayurveda und medizinische Massagen. Langjährige Erfahrung in ganzheitlichen Heilmethoden.",
      image: "/img/therapist.png"
    },
    {
      name: "Isabelle Graber",
      role: "Medizinische Masseurin",
      description: "Expertin für klassische Massage, Lymphdrainage und Sportmassage.",
      image: "/img/therapist2.png"
    },
    {
      name: "Sabrina Hostettler",
      role: "Therapeutin",
      description: "Fokus auf Naturheilkunde und entspannende Wellness-Behandlungen.",
      image: "/img/therapist3.png"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="flex items-center gap-4 text-primary font-bold tracking-widest text-sm uppercase mb-6">
              <div className="w-8 h-1 bg-primary"></div>
              UNSERE PHILOSOPHIE
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-black text-text mb-8">
              Tradition & <span className="text-primary">Wissen</span> vereint.
            </h1>
            <div className="space-y-6 text-lg text-text/70 leading-relaxed">
              <p>
                Gegründet wurde Jenni Wellbeing im Jahr 2005 von der Ayurveda Therapeutin Gabriela Jenni. Frau Jenni suchte nach einer ganzheitlichen Methode, Beschwerden und Schmerzen langfristig zu lindern.
              </p>
              <p>
                Dies führte sie von der Pflege, über die Massage bis hin zur traditionellen indischen Heilkunst Ayurveda. Wir greifen somit auf ein breites und tiefes Wissen zurück, das wir stetig erweitern.
              </p>
              <div className="flex items-center gap-8 pt-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">20+</span>
                  <span className="text-xs font-bold text-text/40 uppercase tracking-widest mt-1">Jahre Erfahrung</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">5k+</span>
                  <span className="text-xs font-bold text-text/40 uppercase tracking-widest mt-1">Behandlungen</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-soft-inner border-8 border-white">
              <img src="/img/praxis.png" alt="Praxis Impression" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 max-w-xs bg-white text-primary">
              <Quote className="w-10 h-10 mb-4 opacity-20" />
              <p className="font-heading font-bold italic leading-relaxed">
                "Der Rhythmus ist es, der das Leben trägt."
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-text mb-6">Unser Expertenteam</h2>
            <p className="text-lg text-text/50 max-w-2xl mx-auto font-medium">
              Ihre Gesundheit in den besten Händen. Lernen Sie die Menschen hinter JENNI WELLBEING kennen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </section>

        {/* Impressionen Gallery */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-text">Impressionen</h2>
              <p className="text-text/50 font-medium mt-2">Einblick in unsere Wohlfühloase</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src="/img/gallery/impression1.png" alt="Gallery 1" className="rounded-2xl shadow-sm hover:scale-105 transition-transform duration-500" />
            <img src="/img/gallery/impression2.png" alt="Gallery 2" className="rounded-2xl shadow-sm hover:scale-105 transition-transform duration-500" />
            <img src="/img/gallery/impression3.png" alt="Gallery 3" className="rounded-2xl shadow-sm hover:scale-105 transition-transform duration-500" />
            <img src="/img/gallery/impression4.png" alt="Gallery 4" className="rounded-2xl shadow-sm hover:scale-105 transition-transform duration-500" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Praxis;
