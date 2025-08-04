import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin,
  Cog,
  Bot,
  Settings,
  BarChart3,
  Users,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesPackages: React.FC = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Users,
      emoji: '📈',
      number: '1',
      name: language === 'fr' ? 'Transformation Marketing & Ventes' : 'Marketing & Sales Transformation',
      description: language === 'fr'
        ? "Révolutionnez votre moteur de croissance avec des systèmes d'automatisation qui transforment prospects en clients fidèles. De la génération de leads intelligente aux processus de closing automatisés, nous créons des écosystèmes de vente qui travaillent 24/7."
        : "Revolutionize your growth engine with automation systems that transform prospects into loyal customers. From intelligent lead generation to automated closing processes, we create sales ecosystems that work 24/7.",
      businessFunctions: language === 'fr' ? [
        'Lead scoring & nurturing automatisé',
        'CRM intelligent avec IA prédictive',
        'Campagnes marketing multi-canal',
        'Téléphonie IA pour qualification'
      ] : [
        'Automated lead scoring & nurturing',
        'Intelligent CRM with predictive AI',
        'Multi-channel marketing campaigns',
        'AI telephony for qualification'
      ],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: BarChart3,
      emoji: '💰',
      number: '2',
      name: language === 'fr' ? 'Excellence Financière & Reporting' : 'Financial Excellence & Reporting',
      description: language === 'fr'
        ? "Transformez vos données financières en intelligence stratégique. Automatisation complète des processus comptables, tableaux de bord temps réel, et analyses prédictives qui révèlent les opportunités cachées de rentabilité."
        : "Transform your financial data into strategic intelligence. Complete automation of accounting processes, real-time dashboards, and predictive analytics that reveal hidden profitability opportunities.",
      businessFunctions: language === 'fr' ? [
        'Automatisation comptable & facturation',
        'Dashboards financiers temps réel',
        'Prévisions IA & modélisation',
        'Gestion automatisée des flux de trésorerie'
      ] : [
        'Accounting & billing automation',
        'Real-time financial dashboards',
        'AI forecasting & modeling',
        'Automated cash flow management'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Bot,
      emoji: '🤖',
      number: '3',
      name: language === 'fr' ? 'Agents IA & Développement Intelligent' : 'AI Agents & Intelligent Development',
      description: language === 'fr'
        ? "Déployez des agents IA sophistiqués qui révolutionnent votre service client, optimisent vos opérations et accélèrent votre développement produit. Chaque agent est conçu pour apprendre, s'adapter et évoluer avec votre organisation."
        : "Deploy sophisticated AI agents that revolutionize your customer service, optimize your operations, and accelerate your product development. Each agent is designed to learn, adapt, and evolve with your organization.",
      businessFunctions: language === 'fr' ? [
        'Agents conversationnels avancés',
        'IA de support technique automatisé',
        'Assistants de développement produit',
        'Agents de veille concurrentielle'
      ] : [
        'Advanced conversational agents',
        'Automated technical support AI',
        'Product development assistants',
        'Competitive intelligence agents'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cog,
      emoji: '⚡',
      number: '4',
      name: language === 'fr' ? 'Excellence Opérationnelle Systémique' : 'Systemic Operational Excellence',
      description: language === 'fr'
        ? "Orchestrez une transformation opérationnelle complète qui élimine les frictions, optimise les workflows et libère le potentiel créatif de vos équipes. Chaque processus devient un avantage concurrentiel."
        : "Orchestrate a complete operational transformation that eliminates friction, optimizes workflows, and unleashes your teams' creative potential. Every process becomes a competitive advantage.",
      businessFunctions: language === 'fr' ? [
        'Workflow automation intelligente',
        'Optimisation des chaînes logistiques',
        'Gestion automatisée des ressources',
        'Systèmes de qualité adaptatifs'
      ] : [
        'Intelligent workflow automation',
        'Supply chain optimization',
        'Automated resource management',
        'Adaptive quality systems'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Settings,
      emoji: '📞',
      number: '5',
      name: language === 'fr' ? 'Téléphonie IA & Communication Intelligente' : 'AI Telephony & Intelligent Communication',
      description: language === 'fr'
        ? "Révolutionnez vos communications avec des systèmes téléphoniques intelligents qui comprennent, répondent et agissent. De la qualification automatique aux réponses contextuelles, transformez chaque appel en opportunité."
        : "Revolutionize your communications with intelligent phone systems that understand, respond, and act. From automated qualification to contextual responses, transform every call into an opportunity.",
      businessFunctions: language === 'fr' ? [
        'Qualification automatique d\'appels',
        'Répondeurs IA conversationnels',
        'Routage intelligent des communications',
        'Analyse sentimentale temps réel'
      ] : [
        'Automated call qualification',
        'Conversational AI answering',
        'Intelligent communication routing',
        'Real-time sentiment analysis'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: MapPin,
      emoji: '🚀',
      number: '6',
      name: language === 'fr' ? 'Gestion de Projet d\'Automatisation' : 'Automation Project Management',
      description: language === 'fr'
        ? "Dirigez vos transformations technologiques avec une expertise stratégique complète. De la rédaction de RFP à l'implémentation, nous orchestrons chaque étape pour garantir le succès et maximiser le ROI."
        : "Lead your technological transformations with comprehensive strategic expertise. From RFP writing to implementation, we orchestrate every step to ensure success and maximize ROI.",
      businessFunctions: language === 'fr' ? [
        'Rédaction de RFP & appels d\'offres',
        'Gestion stratégique de projets IA',
        'Évaluation et sélection de vendors',
        'Change management & adoption'
      ] : [
        'RFP writing & tender management',
        'Strategic AI project management',
        'Vendor evaluation & selection',
        'Change management & adoption'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

        return (
        <section id="services-packages" className="py-32 gradient-neutral">
          <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {language === 'fr' 
              ? 'Domaines d\'Excellence'
              : 'Areas of Excellence'}
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Nous transformons les fonctions critiques de votre organisation avec des solutions d\'automatisation sur mesure qui amplifient l\'impact humain.'
              : 'We transform your organization\'s critical functions with custom automation solutions that amplify human impact.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-1 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {service.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-neutral-500">
                        {service.number}.
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 leading-tight">{service.name}</h3>
                  </div>
                </div>

                <p className="text-neutral-700 mb-6 text-sm leading-relaxed">{service.description}</p>

                {service.businessFunctions && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Solutions Clés :' : 'Key Solutions:'}
                    </h4>
                    <ul className="space-y-2">
                      {service.businessFunctions.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-cardinal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cardinal-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              {language === 'fr'
                ? 'Votre organisation mérite l\'excellence opérationnelle'
                : 'Your organization deserves operational excellence'}
            </h3>
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
              {language === 'fr'
                ? 'Chaque fonction de votre entreprise recèle un potentiel de transformation extraordinaire. Explorons ensemble comment libérer cette puissance cachée et créer des avantages concurrentiels durables.'
                : 'Every function in your business holds extraordinary transformation potential. Let\'s explore together how to unleash this hidden power and create lasting competitive advantages.'}
            </p>
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              {language === 'fr' ? '✨ Révéler Votre Potentiel' : '✨ Reveal Your Potential'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPackages;
