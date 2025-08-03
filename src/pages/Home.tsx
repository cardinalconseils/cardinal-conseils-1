import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles,
  Zap,
  Target,
  Shield,
  TrendingUp,
  ChevronRight,
  Bot,
  Workflow,
  Brain,
  FileText,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
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
  const { t, language } = useLanguage();
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
                ? "Nous aidons les entreprises à simplifier et développer leurs opérations grâce à la cartographie intelligente des processus, l'automatisation et l'IA—sans le charabia du conseil traditionnel."
                : "We help businesses simplify and scale their operations through smart process mapping, automation, and AI—without the fluff of traditional consulting."
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
                  Pas une agence. Pas un freelance.<br />
                  <span className="gradient-text">Nous sommes votre équipe d'impact.</span>
                </>
              ) : (
                <>
                  Not an agency. Not a freelancer.<br />
                  <span className="gradient-text">We're your Impact Team.</span>
                </>
              )}
            </h2>
            <p className="body-large text-neutral-600 max-w-4xl mx-auto mb-12">
              {language === 'fr' 
                ? "Une équipe d'impact est une unité ciblée de penseurs, de constructeurs et d'opérateurs qui s'intègrent directement dans votre entreprise pour livrer de l'automatisation avec de vrais résultats."
                : "An Impact Team is a focused unit of thinkers, builders, and operators who embed directly into your business to deliver automation with real outcomes."
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
                ? "Conçu pour les fondateurs, les opérateurs et les équipes surchargées qui ont besoin d'avancer rapidement, avec clarté."
                : "Built for founders, operators, and overworked teams who need to move fast, with clarity."
              }
            </p>
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
