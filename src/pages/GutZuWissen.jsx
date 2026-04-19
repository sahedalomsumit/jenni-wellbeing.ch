import React from 'react';
import { HelpCircle, ShieldCheck, Star, Clock, HeartHandshake } from 'lucide-react';

const InfoSection = ({ icon, title, children }) => (
  <div className="glass-card p-10 bg-white">
    <div className="flex items-center gap-6 mb-8">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-text">{title}</h2>
    </div>
    <div className="space-y-4 text-text/70 leading-relaxed">
      {children}
    </div>
  </div>
);

const GutZuWissen = () => {
  return (
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-black text-text mb-8">Gut zu <span className="text-primary">wissen</span></h1>
          <p className="text-xl text-text/60 leading-relaxed font-medium">
            Hier finden Sie wichtige Informationen zu Ihrer Behandlung, Kostenübernahme durch Versicherungen und was Sie bei Ihrem ersten Besuch erwartet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <InfoSection icon={<ShieldCheck className="w-8 h-8" />} title="Kostenübernahme">
            <p>
              Unsere Therapeuten sind bei den meisten Krankenkassen (EMR, ASCA, Visana, EGK) anerkannt. 
              Behandlungen im Rahmen der Zusatzversicherung für Komplementärmedizin werden oft anteilig übernommen.
            </p>
            <p className="font-bold text-primary">
              Wir empfehlen Ihnen, die genaue Kostenübernahme vorab bei Ihrer Versicherung abzuklären.
            </p>
          </InfoSection>

          <InfoSection icon={<Clock className="w-8 h-8" />} title="Was Sie erwartet">
            <p>
              Planen Sie für Ihren ersten Termin etwas Zeit für ein kurzes Anamnesegespräch ein. 
              Dies hilft uns, die Behandlung optimal auf Ihre Bedürfnisse abzustimmen.
            </p>
            <p>
              Bitte bringen Sie bequeme Kleidung mit. Alle benötigten Tücher und Öle stellen wir Ihnen zur Verfügung.
            </p>
          </InfoSection>
          
          <InfoSection icon={<HeartHandshake className="w-8 h-8" />} title="Terminabsagen">
            <p>
              Sollten Sie einen Termin nicht wahrnehmen können, bitten wir Sie, uns dies mindestens 24 Stunden 
              vorher mitzuteilen.
            </p>
            <p>
              Nicht rechtzeitig abgesagte Termine müssen wir leider in Rechnung stellen.
            </p>
          </InfoSection>

          <InfoSection icon={<HelpCircle className="w-8 h-8" />} title="Öffnungszeiten">
            <p>
              Wir bieten Termine von Montag bis Freitag zwischen 08:00 und 20:00 Uhr an. 
              Samstags sind Behandlungen nach individueller Vereinbarung möglich.
            </p>
          </InfoSection>
        </div>

        {/* Reviews Section Placeholder */}
        <section className="py-20 bg-primary/5 rounded-[3rem] px-8 text-center border border-primary/10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-1 text-amber-500">
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl font-heading font-black text-text">Das sagen unsere Kunden</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                "Wunderbare Atmosphäre und sehr kompetente Beratung. Die Schmerzen waren nach nur wenigen Sitzungen deutlich besser.",
                "Einfühlsam und fachlich top. Die Ayurveda-Behandlung war ein Traum – wie ein Kurzurlaub mitten in Bern.",
                "Sehr professionelles Team. Man fühlt sich sofort gut aufgehoben und verstanden. Absolut empfehlenswert!"
              ].map((text, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-soft italic text-text/70 leading-relaxed text-sm">
                  "{text}"
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default GutZuWissen;
