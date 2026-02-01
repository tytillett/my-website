import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Ty<span className="text-blue-500">Tillett</span>
            </span>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <a 
              href={`https://${CONTACT_INFO.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all ${
                scrolled 
                  ? 'text-slate-500 hover:bg-blue-50 hover:text-[#0077b5]' 
                  : 'text-white/80 hover:bg-white/20 hover:text-white'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className={`p-2 rounded-full transition-all ${
                scrolled 
                  ? 'text-slate-500 hover:bg-red-50 hover:text-red-500' 
                  : 'text-white/80 hover:bg-white/20 hover:text-white'
              }`}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;