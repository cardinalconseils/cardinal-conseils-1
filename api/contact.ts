import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Only POST requests are accepted.' 
    });
  }

  // Validate email configuration
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_API_KEY.startsWith('re_')) {
    console.error('RESEND_API_KEY not configured properly');
    return res.status(500).json({
      success: false,
      message: 'Email service configuration error. Please contact support.'
    });
  }

  try {
    const {
      firstName,
      lastName,
      company,
      sector,
      employees,
      phone,
      email,
      description,
      budget,
      language = 'en'
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !company || !email) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs obligatoires.'
          : 'Please fill in all required fields.'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez entrer une adresse courriel valide.'
          : 'Please enter a valid email address.'
      });
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Generate email subject
    const emailSubject = language === 'fr' 
      ? `Nouvelle demande de contact - ${company}`
      : `New contact request - ${company}`;

    // Create professional email content
    const emailHtml = generateEmailHTML({
      firstName, lastName, company, sector, employees, 
      phone, email, description, budget, language
    });

    // Create plain text version
    const emailText = generateEmailText({
      firstName, lastName, company, sector, employees, 
      phone, email, description, budget, language
    });

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Cardinal Conseils <contact@cardinalconseils.com>',
      to: ['info@cardinalconseils.com'],
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      replyTo: email,
      tags: [
        { name: 'type', value: 'contact-form' },
        { name: 'language', value: language },
        { name: 'company', value: company.toLowerCase().replace(/\s+/g, '-') }
      ],
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return res.status(500).json({
        success: false,
        message: language === 'fr' 
          ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
          : 'Error sending message. Please try again.'
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: language === 'fr' 
        ? 'Votre message a été envoyé avec succès ! Nous vous contacterons sous peu.'
        : 'Your message has been sent successfully! We will contact you shortly.',
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error('Contact API handler error:', error);
    
    return res.status(500).json({
      success: false,
      message: req.body?.language === 'fr' 
        ? 'Erreur serveur. Veuillez réessayer plus tard.'
        : 'Server error. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Email generation functions
function generateEmailHTML(data: any): string {
  const { firstName, lastName, company, sector, employees, phone, email, description, budget, language } = data;
  
  const content = language === 'fr' ? {
    title: 'Nouvelle demande de contact',
    contactInfo: 'Informations du contact',
    projectDesc: 'Description du projet',
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
    contactInfo: 'Contact information',
    projectDesc: 'Project description',
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

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
      <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #dc2626; margin-bottom: 30px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
          ${content.title}
        </h2>
        
        <div style="margin-bottom: 25px;">
          <h3 style="color: #374151; margin-bottom: 15px;">${content.contactInfo}</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 150px;">${content.labels.fullName}:</td>
              <td style="padding: 8px 0; color: #374151;">${firstName} ${lastName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.company}:</td>
              <td style="padding: 8px 0; color: #374151;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.email}:</td>
              <td style="padding: 8px 0; color: #374151;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
            </tr>
            ${phone ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.phone}:</td>
                <td style="padding: 8px 0; color: #374151;"><a href="tel:${phone}" style="color: #dc2626;">${phone}</a></td>
              </tr>
            ` : ''}
            ${sector ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.sector}:</td>
                <td style="padding: 8px 0; color: #374151;">${sector}</td>
              </tr>
            ` : ''}
            ${employees ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.employees}:</td>
                <td style="padding: 8px 0; color: #374151;">${employees}</td>
              </tr>
            ` : ''}
            ${budget ? `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${content.labels.budget}:</td>
                <td style="padding: 8px 0; color: #374151;">${budget}</td>
              </tr>
            ` : ''}
          </table>
        </div>

        ${description ? `
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">${content.projectDesc}</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${description.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
          ${content.footer}
          <br>
          <a href="https://cardinalconseils.com" style="color: #dc2626; text-decoration: none;">cardinalconseils.com</a>
        </div>
      </div>
    </div>
  `;
}

function generateEmailText(data: any): string {
  const { firstName, lastName, company, sector, employees, phone, email, description, budget, language } = data;
  
  const content = language === 'fr' ? {
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
  emailText += `${content.labels.fullName}: ${firstName} ${lastName}\n`;
  emailText += `${content.labels.company}: ${company}\n`;
  emailText += `${content.labels.email}: ${email}\n`;
  
  if (phone) emailText += `${content.labels.phone}: ${phone}\n`;
  if (sector) emailText += `${content.labels.sector}: ${sector}\n`;
  if (employees) emailText += `${content.labels.employees}: ${employees}\n`;
  if (budget) emailText += `${content.labels.budget}: ${budget}\n`;

  if (description) {
    emailText += `\n${content.projectDesc}\n${description}\n`;
  }

  emailText += `\n---\n${content.footer}\nhttps://cardinalconseils.com`;
  return emailText;
}