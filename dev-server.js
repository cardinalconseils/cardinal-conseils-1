import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Import our contact handler (we'll adapt it for Express)
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', req.body);
    
    // For development, we'll simulate a successful response
    // In production, this will use the actual Vercel function
    
    const { firstName, lastName, company, email, language = 'en' } = req.body;
    
    // Basic validation
    if (!firstName || !lastName || !company || !email) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez remplir tous les champs obligatoires.'
          : 'Please fill in all required fields.'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: language === 'fr' 
          ? 'Veuillez entrer une adresse courriel valide.'
          : 'Please enter a valid email address.'
      });
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Check if RESEND_API_KEY is available
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️ RESEND_API_KEY not set - simulating success for development');
      return res.json({
        success: true,
        message: language === 'fr' 
          ? '✅ Message simulé envoyé avec succès! (Mode développement - ajoutez RESEND_API_KEY pour envoyer de vrais emails)'
          : '✅ Simulated message sent successfully! (Development mode - add RESEND_API_KEY to send real emails)',
        emailId: 'dev_' + Date.now()
      });
    }

    // If API key is available, try to use the real email service
    try {
      const { sendContactFormEmail } = await import('./emails/utils/emailService.js');
      const result = await sendContactFormEmail(req.body);
      return res.json(result);
    } catch (error) {
      console.error('Email service error:', error);
      return res.status(500).json({
        success: false,
        message: language === 'fr' 
          ? 'Erreur du service email. Veuillez réessayer.'
          : 'Email service error. Please try again.'
      });
    }

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: 'development'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Development API server running at http://localhost:${PORT}`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`❤️ Health check: http://localhost:${PORT}/api/health`);
  
  if (process.env.RESEND_API_KEY) {
    console.log('✅ RESEND_API_KEY found - real emails will be sent');
  } else {
    console.log('⚠️ RESEND_API_KEY not found - will simulate email sending');
  }
});