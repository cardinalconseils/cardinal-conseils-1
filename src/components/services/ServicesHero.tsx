import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: language === 'fr' 
      ? "Ce Que Nous Faisons (et Faisons Bien)"
      : "What We Do (and Do Well)",
    subtitle: language === 'fr'
      ? "Nous sommes une équipe compacte avec des compétences approfondies en automatisation, IA et réflexion systémique."
      : "We're a lean team with deep skills in automation, AI, and systems thinking.",
    description: language === 'fr'
      ? "Notre rôle ? Nous assurer que votre entreprise fonctionne plus facilement—avec moins de pièces mobiles, moins de chaos et plus de clarté. Nous ne vendons pas d'outils. Nous construisons des solutions."
      : "Our role? To make sure your business runs smoother—with fewer moving parts, less chaos, and more clarity. We don't sell tools. We build solutions.",
    cta: language === 'fr' 
      ? "📅 Réserver un Appel Découverte"
      : "📅 Book a Discovery Call",
    ctaSubtext: language === 'fr'
      ? "Discutons de vos processus et priorités"
      : "Let's discuss your processes and priorities"
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
