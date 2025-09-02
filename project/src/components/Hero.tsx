import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Building Tomorrow's{' '}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Solutions
              </span>
              , One Line of Code at a Time.
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Hello, I'm a 28-year-old aspiring Full Stack Developer, 
              self-taught in the dynamic world of programming. My journey 
              is fueled by a relentless passion for crafting elegant and 
              efficient web applications. I thrive on solving complex 
              problems and transforming innovative ideas into tangible, 
              high-quality code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{'</>'}</span>
                  </div>
                  <p className="text-sm text-gray-400">Code • Design • Deploy</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-400/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;