import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  // Update language based on URL
  useEffect(() => {
    if (location.pathname.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('fr');
    }
  }, [location.pathname, setLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLocalizedPath = (path: string, targetLang: 'fr' | 'en') => {
    // Remove language prefix if exists
    let cleanPath = path.replace(/^\/en/, '');
    
    // Handle special case for about page
    if (cleanPath === '/a-propos') cleanPath = '/about';
    if (cleanPath === '/about' && targetLang === 'fr') return '/a-propos';
    
    // Add language prefix for English
    if (targetLang === 'en' && cleanPath !== '/') {
      return `/en${cleanPath}`;
    }
    
    return cleanPath || '/';
  };

  const getCurrentPath = () => {
    let path = location.pathname;
    // Remove language prefix for comparison
    if (path.startsWith('/en')) {
      path = path.substring(3) || '/';
    }
    // Normalize about page
    if (path === '/a-propos') path = '/about';
    return path;
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const handleLanguageSwitch = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    const currentPath = location.pathname;
    const newPath = getLocalizedPath(currentPath, newLang);
    setLanguage(newLang);
    navigate(newPath);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={language === 'en' ? '/en' : '/'} className="relative z-10">
              <img 
                src={logoImage} 
                alt="Cardinal Conseils" 
                className="h-12 w-auto"
                onError={(e) => {
                  console.error('Assets logo failed, trying public fallback...');
                  e.currentTarget.src = '/cardinal-logo.png';
                  e.currentTarget.onError = () => {
                    console.error('All logos failed');
                    e.currentTarget.style.border = '2px solid red';
                  };
                }}
                onLoad={() => console.log('Logo loaded successfully from assets!')}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => {
                const localizedPath = getLocalizedPath(item.path, language);
                const currentPath = getCurrentPath();
                const isActive = currentPath === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={localizedPath}
                    className={`relative text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-neutral-900'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cardinal-600"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* Language Switcher */}
              <button
                onClick={handleLanguageSwitch}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 p-2"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[2px] bg-neutral-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-white">
              <div className="container-custom pt-24">
                <div className="space-y-8">
                  {navItems.map((item, index) => {
                    const localizedPath = getLocalizedPath(item.path, language);
                    const currentPath = getCurrentPath();
                    const isActive = currentPath === item.path;
                    
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={localizedPath}
                          onClick={() => setIsOpen(false)}
                          className={`block text-3xl font-medium transition-colors duration-200 ${
                            isActive
                              ? 'text-neutral-900'
                              : 'text-neutral-400 hover:text-neutral-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => {
                      handleLanguageSwitch();
                      setIsOpen(false);
                    }}
                    className="text-xl font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                  >
                    {language === 'fr' ? 'English' : 'Français'}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
