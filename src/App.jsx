import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Legality from './components/Legality';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col w-full text-slate-800 bg-slate-50 relative selection:bg-brand-blue/20 selection:text-brand-blue-dark">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="grow w-full">
        {/* Home / Hero Section */}
        <Hero />

        {/* About Us Section */}
        <About />

        {/* Legality Section */}
        <Legality />

        {/* Product & Services Section */}
        <Products />

        {/* Contact Us Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-brand-blue hover:bg-brand-blue-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-10 opacity-0 scale-75 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
