import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesPackages from '../components/services/ServicesPackages';
import ServicesCTA from '../components/services/ServicesCTA';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={language === 'fr' ? 'Services' : 'Services'}
        description={language === 'fr' 
          ? 'Découvrez nos domaines d\'excellence : transformation marketing, IA téléphonique, agents intelligents, automatisation opérationnelle et gestion de projets d\'automatisation.'
          : 'Discover our areas of excellence: marketing transformation, AI telephony, intelligent agents, operational automation, and automation project management.'
        }
        keywords={language === 'fr'
          ? 'services automatisation, IA téléphonique, agents IA, transformation marketing, excellence opérationnelle, gestion projets IA'
          : 'automation services, AI telephony, AI agents, marketing transformation, operational excellence, AI project management'
        }
        canonical="https://cardinalconseils.com/services"
      />
      <ServicesHero />
      <ServicesPackages />
      <ServicesCTA />
    </div>
  );
};

export default Services;
