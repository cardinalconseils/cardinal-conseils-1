import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesPackages from '../components/services/ServicesPackages';
import ServicesCTA from '../components/services/ServicesCTA';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ServicesPackages />
      <ServicesCTA />
    </div>
  );
};

export default Services;
