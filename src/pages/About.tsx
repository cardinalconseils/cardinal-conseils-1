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
import pierreImage from '../assets/pierre-marc-cardinal.png';

const About: React.FC = () => {
  const { language } = useLanguage();

  const philosophyItems = [
    {
      icon: Users,
      title: language === 'fr' ? 'Intégration d\'équipe' : 'Team Integration',
      desc: language === 'fr'
        ? 'Je m\'intègre dans votre équipe existante comme votre directeur marketing et chef de projet à temps partiel.'
        : 'I integrate with your existing team as your part-time marketing director and project manager.'
    },
    {
      icon: Target,
      title: language === 'fr' ? 'Impact mesurable' : 'Measurable Impact',
      desc: language === 'fr'
        ? 'Chaque projet vise des résultats concrets avec un ROI clair et des métriques de performance.'
        : 'Every project targets concrete results with clear ROI and performance metrics.'
    },
    {
      icon: Brain,
      title: language === 'fr' ? 'Transfert de connaissances' : 'Knowledge Transfer',
      desc: language === 'fr'
        ? 'Je forme vos équipes pour qu\'elles deviennent autonomes avec les nouveaux processus et outils.'
        : 'I train your teams to become autonomous with new processes and tools.'
    },
    {
      icon: TrendingUp,
      title: language === 'fr' ? 'Croissance stratégique' : 'Strategic Growth',
      desc: language === 'fr'
        ? 'Je développe votre capacité interne d\'automatisation pour soutenir une croissance durable.'
        : 'I develop your internal automation capacity to support sustainable growth.'
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
    language === 'fr' ? 'Intégration complète dans votre équipe existante' : 'Full integration with your existing team',
    language === 'fr' ? 'Transfert de connaissances pour l\'autonomie future' : 'Knowledge transfer for future autonomy',
    language === 'fr' ? 'Résultats mesurables dans les 90 premiers jours' : 'Measurable results within the first 90 days',
    language === 'fr' ? 'Support continu pour la croissance de vos capacités' : 'Ongoing support for growing your capabilities'
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {language === 'fr' ? 'Rencontrez Pierre-Marc Cardinal' : 'Meet Pierre-Marc Cardinal'}
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Fondateur de Cardinal Conseils • Votre Directeur Marketing et Chef de Projet à temps partiel pour l\'automatisation'
                : 'Founder of Cardinal Conseils • Your Part-Time Marketing Director & Project Manager for Automation'
              }
            </p>
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
                {language === 'fr' ? 'Mon approche' : 'My approach'}
              </h2>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  {language === 'fr'
                    ? 'Je ne suis pas juste un consultant—je suis votre directeur marketing et chef de projet à temps partiel. Mon rôle est d\'identifier les processus qui vous ralentissent et de les transformer en avantages concurrentiels.'
                    : 'I\'m not just a consultant—I\'m your part-time marketing director and project manager. My role is to identify the processes that slow you down and transform them into competitive advantages.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Avec plus de 15 ans d\'expérience en automatisation et gestion de projet, j\'aide les entreprises québécoises à développer leurs capacités internes tout en livrant des résultats concrets rapidement.'
                    : 'With over 15 years of experience in automation and project management, I help Quebec businesses develop their internal capabilities while delivering concrete results quickly.'}
                </p>
                <p>
                  {language === 'fr'
                    ? 'Mon approche "Impact Team" signifie que je m\'intègre dans votre équipe existante, je comprends votre culture d\'entreprise, et je construis des solutions que vos employés vont réellement utiliser.'
                    : 'My "Impact Team" approach means I integrate with your existing team, understand your company culture, and build solutions your employees will actually use.'}
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
                src={pierreImage}
                alt={language === 'fr' ? 'Pierre-Marc Cardinal' : 'Pierre-Marc Cardinal'}
                className="rounded-2xl shadow-2xl w-full h-auto"
                onError={(e) => {
                  console.error('Pierre-Marc image failed to load');
                  e.currentTarget.style.border = '2px solid red';
                }}
                onLoad={() => console.log('Pierre-Marc image loaded successfully')}
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
            {language === 'fr' ? 'Ma méthode de travail' : 'How I work with you'}
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
              {language === 'fr' ? 'Mes engagements envers vous' : 'My commitments to you'}
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
