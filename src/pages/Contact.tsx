import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Clock,
  Calendar,
  Send
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
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
    
    // EmailJS configuration (these will be environment variables)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_key';
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'info@cardinalconseils.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: language === 'fr' 
        ? `Nouvelle demande de contact - ${formData.company}` 
        : `New contact request - ${formData.company}`,
      company: formData.company,
      sector: formData.sector,
      employees: formData.employees,
      phone: formData.phone,
      budget: formData.budget,
      message: formData.description,
      language: language,
      // Additional context for the email template
      full_name: `${formData.firstName} ${formData.lastName}`,
      contact_email: formData.email,
      project_description: formData.description,
      estimated_budget: formData.budget
    };
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      if (response.status === 200) {
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
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Reset error status after 10 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 10000);
    } finally {
      setIsSubmitting(false);
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
              {language === 'fr' ? 'Prenons contact' : 'Let\'s get in touch'}
            </h1>
            <div className="bg-cardinal-100 border-l-4 border-cardinal-600 p-6 rounded-r-lg">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                {language === 'fr' ? 'Consultation initiale gratuite' : 'Free initial consultation'}
              </h2>
              <div className="space-y-2 text-neutral-700">
                <p className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-cardinal-600" />
                  <span>
                    <strong>{language === 'fr' ? 'Durée :' : 'Duration:'}</strong> 30 minutes
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-cardinal-600" />
                  <span>
                    <strong>Format :</strong> {language === 'fr' ? 'Visioconférence ou en personne (région de Montréal)' : 'Video conference or in person (Montreal area)'}
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-cardinal-600" />
                  <span>
                    <strong>{language === 'fr' ? 'Objectif :' : 'Objective:'}</strong> {language === 'fr' ? 'Comprendre votre contexte et identifier les opportunités' : 'Understand your context and identify opportunities'}
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
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
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
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
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
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
              <div className="bg-cardinal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
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
