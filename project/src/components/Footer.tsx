import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-gray-400 mb-6">
              Let's build something amazing together. I'm always excited to discuss new projects and opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:contact@example.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Home
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Portfolio. Made with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;