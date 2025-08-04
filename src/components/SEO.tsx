import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image = '/2025_Cardinal_Conseils_LOGO_BLK_200x48.png',
  type = 'website'
}) => {
  const { language } = useLanguage();
  
  const defaultMeta = {
    fr: {
      siteName: 'Cardinal Conseils',
      defaultTitle: 'Cardinal Conseils - Excellence Opérationnelle par l\'Automatisation Intelligente',
      defaultDescription: 'Transformez votre organisation avec l\'automatisation intelligente et l\'IA stratégique. Experts en processus, systèmes téléphoniques IA, et gestion de projets d\'automatisation pour leaders visionnaires.',
      defaultKeywords: 'automatisation, intelligence artificielle, IA, processus d\'affaires, téléphonie IA, agents IA, transformation digitale, consultation IA, Montréal, Québec'
    },
    en: {
      siteName: 'Cardinal Conseils',
      defaultTitle: 'Cardinal Conseils - Operational Excellence Through Intelligent Automation',
      defaultDescription: 'Transform your organization with intelligent automation and strategic AI. Experts in process optimization, AI telephony systems, and automation project management for visionary leaders.',
      defaultKeywords: 'automation, artificial intelligence, AI, business processes, AI telephony, AI agents, digital transformation, AI consulting, Montreal, Quebec'
    }
  };

  const meta = defaultMeta[language];
  const fullTitle = title ? `${title} | ${meta.siteName}` : meta.defaultTitle;
  const siteUrl = 'https://cardinalconseils.com';
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || meta.defaultDescription} />
      <meta name="keywords" content={keywords || meta.defaultKeywords} />
      
      {/* Language and Region */}
      <html lang={language} />
      <meta name="language" content={language} />
      <meta name="geo.region" content="CA-QC" />
      <meta name="geo.placename" content="Montreal" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || meta.defaultDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_CA' : 'en_CA'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || meta.defaultDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Cardinal Conseils",
          "description": meta.defaultDescription,
          "url": siteUrl,
          "telephone": "514-622-6631",
          "email": "info@cardinalconseils.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montreal",
            "addressRegion": "QC",
            "addressCountry": "CA"
          },
          "founder": {
            "@type": "Person",
            "name": "Pierre-Marc Cardinal",
            "url": "https://www.linkedin.com/in/pmcardinal/"
          },
          "serviceArea": {
            "@type": "Place",
            "name": "Greater Montreal, Quebec"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Automation Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marketing & Sales Transformation",
                  "description": "Automated lead generation, CRM intelligence, and AI telephony systems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Agents & Intelligent Development",
                  "description": "Custom AI agents for customer service, operations, and product development"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Automation Project Management",
                  "description": "RFP writing, strategic AI project management, and vendor evaluation"
                }
              }
            ]
          }
        })}
      </script>
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Additional Performance & SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Pierre-Marc Cardinal" />
    </Helmet>
  );
};

export default SEO;