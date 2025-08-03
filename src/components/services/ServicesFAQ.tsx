import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesFAQ: React.FC = () => {
  const { language } = useLanguage();

  const faqItems = [
    {
      category: language === 'fr' ? 'Questions sur l\'Approche et Méthodologie' : 'Questions about Approach and Methodology',
      questions: [
        {
          q: language === 'fr'
            ? "Comment votre approche diffère-t-elle des grandes firmes de conseil traditionnelles ?"
            : "How does your approach differ from large traditional consulting firms?",
          a: language === 'fr'
            ? "Les grandes firmes excellent dans les méthodologies structurées mais peuvent manquer de souplesse pour s'adapter à la réalité unique de chaque PME. Notre approche reconnaît que les projets IA réussis naissent souvent de l'intuition business et de la volonté d'innover. Nous nous adaptons à votre rythme naturel plutôt que d'imposer des processus rigides. Notre spécialisation PME québécoises nous permet de comprendre vos contraintes réelles et de co-construire des solutions qui font sens pour vous."
            : "Large firms excel in structured methodologies but may lack flexibility to adapt to each SME's unique reality. Our approach recognizes that successful AI projects often arise from business intuition and the will to innovate. We adapt to your natural pace rather than imposing rigid processes. Our Quebec SME specialization allows us to understand your real constraints and co-construct solutions that make sense for you."
        },
        {
          q: language === 'fr'
            ? "Que se passe-t-il si notre projet IA ne donne pas les résultats espérés ?"
            : "What happens if our AI project doesn't deliver expected results?",
          a: language === 'fr'
            ? "Notre approche collaborative inclut des points de validation réguliers avec vous. Si la direction prise ne correspond plus à votre vision ou aux résultats attendus, nous analysons ensemble les causes et ajustons l'approche. L'avantage de notre méthode adaptative est de détecter rapidement les besoins de changement et de pivoter ensemble vers des solutions plus alignées."
            : "Our collaborative approach includes regular validation points with you. If the direction taken no longer corresponds to your vision or expected results, we analyze the causes together and adjust the approach. The advantage of our adaptive method is to quickly detect the need for change and pivot together towards more aligned solutions."
        },
        {
          q: language === 'fr'
            ? "Combien de temps faut-il avant de voir des résultats concrets ?"
            : "How long before seeing concrete results?",
          a: language === 'fr'
            ? "Cela dépend entièrement de votre vision et de votre rythme. Certains clients voient des bénéfices dès les premières semaines avec des \"quick wins\" simples, d'autres préfèrent construire plus graduellement. Notre approche respecte votre cadence naturelle d'adoption. L'important est de livrer de la valeur selon votre définition du succès, pas selon un calendrier imposé."
            : "This depends entirely on your vision and pace. Some clients see benefits from the first weeks with simple \"quick wins\", others prefer to build more gradually. Our approach respects your natural adoption pace. The important thing is to deliver value according to your definition of success, not according to an imposed schedule."
        }
      ]
    },
    {
      category: language === 'fr' ? 'Questions sur l\'Investissement et ROI' : 'Questions about Investment and ROI',
      questions: [
        {
          q: language === 'fr'
            ? "Comment justifier l'investissement en IA à mon conseil d'administration ?"
            : "How to justify AI investment to my board of directors?",
          a: language === 'fr'
            ? "L'accompagnement Découverte est conçu spécifiquement pour cette situation. Nous co-créons un argumentaire solide basé sur votre vision d'entreprise, avec des scénarios réalistes et des comparaisons sectorielles pertinentes. L'approche collaborative facilite l'appropriation par vos équipes dirigeantes et renforce la crédibilité de la démarche. Cette co-construction améliore significativement les chances d'approbation."
            : "The Discovery support is designed specifically for this situation. We co-create a solid argument based on your business vision, with realistic scenarios and relevant sectoral comparisons. The collaborative approach facilitates ownership by your management teams and reinforces the credibility of the approach. This co-construction significantly improves the chances of approval."
        },
        {
          q: language === 'fr'
            ? "Y a-t-il des aides financières disponibles au Québec pour les projets IA ?"
            : "Are there financial aids available in Quebec for AI projects?",
          a: language === 'fr'
            ? "Oui, plusieurs programmes existent : crédit d'impôt R&D (jusqu'à 37.5%), subventions innovation d'Investissement Québec, programmes sectoriels spécifiques. Nous vous accompagnons dans l'identification et les démarches pour ces programmes. Selon les études gouvernementales, 25-40% des coûts de projets IA peuvent potentiellement être couverts par ces programmes, réduisant significativement l'investissement net requis."
            : "Yes, several programs exist: R&D tax credit (up to 37.5%), innovation grants from Investissement Québec, specific sectoral programs. We support you in identifying and applying for these programs. According to government studies, 25-40% of AI project costs can potentially be covered by these programs, significantly reducing the net investment required."
        },
        {
          q: language === 'fr'
            ? "Quel est le retour sur investissement typique des projets IA pour les PME ?"
            : "What is the typical return on investment for AI projects for SMEs?",
          a: language === 'fr'
            ? "Le ROI dépend entièrement de votre définition de la valeur et de vos objectifs spécifiques. Certaines entreprises mesurent le succès par l'efficacité opérationnelle, d'autres par l'amélioration de l'expérience client ou la réduction de stress des équipes. Nous co-définissons avec vous les métriques qui font sens pour votre réalité. Les études sectorielles suggèrent des retours positifs quand les projets sont bien alignés sur les vrais besoins de l'entreprise."
            : "ROI depends entirely on your definition of value and your specific objectives. Some companies measure success by operational efficiency, others by improved customer experience or reduced team stress. We co-define with you the metrics that make sense for your reality. Sectoral studies suggest positive returns when projects are well aligned with the company's real needs."
        }
      ]
    },
    {
      category: language === 'fr' ? 'Questions Techniques et Sécurité' : 'Technical and Security Questions',
      questions: [
        {
          q: language === 'fr'
            ? "Comment gérez-vous la sécurité et la confidentialité des données ?"
            : "How do you manage data security and confidentiality?",
          a: language === 'fr'
            ? "La sécurité est intégrée dès la conception. Nous utilisons : chiffrement end-to-end pour toutes les communications, hébergement des données au Canada (exigence légale), audits sécurité par tierces parties, conformité aux standards SOC2/ISO27001. Chaque client reçoit un plan de sécurité personnalisé selon son niveau de risque et ses exigences réglementaires."
            : "Security is built in from design. We use: end-to-end encryption for all communications, data hosting in Canada (legal requirement), third-party security audits, SOC2/ISO27001 compliance. Each client receives a personalized security plan according to their risk level and regulatory requirements."
        },
        {
          q: language === 'fr'
            ? "Que se passe-t-il si notre fournisseur IT actuel ne peut pas implémenter vos recommandations ?"
            : "What happens if our current IT provider cannot implement your recommendations?",
          a: language === 'fr'
            ? "C'est pourquoi nous maintenons un réseau de partenaires techniques certifiés. Si votre équipe interne ou fournisseur actuel n'a pas l'expertise requise, nous facilitons la transition vers un partenaire qualifié. Nous assurons aussi la formation de vos équipes pour maintenir l'autonomie à long terme."
            : "That's why we maintain a network of certified technical partners. If your internal team or current provider doesn't have the required expertise, we facilitate the transition to a qualified partner. We also ensure training of your teams to maintain long-term autonomy."
        },
        {
          q: language === 'fr'
            ? "Comment s'assurer que nos systèmes existants sont compatibles avec l'IA ?"
            : "How to ensure our existing systems are compatible with AI?",
          a: language === 'fr'
            ? "L'audit technique du Diagnostic Flash évalue spécifiquement la compatibilité de votre infrastructure actuelle. Nous identifions les \"quick wins\" possibles avec l'existant et les investissements nécessaires pour les cas plus complexes. Notre approche privilégie l'intégration progressive plutôt que le remplacement complet des systèmes."
            : "The Flash Diagnosis technical audit specifically evaluates the compatibility of your current infrastructure. We identify possible \"quick wins\" with existing systems and necessary investments for more complex cases. Our approach favors progressive integration rather than complete system replacement."
        }
      ]
    },
    {
      category: language === 'fr' ? 'Questions sur l\'Équipe et le Support' : 'Questions about Team and Support',
      questions: [
        {
          q: language === 'fr'
            ? "Qui sera mon interlocuteur principal pendant le projet ?"
            : "Who will be my main contact during the project?",
          a: language === 'fr'
            ? "Pour les Packages Explorer et Initiateur, vous travaillez directement avec le fondateur. Pour le Package Déployeur, une équipe dédiée est assignée avec un chef de projet principal et des spécialistes selon les besoins. Vous avez toujours un point de contact unique et des communications hebdomadaires planifiées."
            : "For Explorer and Initiator Packages, you work directly with the founder. For the Deployer Package, a dedicated team is assigned with a main project manager and specialists as needed. You always have a single point of contact and planned weekly communications."
        },
        {
          q: language === 'fr'
            ? "Comment gérez-vous la formation de nos équipes ?"
            : "How do you manage our teams' training?",
          a: language === 'fr'
            ? "La formation est intégrée à chaque étape. Nous créons des modules vidéo personnalisés, organisons des sessions pratiques, et désignons des \"super-utilisateurs\" internes qui deviennent ensuite formateurs. L'objectif est votre autonomie progressive. Le support post-déploiement est inclus pendant la période de transition."
            : "Training is integrated at each stage. We create personalized video modules, organize practical sessions, and designate internal \"super-users\" who then become trainers. The goal is your progressive autonomy. Post-deployment support is included during the transition period."
        },
        {
          q: language === 'fr'
            ? "Que se passe-t-il après la fin du projet initial ?"
            : "What happens after the initial project ends?",
          a: language === 'fr'
            ? "Le Package Optimisateur prend le relais pour l'amélioration continue. Même sans abonnement formel, nous maintenons une relation de suivi pour les évolutions futures. L'IA est un domaine en évolution rapide, il est important d'avoir un partenaire qui surveille les innovations applicables à votre contexte."
            : "The Optimizer Package takes over for continuous improvement. Even without a formal subscription, we maintain a follow-up relationship for future evolutions. AI is a rapidly evolving field, it's important to have a partner who monitors innovations applicable to your context."
        }
      ]
    },
    {
      category: language === 'fr' ? 'Questions sur les Secteurs et Applications' : 'Questions about Sectors and Applications',
      questions: [
        {
          q: language === 'fr'
            ? "Travaillez-vous avec des entreprises de ma taille/secteur ?"
            : "Do you work with companies of my size/sector?",
          a: language === 'fr'
            ? "Notre focus est sur les entreprises de 100-499 employés dans les secteurs manufacturier, santé, commerce, et services professionnels. Si votre secteur n'est pas listé, contactez-nous pour évaluer la faisabilité. Notre méthodologie s'adapte à la plupart des contextes business avec ajustements selon spécificités sectorielles."
            : "Our focus is on companies with 100-499 employees in manufacturing, healthcare, commerce, and professional services sectors. If your sector is not listed, contact us to evaluate feasibility. Our methodology adapts to most business contexts with adjustments according to sectoral specificities."
        },
        {
          q: language === 'fr'
            ? "L'IA peut-elle vraiment s'appliquer à mon industrie traditionnelle ?"
            : "Can AI really apply to my traditional industry?",
          a: language === 'fr'
            ? "L'IA trouve des applications dans pratiquement tous les secteurs. Les industries \"traditionnelles\" ont souvent le plus à gagner car elles sont moins digitalisées. Les cas d'usage typiques incluent : prédiction de demande, optimisation logistique, maintenance prédictive, automatisation administrative, amélioration qualité. L'important est d'identifier les bonnes opportunités."
            : "AI finds applications in virtually all sectors. \"Traditional\" industries often have the most to gain because they are less digitized. Typical use cases include: demand prediction, logistics optimization, predictive maintenance, administrative automation, quality improvement. The important thing is to identify the right opportunities."
        },
        {
          q: language === 'fr'
            ? "Comment vous assurez-vous de la conformité réglementaire spécifique à mon secteur ?"
            : "How do you ensure regulatory compliance specific to my sector?",
          a: language === 'fr'
            ? "Notre réseau inclut des experts juridiques spécialisés par secteur (santé, finance, industrie). Chaque projet intègre une revue de conformité dès la phase de diagnostic. Nous maintenons une veille réglementaire active et adaptons les solutions aux exigences évolutives. La conformité n'est pas un add-on mais un prérequis de conception."
            : "Our network includes legal experts specialized by sector (health, finance, industry). Each project integrates a compliance review from the diagnostic phase. We maintain active regulatory monitoring and adapt solutions to evolving requirements. Compliance is not an add-on but a design prerequisite."
        }
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
              ? 'Questions Fréquentes - Tout Ce Que Vous Devez Savoir'
              : 'Frequently Asked Questions - Everything You Need to Know'}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqItems.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-cardinal-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-cardinal-600" />
                </div>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="bg-white rounded-xl p-6 border border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 mb-3">{item.q}</h4>
                    <p className="text-neutral-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
