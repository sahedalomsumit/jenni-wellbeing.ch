import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Massagen & Therapien', path: '/massagen-und-therapien' },
    { name: 'Praxis', path: '/praxis' },
    { name: 'Gut zu wissen', path: '/gut-zu-wissen' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`glass-card flex items-center justify-between px-6 py-3 transition-all duration-300 ${scrolled ? 'bg-white/95' : 'bg-white/80'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-soft group-hover:rotate-6 transition-transform">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-text leading-tight">JENNI</span>
              <span className="text-sm font-body text-primary tracking-widest font-semibold leading-none">WELLBEING</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/online-terminbuchung" className="btn-primary py-2 px-5 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Termin buchen</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-text hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 px-4"
          >
            <div className="glass-card bg-white p-6 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg font-medium py-2 px-4 rounded-xl transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-text hover:bg-background'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-text/10" />
              <Link 
                to="/online-terminbuchung" 
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>Termin buchen</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
