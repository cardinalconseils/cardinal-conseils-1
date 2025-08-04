import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Zap,
  Target,
  TrendingUp,
  ChevronRight,
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
                  Transformez votre façon<br />
                  <span className="gradient-text">de travailler</span><br />
                  <span className="text-neutral-600">avec l'automatisation intelligente</span>
                </>
              ) : (
                <>
                  Transform the way<br />
                  <span className="gradient-text">you work</span><br />
                  <span className="text-neutral-600">with intelligent automation</span>
                </>
              )}
            </h1>
            
            <p className="body-large text-neutral-600 max-w-2xl mb-12">
              {language === 'fr'
                ? "Imaginez une équipe libérée des tâches répétitives, qui peut enfin se consacrer à l'innovation et à la croissance. Nous rendons cette vision possible grâce à des solutions d'automatisation sur mesure, conçues pour s'intégrer harmonieusement à votre façon de travailler."
                : "Imagine a team freed from repetitive tasks, finally able to focus on innovation and growth. We make this vision possible through custom automation solutions designed to integrate seamlessly with your way of working."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                <Calendar className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Explorons vos possibilités' : 'Explore your possibilities'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="#how-we-work" className="btn-secondary group">
                <Brain className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Découvrir notre méthode' : 'Discover our approach'}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-32 bg-white">
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
                  L'excellence dans<br />
                  <span className="gradient-text">la simplicité</span>
                  </>
                ) : (
                  <>
                  Excellence through<br />
                  <span className="gradient-text">simplicity</span>
                  </>
                )}
              </h2>
                                                                                    <p className="body-large text-neutral-600 max-w-4xl mx-auto mb-12">
                {language === 'fr' 
                ? "Nous croyons qu'une technologie bien pensée doit disparaître dans l'expérience quotidienne, permettant à vos équipes de retrouver leur créativité et leur impact. Notre mission est de créer des solutions élégantes qui transforment naturellement votre façon de travailler, sans jamais la contraindre."
                : "We believe that well-designed technology should disappear into the daily experience, allowing your teams to rediscover their creativity and impact. Our mission is to create elegant solutions that naturally transform the way you work, without ever constraining it."
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
              {language === 'fr' ? 'Notre parcours ensemble' : 'Our journey together'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                                                                {
                  icon: Map,
                  title: language === 'fr' ? 'Écouter et observer' : 'Listen and observe',
                  emoji: '👂'
                },
                {
                  icon: Building2,
                  title: language === 'fr' ? 'Concevoir ensemble' : 'Design together',
                  emoji: '✨'
                },
                {
                  icon: Rocket,
                  title: language === 'fr' ? 'Créer avec élégance' : 'Create with elegance',
                  emoji: '🎨'
                },
                {
                  icon: HeartHandshake,
                  title: language === 'fr' ? 'Accompagner la transformation' : 'Guide the transformation',
                  emoji: '🌱'
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
                ? "Nous privilégions les partenariats avec des organisations visionnaires qui croient que l'excellence opérationnelle est la clé de leur succès futur. Si vous partagez cette vision et êtes prêt à investir dans la transformation de votre façon de travailler, nous aimerions explorer ensemble ce qui est possible."
                : "We partner with visionary organizations that believe operational excellence is the key to their future success. If you share this vision and are ready to invest in transforming how you work, we'd love to explore together what's possible."
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
              {language === 'fr' ? 'L\'IMPACT QUE NOUS CRÉONS' : 'THE IMPACT WE CREATE'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  Des transformations<br />
                  <span className="gradient-text">qui changent tout</span>
                </>
              ) : (
                <>
                  Transformations<br />
                  <span className="gradient-text">that change everything</span>
                </>
              )}
            </h2>
                                                                        <p className="body-large text-neutral-600 max-w-4xl mx-auto">
              {language === 'fr'
                ? "Au-delà des gains d'efficacité, nous créons des expériences de travail qui redonnent du sens et de la joie au quotidien. Chaque solution que nous concevons vise à révéler le potentiel inexploité de votre équipe et à ouvrir de nouveaux horizons pour votre organisation."
                : "Beyond efficiency gains, we create work experiences that bring meaning and joy back to daily operations. Every solution we design aims to unlock your team's untapped potential and open new horizons for your organization."
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: language === 'fr' ? 'Libérer le potentiel créatif' : 'Unleash creative potential',
                description: language === 'fr' 
                  ? "Imaginez vos équipes enfin libérées des tâches fastidieuses, retrouvant leur énergie créatrice pour innover, résoudre des défis complexes et créer de la valeur authentique. C'est cette transformation que nous rendons possible."
                  : "Imagine your teams finally freed from tedious tasks, rediscovering their creative energy to innovate, solve complex challenges, and create authentic value. This is the transformation we make possible.",
                emoji: '🤝'
              },
              {
                icon: Target,
                title: language === 'fr' ? 'Excellence opérationnelle fluide' : 'Seamless operational excellence',
                description: language === 'fr' 
                  ? "Nous orchestrons une transformation en douceur où chaque amélioration s'intègre naturellement dans votre écosystème existant. Résultat : une efficacité remarquable sans disruption, une croissance qui semble presque magique."
                  : "We orchestrate a smooth transformation where every improvement integrates naturally into your existing ecosystem. Result: remarkable efficiency without disruption, growth that feels almost magical.",
                emoji: '📋'
              },
              {
                icon: TrendingUp,
                title: language === 'fr' ? 'Autonomie et maîtrise durable' : 'Lasting autonomy and mastery',
                description: language === 'fr' 
                  ? "Nous transférons plus que des outils : nous cultivons une culture d'innovation continue au sein de votre équipe. Nos collaborateurs deviennent les architectes de leurs propres améliorations, créant un cercle vertueux d'évolution permanente."
                  : "We transfer more than tools: we cultivate a culture of continuous innovation within your team. Your colleagues become architects of their own improvements, creating a virtuous circle of permanent evolution.",
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
              {language === 'fr' ? 'Une collaboration qui fait la différence' : 'A collaboration that makes the difference'}
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-bold mb-3">
                  {language === 'fr' ? '🚫 Consultant traditionnel:' : '🚫 Traditional consultant:'}
                </h4>
                <ul className="space-y-2 opacity-90">
                  <li>{language === 'fr' ? '• PowerPoint de 200 slides, implémentation 0%' : '• 200-slide PowerPoint, 0% implementation'}</li>
                  <li>{language === 'fr' ? '• Facture plus pour rester plus longtemps' : '• Bills more to stay longer'}</li>
                  <li>{language === 'fr' ? '• Solutions génériques qui ne marchent jamais' : '• Generic solutions that never work'}</li>
                  <li>{language === 'fr' ? '• Vous rend dépendant de leurs services' : '• Makes you dependent on their services'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">
                  {language === 'fr' ? '✅ Directeur à temps partiel:' : '✅ Part-time director:'}
                </h4>
                <ul className="space-y-2 opacity-90">
                  <li>{language === 'fr' ? '• Implémentation 98%, théorie 2%' : '• 98% implementation, 2% theory'}</li>
                  <li>{language === 'fr' ? '• Objectif: vous rendre autonome rapidement' : '• Goal: make you independent quickly'}</li>
                  <li>{language === 'fr' ? '• Solutions sur mesure qui fonctionnent vraiment' : '• Custom solutions that actually work'}</li>
                  <li>{language === 'fr' ? '• Garantie résultats ou remboursement' : '• Results guaranteed or money back'}</li>
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
