import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  Target,
  Brain,
  Handshake,
  Award
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesDifferentiators: React.FC = () => {
  const { language } = useLanguage();

  const differentiators = [
    {
      icon: Heart,
      title: language === 'fr' ? 'Accompagnement Humain et Technologique' : 'Human and Technological Support',
      philosophy: language === 'fr'
        ? "L'IA n'est pas qu'une question de technologie, c'est avant tout une transformation humaine qui nécessite écoute, adaptation et bienveillance."
        : "AI is not just about technology, it's primarily a human transformation that requires listening, adaptation and kindness.",
      approaches: [
        {
          title: language === 'fr' ? 'Écoute Active et Collaborative' : 'Active and Collaborative Listening',
          items: language === 'fr' ? [
            'Compréhension profonde de votre vision d\'entreprise',
            'Adaptation à votre culture organisationnelle existante',
            'Respect de votre rythme naturel d\'évolution',
            'Co-construction des solutions plutôt qu\'imposition'
          ] : [
            'Deep understanding of your business vision',
            'Adaptation to your existing organizational culture',
            'Respect for your natural pace of evolution',
            'Co-construction of solutions rather than imposition'
          ]
        },
        {
          title: language === 'fr' ? 'Documentation Vivante et Évolutive' : 'Living and Evolving Documentation',
          items: language === 'fr' ? [
            'Capture naturelle des décisions et apprentissages',
            'Wiki collaboratif qui grandit avec votre projet',
            'Traçabilité des réflexions et évolutions',
            'Partage de connaissances facilité'
          ] : [
            'Natural capture of decisions and learnings',
            'Collaborative wiki that grows with your project',
            'Traceability of reflections and evolutions',
            'Facilitated knowledge sharing'
          ]
        },
        {
          title: language === 'fr' ? 'Transfert Progressif d\'Expertise' : 'Progressive Expertise Transfer',
          items: language === 'fr' ? [
            'Formation adaptée à vos équipes internes',
            'Développement de l\'autonomie à votre rythme',
            'Mentorship continu plutôt que dépendance',
            'Création d\'une culture IA interne durable'
          ] : [
            'Training adapted to your internal teams',
            'Autonomy development at your pace',
            'Continuous mentorship rather than dependency',
            'Creation of a sustainable internal AI culture'
          ]
        }
      ]
    },
    {
      icon: Lightbulb,
      title: language === 'fr' ? 'Approche Intuitive et Adaptative' : 'Intuitive and Adaptive Approach',
      conviction: language === 'fr'
        ? "Les projets IA les plus réussis ne suivent pas de formules rigides mais s'adaptent à la personnalité unique de chaque entreprise et à l'intuition de ses dirigeants."
        : "The most successful AI projects don't follow rigid formulas but adapt to each company's unique personality and its leaders' intuition.",
      methodologies: [
        {
          title: language === 'fr' ? 'Départ de Votre Vision' : 'Starting from Your Vision',
          items: language === 'fr' ? [
            'Exploration de vos aspirations et frustrations actuelles',
            'Identification des opportunités qui résonnent avec vous',
            'Validation continue de l\'alignement avec vos valeurs',
            'Ajustement permanent selon vos apprentissages'
          ] : [
            'Exploration of your current aspirations and frustrations',
            'Identification of opportunities that resonate with you',
            'Continuous validation of alignment with your values',
            'Permanent adjustment according to your learnings'
          ]
        },
        {
          title: language === 'fr' ? 'Adaptation Culturelle' : 'Cultural Adaptation',
          items: language === 'fr' ? [
            'Respect de vos façons de faire existantes',
            'Intégration harmonieuse dans vos processus',
            'Préservation de ce qui fonctionne déjà',
            'Évolution graduelle sans bouleversement'
          ] : [
            'Respect for your existing ways of doing things',
            'Harmonious integration into your processes',
            'Preservation of what already works',
            'Gradual evolution without upheaval'
          ]
        },
        {
          title: language === 'fr' ? 'Innovation Collaborative' : 'Collaborative Innovation',
          items: language === 'fr' ? [
            'Co-création des solutions avec vos équipes',
            'Expérimentation conjointe et itérative',
            'Apprentissage partagé des succès et échecs',
            'Développement de votre propre expertise'
          ] : [
            'Co-creation of solutions with your teams',
            'Joint and iterative experimentation',
            'Shared learning from successes and failures',
            'Development of your own expertise'
          ]
        }
      ]
    },
    {
      icon: Handshake,
      title: language === 'fr' ? 'Réseau de Partenaires Stratégiques Exclusifs' : 'Exclusive Strategic Partner Network',
      philosophy: language === 'fr'
        ? "Plutôt que de tout faire nous-mêmes, nous orchestrons un écosystème de spécialistes reconnus pour offrir le meilleur de chaque domaine."
        : "Rather than doing everything ourselves, we orchestrate an ecosystem of recognized specialists to offer the best of each field.",
      partnerships: [
        {
          title: language === 'fr' ? 'Intégrateurs TI Régionaux' : 'Regional IT Integrators',
          details: language === 'fr' ? [
            'Clarification des besoins et livrables par Cardinal Conseils',
            'Implémentation technique par partenaires certifiés',
            'Commission de 15% sur la valeur des mandats',
            'Support continu partagé selon expertise'
          ] : [
            'Clarification of needs and deliverables by Cardinal Conseils',
            'Technical implementation by certified partners',
            '15% commission on mandate value',
            'Shared continuous support according to expertise'
          ]
        },
        {
          title: language === 'fr' ? 'Firmes Comptables Partenaires' : 'Partner Accounting Firms',
          details: language === 'fr' ? [
            'Audit IA intégré aux révisions financières annuelles',
            'Package combiné : optimisation fiscale + transformation IA',
            'Partage de marge selon contribution',
            'Cross-selling naturel vers clientèle existante'
          ] : [
            'AI audit integrated into annual financial reviews',
            'Combined package: tax optimization + AI transformation',
            'Margin sharing according to contribution',
            'Natural cross-selling to existing clientele'
          ]
        },
        {
          title: language === 'fr' ? 'Associations Sectorielles' : 'Sectoral Associations',
          details: language === 'fr' ? [
            'Webinaires "IA sans jargon" pour membres',
            'Diagnostics groupés avec tarifs préférentiels',
            'Veille réglementaire partagée',
            'Développement d\'outils sectoriels spécifiques'
          ] : [
            '"AI without jargon" webinars for members',
            'Group diagnostics with preferential rates',
            'Shared regulatory monitoring',
            'Development of specific sectoral tools'
          ]
        }
      ],
      benefits: language === 'fr' ? 'Avantages pour nos clients :' : 'Benefits for our clients:',
      clientBenefits: language === 'fr' ? [
        'Accès à l\'expertise de pointe sans les coûts',
        'Réduction des risques par diversification',
        'Innovation continue par cross-pollination',
        'Support local garanti à long terme'
      ] : [
        'Access to cutting-edge expertise without the costs',
        'Risk reduction through diversification',
        'Continuous innovation through cross-pollination',
        'Guaranteed long-term local support'
      ]
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
              ? 'Ce Qui Rend Cardinal Conseils Unique au Québec'
              : 'What Makes Cardinal Conseils Unique in Quebec'}
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Dans un marché en évolution, nous avons développé une approche qui respecte la réalité des PME : les meilleurs projets IA naissent de l\'intuition business, de la volonté d\'innover et d\'un état d\'esprit ouvert au changement.'
              : 'In an evolving market, we have developed an approach that respects the reality of SMEs: the best AI projects arise from business intuition, the will to innovate and an open mindset to change.'}
          </p>
        </motion.div>

        <div className="space-y-20">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-cardinal-100 rounded-2xl flex items-center justify-center">
                  <diff.icon className="h-10 w-10 text-cardinal-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">{diff.title}</h3>
              </div>

              {diff.philosophy && (
                <div className="bg-white rounded-xl p-6 mb-8 border border-neutral-200">
                  <p className="text-lg text-neutral-700 font-medium">
                    <strong>{language === 'fr' ? 'Notre philosophie :' : 'Our philosophy:'}</strong> {diff.philosophy}
                  </p>
                </div>
              )}

              {diff.conviction && (
                <div className="bg-white rounded-xl p-6 mb-8 border border-neutral-200">
                  <p className="text-lg text-neutral-700 font-medium">
                    <strong>{language === 'fr' ? 'Notre conviction :' : 'Our conviction:'}</strong> {diff.conviction}
                  </p>
                </div>
              )}

              {diff.approaches && (
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-6">
                    {language === 'fr' ? 'Notre approche unique :' : 'Our unique approach:'}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {diff.approaches.map((approach, appIndex) => (
                      <motion.div
                        key={appIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: appIndex * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-neutral-200"
                      >
                        <h5 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-cardinal-600" />
                          {approach.title}
                        </h5>
                        <ul className="space-y-2">
                          {approach.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm text-neutral-700">
                              <span className="text-cardinal-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {diff.methodologies && (
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-6">
                    {language === 'fr' ? 'Méthodologie Flexible :' : 'Flexible Methodology:'}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {diff.methodologies.map((method, methIndex) => (
                      <motion.div
                        key={methIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: methIndex * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-neutral-200"
                      >
                        <h5 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-cardinal-600" />
                          {method.title}
                        </h5>
                        <ul className="space-y-2">
                          {method.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm text-neutral-700">
                              <span className="text-cardinal-600 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {diff.partnerships && (
                <div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-6">
                    {language === 'fr' ? 'Nos alliances stratégiques :' : 'Our strategic alliances:'}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {diff.partnerships.map((partner, partIndex) => (
                      <motion.div
                        key={partIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: partIndex * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-neutral-200"
                      >
                        <h5 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-cardinal-600" />
                          {partner.title}
                        </h5>
                        <ul className="space-y-2">
                          {partner.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-neutral-700">
                              <span className="text-cardinal-600 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-cardinal-50 rounded-xl p-6">
                    <h5 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-cardinal-600" />
                      {diff.benefits}
                    </h5>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {diff.clientBenefits?.map((benefit, benIndex) => (
                        <li key={benIndex} className="flex items-center gap-2 text-neutral-700">
                          <TrendingUp className="h-4 w-4 text-cardinal-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDifferentiators;
