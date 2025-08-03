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
                  Si vous êtes une entreprise de 2M$+<br />
                  qui perd <span className="gradient-text">20+ heures/semaine</span><br />
                  <span className="text-neutral-600">sur des tâches répétitives...</span>
                </>
              ) : (
                <>
                  If you're a $2M+ business<br />
                  wasting <span className="gradient-text">20+ hours/week</span><br />
                  <span className="text-neutral-600">on repetitive tasks...</span>
                </>
              )}
            </h1>
            
            <p className="body-large text-neutral-600 max-w-2xl mb-12">
              {language === 'fr'
                ? "Je vous montre comment récupérer 15-25 heures/semaine par employé avec le Système d'Automatisation Cardinal - même si vous pensez que 'votre cas est différent'. Garanti en 90 jours ou vous ne payez rien."
                : "I'll show you how to get back 15-25 hours/week per employee with the Cardinal Automation System - even if you think 'your case is different'. Guaranteed in 90 days or you pay nothing."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                <Calendar className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Récupérer 20+ heures/semaine (Appel gratuit)' : 'Get Back 20+ Hours/Week (Free Call)'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="#cardinal-system" className="btn-secondary group">
                <Brain className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Comment fonctionne le système' : 'How The System Works'}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* The Cardinal System */}
      <section id="cardinal-system" className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
                                    <div className="inline-block bg-cardinal-100 text-cardinal-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {language === 'fr' ? 'LE SYSTÈME CARDINAL' : 'THE CARDINAL SYSTEM'}
            </div>
              <h2 className="display-2 mb-8">
                {language === 'fr' ? (
                  <>
                  Le système en 4 étapes pour récupérer<br />
                  <span className="gradient-text">15-25 heures par employé, chaque semaine</span>
                  </>
                ) : (
                  <>
                  The 4-step system to get back<br />
                  <span className="gradient-text">15-25 hours per employee, every week</span>
                  </>
                )}
              </h2>
                                                            <p className="body-large text-neutral-600 max-w-4xl mx-auto mb-12">
                {language === 'fr' 
                ? "Voici la méthode exacte que j'ai utilisée avec 50+ entreprises de 2M$+ pour récupérer 340+ heures par mois (par équipe). Cette méthode fonctionne même si vous avez des processus 'complexes', des équipes résistantes au changement, ou si vous pensez que 'l'automatisation ne marchera jamais chez nous'."
                : "Here's the exact method I've used with 50+ companies worth $2M+ to get back 340+ hours per month (per team). This method works even if you have 'complex' processes, teams resistant to change, or if you think 'automation will never work for us'."
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
              {language === 'fr' ? 'Les 4 étapes du Système Cardinal :' : 'The 4 Steps of The Cardinal System:'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                                {
                  icon: Map,
                  title: language === 'fr' ? 'ÉTAPE 1: Audit des Goulots d\'Étranglement (Jour 1-7)' : 'STEP 1: Bottleneck Audit (Day 1-7)',
                  emoji: '🔍'
                },
                {
                  icon: Building2,
                  title: language === 'fr' ? 'ÉTAPE 2: Conception du Système (Jour 8-21)' : 'STEP 2: System Design (Day 8-21)',
                  emoji: '🏗️'
                },
                {
                  icon: Rocket,
                  title: language === 'fr' ? 'ÉTAPE 3: Implémentation Automatisée (Jour 22-60)' : 'STEP 3: Automated Implementation (Day 22-60)',
                  emoji: '🚀'
                },
                {
                  icon: HeartHandshake,
                  title: language === 'fr' ? 'ÉTAPE 4: Transfert & Autonomie (Jour 61-90)' : 'STEP 4: Handoff & Independence (Day 61-90)',
                  emoji: '🎯'
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
                ? "ATTENTION: Ce système ne fonctionne que pour les entreprises de 2M$+ avec minimum 10 employés qui perdent 20+ heures/semaine sur des tâches répétitives. Si vous cherchez une solution miracle ou si vous n'êtes pas prêt à investir 90 jours dans l'implémentation, ne perdez pas votre temps."
                : "WARNING: This system only works for $2M+ businesses with minimum 10 employees wasting 20+ hours/week on repetitive tasks. If you're looking for a magic bullet or not ready to invest 90 days in implementation, don't waste your time."
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
              {language === 'fr' ? 'RÉSULTATS GARANTIS EN 90 JOURS' : 'RESULTS GUARANTEED IN 90 DAYS'}
            </div>
            <h2 className="display-2 mb-8">
              {language === 'fr' ? (
                <>
                  Voici exactement ce que vous obtenez<br />
                  <span className="gradient-text">quand vous implémentez le Système Cardinal</span>
                </>
              ) : (
                <>
                  Here's exactly what you get<br />
                  <span className="gradient-text">when you implement The Cardinal System</span>
                </>
              )}
            </h2>
                                                <p className="body-large text-neutral-600 max-w-4xl mx-auto">
              {language === 'fr'
                ? "GARANTIE : Dans les 90 premiers jours, vous récupérez minimum 15 heures/semaine par employé ou vous ne payez rien. Pas de recommandations PowerPoint. Pas de 'phase 2' coûteuse. Juste des systèmes automatisés qui fonctionnent immédiatement et que votre équipe peut gérer sans moi."
                : "GUARANTEE: Within the first 90 days, you get back minimum 15 hours/week per employee or you pay nothing. No PowerPoint recommendations. No expensive 'phase 2'. Just automated systems that work immediately and your team can manage without me."
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: language === 'fr' ? '15-25 Heures Récupérées/Semaine' : '15-25 Hours Recovered/Week',
                description: language === 'fr' 
                  ? "RÉSULTAT GARANTI: Chaque employé récupère 15-25 heures par semaine qu'il gaspillait sur des tâches répétitives. Ces heures sont réinvesties dans des activités à haute valeur ajoutée qui font croître votre entreprise. Mesuré et vérifié après 30 jours."
                  : "GUARANTEED RESULT: Each employee gets back 15-25 hours per week they were wasting on repetitive tasks. These hours are reinvested in high-value activities that grow your business. Measured and verified after 30 days.",
                emoji: '🤝'
              },
              {
                icon: Target,
                title: language === 'fr' ? '98% de Projets Livrés en 90 Jours' : '98% Projects Delivered in 90 Days',
                description: language === 'fr' 
                  ? "TRACK RECORD PROUVÉ: 98% de mes projets d'automatisation sont complétés dans les 90 jours (vs 18+ mois pour les consultants traditionnels). Vous savez exactement quand ça sera fini, combien ça coûte, et quels résultats attendre. Pas de surprises, pas de dépassements."
                  : "PROVEN TRACK RECORD: 98% of my automation projects are completed within 90 days (vs 18+ months for traditional consultants). You know exactly when it'll be done, what it costs, and what results to expect. No surprises, no overruns.",
                emoji: '📋'
              },
              {
                icon: TrendingUp,
                title: language === 'fr' ? '100% Autonomie en 6 Mois' : '100% Independence in 6 Months',
                description: language === 'fr' 
                  ? "OBJECTIF FINAL: Votre équipe maîtrise 100% des systèmes automatisés que je construis. Dans 6 mois, vous gérez tout sans moi. Pas de dépendance permanente, pas de frais récurrents cachés. Vous payez une fois, vous en bénéficiez pour toujours."
                  : "FINAL OBJECTIVE: Your team masters 100% of the automated systems I build. In 6 months, you manage everything without me. No permanent dependency, no hidden recurring fees. You pay once, you benefit forever.",
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
              {language === 'fr' ? 'Pourquoi le Système Cardinal bat tous les autres' : 'Why The Cardinal System beats everyone else'}
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
