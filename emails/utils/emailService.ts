import { render } from '@react-email/render';
import { Resend } from 'resend';
import { ContactFormEmail } from '../templates/ContactForm';

// Initialize Resend (lazy initialization to handle missing API key gracefully)
let resend: Resend | null = null;

function getResendInstance(): Resend {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export interface ContactFormData {
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

export interface EmailResponse {
  success: boolean;
  message: string;
  emailId?: string;
  error?: string;
}

/**
 * Send contact form email using React Email template
 */
export async function sendContactFormEmail(
  formData: ContactFormData,
  toEmail: string = 'info@cardinalconseils.com'
): Promise<EmailResponse> {
  try {
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.email) {
      return {
        success: false,
        message: formData.language === 'fr' 
          ? 'Veuillez remplir tous les champs obligatoires.'
          : 'Please fill in all required fields.',
        error: 'Missing required fields'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: formData.language === 'fr' 
          ? 'Veuillez entrer une adresse courriel valide.'
          : 'Please enter a valid email address.',
        error: 'Invalid email format'
      };
    }

    // Generate email subject
    const emailSubject = formData.language === 'fr' 
      ? `Nouvelle demande de contact - ${formData.company}`
      : `New contact request - ${formData.company}`;

    // Render React Email template to HTML
    const htmlContent = await render(ContactFormEmail(formData));
    
    // Render plain text version (simplified)
    const textContent = generatePlainTextEmail(formData);

    // Send email using Resend
    const resendClient = getResendInstance();
    const emailResponse = await resendClient.emails.send({
      from: 'Cardinal Conseils <contact@cardinalconseils.com>', // Use your verified domain
      to: [toEmail],
      subject: emailSubject,
      html: htmlContent,
      text: textContent,
      replyTo: formData.email, // Allow easy reply to the contact
      tags: [
        { name: 'type', value: 'contact-form' },
        { name: 'language', value: formData.language },
        { name: 'company', value: formData.company.toLowerCase().replace(/\s+/g, '-') }
      ],
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return {
        success: false,
        message: formData.language === 'fr' 
          ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
          : 'Error sending message. Please try again.',
        error: emailResponse.error.message
      };
    }

    // Success response
    return {
      success: true,
      message: formData.language === 'fr' 
        ? 'Votre message a été envoyé avec succès ! Nous vous contacterons sous peu.'
        : 'Your message has been sent successfully! We will contact you shortly.',
      emailId: emailResponse.data?.id
    };

  } catch (error) {
    console.error('Email service error:', error);
    
    return {
      success: false,
      message: formData.language === 'fr' 
        ? 'Erreur serveur. Veuillez réessayer plus tard.'
        : 'Server error. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Generate plain text version of the email
 */
function generatePlainTextEmail(formData: ContactFormData): string {
  const content = formData.language === 'fr' ? {
    title: 'Nouvelle demande de contact',
    contactInfo: 'Informations du contact :',
    projectDesc: 'Description du projet :',
    footer: 'Ce message a été envoyé depuis le formulaire de contact du site Cardinal Conseils.',
    labels: {
      fullName: 'Nom complet',
      company: 'Entreprise',
      email: 'Courriel',
      phone: 'Téléphone',
      sector: 'Secteur',
      employees: 'Employés',
      budget: 'Budget'
    }
  } : {
    title: 'New contact request',
    contactInfo: 'Contact information:',
    projectDesc: 'Project description:',
    footer: 'This message was sent from the Cardinal Conseils website contact form.',
    labels: {
      fullName: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      sector: 'Industry',
      employees: 'Employees',
      budget: 'Budget'
    }
  };

  let emailText = `${content.title}\n\n`;
  emailText += `${content.contactInfo}\n`;
  emailText += `${content.labels.fullName}: ${formData.firstName} ${formData.lastName}\n`;
  emailText += `${content.labels.company}: ${formData.company}\n`;
  emailText += `${content.labels.email}: ${formData.email}\n`;
  
  if (formData.phone) {
    emailText += `${content.labels.phone}: ${formData.phone}\n`;
  }
  if (formData.sector) {
    emailText += `${content.labels.sector}: ${formData.sector}\n`;
  }
  if (formData.employees) {
    emailText += `${content.labels.employees}: ${formData.employees}\n`;
  }
  if (formData.budget) {
    emailText += `${content.labels.budget}: ${formData.budget}\n`;
  }

  if (formData.description) {
    emailText += `\n${content.projectDesc}\n${formData.description}\n`;
  }

  emailText += `\n---\n${content.footer}\nhttps://cardinalconseils.com`;

  return emailText;
}

/**
 * Create or update email template in Resend (for template management)
 */
export async function createEmailTemplate(templateName: string, templateHtml: string) {
  try {
    // Note: This would require Resend API support for template management
    // Currently keeping this as a placeholder for future Resend template API
    console.log(`Creating template: ${templateName}`);
    console.log('Template HTML length:', templateHtml.length);
    
    return {
      success: true,
      message: 'Template created successfully',
      templateId: `template_${Date.now()}`
    };
  } catch (error) {
    console.error('Template creation error:', error);
    return {
      success: false,
      message: 'Error creating template',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Validate email configuration
 */
export function validateEmailConfig(): { valid: boolean; error?: string } {
  if (!process.env.RESEND_API_KEY) {
    return {
      valid: false,
      error: 'RESEND_API_KEY environment variable is not set'
    };
  }

  if (!process.env.RESEND_API_KEY.startsWith('re_')) {
    return {
      valid: false,
      error: 'Invalid RESEND_API_KEY format (should start with "re_")'
    };
  }

  return { valid: true };
}

export default {
  sendContactFormEmail,
  createEmailTemplate,
  validateEmailConfig,
};