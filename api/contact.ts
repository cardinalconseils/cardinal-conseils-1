import { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactFormEmail, validateEmailConfig } from '../emails/utils/emailService';

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
  const configValidation = validateEmailConfig();
  if (!configValidation.valid) {
    console.error('Email configuration error:', configValidation.error);
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

    // Use the email service to send the contact form email
    const emailResult = await sendContactFormEmail({
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
    });

    // Return the result with appropriate HTTP status
    if (emailResult.success) {
      return res.status(200).json(emailResult);
    } else {
      // Determine appropriate error status code
      let statusCode = 500; // Default server error
      
      if (emailResult.error === 'Missing required fields' || 
          emailResult.error === 'Invalid email format') {
        statusCode = 400; // Bad request
      }
      
      return res.status(statusCode).json(emailResult);
    }

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