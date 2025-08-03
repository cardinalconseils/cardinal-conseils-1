import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ProblemSolution from '../components/services/ProblemSolution';
import ServicesSectors from '../components/services/ServicesSectors';
import ServicesMethodology from '../components/services/ServicesMethodology';
import ServicesCTA from '../components/services/ServicesCTA';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <ProblemSolution />
      <ServicesSectors />
      <ServicesMethodology />
      <ServicesCTA />
    </div>
  );
};

export default Services;
