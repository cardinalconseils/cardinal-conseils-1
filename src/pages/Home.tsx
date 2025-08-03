import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
  Bot,
  Brain,
  Users,
  Clock,
  Calendar,
  MessageCircle,
  Settings,
  Map,
  Building2,
  Lightbulb,
  Rocket,
  Cog,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-neutral noise" />
        
        <motion.div 
          className="container-custom relative z-10 pt-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="display-1 mb-8">
              {language === 'fr' ? (
                <>
                  🚀 Nous sommes votre<br />
                  <span className="gradient-text">équipe d'impact</span><br />
                  <span className="text-neutral-600">pour l'automatisation</span>
                </>
              ) : (
                <>
                  🚀 We Are Your<br />
                  <span className="gradient-text">Impact Team</span><br />
                  <span className="text-neutral-600">for Automation</span>
                </>
              )}
            </h1>
            
            <p className="body-large text-neutral-600 max-w-2xl mb-12">
              {language === 'fr'
                ? "Votre équipe croule sous les tâches répétitives ? Moi, je trouve les trucs qui vous ralentissent et je les automatise. Pas de jargon, pas de projets qui traînent—juste des solutions qui marchent."
                : "Your team drowning in repetitive tasks? I find the stuff that's slowing you down and automate it. No jargon, no dragging projects—just solutions that actually work."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                <Calendar className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Réserver un appel découverte' : 'Book a Discovery Call'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="#what-is-impact-team" className="btn-secondary group">
                <Brain className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Qu\'est-ce qu\'une équipe d\'impact?' : 'What\'s an Impact Team?'}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* What is an Impact Team */}
      <section id="what-is-impact-team" className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'QU\'EST-CE QU\'UNE ÉQUIPE D\'IMPACT?' : 'WHAT IS AN IMPACT TEAM?'}
            </div>
              <h2 className="display-2 mb-8">
                {language === 'fr' ? (
                  <>
                  Je deviens votre expert automatisation interne.<br />
                  <span className="gradient-text">Intégré dans votre équipe, pas à l'extérieur.</span>
                  </>
                ) : (
                  <>
                  I become your internal automation expert.<br />
                  <span className="gradient-text">Embedded in your team, not outside it.</span>
                  </>
                )}
              </h2>
                                    <p className="body-large text-neutral-600 max-w-4xl mx-auto mb-12">
                {language === 'fr' 
                ? "En gros, je rejoins votre équipe quelques jours par semaine. Je vois comment vous travaillez vraiment (pas juste sur papier), je trouve ce qui accroche, et je règle ça avec des outils d'automatisation qui font du sens pour vous."
                : "Basically, I join your team a few days a week. I see how you actually work (not just on paper), find what's getting stuck, and fix it with automation tools that make sense for you."
                }
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="heading-2 text-center mb-12">
              {language === 'fr' ? 'Nous réunissons :' : 'We bring together:'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: language === 'fr' ? 'Cartographie & Redésign de Processus' : 'Process Mapping & Redesign',
                  emoji: '🧠'
                },
                {
                  icon: Cog,
                  title: language === 'fr' ? 'Outils d\'Automatisation & Orchestration' : 'Automation Tools & Orchestration',
                  emoji: '⚙️'
                },
                {
                  icon: Bot,
                  title: language === 'fr' ? 'Agents IA & Intégration LLM' : 'AI Agents & LLM Integration',
                  emoji: '🤖'
                },
                {
                  icon: Settings,
                  title: language === 'fr' ? 'Configuration Tech Stack & Optimisation de Workflows' : 'Tech Stack Setup & Workflow Optimization',
                  emoji: '🛠️'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-neutral-50 card-hover"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  </motion.div>
                ))}
            </div>
          </motion.div>

              <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-neutral-900 text-white rounded-3xl p-12"
          >
                        <p className="body-large opacity-90">
                  {language === 'fr' 
                ? "Parfait si vous êtes fondateur, directeur d'ops, ou si votre équipe court après le temps et veut juste que les choses fonctionnent mieux."
                : "Perfect if you're a founder, ops director, or your team is always running behind and just wants things to work better."
                  }
                </p>
          </motion.div>
        </div>
      </section>

      {/* Part-Time Director Concept */}
      <section className="py-32 bg-gradient-to-br from-cardinal-50 via-white to-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-r from-cardinal-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'VOTRE ÉQUIPE INTERNE' : 'YOUR INTERNAL TEAM'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  Plus qu'un consultant :<br />
                  <span className="gradient-text">Votre directeur marketing et chef de projet à temps partiel</span>
                </>
              ) : (
                <>
                  More than a consultant:<br />
                  <span className="gradient-text">Your part-time marketing director & project manager</span>
                </>
              )}
            </h2>
                        <p className="body-large text-neutral-600 max-w-4xl mx-auto">
              {language === 'fr'
                ? "Écoutez, je ne débarque pas avec un PowerPoint de 50 slides. Je m'assois avec votre équipe, je bois le même café que vous, et j'apprends comment vous fonctionnez vraiment avant de toucher à quoi que ce soit."
                : "Look, I don't show up with a 50-slide PowerPoint. I sit with your team, drink the same coffee you do, and learn how you actually work before touching anything."
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: language === 'fr' ? 'Je fais partie de l\'équipe' : 'I become part of the team',
                description: language === 'fr' 
                  ? "Je viens à vos meetings, je vois comment vous vous tirez les cheveux avec vos processus, et je comprends pourquoi Marie du marketing perd 2h par jour à copier-coller des données."
                  : "I come to your meetings, see how you're pulling your hair out with your processes, and understand why Marie from marketing loses 2 hours a day copy-pasting data.",
                emoji: '🤝'
              },
              {
                icon: Target,
                title: language === 'fr' ? 'Je gère le bordel' : 'I handle the mess',
                description: language === 'fr' 
                  ? "Vous n'avez pas besoin de gérer un autre projet. Je m'en occupe. Je coordonne tout, je m'assure que ça avance, et je vous tiens au courant sans vous noyer dans les détails."
                  : "You don't need to manage another project. I handle it. I coordinate everything, make sure it moves forward, and keep you updated without drowning you in details.",
                emoji: '📋'
              },
              {
                icon: TrendingUp,
                title: language === 'fr' ? 'Vous rendre autonomes' : 'Making you independent',
                description: language === 'fr' 
                  ? "Mon but, c'est que votre équipe puisse se débrouiller sans moi. Je vous montre comment ça marche, je forme 2-3 personnes chez vous, et après vous êtes autonomes. Pas de piège."
                  : "My goal is for your team to manage without me. I show you how it works, train 2-3 people on your team, and then you're independent. No tricks.",
                emoji: '📈'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              >
                <div className="text-5xl mb-6">{item.emoji}</div>
                <h3 className="heading-3 mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cardinal-600 to-purple-600 text-white rounded-3xl p-12 text-center"
          >
            <h3 className="heading-2 mb-6">
              {language === 'fr' ? 'La différence d\'avoir quelqu\'un dans votre équipe' : 'The difference of having someone on your team'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold mb-3">
                  {language === 'fr' ? '🚫 Consultant traditionnel:' : '🚫 Traditional consultant:'}
                </h4>
                <ul className="space-y-2 opacity-90">
                  <li>{language === 'fr' ? '• Débarque, livre, et s\'en va' : '• Shows up, delivers, and leaves'}</li>
                  <li>{language === 'fr' ? '• Comprend rien à votre réalité' : '• Doesn\'t get your reality'}</li>
                  <li>{language === 'fr' ? '• Solution du copier-coller' : '• Copy-paste solutions'}</li>
                  <li>{language === 'fr' ? '• Vous laisse vous débrouiller après' : '• Leaves you to figure it out after'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">
                  {language === 'fr' ? '✅ Directeur à temps partiel:' : '✅ Part-time director:'}
                </h4>
                <ul className="space-y-2 opacity-90">
                  <li>{language === 'fr' ? '• Reste et grandit avec vous' : '• Stays and grows with you'}</li>
                  <li>{language === 'fr' ? '• Connaît votre équipe par leur prénom' : '• Knows your team by their first name'}</li>
                  <li>{language === 'fr' ? '• Construit pour VOTRE réalité' : '• Built for YOUR reality'}</li>
                  <li>{language === 'fr' ? '• Forme votre équipe en cours de route' : '• Trains your team along the way'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-32 gradient-neutral">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'QUI NOUS AIDONS' : 'WHO WE HELP'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  Vous n'avez pas besoin d'un département—<br />
                  <span className="gradient-text">vous avez besoin d'une équipe qui livre.</span>
                </>
              ) : (
                <>
                  You don't need a department—<br />
                  <span className="gradient-text">you need a team that delivers.</span>
                </>
              )}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="heading-2 text-center mb-12">
              {language === 'fr' ? 'Nous travaillons mieux avec :' : 'We work best with:'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Building2,
                  title: language === 'fr' ? 'Entreprises moyennes' : 'Mid-sized companies',
                  subtitle: language === 'fr' ? '(50–400 employés)' : '(50–400 employees)',
                  emoji: '🏢'
                },
                {
                  icon: Clock,
                  title: language === 'fr' ? 'Équipes enterrées' : 'Teams buried',
                  subtitle: language === 'fr' ? 'dans les tâches récurrentes' : 'in recurring tasks',
                  emoji: '⏰'
                },
                {
                  icon: Rocket,
                  title: language === 'fr' ? 'Fondateurs' : 'Founders',
                  subtitle: language === 'fr' ? 'qui valorisent la clarté et la vitesse' : 'who value clarity and speed',
                  emoji: '🚀'
                },
                {
                  icon: Brain,
                  title: language === 'fr' ? 'Opérateurs curieux' : 'Operators curious',
                  subtitle: language === 'fr' ? 'de l\'IA, mais sceptiques du battage' : 'about AI, but skeptical of hype',
                  emoji: '🤔'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-white card-hover"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-600">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-cardinal-50 rounded-3xl p-12"
          >
            <p className="body-large text-cardinal-800">
              {language === 'fr' 
                ? "Nous aussi, nous sommes en début d'étape—alors nous comprenons ce que signifie avancer avec soin, mais ne pas rester immobile."
                : "We're early-stage too—so we understand what it means to move with care, but not stand still."
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Impact > Efficiency */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'POURQUOI L\'IMPACT > EFFICACITÉ' : 'WHY IMPACT > EFFICIENCY'}
            </div>
              <h2 className="display-2 mb-8">
                {language === 'fr' ? (
                  <>
                  L'automatisation ne concerne pas seulement l'efficacité.<br />
                  <span className="gradient-text">C'est une question d'impact.</span>
                  </>
                ) : (
                  <>
                  Automation is not just about efficiency.<br />
                  <span className="gradient-text">It's about impact.</span>
                  </>
                )}
              </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-16"
          >
            <div>
              <div className="bg-neutral-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-neutral-600" />
                  </div>
                  <h3 className="heading-3 text-neutral-700">
                    {language === 'fr' ? 'L\'efficacité' : 'Efficiency'}
                  </h3>
                </div>
                <p className="text-neutral-600">
                  {language === 'fr' 
                    ? 'vous aide à faire les choses plus rapidement.'
                    : 'helps you do things faster.'
                  }
                </p>
              </div>
              
              <div className="bg-cardinal-50 rounded-2xl p-8 border border-cardinal-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cardinal-200 flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-cardinal-600" />
                  </div>
                  <h3 className="heading-3 text-cardinal-800">
                    {language === 'fr' ? 'L\'impact' : 'Impact'}
                  </h3>
                </div>
                <p className="text-cardinal-700">
                  {language === 'fr' 
                    ? 'vous aide à faire les bonnes choses, mieux.'
                    : 'helps you do the right things, better.'
                  }
                </p>
              </div>
            </div>
            
            <div>
              <p className="body-large text-neutral-600 mb-8">
                {language === 'fr' 
                  ? "Nous nous concentrons sur les processus qui comptent—ceux qui font économiser du temps à votre équipe, réduisent la friction et ouvrent de nouvelles opportunités. Que ce soit réduire les allers-retours, accélérer les approbations ou construire des flux plus intelligents, nous travaillons à l'intersection de la perspicacité humaine et de l'effet de levier machine."
                  : "We focus on processes that matter—those that save your team time, reduce friction, and open up new opportunities. Whether that means reducing back-and-forth, speeding up approvals, or building smarter flows, we work at the intersection of human insight and machine leverage."
                }
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: HeartHandshake,
                    text: language === 'fr' 
                      ? 'Économie de temps pour l\'equipe' 
                      : 'Save team time'
                  },
                  {
                    icon: Zap,
                    text: language === 'fr' 
                      ? 'Réduction de la friction' 
                      : 'Reduce friction'
                  },
                  {
                    icon: Lightbulb,
                    text: language === 'fr' 
                      ? 'Nouvelles opportunités' 
                      : 'New opportunities'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-cardinal-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-cardinal-600" />
                    </div>
                    <span className="text-neutral-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 gradient-neutral">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'COMMENT NOUS TRAVAILLONS' : 'HOW WE WORK'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  <span className="gradient-text">Commencer petit.</span> Gagner grand.
                </>
              ) : (
                <>
                  <span className="gradient-text">Start small.</span> Win big.
                </>
              )}
            </h2>
            <p className="body-large text-neutral-600 max-w-3xl mx-auto">
              {language === 'fr'
                ? "Nous ne croyons pas aux grandes révélations. Nous croyons aux petites victoires qui créent de l'élan."
                : "We don't believe in big reveals. We believe in small wins that build momentum."
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="heading-2 text-center mb-12">
              {language === 'fr' ? 'Voici comment nous procédons :' : 'Here\'s how we do it:'}
            </h3>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: language === 'fr' ? 'Explorer' : 'Explore',
                  desc: language === 'fr' 
                    ? 'Un appel découverte pour comprendre ce qui vous ralentit'
                    : 'A discovery call to understand what\'s slowing you down',
                  icon: MessageCircle
                },
                {
                  step: '2',
                  title: language === 'fr' ? 'Cartographier' : 'Map',
                  desc: language === 'fr' 
                    ? 'Visualiser le processus clé et ses obstacles'
                    : 'Visualize the key process and its blockers',
                  icon: Map
                },
                {
                  step: '3',
                  title: language === 'fr' ? 'Concevoir' : 'Design',
                  desc: language === 'fr' 
                    ? 'Recommander des outils et automatisations pour éliminer la friction'
                    : 'Recommend tools and automations to remove friction',
                  icon: Lightbulb
                },
                {
                  step: '4',
                  title: language === 'fr' ? 'Construire' : 'Build',
                  desc: language === 'fr' 
                    ? 'Configurer vos premières automatisations avec vous'
                    : 'Set up your first automations with you',
                  icon: Settings
                },
                {
                  step: '5',
                  title: language === 'fr' ? 'Évoluer' : 'Scale',
                  desc: language === 'fr' 
                    ? 'Documenter, former et identifier la suite'
                    : 'Document, train, and identify what\'s next',
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-cardinal-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <item.icon className="h-8 w-8 text-cardinal-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                  
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cardinal-300 to-transparent" 
                         style={{ marginLeft: '2rem', marginRight: '2rem' }} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-3xl p-12"
          >
            <div className="flex items-center justify-center mb-4">
              <ArrowRight className="h-6 w-6 text-cardinal-600 mr-2" />
              <span className="font-semibold text-neutral-900">
                {language === 'fr' 
                  ? 'Tout ce que nous faisons est transparent, itératif et conçu pour de vraies équipes.'
                  : 'Everything we do is transparent, iterative, and made for real-world teams.'
                }
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'NOTRE PHILOSOPHIE' : 'OUR PHILOSOPHY'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  <span className="gradient-text">Simple. Précis. Évolutif.</span>
                </>
              ) : (
                <>
                  <span className="gradient-text">Simple. Sharp. Scalable.</span>
                </>
              )}
            </h2>
            <p className="body-large text-neutral-600 max-w-3xl mx-auto mb-12">
              {language === 'fr' 
                ? "Nous croyons que l'automatisation d'entreprise devrait être un soulagement—pas un projet. C'est pourquoi tout ce que nous construisons est :"
                : "We believe business automation should feel like a relief—not a project. That's why everything we build is:"
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: language === 'fr' ? 'Simple' : 'Simple',
                desc: language === 'fr' 
                  ? 'assez pour être utilisé sans support technique'
                  : 'enough to use without tech support',
                emoji: '✨'
              },
              {
                title: language === 'fr' ? 'Précis' : 'Sharp',
                desc: language === 'fr' 
                  ? 'assez pour créer de l\'\u00e9lan'
                  : 'enough to create momentum',
                emoji: '⚡'
              },
              {
                title: language === 'fr' ? 'Évolutif' : 'Scalable',
                desc: language === 'fr' 
                  ? 'assez pour grandir avec vous'
                  : 'enough to grow with you',
                emoji: '📈'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-neutral-50 card-hover"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="heading-3 mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-cardinal-50 to-cardinal-100 rounded-3xl p-12"
          >
            <p className="body-large text-cardinal-800 mb-4">
              {language === 'fr' 
                ? "Que nous utilisions des outils no-code comme Make.com ou que nous construisions des agents IA, notre objectif est le même :"
                : "Whether we're using no-code tools like Make.com or building AI agents, our goal is the same:"
              }
            </p>
            <div className="text-2xl font-semibold text-cardinal-900">
              {language === 'fr' 
                ? '✨ Créer de l\'espace pour que votre entreprise grandisse.'
                : '✨ Create space for your business to grow.'
              }
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-32 gradient-cardinal text-white relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-20" />
        <motion.div 
          className="container-custom relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            {language === 'fr' ? 'PRENONS CONTACT' : 'GET IN TOUCH'}
          </div>
          <h2 className="display-2 mb-8">
            {language === 'fr' ? (
              <>
                Nous ne faisons que commencer—<br />
                <span className="text-white/80">et vous aussi.</span>
              </>
            ) : (
              <>
                We're just getting started—<br />
                <span className="text-white/80">and so are you.</span>
              </>
            )}
          </h2>
          
          <p className="body-large mb-12 max-w-3xl mx-auto opacity-90">
            {language === 'fr'
              ? "Nous lançons avec un nombre limité de partenaires précoces. Si vous voulez être l'un des premiers à travailler avec une équipe d'automatisation sans charabia, parlons-nous."
              : "We're launching with a limited number of early partners. If you want to be one of the first to work with a no-fluff automation team, let's talk."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary bg-white text-cardinal-600 hover:bg-neutral-100 group">
              <Calendar className="mr-2 h-5 w-5" />
              {language === 'fr' ? 'Réserver un appel découverte' : 'Book a discovery call'}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 group">
              <MessageCircle className="mr-2 h-5 w-5" />
              {language === 'fr' ? 'Ou envoyez-nous un message avec un processus que vous aimeriez simplifier' : 'Or send us a message with a process you\'d love to simplify'}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
