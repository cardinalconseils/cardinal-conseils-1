import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Handshake, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesMethodology: React.FC = () => {
  const { language } = useLanguage();

  const phases = [
    {
      icon: Search,
      title: language === 'fr' ? 'Découverte' : 'Discovery',
      desc: language === 'fr'
        ? 'Comprendre votre vision et identifier les opportunités IA adaptées.'
        : 'Understand your vision and identify suitable AI opportunities.'
    },
    {
      icon: Map,
      title: language === 'fr' ? 'Planification' : 'Planning',
      desc: language === 'fr'
        ? 'Transformer vos intuitions en plan d\'action flexible.'
        : 'Transform your intuitions into a flexible action plan.'
    },
    {
      icon: Handshake,
      title: language === 'fr' ? 'Partenariat' : 'Partnership',
      desc: language === 'fr'
        ? 'Sélectionner les alliés technologiques alignés avec votre culture.'
        : 'Select technology allies aligned with your culture.'
    },
    {
      icon: Zap,
      title: language === 'fr' ? 'Réalisation' : 'Implementation',
      desc: language === 'fr'
        ? 'Avancer par itérations courtes avec l\'humain au centre.'
        : 'Progress through short iterations with humans at the center.'
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Évolution' : 'Evolution',
      desc: language === 'fr'
        ? 'Grandir avec votre IA et développer l\'autonomie interne.'
        : 'Grow with your AI and develop internal autonomy.'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {language === 'fr' 
              ? 'Approche Collaborative en 5 Phases'
              : '5-Phase Collaborative Approach'}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cardinal-200 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 relative z-10">
                  <div className="w-16 h-16 bg-cardinal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="h-8 w-8 text-cardinal-600" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-cardinal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{phase.title}</h3>
                  <p className="text-sm text-neutral-600">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMethodology;
