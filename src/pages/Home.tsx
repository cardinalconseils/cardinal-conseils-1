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
  CheckCircle
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
                  Automatisation des<br />
                  <span className="text-neutral-600">processus d'affaires</span><br />
                  <span className="gradient-text">avec l'IA</span>
                </>
              ) : (
                <>
                  Business Process<br />
                  <span className="text-neutral-600">Automation</span><br />
                  <span className="gradient-text">with AI</span>
                </>
              )}
            </h1>
            
            <p className="body-large text-neutral-600 max-w-2xl mb-12">
              {language === 'fr'
                ? "Nous automatisons vos tâches répétitives, optimisons vos workflows et implémentons l'IA pour transformer radicalement votre productivité."
                : "We automate your repetitive tasks, optimize your workflows and implement AI to radically transform your productivity."
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary group">
                {language === 'fr' ? 'Analyser mes processus' : 'Analyze my processes'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-secondary">
                {language === 'fr' ? 'Voir les cas d\'usage' : 'See use cases'}
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Business Process Automation */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="display-2 mb-8">
                {language === 'fr' ? (
                  <>
                    Automatisation des<br />
                    <span className="text-neutral-600">processus métiers</span>
                  </>
                ) : (
                  <>
                    Business Process<br />
                    <span className="text-neutral-600">Automation</span>
                  </>
                )}
              </h2>
              <p className="body-large text-neutral-600 mb-8">
                {language === 'fr' 
                  ? "Identifiez et éliminez les goulots d'étranglement dans vos opérations. Nous analysons vos processus actuels et implémentons des solutions d'automatisation sur mesure."
                  : "Identify and eliminate bottlenecks in your operations. We analyze your current processes and implement custom automation solutions."
                }
              </p>
              <div className="space-y-6">
                {[
                  { 
                    icon: FileText, 
                    text: language === 'fr' 
                      ? "Automatisation des factures et bons de commande" 
                      : "Invoice and purchase order automation"
                  },
                  { 
                    icon: Users, 
                    text: language === 'fr'
                      ? "Gestion automatisée des ressources humaines"
                      : "Automated human resources management"
                  },
                  { 
                    icon: Workflow, 
                    text: language === 'fr'
                      ? "Workflows d'approbation intelligents"
                      : "Intelligent approval workflows"
                  },
                  { 
                    icon: Clock, 
                    text: language === 'fr'
                      ? "Réduction de 70% du temps de traitement"
                      : "70% reduction in processing time"
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
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-cardinal-600" />
                    </div>
                    <span className="body text-neutral-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                  alt="Business process automation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
              >
                <DollarSign className="h-8 w-8 text-cardinal-600 mb-3" />
                <h3 className="heading-3 mb-2">
                  {language === 'fr' ? 'ROI en 3 mois' : 'ROI in 3 months'}
                </h3>
                <p className="caption">
                  {language === 'fr' 
                    ? 'Retour sur investissement garanti avec nos solutions d\'automatisation'
                    : 'Guaranteed return on investment with our automation solutions'
                  }
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Examples */}
      <section className="py-32 gradient-neutral">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-2 mb-6">
              {language === 'fr' ? (
                <>
                  Processus que nous<br />
                  <span className="gradient-text">automatisons</span>
                </>
              ) : (
                <>
                  Processes we<br />
                  <span className="gradient-text">automate</span>
                </>
              )}
            </h2>
            <p className="body-large text-neutral-600 max-w-3xl mx-auto">
              {language === 'fr'
                ? "De la comptabilité aux ventes, nous transformons chaque département avec l'automatisation intelligente"
                : "From accounting to sales, we transform every department with intelligent automation"
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: language === 'fr' ? "Traitement des documents" : "Document Processing",
                desc: language === 'fr' 
                  ? "Extraction automatique de données, classification et archivage intelligent"
                  : "Automatic data extraction, classification and intelligent archiving",
                examples: language === 'fr' 
                  ? ["Factures", "Contrats", "Formulaires"] 
                  : ["Invoices", "Contracts", "Forms"]
              },
              {
                icon: Users,
                title: language === 'fr' ? "Gestion RH" : "HR Management",
                desc: language === 'fr'
                  ? "Automatisation du recrutement, onboarding et gestion des congés"
                  : "Recruitment automation, onboarding and leave management",
                examples: language === 'fr' 
                  ? ["CV screening", "Planification", "Paie"] 
                  : ["Resume screening", "Scheduling", "Payroll"]
              },
              {
                icon: Bot,
                title: language === 'fr' ? "Service client" : "Customer Service",
                desc: language === 'fr'
                  ? "Chatbots IA, réponses automatiques et routage intelligent"
                  : "AI chatbots, automatic responses and intelligent routing",
                examples: language === 'fr' 
                  ? ["Support 24/7", "FAQ dynamique", "Escalade auto"] 
                  : ["24/7 Support", "Dynamic FAQ", "Auto escalation"]
              },
              {
                icon: Zap,
                title: language === 'fr' ? "Ventes & Marketing" : "Sales & Marketing",
                desc: language === 'fr'
                  ? "Lead scoring, campagnes automatisées et rapports en temps réel"
                  : "Lead scoring, automated campaigns and real-time reporting",
                examples: ["CRM", "Email automation", "Analytics"]
              },
              {
                icon: Shield,
                title: language === 'fr' ? "Conformité" : "Compliance",
                desc: language === 'fr'
                  ? "Audits automatisés, suivi réglementaire et rapports de conformité"
                  : "Automated audits, regulatory tracking and compliance reports",
                examples: ["RGPD/GDPR", "ISO", "SOC 2"]
              },
              {
                icon: Target,
                title: language === 'fr' ? "Opérations" : "Operations",
                desc: language === 'fr'
                  ? "Gestion des stocks, logistique et planification de production"
                  : "Inventory management, logistics and production planning",
                examples: language === 'fr' 
                  ? ["Inventaire", "Commandes", "Livraisons"] 
                  : ["Inventory", "Orders", "Deliveries"]
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 card-hover"
              >
                <process.icon className="h-12 w-12 text-cardinal-600 mb-4" />
                <h3 className="heading-3 mb-3">{process.title}</h3>
                <p className="body text-neutral-600 mb-4">{process.desc}</p>
                <div className="space-y-2">
                  {process.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-cardinal-600" />
                      <span className="caption text-neutral-700">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-ghost group">
              {language === 'fr' 
                ? 'Découvrir tous nos cas d\'usage'
                : 'Discover all our use cases'
              }
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Implementation Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="AI implementation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="display-2 mb-8">
                {language === 'fr' ? (
                  <>
                    Implémentation<br />
                    <span className="text-neutral-600">d'IA sur mesure</span>
                  </>
                ) : (
                  <>
                    Custom AI<br />
                    <span className="text-neutral-600">Implementation</span>
                  </>
                )}
              </h2>
              <p className="body-large text-neutral-600 mb-8">
                {language === 'fr' 
                  ? "Intégrez les dernières avancées en IA directement dans vos processus métiers. Nous développons des solutions personnalisées qui s'adaptent à votre contexte unique."
                  : "Integrate the latest AI advances directly into your business processes. We develop customized solutions that adapt to your unique context."
                }
              </p>
              <div className="space-y-6">
                {[
                  { 
                    icon: Brain, 
                    title: language === 'fr' ? "IA prédictive" : "Predictive AI",
                    desc: language === 'fr' 
                      ? "Anticipez les tendances et optimisez vos décisions" 
                      : "Anticipate trends and optimize your decisions"
                  },
                  { 
                    icon: Bot, 
                    title: language === 'fr' ? "Agents intelligents" : "Intelligent agents",
                    desc: language === 'fr'
                      ? "Assistants virtuels qui comprennent votre business"
                      : "Virtual assistants that understand your business"
                  },
                  { 
                    icon: Sparkles, 
                    title: language === 'fr' ? "IA générative" : "Generative AI",
                    desc: language === 'fr'
                      ? "Création de contenu et génération de rapports automatisés"
                      : "Content creation and automated report generation"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-neutral-50 rounded-xl p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <item.icon className="h-8 w-8 text-cardinal-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                        <p className="text-neutral-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 noise opacity-20" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="display-2 mb-6">
              {language === 'fr' ? 'Résultats concrets' : 'Concrete results'}
            </h2>
            <p className="body-large opacity-80 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Nos clients constatent des améliorations mesurables dès les premières semaines"
                : "Our clients see measurable improvements from the first weeks"
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                value: "70%", 
                label: language === 'fr' ? "Réduction du temps de traitement" : "Processing time reduction" 
              },
              { 
                value: "45%", 
                label: language === 'fr' ? "Économies sur les coûts opérationnels" : "Operational cost savings" 
              },
              { 
                value: "95%", 
                label: language === 'fr' ? "Précision des tâches automatisées" : "Automated task accuracy" 
              },
              { 
                value: "3x", 
                label: language === 'fr' ? "Augmentation de la productivité" : "Productivity increase" 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 gradient-cardinal text-white relative overflow-hidden">
        <motion.div 
          className="container-custom relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-2 mb-8">
            {language === 'fr' ? (
              <>
                Commencez votre<br />
                transformation digitale
              </>
            ) : (
              <>
                Start your<br />
                digital transformation
              </>
            )}
          </h2>
          
          <p className="body-large mb-12 max-w-2xl mx-auto opacity-90">
            {language === 'fr'
              ? "Audit gratuit de vos processus et recommandations personnalisées pour votre entreprise"
              : "Free audit of your processes and personalized recommendations for your business"
            }
          </p>
          
          <Link to="/contact" className="btn-primary bg-white text-cardinal-600 hover:bg-neutral-100 group">
            {language === 'fr' ? 'Obtenir mon audit gratuit' : 'Get my free audit'}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
