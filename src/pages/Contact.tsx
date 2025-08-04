import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Clock,
  Calendar,
  Send,
  ArrowRight,
  ChevronRight,
  Brain
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    sector: '',
    employees: '',
    phone: '',
    email: '',
    description: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Determine API URL based on environment
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/contact'  // Development server
        : 'https://cardinal-conseils-1-production.up.railway.app/api/contact';  // Production (Railway)

      // Send form data to our Resend API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language: language
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            company: '',
            sector: '',
            employees: '',
            phone: '',
            email: '',
            description: '',
            budget: ''
          });
          setSubmitStatus('idle');
        }, 5000);
      } else {
        // Handle API errors with specific messages
        setSubmitStatus('error');
        console.error('Contact form error:', data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset error status after 10 seconds
      if (submitStatus === 'error') {
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 10000);
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: language === 'fr' ? 'Région' : 'Region',
      value: language === 'fr' ? 'Grand Montréal, Québec' : 'Greater Montreal, Quebec'
    },
    {
      icon: Mail,
      label: language === 'fr' ? 'Courriel' : 'Email',
      value: 'info@cardinalconseils.com'
    },
    {
      icon: Phone,
      label: language === 'fr' ? 'Téléphone' : 'Phone',
      value: '514-622-6631'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Cardinal Conseils'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Professional gradient background with improved readability */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2000&q=80&sat=-100')`
            }}
          />
          <div className="absolute inset-0 gradient-neutral noise opacity-30" />
          {/* Additional text readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        </div>
        
        <motion.div 
          className="container-custom relative z-10 pt-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="display-1 mb-8 text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              {language === 'fr' ? (
                <>
                  Prenons<br />
                  <span className="gradient-text">contact</span><br />
                  <span className="text-neutral-100">ensemble</span>
                </>
              ) : (
                <>
                  Let's get<br />
                  <span className="gradient-text">in touch</span><br />
                  <span className="text-neutral-100">together</span>
                </>
              )}
            </h1>
            
            <p className="body-large text-neutral-100 max-w-2xl mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              {language === 'fr'
                ? "Consultation initiale gratuite de 30 minutes pour comprendre votre contexte et identifier les opportunités d'automatisation."
                : "Free 30-minute initial consultation to understand your context and identify automation opportunities."
              }
            </p>

            <div className="glass rounded-2xl p-6 mb-12 max-w-2xl">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-white">
                  <Clock className="h-4 w-4 text-neutral-300" />
                  <span>
                    <strong>{language === 'fr' ? 'Durée :' : 'Duration:'}</strong> 30 min
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Calendar className="h-4 w-4 text-neutral-300" />
                  <span>
                    <strong>Format :</strong> {language === 'fr' ? 'Vidéo/Personne' : 'Video/In-person'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Brain className="h-4 w-4 text-neutral-300" />
                  <span>
                    <strong>{language === 'fr' ? 'Objectif :' : 'Goal:'}</strong> {language === 'fr' ? 'Opportunités' : 'Opportunities'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="btn-primary group">
                <Send className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Commencer maintenant' : 'Get started now'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="mailto:info@cardinalconseils.com" className="btn-secondary group bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Mail className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Écrivez-nous directement' : 'Email us directly'}
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-32 gradient-neutral">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="card card-hover p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  {language === 'fr' ? 'Formulaire de contact' : 'Contact form'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Prénom *' : 'First name *'}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Nom *' : 'Last name *'}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Entreprise *' : 'Company *'}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Secteur d\'activité *' : 'Industry sector *'}
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    >
                      <option value="">{language === 'fr' ? 'Sélectionnez' : 'Select'}</option>
                      <option value="manufacturing">{language === 'fr' ? 'Manufacturier' : 'Manufacturing'}</option>
                      <option value="commerce">{language === 'fr' ? 'Commerce et distribution' : 'Commerce and distribution'}</option>
                      <option value="services">{language === 'fr' ? 'Services professionnels' : 'Professional services'}</option>
                      <option value="health">{language === 'fr' ? 'Santé' : 'Healthcare'}</option>
                      <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Nombre d\'employés' : 'Number of employees'}
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    >
                      <option value="">{language === 'fr' ? 'Sélectionnez' : 'Select'}</option>
                      <option value="10-50">10-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-200">101-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Téléphone' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Courriel *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Décrivez brièvement votre défi ou votre projet' : 'Briefly describe your challenge or project'}
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {language === 'fr' ? 'Budget approximatif envisagé' : 'Approximate budget considered'}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-cardinal-500 focus:border-cardinal-500 transition-colors"
                    >
                      <option value="">{language === 'fr' ? 'Sélectionnez' : 'Select'}</option>
                      <option value="<10k">{language === 'fr' ? 'Moins de 10 000$' : 'Less than $10,000'}</option>
                      <option value="10k-25k">{language === 'fr' ? '10 000$ - 25 000$' : '$10,000 - $25,000'}</option>
                      <option value="25k-50k">{language === 'fr' ? '25 000$ - 50 000$' : '$25,000 - $50,000'}</option>
                      <option value="50k+">{language === 'fr' ? 'Plus de 50 000$' : 'More than $50,000'}</option>
                    </select>
                  </div>
                </div>
                
                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      {language === 'fr' 
                        ? '✅ Votre message a été envoyé avec succès ! Nous vous contacterons sous peu.' 
                        : '✅ Your message has been sent successfully! We will contact you shortly.'}
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      {language === 'fr' 
                        ? '❌ Erreur lors de l\'envoi du message. Veuillez réessayer ou nous contacter directement à info@cardinalconseils.com' 
                        : '❌ Error sending message. Please try again or contact us directly at info@cardinalconseils.com'}
                    </p>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-8 btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {language === 'fr' ? 'Envoi en cours...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {language === 'fr' ? 'Envoyer le message' : 'Send message'}
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="card card-hover p-8">
                <h3 className="heading-2 text-neutral-900 mb-6">
                  {language === 'fr' ? 'Coordonnées' : 'Contact information'}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <info.icon className="h-5 w-5 text-cardinal-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-neutral-900">{info.label}</p>
                        <p className="text-neutral-700">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card bg-cardinal-50 border-cardinal-100 p-8">
                <h3 className="heading-2 text-neutral-900 mb-6">
                  {language === 'fr' ? 'Disponibilités' : 'Availability'}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-neutral-900">
                      {language === 'fr' ? 'Lundi au vendredi' : 'Monday to Friday'}
                    </p>
                    <p className="text-neutral-700">
                      {language === 'fr' ? '9h à 17h (HNE)' : '9 AM to 5 PM (EST)'}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900">
                      {language === 'fr' ? 'Consultations d\'urgence' : 'Emergency consultations'}
                    </p>
                    <p className="text-neutral-700">
                      {language === 'fr' ? 'Sur rendez-vous' : 'By appointment'}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-600">
                  {language === 'fr'
                    ? 'Les premières consultations se font généralement par visioconférence. Pour les projets en cours, je me déplace selon les besoins.'
                    : 'Initial consultations are usually done by video conference. For ongoing projects, I travel as needed.'}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
