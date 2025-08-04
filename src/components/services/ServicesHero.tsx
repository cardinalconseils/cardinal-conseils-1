import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, Brain, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesHero: React.FC = () => {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Black and white hero image background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80&sat=-100')`
          }}
        />
        <div className="absolute inset-0 gradient-neutral noise opacity-20" />
      </div>
      
      <motion.div 
        className="container-custom relative z-10 pt-20"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="display-1 mb-8 text-white">
            {language === 'fr' ? (
              <>
                Excellence<br />
                <span className="gradient-text">Opérationnelle</span><br />
                <span className="text-neutral-300">Redéfinie</span>
              </>
            ) : (
              <>
                Operational<br />
                <span className="gradient-text">Excellence</span><br />
                <span className="text-neutral-300">Redefined</span>
              </>
            )}
          </h1>
          
          <p className="body-large text-neutral-200 max-w-2xl mb-12">
            {language === 'fr'
              ? "Nous transformons les fonctions critiques de votre entreprise grâce à l'automatisation intelligente et l'IA stratégique. De la vente à la finance, créons des écosystèmes technologiques qui libèrent votre potentiel organisationnel."
              : "We transform your business's critical functions through intelligent automation and strategic AI. From sales to finance, we create technological ecosystems that unlock your organizational potential."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn-primary group">
              <Calendar className="mr-2 h-5 w-5" />
              {language === 'fr' ? '✨ Explorer Vos Possibilités' : '✨ Explore Your Possibilities'}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services-packages" className="btn-secondary group bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Brain className="mr-2 h-5 w-5" />
              {language === 'fr' ? 'Découvrir nos services' : 'Discover our services'}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
