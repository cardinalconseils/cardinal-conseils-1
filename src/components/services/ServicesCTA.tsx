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
            ? 'L\'Avenir Appartient aux Organisations Visionnaires'
            : 'The Future Belongs to Visionary Organizations'}
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {language === 'fr'
            ? 'Vous avez la vision. Nous avons l\'expertise pour la concrétiser. Ensemble, créons l\'écosystème technologique qui propulsera votre organisation vers de nouveaux sommets d\'excellence.'
            : 'You have the vision. We have the expertise to make it real. Together, let\'s create the technological ecosystem that will propel your organization to new heights of excellence.'}
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-semibold mb-6">
            {language === 'fr' ? 'Votre Parcours de Transformation :' : 'Your Transformation Journey:'}
          </h3>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <span className="text-cardinal-200 text-2xl">🔍</span>
              <div>
                <div className="font-semibold">{language === 'fr' ? 'Diagnostic Visionnaire' : 'Visionary Diagnosis'}</div>
                <span className="opacity-90">{language === 'fr' ? 'Révélation du potentiel caché de votre organisation' : 'Revealing your organization\'s hidden potential'}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-cardinal-200 text-2xl">🎯</span>
              <div>
                <div className="font-semibold">{language === 'fr' ? 'Stratégie Sur Mesure' : 'Tailored Strategy'}</div>
                <span className="opacity-90">{language === 'fr' ? 'Conception d\'un écosystème technologique unique' : 'Designing a unique technological ecosystem'}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-cardinal-200 text-2xl">🚀</span>
              <div>
                <div className="font-semibold">{language === 'fr' ? 'Implémentation d\'Excellence' : 'Excellence Implementation'}</div>
                <span className="opacity-90">{language === 'fr' ? 'Transformation concrète avec résultats mesurables' : 'Concrete transformation with measurable results'}</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-cardinal-200 text-2xl">💎</span>
              <div>
                <div className="font-semibold">{language === 'fr' ? 'Autonomie Maîtrisée' : 'Mastered Autonomy'}</div>
                <span className="opacity-90">{language === 'fr' ? 'Votre équipe devient experte de ses nouveaux pouvoirs' : 'Your team becomes expert in their new powers'}</span>
              </div>
            </div>
          </div>
        </div>
        <a href="/contact" className="inline-flex items-center gap-2 bg-white text-cardinal-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
          {language === 'fr' ? 'Commencer Votre Transformation' : 'Begin Your Transformation'}
          <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default ServicesCTA;
