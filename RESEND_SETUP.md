# Resend.com Professional Email System

A comprehensive email system using **React Email templates**, **Resend.com API**, and **CLI management tools** for professional email delivery.

## 🏗️ Architecture

- **React Email Templates**: Professional HTML email generation
- **Resend.com API**: Enterprise-grade email delivery service
- **Vercel Serverless Function**: Secure server-side email handling
- **TypeScript CLI**: Email testing, previewing, and management tools
- **Lazy Initialization**: Graceful handling of missing configuration

## Setup Steps

### 1. Resend Account Setup

Since you're already using Resend.com:
1. Go to your [Resend Dashboard](https://resend.com/dashboard)
2. Navigate to "API Keys"
3. Copy your API key (starts with `re_`)

### 2. Domain Verification (Important)

For professional delivery, verify your domain:
1. In Resend dashboard, go to "Domains"
2. Add `cardinalconseils.com`
3. Follow DNS verification steps
4. Update the API function's `from` field to use your verified domain:
   ```typescript
   from: 'Cardinal Conseils <contact@cardinalconseils.com>'
   ```

### 3. Environment Variables Setup

**For Development:**
Create `.env.local` in your project root:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

**For Production (Vercel):**
1. Go to your Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add: `RESEND_API_KEY` with your Resend API key
4. Apply to Production, Preview, and Development

### 4. Testing the Setup

1. Add your Resend API key to `.env.local`
2. Restart your development server: `npm run dev`
3. Test the contact form at http://localhost:5173/contact
4. Check your inbox at `info@cardinalconseils.com`

### 5. Email Template Features

The system sends professionally formatted emails with:

**HTML Email Template:**
- Professional Cardinal Conseils branding
- Clean table layout for contact information
- Clickable email and phone links
- Project description in highlighted box
- Responsive design for all email clients

**Email Content Includes:**
- Contact's full name and company
- Email address (with reply-to functionality)
- Phone number (clickable tel: link)
- Industry sector and company size
- Project description
- Budget range
- Bilingual support (French/English)

### 6. API Endpoint Details

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "company": "Example Corp",
  "sector": "technology",
  "employees": "50-100",
  "phone": "514-123-4567",
  "email": "john@example.com",
  "description": "Project description...",
  "budget": "25k-50k",
  "language": "en"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "emailId": "re_abc123xyz"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message in appropriate language"
}
```

### 7. Error Handling

The system includes comprehensive error handling:
- **Validation**: Required fields and email format
- **Network Errors**: Graceful handling with user feedback
- **API Errors**: Specific error messages from Resend
- **Bilingual Messages**: Error messages in French and English
- **Retry Logic**: Users can retry after errors

### 8. Monitoring & Analytics

**Resend Dashboard:**
- View all sent emails
- Check delivery status
- Monitor bounce rates
- Review email analytics
- Manage domain reputation

**Vercel Function Logs:**
- Monitor API function performance
- View error logs and debugging info
- Check function execution times

### 9. Troubleshooting

**Common Issues:**

- **500 Error**: Check Resend API key in environment variables
- **Domain Not Verified**: Verify your domain in Resend dashboard
- **Rate Limiting**: Resend has generous limits, check your usage
- **CORS Issues**: Serverless function handles CORS automatically

**Development Testing:**
```bash
# Test locally
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","company":"Test Co","email":"test@example.com","language":"en"}'
```

### 10. Security Features

✅ **API Key Security**: Never exposed to frontend  
✅ **Input Validation**: Server-side validation of all inputs  
✅ **Email Validation**: Regex validation for email format  
✅ **Rate Limiting**: Resend handles abuse prevention  
✅ **Reply-To Header**: Enables easy replies to contact emails  
✅ **Sanitization**: HTML content is safely rendered  

### 11. Scalability

- **Resend Free Tier**: 3,000 emails/month
- **Paid Plans**: Scale up as needed
- **Vercel Functions**: Auto-scale with traffic
- **No Infrastructure**: Fully serverless solution

## Migration from EmailJS

This setup is more professional than EmailJS because:
- Better deliverability (dedicated IP pools)
- Professional email templates
- Secure API key handling
- Better error handling
- More detailed analytics
- No frontend dependencies
- Better scalability

## 📁 Complete File Structure

```
/
├── emails/                         # Email system
│   ├── templates/
│   │   └── ContactForm.tsx         # React Email template
│   └── utils/
│       └── emailService.ts         # Email sending logic
├── api/
│   └── contact.ts                  # Vercel serverless function
├── scripts/
│   └── email-cli.ts                # CLI management tools
├── src/
│   └── pages/
│       └── Contact.tsx             # Contact form component
├── .env.local                      # Local environment variables
├── package.json                    # NPM scripts for email CLI
└── RESEND_SETUP.md                # This documentation
```

## 🎯 CLI Email Management Tools

### Available Commands

```bash
# Email system information
npm run email:info              # Show system overview and architecture

# Configuration validation
npm run email:validate          # Check if RESEND_API_KEY is properly set
npm run email:status           # Check API connectivity and service status

# Email preview generation
npm run email:preview          # Generate HTML preview (English)
npm run email:preview -- --language fr --output preview-fr.html

# Email testing (requires valid API key)
npm run email:test             # Send test email to info@cardinalconseils.com
npm run email:test -- --email your@email.com --language fr
```

### CLI Features

✅ **Configuration Validation**: Checks API key format and environment setup  
✅ **Email Preview Generation**: Creates HTML files for browser testing  
✅ **Live Email Testing**: Sends actual test emails with sample data  
✅ **Bilingual Support**: Tests both French and English templates  
✅ **Service Status Monitoring**: Checks API connectivity and configuration  
✅ **Detailed Error Reporting**: Clear guidance for troubleshooting  

## 📧 React Email Template System

### Professional Template Features

Our contact form emails use **React Email** for superior formatting:

🎨 **Professional Design**: Cardinal Conseils branded HTML templates  
📱 **Mobile Responsive**: Optimized for all email clients and devices  
🔗 **Interactive Elements**: Clickable email addresses and phone numbers  
🌐 **Bilingual Content**: Dynamic French/English content generation  
📊 **Structured Layout**: Clean tables for contact information  
💡 **Highlighted Sections**: Project descriptions with visual emphasis  
🏷️ **Email Tagging**: Automatic categorization for better analytics  

### Template Architecture

```typescript
// React Email Template (emails/templates/ContactForm.tsx)
export const ContactFormEmail = ({ formData, language }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        {/* Professional header with logo */}
        <Section style={header}>
          <Img src="logo.png" alt="Cardinal Conseils" />
          <Heading style={h1}>New Contact Request</Heading>
        </Section>
        
        {/* Structured contact information */}
        <Section style={section}>
          <table style={infoTable}>
            {/* Contact details with proper styling */}
          </table>
        </Section>
        
        {/* Project description with highlighting */}
        <Section style={descriptionCard}>
          {/* Formatted project description */}
        </Section>
      </Container>
    </Body>
  </Html>
);
```

### Email Service Integration

```typescript
// Email Service (emails/utils/emailService.ts)
export async function sendContactFormEmail(formData: ContactFormData) {
  // Render React Email template to HTML
  const htmlContent = await render(ContactFormEmail(formData));
  
  // Send via Resend with professional formatting
  const emailResponse = await resend.emails.send({
    from: 'Cardinal Conseils <contact@cardinalconseils.com>',
    to: ['info@cardinalconseils.com'],
    subject: `New contact request - ${formData.company}`,
    html: htmlContent,
    text: generatePlainTextEmail(formData),
    replyTo: formData.email,
    tags: [
      { name: 'type', value: 'contact-form' },
      { name: 'language', value: formData.language }
    ]
  });
}
```

## 🚀 Quick Start Guide

### 1. Environment Setup
```bash
# Create .env.local file with your Resend API key
echo "RESEND_API_KEY=re_your_api_key_here" > .env.local

# Validate configuration
npm run email:validate
```

### 2. Test Email System
```bash
# Generate email preview
npm run email:preview

# Send test email (requires valid API key)
npm run email:test

# Check system status
npm run email:status
```

### 3. Production Deployment
```bash
# Add RESEND_API_KEY to Vercel environment variables
# Deploy with existing GitHub Actions workflow
git push origin main
```

## 🎯 What's Included

✅ **Professional React Email Templates** with Cardinal Conseils branding  
✅ **Secure Serverless API** using Vercel functions  
✅ **Comprehensive CLI Tools** for email management and testing  
✅ **Bilingual Email Support** (French/English)  
✅ **Error Handling & Validation** with detailed feedback  
✅ **Email Analytics & Tagging** for better insights  
✅ **Mobile-Responsive Design** for all email clients  
✅ **Development & Production Ready** with proper environment handling  

## 🔧 Advanced Features

- **Lazy Initialization**: Graceful handling of missing API keys
- **Email Tagging**: Automatic categorization for analytics
- **Reply-To Configuration**: Easy client communication
- **Plain Text Fallback**: Ensures compatibility with all email clients
- **TypeScript Integration**: Full type safety throughout the system
- **CLI Management**: Complete email system administration tools

## 📊 Monitoring & Analytics

Monitor your email delivery in the **Resend Dashboard**:
- View all sent emails with delivery status
- Track open rates and engagement metrics
- Monitor bounce rates and deliverability
- Review email analytics and performance
- Manage domain reputation and verification

## 🎉 Ready to Use!

Your professional email system is now ready! The contact form will send beautifully formatted emails using your existing Resend.com account with:

🎨 **Beautiful HTML templates** generated with React Email  
📧 **Reliable delivery** through Resend's infrastructure  
🔧 **Easy management** with built-in CLI tools  
📱 **Mobile-optimized** emails for all devices  
🌐 **Bilingual support** for French and English  
⚡ **Serverless scalability** with Vercel functions  

**Next step**: Add your Resend API key and start receiving professional contact form emails! 🚀