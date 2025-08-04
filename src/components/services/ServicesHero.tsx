import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesHero: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    title: language === 'fr' 
      ? "Excellence Opérationnelle Redéfinie"
      : "Operational Excellence Redefined",
    subtitle: language === 'fr'
      ? "Nous transformons les fonctions critiques de votre entreprise grâce à l'automatisation intelligente et l'IA stratégique."
      : "We transform your business's critical functions through intelligent automation and strategic AI.",
    description: language === 'fr'
      ? "De la vente à la finance, du marketing au développement produit, nous créons des écosystèmes technologiques qui libèrent votre potentiel organisationnel. Chaque solution que nous concevons amplifie l'impact humain et ouvre de nouveaux horizons de croissance."
      : "From sales to finance, marketing to product development, we create technological ecosystems that unlock your organizational potential. Every solution we design amplifies human impact and opens new growth horizons.",
    cta: language === 'fr' 
      ? "✨ Explorer Vos Possibilités"
      : "✨ Explore Your Possibilities",
    ctaSubtext: language === 'fr'
      ? "Découvrons ensemble votre potentiel de transformation"
      : "Let's discover your transformation potential together"
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
