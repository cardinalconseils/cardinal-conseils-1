const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://cardinalconseils.com', 'https://www.cardinalconseils.com', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Cardinal Conseils API Server',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    endpoints: [
      'GET / - Health check',
      'POST /api/contact - Contact form submission',
      'GET /api/health - Detailed health check'
    ]
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    hasResendKey: !!process.env.RESEND_API_KEY,
    nodeVersion: process.version
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
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

    // Basic validation
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

    // Handle missing RESEND_API_KEY gracefully
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 Contact form submission received (simulation mode):', {
        firstName, lastName, company, email, language
      });
      
      return res.status(200).json({
        success: true,
        message: language === 'fr' 
          ? '✅ Message reçu ! (Mode simulation - RESEND_API_KEY requis pour l\'envoi réel)'
          : '✅ Message received! (Simulation mode - RESEND_API_KEY required for real sending)',
        emailId: 'simulation_' + Date.now(),
        note: 'Set RESEND_API_KEY environment variable in Railway for real email sending'
      });
    }

    // Validate API key format
    if (!process.env.RESEND_API_KEY.startsWith('re_')) {
      console.error('❌ RESEND_API_KEY has invalid format');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact support.'
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
    console.log(`📧 Sending email: ${emailSubject}`);
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
      console.error('❌ Resend error:', emailResponse.error);
      return res.status(500).json({
        success: false,
        message: language === 'fr' 
          ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
          : 'Error sending message. Please try again.'
      });
    }

    console.log('✅ Email sent successfully:', emailResponse.data?.id);

    // Success response
    return res.status(200).json({
      success: true,
      message: language === 'fr' 
        ? 'Votre message a été envoyé avec succès ! Nous vous contacterons sous peu.'
        : 'Your message has been sent successfully! We will contact you shortly.',
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error('❌ Contact API error:', error);
    
    return res.status(500).json({
      success: false,
      message: req.body?.language === 'fr' 
        ? 'Erreur serveur. Veuillez réessayer plus tard.'
        : 'Server error. Please try again later.',
      error: error.message
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.path,
    method: req.method,
    availableEndpoints: [
      'GET / - Health check',
      'POST /api/contact - Contact form submission',
      'GET /api/health - Detailed health check'
    ]
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('❌ Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: error.message
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Cardinal Conseils API Server running on port ${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`❤️ Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔑 RESEND_API_KEY: ${process.env.RESEND_API_KEY ? '✅ Set' : '❌ Missing'}`);
});

// Email generation functions
function generateEmailHTML(data) {
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

function generateEmailText(data) {
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

module.exports = app;