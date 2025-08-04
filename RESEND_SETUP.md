# Resend.com Setup Guide for Direct Email Sending

The contact form uses Resend.com via a secure Vercel serverless function to send emails directly to `info@cardinalconseils.com`.

## Architecture

- **Frontend**: Contact form collects user data
- **Vercel Function**: `api/contact.ts` handles email sending securely
- **Resend**: Professional email service for delivery
- **Security**: API key stays server-side, never exposed to frontend

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

## File Structure

```
/
├── api/
│   └── contact.ts          # Vercel serverless function
├── src/
│   └── pages/
│       └── Contact.tsx     # Contact form component
├── .env.local              # Local environment variables
└── RESEND_SETUP.md        # This documentation
```

## Next Steps

1. ✅ Add your Resend API key to environment variables
2. ✅ Verify your domain in Resend (optional but recommended)
3. ✅ Test the contact form
4. ✅ Monitor emails in Resend dashboard

The contact form is now ready for professional email delivery! 🚀