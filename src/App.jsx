import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MassagenTherapien from './pages/MassagenTherapien';
import Praxis from './pages/Praxis';
import GutZuWissen from './pages/GutZuWissen';
import Kontakt from './pages/Kontakt';
import Terminbuchung from './pages/Terminbuchung';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/massagen-und-therapien" element={<MassagenTherapien />} />
            <Route path="/praxis" element={<Praxis />} />
            <Route path="/gut-zu-wissen" element={<GutZuWissen />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/online-terminbuchung" element={<Terminbuchung />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
