// Simple CommonJS version without ES modules
const { Resend } = require('resend');

module.exports = async function handler(req, res) {
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

  try {
    const { firstName, lastName, company, email, language = 'en' } = req.body || {};

    // Basic validation
    if (!firstName || !lastName || !company || !email) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs obligatoires.'
          : 'Please fill in all required fields.'
      });
    }

    // If no RESEND_API_KEY, return simulation
    if (!process.env.RESEND_API_KEY) {
      return res.status(200).json({
        success: true,
        message: language === 'fr' 
          ? '✅ Message reçu ! (Mode simulation - RESEND_API_KEY requis pour l\'envoi réel)'
          : '✅ Message received! (Simulation mode - RESEND_API_KEY required for real sending)',
        emailId: 'simulation_' + Date.now(),
        note: 'Contact form is working! Set RESEND_API_KEY in Vercel for real email sending'
      });
    }

    // If we have the API key, try to send real email
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const emailResponse = await resend.emails.send({
      from: 'Cardinal Conseils <contact@cardinalconseils.com>',
      to: ['info@cardinalconseils.com'],
      subject: `New contact request - ${company}`,
      text: `New contact from: ${firstName} ${lastName} (${email}) from ${company}`,
      html: `<h2>New Contact Request</h2><p><strong>Name:</strong> ${firstName} ${lastName}<br><strong>Email:</strong> ${email}<br><strong>Company:</strong> ${company}</p>`,
      replyTo: email
    });

    if (emailResponse.error) {
      console.error('Resend error:', emailResponse.error);
      return res.status(500).json({
        success: false,
        message: 'Error sending email. Please try again.'
      });
    }

    return res.status(200).json({
      success: true,
      message: language === 'fr' 
        ? 'Votre message a été envoyé avec succès !'
        : 'Your message has been sent successfully!',
      emailId: emailResponse.data?.id
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};