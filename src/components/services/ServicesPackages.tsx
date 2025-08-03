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
      icon: MapPin,
      emoji: '🧭',
      number: '1',
      name: language === 'fr' ? 'Cartographie & Priorisation des Processus' : 'Process Mapping & Prioritization',
      description: language === 'fr'
        ? "Nous travaillons avec votre équipe pour visualiser comment les choses fonctionnent vraiment aujourd'hui—qui fait quoi, quand, et pourquoi ça plante. Ensuite, nous identifions les 1-2 goulots d'étranglement où l'automatisation aura le plus gros impact."
        : "We work with your team to visualize how things really work today—who does what, when, and why it breaks. Then we identify the 1–2 bottlenecks where automation will have the biggest impact.",
      deliverables: language === 'fr' ? [
        'Cartes visuelles des processus',
        'Analyse des goulots d\'étranglement',
        'Feuille de route d\'automatisation'
      ] : [
        'Visual process maps',
        'Bottleneck analysis',
        'Automation roadmap'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cog,
      emoji: '⚙️',
      number: '2',
      name: language === 'fr' ? 'Conception & Implémentation d\'Automatisation' : 'Automation Design & Implementation',
      description: language === 'fr'
        ? "Nous concevons et construisons des flux de travail épurés en utilisant des outils comme Make.com, Zapier, n8n, et plus. Que ce soit pour réduire les tâches administratives ou accélérer les approbations internes, nous construisons des automatisations que votre équipe utilisera vraiment."
        : "We design and build lean workflows using tools like Make.com, Zapier, n8n, and more. Whether it's reducing admin tasks or speeding up internal approvals, we build automations your team will actually use.",
      deliverables: language === 'fr' ? [
        'Automatisations & intégrations personnalisées',
        'Documentation + transfert',
        'Configuration nécessitant peu de maintenance'
      ] : [
        'Custom automations & integrations',
        'Documentation + handoff',
        'Low-maintenance setup'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bot,
      emoji: '🤖',
      number: '3',
      name: language === 'fr' ? 'Intégration d\'Agents IA & LLM' : 'AI Agent & LLM Integration',
      description: language === 'fr'
        ? "Des assistants IA aux formulaires intelligents et aux flux de travail GPT personnalisés, nous connectons vos opérations avec la puissance des grands modèles de langage—sans vous noyer dans la complexité."
        : "From AI assistants to smart forms and custom GPT workflows, we connect your operations with the power of large language models—without drowning you in complexity.",
      useCases: language === 'fr' ? [
        'Assistants de connaissances internes',
        'Triage d\'emails & génération de brouillons',
        'Bots de support, d\'intégration et de devis'
      ] : [
        'Internal knowledge assistants',
        'Email triage & draft generation',
        'Support, onboarding, and quoting bots'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      emoji: '🧰',
      number: '4',
      name: language === 'fr' ? 'Stratégie & Configuration de Stack Technologique' : 'Tool Stack Strategy & Setup',
      description: language === 'fr'
        ? "Nous vous aidons à sélectionner, configurer et connecter les bons outils pour votre stade. Que ce soit votre premier CRM, un système de tickets interne, ou un tableau de bord partagé, nous vous configurerons avec des outils qui évoluent—pas qui créent plus de travail."
        : "We help you select, configure, and connect the right tools for your stage. Whether it's your first CRM, an internal ticketing system, or a shared dashboard, we'll set you up with tools that scale—not create more work.",
      deliverables: language === 'fr' ? [
        'Audit de fournisseurs/outils',
        'Installation & configuration',
        'Intégration du personnel + SOPs'
      ] : [
        'Vendor/tool audit',
        'Setup & configuration',
        'Staff onboarding + SOPs'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: BarChart3,
      emoji: '📊',
      number: '5',
      name: language === 'fr' ? 'Surveillance, Métriques & Documentation' : 'Monitoring, Metrics & Documentation',
      description: language === 'fr'
        ? "Nous ne disparaissons pas après la construction. Nous vous aiderons à suivre ce qui fonctionne, ajuster ce qui ne fonctionne pas, et vous laisser avec une documentation que votre équipe peut vraiment suivre."
        : "We don't ghost you after the build. We'll help you track what's working, tweak what's not, and leave you with documentation your team can actually follow.",
      deliverables: language === 'fr' ? [
        'Tableaux de bord personnalisés (Retool, Lowdefy, Notion, etc.)',
        'Formation légère',
        'SOPs internes & guides libre-service'
      ] : [
        'Custom dashboards (Retool, Lowdefy, Notion, etc.)',
        'Lightweight training',
        'Internal SOPs & self-serve guides'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      emoji: '🧪',
      number: '6',
      name: language === 'fr' ? 'Sprints Stratégiques & Ateliers' : 'Strategy Sprints & Workshops',
      description: language === 'fr'
        ? "Besoin de réfléchir à la préparation à l'IA, à la priorisation des flux de travail, ou au triage des processus entre départements ? Nous offrons des sessions stratégiques courtes et à fort impact adaptées à l'endroit où vous êtes bloqués."
        : "Need to think through AI readiness, workflow prioritization, or process triage across departments? We offer short, high-impact strategy sessions tailored to where you're stuck.",
      format: language === 'fr' ? [
        'Sessions d\'une demi-journée ou d\'une journée complète',
        'Virtuel ou en personne (Laurentides / Grand Montréal)',
        'Axé sur les résultats, collaboratif, sans jargon'
      ] : [
        'Half-day or full-day sessions',
        'Virtual or in-person (Laurentides / Greater Montreal)',
        'Outcome-focused, collaborative, no jargon'
      ],
      color: 'from-red-500 to-red-600'
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
              ? 'Nos Services'
              : 'Our Services'}
          </h2>
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

                {service.deliverables && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Livrables :' : 'Deliverables:'}
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.useCases && (
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Cas d\'usage :' : 'Use Cases:'}
                    </h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-cardinal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.format && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'fr' ? 'Format :' : 'Format:'}
                    </h4>
                    <ul className="space-y-2">
                      {service.format.map((formatItem, formatIndex) => (
                        <li key={formatIndex} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-cardinal-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{formatItem}</span>
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
          <p className="text-lg text-neutral-700 mb-8">
            {language === 'fr'
              ? 'Prêt à simplifier vos processus ? Parlons de ce qui vous ralentit.'
              : 'Ready to simplify your processes? Let\'s talk about what\'s slowing you down.'}
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            {language === 'fr' ? '📅 Réserver un Appel Découverte' : '📅 Book a Discovery Call'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPackages;
