import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: language === 'fr' 
      ? "Automatisation IA pour PME Québécoises | Déploiement Rapide Sans Risque | Gestion de Projet Ultra-Structurée"
      : "AI Automation for Quebec SMEs | Risk-Free Rapid Deployment | Ultra-Structured Project Management",
    subtitle: language === 'fr'
      ? "Permettez à votre entreprise québécoise de déployer des solutions d'intelligence artificielle en quelques semaines, avec une méthode éprouvée et des coûts maîtrisés."
      : "Enable your Quebec business to deploy artificial intelligence solutions in weeks, with a proven method and controlled costs.",
    description: language === 'fr'
      ? "Vous dirigez une PME québécoise et vous savez que l'IA peut transformer vos opérations, mais vous ne savez pas par où commencer ? Cardinal Conseils orchestre l'intégration complète de l'intelligence artificielle dans votre entreprise grâce à une approche structurée, des partenariats stratégiques et une documentation automatisée qui élimine les risques."
      : "You lead a Quebec SME and know that AI can transform your operations, but don't know where to start? Cardinal Conseils orchestrates the complete integration of artificial intelligence in your business through a structured approach, strategic partnerships and automated documentation that eliminates risks.",
    cta: language === 'fr' 
      ? "Réserver un Diagnostic Flash Gratuit - 30 minutes"
      : "Book a Free Flash Diagnosis - 30 minutes",
    ctaSubtext: language === 'fr'
      ? "Découvrez en 7 jours les opportunités IA spécifiques à votre secteur"
      : "Discover AI opportunities specific to your sector in 7 days"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cardinal-50 via-white to-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 mb-8 font-medium">
            {content.subtitle}
          </p>
          <p className="text-lg text-neutral-600 mb-10 max-w-3xl mx-auto">
            {content.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              {content.cta}
            </a>
            <p className="text-sm text-neutral-600">
              {content.ctaSubtext}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
