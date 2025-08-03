import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const getLocalizedPath = (path: string) => {
    if (language === 'en' && path !== '/') {
      // Special case for about page
      if (path === '/about') return '/en/about';
      return `/en${path}`;
    }
    // Special case for about page in French
    if (path === '/about' && language === 'fr') return '/a-propos';
    return path;
  };

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/2025_Cardinal_Conseils_LOGO_BLK_200x48.png" 
              alt="Cardinal Conseils" 
              className="h-12 w-auto mb-6"
            />
            <p className="body text-neutral-600 max-w-md">
              {language === 'fr' 
                ? "Experts en automatisation des processus d'affaires et implémentation d'IA. Nous transformons vos opérations manuelles en systèmes automatisés intelligents."
                : "Business process automation and AI implementation experts. We transform your manual operations into intelligent automated systems."
              }
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/services', label: t('nav.services') },
                { path: '/about', label: t('nav.about') },
                { path: '/contact', label: t('nav.contact') }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={getLocalizedPath(item.path)} 
                    className="text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-neutral-600">
              <li>contact@cardinalconseils.com</li>
              <li>Montréal, Québec</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="caption text-center">
            © {currentYear} Cardinal Conseils. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
