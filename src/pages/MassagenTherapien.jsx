import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Heart, Baby, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ title, price, description, items }) => (
  <div className="glass-card p-8 bg-white border-primary/5 hover:border-primary/20 transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-xl font-bold text-text">{title}</h3>
      {price && <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-black">{price}</span>}
    </div>
    <p className="text-text/70 mb-6 leading-relaxed">{description}</p>
    {items && (
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text/60">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const MassagenTherapien = () => {
  const sections = [
    {
      id: "medizinische",
      title: "Medizinische Massagen",
      icon: <Activity className="w-10 h-10" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      description: "Mit unserem Angebot an medizinischen Massagen und Therapien können wir langanhaltende Beschwerden ganzheitlich und effektiv behandeln.",
      services: [
        { title: "Massage nach Wahl", price: "ab CHF 130.-", description: "Individuell auf Ihre Bedürfnisse abgestimmt. Löst Verspannungen und lindert Schmerzen.", items: ["55 Min. CHF 130.-", "85 Min. CHF 190.-", "110 Min. CHF 250.-"] },
        { title: "Rücken-/Nackenmassage", price: "ab CHF 80.-", description: "Löst gezielt Verspannungen im Oberkörper.", items: ["30 Min. CHF 80.-", "55 Min. CHF 130.-"] },
        { title: "Klassische Massage", price: "ab CHF 80.-", description: "Regeneriert und vitalisiert Ihren ganzen Körper.", items: ["30/55/85/110 Min. buchbar"] },
        { title: "Dorn-Breuss Therapie", price: "ab CHF 130.-", description: "Sanfte Wirbel- und Gelenktherapie.", items: ["55 Min. CHF 130.-", "85 Min. CHF 190.-"] }
      ]
    },
    {
      id: "naturheilkunde",
      title: "Naturheilkunde",
      icon: <Heart className="w-10 h-10" />,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      description: "Die Naturheilkunde unterstützt den Menschen in der Erhaltung seiner Gesundheit und der Linderung chronischer sowie akuter Beschwerden.",
      services: [
        { title: "Hot Stone Massage", price: "ab CHF 130.-", description: "Mit warmen Lavasteinen und Kräuteröl." },
        { title: "Kräuterstempel Massage", price: "ab CHF 130.-", description: "Anregung von Stoffwechsel und Lymphfluss." },
        { title: "Klangschalen Massage", price: "CHF 130.-", description: "Schwingungen lösen Blockaden und entspannen tief." },
        { title: "Body Detox Fussbad", price: "CHF 130.-", description: "Sanfte Entgiftung und Revitalisierung.", items: ["55 Min. CHF 130.-", "Kombiniert mit Massage 85/110 Min."] }
      ]
    },
    {
      id: "ayurveda",
      title: "Ayurveda Behandlungen",
      icon: <Sparkles className="w-10 h-10" />,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      description: "Die traditionelle indische Heilkunst strebt nach einer Einheit aus Gesundheit, Geist und Emotionen.",
      services: [
        { title: "Abhyanga Ganzkörper", price: "ab CHF 130.-", description: "Ganzkörperbehandlung mit viel warmem Öl." },
        { title: "Shirodhara Stirnguss", price: "CHF 240.-", description: "Kontinuierlicher Ölstrahl für Tiefenentspannung.", items: ["85 Min. CHF 240.-"] },
        { title: "Königsbehandlung", price: "CHF 290.-", description: "Massage & Stirnguss Kombination.", items: ["110 Min. CHF 290.-"] },
        { title: "Udvartana Peeling", price: "CHF 130.-", description: "Massage mit Kichererbsenmehl und Gewürzen." }
      ]
    },
    {
      id: "babies",
      title: "Mutter & Kind",
      icon: <Baby className="w-10 h-10" />,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      description: "Entspannung pur für Mutter und Kind. Abgestimmt auf die besonderen körperlichen Bedürfnisse bei Schwangerschaft und Kindheit.",
      services: [
        { title: "Schwangerschaftsmassage", price: "ab CHF 130.-", description: "Unterstützung zur Geburtsvorbereitung." },
        { title: "Baby Massage", price: "CHF 130.-", description: "Stärkt die Lebenskraft und lindert Koliken." },
        { title: "Kinder Massage", price: "CHF 130.-", description: "Harmonisiert das Energiesystem Ihres Kindes." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-black text-text mb-8">Massagen & <span className="text-primary">Therapien</span></h1>
          <p className="text-xl text-text/60 leading-relaxed font-medium">
            Von der klassischen medizinischen Massage über verschiedene Ayurveda Massagen bis hin zur Naturheilkunde bieten wir Ihnen ein fundiertes Spektrum an Behandlungen.
          </p>
        </div>

        <div className="space-y-32">
          {sections.map((section, idx) => (
            <div key={section.id} id={section.id} className="scroll-mt-40">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                <div className={`p-5 ${section.bgColor} ${section.color} rounded-2xl shadow-soft`}>
                  {section.icon}
                </div>
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-text mb-4">{section.title}</h2>
                  <p className="text-lg text-text/50 font-medium leading-relaxed">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service, sIdx) => (
                  <ServiceCard key={sIdx} {...service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MassagenTherapien;
