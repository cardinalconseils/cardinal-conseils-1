# EmailJS Setup Guide for Direct Email Sending

The contact form now uses EmailJS to send emails directly instead of opening the user's email client.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account (allows 200 emails/month)

### 2. Setup Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: {{subject}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Industry: {{sector}}
Employees: {{employees}}
Phone: {{phone}}
Budget: {{budget}}

Project Description:
{{message}}

---
Contact Details:
Full Name: {{full_name}}
Email: {{contact_email}}
Company: {{company}}
Phone: {{phone}}

This message was sent from the Cardinal Conseils website contact form.
```

4. Note the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "API Keys" in your dashboard
2. Note your **Public Key** (e.g., `abcd1234efgh5678`)

### 5. Setup Environment Variables

Create a `.env.local` file in your project root with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**For Production (Vercel):**
Add these same environment variables in your Vercel dashboard under Settings > Environment Variables.

### 6. Template Variables Used

The contact form sends these variables to your EmailJS template:

- `to_email`: info@cardinalconseils.com
- `from_name`: User's full name
- `from_email`: User's email
- `subject`: Automated subject line
- `company`: Company name
- `sector`: Industry sector
- `employees`: Number of employees
- `phone`: Phone number
- `budget`: Estimated budget
- `message`: Project description
- `language`: Form language (fr/en)
- `full_name`: Full name
- `contact_email`: User's email
- `project_description`: Project description
- `estimated_budget`: Budget selection

### 7. Testing

1. Add your credentials to `.env.local`
2. Restart your development server: `npm run dev`
3. Test the contact form at http://localhost:5173/contact
4. Check your inbox for the test email

### 8. Troubleshooting

- **Error sending email**: Check that all environment variables are set correctly
- **Template not found**: Verify the template ID matches exactly
- **Service not found**: Verify the service ID matches exactly
- **Blocked by CORS**: EmailJS handles CORS automatically for web requests

### 9. EmailJS Dashboard

Monitor your email sending in the EmailJS dashboard:
- View sent emails
- Check usage limits
- Monitor delivery status
- View error logs

## Security Notes

- EmailJS public key is safe to expose in frontend code
- The service only allows sending to predefined email addresses
- Rate limiting is handled by EmailJS
- No sensitive credentials are exposed to the client