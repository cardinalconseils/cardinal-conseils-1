import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed. Only POST requests are accepted.' 
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
      language
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

    // Prepare email content
    const emailSubject = language === 'fr' 
      ? `Nouvelle demande de contact - ${company}`
      : `New contact request - ${company}`;

    const emailText = `
${language === 'fr' ? 'Nouvelle demande de contact' : 'New contact request'}

${language === 'fr' ? 'Informations du contact :' : 'Contact information:'}
${language === 'fr' ? 'Nom complet :' : 'Full name:'} ${firstName} ${lastName}
${language === 'fr' ? 'Entreprise :' : 'Company:'} ${company}
${language === 'fr' ? 'Secteur :' : 'Industry:'} ${sector || 'Non spécifié'}
${language === 'fr' ? 'Nombre d\'employés :' : 'Number of employees:'} ${employees || 'Non spécifié'}
${language === 'fr' ? 'Téléphone :' : 'Phone:'} ${phone || 'Non fourni'}
${language === 'fr' ? 'Courriel :' : 'Email:'} ${email}
${language === 'fr' ? 'Budget approximatif :' : 'Approximate budget:'} ${budget || 'Non spécifié'}

${language === 'fr' ? 'Description du projet :' : 'Project description:'}
${description || (language === 'fr' ? 'Aucune description fournie' : 'No description provided')}

---
${language === 'fr' ? 'Ce message a été envoyé depuis le formulaire de contact du site Cardinal Conseils.' : 'This message was sent from the Cardinal Conseils website contact form.'}
`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #dc2626; margin-bottom: 30px; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            ${language === 'fr' ? 'Nouvelle demande de contact' : 'New contact request'}
          </h2>
          
          <div style="margin-bottom: 25px;">
            <h3 style="color: #374151; margin-bottom: 15px;">${language === 'fr' ? 'Informations du contact' : 'Contact information'}</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280; width: 150px;">${language === 'fr' ? 'Nom complet :' : 'Full name:'}</td>
                <td style="padding: 8px 0; color: #374151;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Entreprise :' : 'Company:'}</td>
                <td style="padding: 8px 0; color: #374151;">${company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Courriel :' : 'Email:'}</td>
                <td style="padding: 8px 0; color: #374151;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
              </tr>
              ${phone ? `
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Téléphone :' : 'Phone:'}</td>
                  <td style="padding: 8px 0; color: #374151;"><a href="tel:${phone}" style="color: #dc2626;">${phone}</a></td>
                </tr>
              ` : ''}
              ${sector ? `
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Secteur :' : 'Industry:'}</td>
                  <td style="padding: 8px 0; color: #374151;">${sector}</td>
                </tr>
              ` : ''}
              ${employees ? `
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Employés :' : 'Employees:'}</td>
                  <td style="padding: 8px 0; color: #374151;">${employees}</td>
                </tr>
              ` : ''}
              ${budget ? `
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">${language === 'fr' ? 'Budget :' : 'Budget:'}</td>
                  <td style="padding: 8px 0; color: #374151;">${budget}</td>
                </tr>
              ` : ''}
            </table>
          </div>

          ${description ? `
            <div style="margin-bottom: 25px;">
              <h3 style="color: #374151; margin-bottom: 15px;">${language === 'fr' ? 'Description du projet' : 'Project description'}</h3>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${description.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            ${language === 'fr' ? 'Ce message a été envoyé depuis le formulaire de contact du site Cardinal Conseils.' : 'This message was sent from the Cardinal Conseils website contact form.'}
            <br>
            <a href="https://cardinalconseils.com" style="color: #dc2626; text-decoration: none;">cardinalconseils.com</a>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Cardinal Conseils <contact@cardinalconseils.com>', // Use your verified domain
      to: ['info@cardinalconseils.com'],
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: email, // Allow easy reply to the contact
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
    console.error('Contact form error:', error);
    
    return res.status(500).json({
      success: false,
      message: req.body?.language === 'fr' 
        ? 'Erreur serveur. Veuillez réessayer plus tard.'
        : 'Server error. Please try again later.'
    });
  }
}