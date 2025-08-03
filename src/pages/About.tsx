import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  TrendingUp,
  Code,
  GitBranch,
  FileText,
  Zap,
  CheckCircle,
  Bot,
  Workflow,
  Brain
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const philosophyItems = [
    {
      icon: Bot,
      title: language === 'fr' ? 'Automatisation d\'abord' : 'Automation first',
      desc: language === 'fr'
        ? 'Nous identifions et automatisons les processus répétitifs pour libérer votre équipe.'
        : 'We identify and automate repetitive processes to free up your team.'
    },
    {
      icon: Brain,
      title: language === 'fr' ? 'IA pratique' : 'Practical AI',
      desc: language === 'fr'
        ? 'Solutions d\'intelligence artificielle concrètes avec un ROI mesurable.'
        : 'Concrete artificial intelligence solutions with measurable ROI.'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Formation incluse' : 'Training included',
      desc: language === 'fr'
        ? 'Nous formons vos équipes pour qu\'elles maîtrisent les nouveaux outils.'
        : 'We train your teams to master the new tools.'
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Croissance continue' : 'Continuous growth',
      desc: language === 'fr'
        ? 'Support continu pour optimiser et faire évoluer vos automatisations.'
        : 'Ongoing support to optimize and evolve your automations.'
    }
  ];

  const tools = [
    {
      category: language === 'fr' ? 'Plateformes d\'automatisation' : 'Automation platforms',
      items: ['Make.com', 'Zapier', 'n8n', 'Power Automate']
    },
    {
      category: language === 'fr' ? 'IA et Machine Learning' : 'AI and Machine Learning',
      items: ['OpenAI GPT-4', 'Claude', 'Azure AI', 'Google AI']
    },
    {
      category: language === 'fr' ? 'Outils RPA' : 'RPA Tools',
      items: ['UiPath', 'Automation Anywhere', 'Blue Prism']
    },
    {
      category: language === 'fr' ? 'Intégrations' : 'Integrations',
      items: ['API REST', 'Webhooks', 'GraphQL', 'WebSockets']
    }
  ];

  const commitments = [
    language === 'fr' ? 'Audit gratuit de vos processus' : 'Free audit of your processes',
    language === 'fr' ? 'ROI garanti ou remboursement' : 'Guaranteed ROI or refund',
    language === 'fr' ? 'Support 24/7 pour les systèmes critiques' : '24/7 support for critical systems',
    language === 'fr' ? 'Conformité RGPD et sécurité des données' : 'GDPR compliance and data security'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cardinal-50 via-white to-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {language === 'fr' ? 'Agence d\'automatisation et d\'IA' : 'Automation and AI Agency'}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                {language === 'fr' ? 'Notre mission' : 'Our mission'}
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  {language === 'fr'
                    ? 'Cardinal Conseils est une agence spécialisée dans l\'automatisation des processus d\'affaires et l\'intégration de l\'intelligence artificielle pour les entreprises québécoises.'
                    : 'Cardinal Conseils is an agency specialized in business process automation and artificial intelligence integration for Quebec businesses.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Nous transformons les opérations manuelles en systèmes automatisés intelligents qui permettent à nos clients d\'économiser temps et argent tout en améliorant leur efficacité.'
                    : 'We transform manual operations into intelligent automated systems that allow our clients to save time and money while improving their efficiency.'}
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg"
                alt={language === 'fr' ? 'Équipe Cardinal Conseils' : 'Cardinal Conseils team'}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cardinal-600 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <motion.h2
            className="text-3xl font-bold text-neutral-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {language === 'fr' ? 'Notre approche' : 'Our approach'}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cardinal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-cardinal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              {language === 'fr' ? 'Technologies et outils' : 'Technologies and tools'}
            </h2>
            <p className="text-lg text-neutral-700 mb-12">
              {language === 'fr'
                ? 'Nous maîtrisons les meilleures plateformes d\'automatisation et d\'IA :'
                : 'We master the best automation and AI platforms:'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="h-5 w-5 text-cardinal-600" />
                    <h3 className="font-semibold text-neutral-900">{tool.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tool.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-neutral-700 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cardinal-600 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-gradient-to-br from-cardinal-600 to-cardinal-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-12">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span className="text-lg">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
