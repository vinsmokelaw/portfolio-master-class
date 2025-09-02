import React, { useState, useEffect } from 'react';
import { Star, Menu, X, Download, Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Projects />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;