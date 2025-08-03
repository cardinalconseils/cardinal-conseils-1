import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Heart, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesSectors: React.FC = () => {
  const { language } = useLanguage();

  const sectors = [
    {
      icon: Factory,
      title: language === 'fr' ? 'Manufacturier' : 'Manufacturing',
      desc: language === 'fr' 
        ? "Maintenance prédictive, contrôle qualité automatisé, optimisation de la chaîne d'approvisionnement."
        : "Predictive maintenance, automated quality control, supply chain optimization.",
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg'
    },
    {
      icon: Heart,
      title: language === 'fr' ? 'Santé' : 'Healthcare',
      desc: language === 'fr'
        ? "Triage intelligent, gestion des ressources, analyse prédictive, conformité RAMQ."
        : "Intelligent triage, resource management, predictive analytics, RAMQ compliance.",
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg'
    },
    {
      icon: ShoppingCart,
      title: language === 'fr' ? 'Commerce' : 'Retail',
      desc: language === 'fr'
        ? "Personnalisation bilingue, gestion des stocks, service client 24/7, analyse du sentiment."
        : "Bilingual personalization, inventory management, 24/7 customer service, sentiment analysis.",
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
              ? 'Expertise Sectorielle'
              : 'Sector Expertise'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 mb-6">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <sector.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{sector.title}</h3>
                </div>
              </div>
              <p className="text-neutral-700">{sector.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectors;
