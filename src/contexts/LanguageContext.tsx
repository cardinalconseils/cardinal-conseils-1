import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Automatisation et IA pour entreprises québécoises',
    'hero.subtitle': 'Transformez vos processus d\'affaires avec des solutions d\'automatisation intelligentes et l\'intelligence artificielle de pointe.',
    'hero.cta': 'Automatiser maintenant',
    'hero.secondary': 'Nos solutions',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    
    // Services
    'services.title': 'Nos solutions d\'automatisation',
    'services.subtitle': 'Des outils puissants pour transformer votre entreprise avec l\'automatisation et l\'IA',
    
    // About
    'about.title': 'Agence d\'automatisation et d\'IA',
    'about.subtitle': 'Nous transformons les opérations manuelles en systèmes automatisés intelligents',
    
    // Contact
    'contact.title': 'Automatisez votre entreprise',
    'contact.subtitle': 'Discutons de vos besoins en automatisation et IA',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Courriel',
    'contact.form.company': 'Entreprise',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer',
    'contact.form.submitting': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès!',
    'contact.form.error': 'Une erreur est survenue. Veuillez réessayer.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Automation and AI for Quebec businesses',
    'hero.subtitle': 'Transform your business processes with intelligent automation solutions and cutting-edge artificial intelligence.',
    'hero.cta': 'Automate now',
    'hero.secondary': 'Our solutions',
    
    // Footer
    'footer.rights': 'All rights reserved',
    
    // Services
    'services.title': 'Our automation solutions',
    'services.subtitle': 'Powerful tools to transform your business with automation and AI',
    
    // About
    'about.title': 'Automation and AI Agency',
    'about.subtitle': 'We transform manual operations into intelligent automated systems',
    
    // Contact
    'contact.title': 'Automate your business',
    'contact.subtitle': 'Let\'s discuss your automation and AI needs',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'An error occurred. Please try again.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
