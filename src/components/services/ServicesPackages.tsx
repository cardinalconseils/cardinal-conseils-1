import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb,
  Rocket,
  Zap,
  BarChart3,
  CheckCircle,
  Clock,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesPackages: React.FC = () => {
  const { language } = useLanguage();

  const packages = [
    {
      icon: Lightbulb,
      name: language === 'fr' ? 'EXPLORATEUR' : 'EXPLORER',
      tagline: language === 'fr' ? 'Pour Dirigeants Visionnaires' : 'For Visionary Leaders',
      ideal: language === 'fr'
        ? "Vous êtes convaincu du potentiel de l'IA mais vous avez besoin d'une feuille de route claire pour convaincre votre conseil d'administration ou vos investisseurs."
        : "You're convinced of AI's potential but need a clear roadmap to convince your board of directors or investors.",
      includes: language === 'fr' ? [
        'Diagnostic Flash complet (7 jours)',
        'Roadmap stratégique 12 mois avec budget détaillé',
        'Présentation exécutive PowerPoint (30 slides)',
        'Session de questions-réponses avec votre équipe (2h)',
        'Matrice ROI avec scénarios conservateur/optimiste/agressif'
      ] : [
        'Complete Flash Diagnosis (7 days)',
        '12-month strategic roadmap with detailed budget',
        'Executive PowerPoint presentation (30 slides)',
        'Q&A session with your team (2h)',
        'ROI matrix with conservative/optimistic/aggressive scenarios'
      ],
      guarantee: language === 'fr'
        ? "Si les opportunités identifiées ne représentent pas un ROI potentiel d'au moins 150% sur 24 mois, nous remboursons 50% des honoraires."
        : "If identified opportunities don't represent a potential ROI of at least 150% over 24 months, we refund 50% of fees.",
      delivery: language === 'fr' ? '21 jours ouvrables maximum' : '21 business days maximum',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Rocket,
      name: language === 'fr' ? 'INITIATEUR' : 'INITIATOR',
      tagline: language === 'fr' ? 'Pour PME Prêtes à Bouger' : 'For SMEs Ready to Move',
      ideal: language === 'fr'
        ? "Votre budget est approuvé, vous avez l'appui de la direction, et vous voulez passer à l'action avec les meilleurs partenaires du marché."
        : "Your budget is approved, you have management support, and you want to take action with the best partners in the market.",
      includes: language === 'fr' ? [
        'Tout le package Explorateur PLUS :',
        'Processus RFI/RFP complet avec 5-7 fournisseurs',
        'Négociation assistée des contrats',
        'Vendor scorecard détaillé avec recommandation finale',
        'Due diligence technique et financière',
        'Support juridique pour révision contractuelle',
        'Plan de mise en œuvre détaillé avec timeline'
      ] : [
        'Everything in Explorer package PLUS:',
        'Complete RFI/RFP process with 5-7 suppliers',
        'Assisted contract negotiation',
        'Detailed vendor scorecard with final recommendation',
        'Technical and financial due diligence',
        'Legal support for contract review',
        'Detailed implementation plan with timeline'
      ],
      savings: language === 'fr'
        ? "Notre processus de négociation structuré vise à optimiser vos contrats technologiques grâce à une analyse comparative rigoureuse."
        : "Our structured negotiation process aims to optimize your technology contracts through rigorous comparative analysis.",
      delivery: language === 'fr' ? '8 semaines ouvrables maximum' : '8 business weeks maximum',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      name: language === 'fr' ? 'DÉPLOYEUR' : 'DEPLOYER',
      tagline: language === 'fr' ? 'PMO Complet Jusqu\'à Production' : 'Complete PMO to Production',
      ideal: language === 'fr'
        ? "Projet approuvé, fournisseurs sélectionnés, vous voulez un chef d'orchestre expérimenté pour garantir le succès du déploiement."
        : "Project approved, suppliers selected, you want an experienced conductor to guarantee deployment success.",
      includes: language === 'fr' ? [
        'Tout des packages précédents',
        'PMO dédié avec méthodologie Lean-Agile',
        'Revues de sprint bi-hebdomadaires',
        'Gestion du changement et formation utilisateurs',
        'Tests d\'acceptation utilisateur (UAT)',
        'Mise en production sécurisée',
        'Documentation complète livrée'
      ] : [
        'Everything from previous packages',
        'Dedicated PMO with Lean-Agile methodology',
        'Bi-weekly sprint reviews',
        'Change management and user training',
        'User acceptance testing (UAT)',
        'Secure production deployment',
        'Complete documentation delivered'
      ],
      benefits: language === 'fr' ? [
        'Alignement sur les résultats vs honoraires fixes',
        'Flexibilité d\'ajustement selon évolution projet',
        'Engagement mutuel sur la réussite',
        'Pas de mauvaises surprises budgétaires'
      ] : [
        'Alignment on results vs fixed fees',
        'Flexibility to adjust according to project evolution',
        'Mutual commitment to success',
        'No budget surprises'
      ],
      minimum: language === 'fr' ? 'minimum 6 mois' : 'minimum 6 months',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      name: language === 'fr' ? 'OPTIMISATEUR' : 'OPTIMIZER',
      tagline: language === 'fr' ? 'IA Déjà en Place' : 'AI Already in Place',
      ideal: language === 'fr'
        ? "Vous avez déjà des systèmes IA déployés mais vous voulez maximiser leur performance et ROI tout en préparant la prochaine phase d'évolution."
        : "You already have AI systems deployed but want to maximize their performance and ROI while preparing the next evolution phase.",
      includes: language === 'fr' ? [
        'Audit complet des systèmes existants',
        'Monitoring performance 24/7',
        'Fine-tuning des modèles selon usage réel',
        'Rapports mensuels d\'impact business',
        'Veille technologique et recommandations',
        'Planification des évolutions futures'
      ] : [
        'Complete audit of existing systems',
        '24/7 performance monitoring',
        'Model fine-tuning based on real usage',
        'Monthly business impact reports',
        'Technology watch and recommendations',
        'Future evolution planning'
      ],
      objectives: language === 'fr' ? [
        'Amélioration performance modèles : +15-30%',
        'Réduction coûts opérationnels : +10-20%',
        'Nouvelles opportunités : 2-3/trimestre',
        'Conformité réglementaire : 100%'
      ] : [
        'Model performance improvement: +15-30%',
        'Operational cost reduction: +10-20%',
        'New opportunities: 2-3/quarter',
        'Regulatory compliance: 100%'
      ],
      color: 'from-orange-500 to-orange-600'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            {language === 'fr' 
              ? 'Packages Adaptés à Votre Niveau de Maturité IA'
              : 'Packages Adapted to Your AI Maturity Level'}
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Nos forfaits sont conçus pour accompagner votre entreprise selon son niveau de préparation et ses ambitions en intelligence artificielle.'
              : 'Our packages are designed to support your business according to its level of preparation and ambitions in artificial intelligence.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center`}>
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">{pkg.name}</h3>
                    <p className="text-sm text-neutral-600">{pkg.tagline}</p>
                  </div>
                </div>

                {pkg.minimum && (
                  <p className="text-sm text-neutral-600 mb-4">{pkg.minimum}</p>
                )}

                <p className="text-neutral-700 mb-6">{pkg.ideal}</p>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-neutral-900">
                    {language === 'fr' ? 'Ce qui est inclus :' : 'What\'s included:'}
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.guarantee && (
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-green-800">
                      <strong>{language === 'fr' ? 'Garantie :' : 'Guarantee:'}</strong> {pkg.guarantee}
                    </p>
                  </div>
                )}

                {pkg.savings && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <strong>{language === 'fr' ? 'Économies :' : 'Savings:'}</strong> {pkg.savings}
                    </p>
                  </div>
                )}

                {pkg.benefits && (
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Avantages :' : 'Benefits:'}
                    </h4>
                    <ul className="space-y-1">
                      {pkg.benefits.map((benefit, benIndex) => (
                        <li key={benIndex} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-cardinal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.objectives && (
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Objectifs visés :' : 'Target objectives:'}
                    </h4>
                    <ul className="space-y-1">
                      {pkg.objectives.map((objective, objIndex) => (
                        <li key={objIndex} className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-cardinal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {language === 'fr' ? 'Délai :' : 'Delivery:'} {pkg.delivery}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-neutral-700 mb-8">
            {language === 'fr'
              ? 'Pour obtenir une tarification personnalisée adaptée à vos besoins spécifiques, contactez-nous pour une consultation gratuite.'
              : 'To get personalized pricing tailored to your specific needs, contact us for a free consultation.'}
          </p>
          <a href="/contact" className="btn-primary">
            {language === 'fr' ? 'Demander une soumission' : 'Request a Quote'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPackages;
