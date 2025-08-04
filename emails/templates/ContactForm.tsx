import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Hr,
  Img,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  firstName: string;
  lastName: string;
  company: string;
  sector?: string;
  employees?: string;
  phone?: string;
  email: string;
  description?: string;
  budget?: string;
  language: 'fr' | 'en';
}

export const ContactFormEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  company = 'Example Corp',
  sector = 'Technology',
  employees = '50-100',
  phone = '514-123-4567',
  email = 'john@example.com',
  description = 'We need help with automation and AI integration for our marketing processes.',
  budget = '25k-50k',
  language = 'en',
}: ContactFormEmailProps) => {
  const content = {
    title: language === 'fr' ? 'Nouvelle demande de contact' : 'New contact request',
    subtitle: language === 'fr' ? 'Informations du contact' : 'Contact information',
    projectTitle: language === 'fr' ? 'Description du projet' : 'Project description',
    footer: language === 'fr' 
      ? 'Ce message a été envoyé depuis le formulaire de contact du site Cardinal Conseils.'
      : 'This message was sent from the Cardinal Conseils website contact form.',
    labels: {
      fullName: language === 'fr' ? 'Nom complet' : 'Full name',
      company: language === 'fr' ? 'Entreprise' : 'Company',
      email: language === 'fr' ? 'Courriel' : 'Email',
      phone: language === 'fr' ? 'Téléphone' : 'Phone',
      sector: language === 'fr' ? 'Secteur' : 'Industry',
      employees: language === 'fr' ? 'Employés' : 'Employees',
      budget: language === 'fr' ? 'Budget' : 'Budget',
    }
  };

  const baseUrl = 'https://cardinalconseils.com';

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo and Title */}
          <Section style={header}>
            <Row>
              <Column align="left">
                <Img
                  src={`${baseUrl}/cardinal-logo.png`}
                  alt="Cardinal Conseils"
                  width="150"
                  height="36"
                  style={logo}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Heading style={h1}>{content.title}</Heading>
                <Hr style={hr} />
              </Column>
            </Row>
          </Section>

          {/* Contact Information Section */}
          <Section style={section}>
            <Heading style={h2}>{content.subtitle}</Heading>
            
            <div style={infoCard}>
              <table style={infoTable}>
                <tbody>
                  <tr>
                    <td style={labelCell}>{content.labels.fullName}:</td>
                    <td style={valueCell}>{firstName} {lastName}</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>{content.labels.company}:</td>
                    <td style={valueCell}>{company}</td>
                  </tr>
                  <tr>
                    <td style={labelCell}>{content.labels.email}:</td>
                    <td style={valueCell}>
                      <Link href={`mailto:${email}`} style={link}>
                        {email}
                      </Link>
                    </td>
                  </tr>
                  {phone && (
                    <tr>
                      <td style={labelCell}>{content.labels.phone}:</td>
                      <td style={valueCell}>
                        <Link href={`tel:${phone}`} style={link}>
                          {phone}
                        </Link>
                      </td>
                    </tr>
                  )}
                  {sector && (
                    <tr>
                      <td style={labelCell}>{content.labels.sector}:</td>
                      <td style={valueCell}>{sector}</td>
                    </tr>
                  )}
                  {employees && (
                    <tr>
                      <td style={labelCell}>{content.labels.employees}:</td>
                      <td style={valueCell}>{employees}</td>
                    </tr>
                  )}
                  {budget && (
                    <tr>
                      <td style={labelCell}>{content.labels.budget}:</td>
                      <td style={valueCell}>{budget}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Section>

          {/* Project Description Section */}
          {description && (
            <Section style={section}>
              <Heading style={h2}>{content.projectTitle}</Heading>
              <div style={descriptionCard}>
                <Text style={descriptionText}>
                  {description}
                </Text>
              </div>
            </Section>
          )}

          {/* CTA Section */}
          <Section style={ctaSection}>
            <div style={ctaCard}>
              <Text style={ctaText}>
                <strong>
                  {language === 'fr' 
                    ? '🚀 Nouvelle opportunité de transformation!'
                    : '🚀 New transformation opportunity!'
                  }
                </strong>
              </Text>
              <Text style={ctaSubtext}>
                {language === 'fr'
                  ? 'Répondez directement à ce courriel pour commencer la conversation.'
                  : 'Reply directly to this email to start the conversation.'
                }
              </Text>
            </div>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Hr style={hr} />
            <Text style={footerText}>
              {content.footer}
            </Text>
            <Text style={footerText}>
              <Link href={baseUrl} style={link}>
                cardinalconseils.com
              </Link>
            </Text>
            <Text style={smallText}>
              {language === 'fr' 
                ? 'Experts en automatisation des processus d\'affaires et implémentation d\'IA'
                : 'Business process automation and AI implementation experts'
              }
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 32px 0',
};

const logo = {
  margin: '0 0 16px',
};

const h1 = {
  color: '#dc2626',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '16px 0',
  padding: '0',
  lineHeight: '1.2',
};

const h2 = {
  color: '#374151',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px',
  padding: '0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const section = {
  padding: '0 32px 32px',
};

const infoCard = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '24px',
  margin: '16px 0',
};

const infoTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
};

const labelCell = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  padding: '8px 16px 8px 0',
  verticalAlign: 'top',
  width: '120px',
  borderBottom: '1px solid #f3f4f6',
};

const valueCell = {
  color: '#374151',
  fontSize: '14px',
  padding: '8px 0',
  verticalAlign: 'top',
  borderBottom: '1px solid #f3f4f6',
};

const descriptionCard = {
  backgroundColor: '#fef3c7',
  border: '1px solid #f59e0b',
  borderLeft: '4px solid #dc2626',
  borderRadius: '8px',
  padding: '20px',
  margin: '16px 0',
};

const descriptionText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const ctaSection = {
  padding: '0 32px 16px',
};

const ctaCard = {
  backgroundColor: '#dbeafe',
  border: '1px solid #3b82f6',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center' as const,
};

const ctaText = {
  color: '#1e40af',
  fontSize: '16px',
  margin: '0 0 8px',
};

const ctaSubtext = {
  color: '#374151',
  fontSize: '14px',
  margin: '0',
};

const footer = {
  padding: '0 32px',
};

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '1.4',
  margin: '4px 0',
  textAlign: 'center' as const,
};

const smallText = {
  color: '#9ca3af',
  fontSize: '11px',
  lineHeight: '1.4',
  margin: '8px 0 0',
  textAlign: 'center' as const,
};

const link = {
  color: '#dc2626',
  textDecoration: 'underline',
};

export default ContactFormEmail;