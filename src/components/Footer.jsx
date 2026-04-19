import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-soft">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-text leading-tight">JENNI</span>
                <span className="text-sm font-body text-primary tracking-widest font-semibold leading-none">WELLBEING</span>
              </div>
            </Link>
            <p className="text-text/70 leading-relaxed max-w-xs">
              Professionelle medizinische Massagen, Ayurveda und Naturheilkunde im Herzen von Bern. Ganzheitliche Therapiekonzepte für Ihr Wohlbefinden.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/jenni.wellbeing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/watch?v=cTQMSEiAo4A" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-text mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/massagen-und-therapien" className="text-text/60 hover:text-primary transition-colors">Massagen & Therapien</Link></li>
              <li><Link to="/praxis" className="text-text/60 hover:text-primary transition-colors">Die Praxis</Link></li>
              <li><Link to="/gut-zu-wissen" className="text-text/60 hover:text-primary transition-colors">Gut zu wissen</Link></li>
              <li><Link to="/kontakt" className="text-text/60 hover:text-primary transition-colors">Kontakt & Anfahrt</Link></li>
              <li><Link to="/online-terminbuchung" className="text-text/60 hover:text-primary transition-colors">Terminbuchung</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-text mb-6">Öffnungszeiten</h4>
            <ul className="flex flex-col gap-4 text-text/60">
              <li className="flex justify-between"><span>Montag - Freitag</span> <span>08:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Samstag</span> <span>Nach Vereinbarung</span></li>
              <li className="flex justify-between"><span>Sonntag</span> <span>Geschlossen</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-heading font-bold text-text mb-6">Kontakt</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><MapPin className="w-5 h-5" /></div>
                <span className="text-text/60">Waldhöheweg 30<br />3013 Bern</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-primary"><Phone className="w-5 h-5" /></div>
                <a href="tel:+41792672208" className="text-text/60 hover:text-primary transition-colors">+41 79 267 22 08</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-primary"><Mail className="w-5 h-5" /></div>
                <a href="mailto:info@jenni-wellbeing.ch" className="text-text/60 hover:text-primary transition-colors">info@jenni-wellbeing.ch</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/40 font-medium">
          <p>© {new Date().getFullYear()} JENNI WELLBEING. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
