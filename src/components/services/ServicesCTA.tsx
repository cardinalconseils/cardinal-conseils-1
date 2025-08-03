import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesCTA: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-cardinal-600 to-cardinal-700 text-white">
      <motion.div
        className="container-custom text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {language === 'fr' 
            ? 'Prêt à Transformer Votre Entreprise avec l\'IA ?'
            : 'Ready to Transform Your Business with AI?'}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {language === 'fr'
            ? 'Le moment est venu de passer de la réflexion à l\'action. Chaque jour de retard permet à vos concurrents de creuser l\'écart technologique.'
            : 'The time has come to move from reflection to action. Every day of delay allows your competitors to widen the technology gap.'}
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold mb-6">
            {language === 'fr' ? 'Ce qui vous attend dans les 30 prochains jours :' : 'What awaits you in the next 30 days:'}
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="text-cardinal-200">1.</span>
              <span>{language === 'fr' ? 'Semaine 1 : Diagnostic Flash personnalisé de votre entreprise' : 'Week 1: Personalized Flash Diagnosis of your business'}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cardinal-200">2.</span>
              <span>{language === 'fr' ? 'Semaine 2-3 : Analyse approfondie et identification des opportunités prioritaires' : 'Week 2-3: In-depth analysis and identification of priority opportunities'}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cardinal-200">3.</span>
              <span>{language === 'fr' ? 'Semaine 4 : Présentation des résultats et roadmap d\'action' : 'Week 4: Presentation of results and action roadmap'}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cardinal-200">✨</span>
              <span>{language === 'fr' ? 'Bonus : Estimation ROI détaillée et plan de financement' : 'Bonus: Detailed ROI estimate and financing plan'}</span>
            </div>
          </div>
        </div>
        <a href="/contact" className="inline-flex items-center gap-2 bg-white text-cardinal-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
          {language === 'fr' ? 'Réserver votre consultation gratuite' : 'Book your free consultation'}
          <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
