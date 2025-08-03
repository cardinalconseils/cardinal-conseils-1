import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSolution: React.FC = () => {
  const { language } = useLanguage();

  const comparisons = [
    {
      traditional: language === 'fr' 
        ? "Processus rigides prédéfinis"
        : "Rigid predefined processes",
      adaptive: language === 'fr'
        ? "Accompagnement flexible basé sur votre intuition"
        : "Flexible support based on your intuition"
    },
    {
      traditional: language === 'fr'
        ? "Documentation bureaucratique"
        : "Bureaucratic documentation",
      adaptive: language === 'fr'
        ? "Capture organique des connaissances"
        : "Organic knowledge capture"
    },
    {
      traditional: language === 'fr'
        ? "Timelines fixes contraignantes"
        : "Fixed constraining timelines",
      adaptive: language === 'fr'
        ? "Évolution naturelle à votre rythme"
        : "Natural evolution at your pace"
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            {language === 'fr' 
              ? "Une Approche Différente"
              : "A Different Approach"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="h-6 w-6 text-neutral-600" />
                <h3 className="text-xl font-semibold text-neutral-900">
                  {language === 'fr' ? 'Approche Traditionnelle' : 'Traditional Approach'}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-neutral-400 mt-1">×</span>
                    <span className="text-neutral-700">{item.traditional}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adaptive */}
            <div className="bg-cardinal-50 rounded-2xl p-8 border border-cardinal-100">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-6 w-6 text-cardinal-600" />
                <h3 className="text-xl font-semibold text-neutral-900">
                  {language === 'fr' ? 'Notre Approche' : 'Our Approach'}
                </h3>
              </div>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-cardinal-600 mt-1">✓</span>
                    <span className="text-neutral-700">{item.adaptive}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
