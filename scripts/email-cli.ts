#!/usr/bin/env node

import { Command } from 'commander';
import { render } from '@react-email/render';
import { Resend } from 'resend';
import { promises as fs } from 'fs';
import path from 'path';
import { ContactFormEmail } from '../emails/templates/ContactForm';
import { sendContactFormEmail, validateEmailConfig } from '../emails/utils/emailService';

const program = new Command();

program
  .name('email-cli')
  .description('Cardinal Conseils Email Management CLI')
  .version('1.0.0');

// Test email command
program
  .command('test')
  .description('Send a test contact form email')
  .option('-e, --email <email>', 'Email address to send test to', 'info@cardinalconseils.com')
  .option('-l, --language <lang>', 'Language (fr|en)', 'en')
  .action(async (options) => {
    console.log('🧪 Testing Contact Form Email...\n');

    // Validate configuration
    const configValidation = validateEmailConfig();
    if (!configValidation.valid) {
      console.error('❌ Email configuration error:', configValidation.error);
      process.exit(1);
    }

    console.log('✅ Email configuration valid');

    // Test data
    const testData = {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Test Company Inc.',
      sector: 'Technology',
      employees: '50-100',
      phone: '514-123-4567',
      email: 'john.doe@testcompany.com',
      description: 'This is a test email sent from the Cardinal Conseils email CLI. We are testing the contact form functionality with React Email templates and Resend integration.',
      budget: '25k-50k',
      language: options.language as 'fr' | 'en'
    };

    try {
      console.log('📧 Sending test email...');
      const result = await sendContactFormEmail(testData, options.email);

      if (result.success) {
        console.log('✅ Test email sent successfully!');
        console.log(`📬 Email ID: ${result.emailId}`);
        console.log(`📧 Sent to: ${options.email}`);
        console.log(`🌐 Language: ${options.language}`);
      } else {
        console.error('❌ Test email failed:', result.message);
        if (result.error) {
          console.error('Error details:', result.error);
        }
      }
    } catch (error) {
      console.error('❌ Unexpected error:', error);
    }
  });

// Preview email command
program
  .command('preview')
  .description('Generate HTML preview of email template')
  .option('-l, --language <lang>', 'Language (fr|en)', 'en')
  .option('-o, --output <file>', 'Output file path', 'preview.html')
  .action(async (options) => {
    console.log('👀 Generating Email Preview...\n');

    const previewData = {
      firstName: 'Marie',
      lastName: 'Dubois',
      company: 'Innovations Québec',
      sector: 'Manufacturing',
      employees: '100-500',
      phone: '514-987-6543',
      email: 'marie.dubois@innovations-qc.com',
      description: 'Nous cherchons à automatiser nos processus de production et à intégrer l\'intelligence artificielle pour optimiser notre chaîne logistique. Notre objectif est d\'améliorer l\'efficacité de 30% tout en réduisant les coûts opérationnels.',
      budget: '100k+',
      language: options.language as 'fr' | 'en'
    };

    try {
      const html = await render(ContactFormEmail(previewData));
      await fs.writeFile(options.output, html);
      
      console.log('✅ Preview generated successfully!');
      console.log(`📄 File: ${path.resolve(options.output)}`);
      console.log(`🌐 Language: ${options.language}`);
      console.log('\n💡 Open the file in your browser to see the preview');
    } catch (error) {
      console.error('❌ Preview generation failed:', error);
    }
  });

// Validate command
program
  .command('validate')
  .description('Validate email service configuration')
  .action(() => {
    console.log('🔍 Validating Email Configuration...\n');

    const configValidation = validateEmailConfig();
    
    if (configValidation.valid) {
      console.log('✅ Email configuration is valid');
      console.log('✅ RESEND_API_KEY is properly set');
      console.log('✅ API key format is correct');
      
      // Test Resend initialization
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        console.log('✅ Resend client initialized successfully');
      } catch (error) {
        console.error('❌ Resend initialization failed:', error);
      }
    } else {
      console.error('❌ Configuration error:', configValidation.error);
      console.log('\n💡 Make sure to:');
      console.log('   1. Set RESEND_API_KEY in your environment');
      console.log('   2. Get your API key from https://resend.com/dashboard');
      console.log('   3. Ensure the key starts with "re_"');
    }
  });

// Status command
program
  .command('status')
  .description('Check email service status')
  .action(async () => {
    console.log('📊 Email Service Status\n');

    // Configuration check
    const configValidation = validateEmailConfig();
    console.log(`Configuration: ${configValidation.valid ? '✅ Valid' : '❌ Invalid'}`);
    
    if (!configValidation.valid) {
      console.log(`Error: ${configValidation.error}\n`);
      return;
    }

    // API connectivity test
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      console.log('API Connectivity: 🔄 Testing...');
      
      // Test with a simple domains list call (doesn't send email)
      try {
        await resend.domains.list();
        console.log('API Connectivity: ✅ Connected');
      } catch (error) {
        console.log('API Connectivity: ❌ Failed');
        console.log('Error:', error);
      }
      
      console.log('\n📋 Service Information:');
      console.log(`Resend API Key: ${process.env.RESEND_API_KEY?.substring(0, 8)}...`);
      console.log('React Email: ✅ Available');
      console.log('Templates: ✅ ContactForm template ready');
      console.log('CLI Tools: ✅ Available');
      
    } catch (error) {
      console.error('❌ Service check failed:', error);
    }
  });

// Info command
program
  .command('info')
  .description('Show email system information')
  .action(() => {
    console.log('📧 Cardinal Conseils Email System\n');
    
    console.log('🏗️  Architecture:');
    console.log('   • React Email templates for professional formatting');
    console.log('   • Resend.com for reliable email delivery');
    console.log('   • Vercel serverless functions for secure API handling');
    console.log('   • TypeScript for type safety and better DX\n');
    
    console.log('📁 File Structure:');
    console.log('   emails/');
    console.log('   ├── templates/');
    console.log('   │   └── ContactForm.tsx    # React Email template');
    console.log('   └── utils/');
    console.log('       └── emailService.ts    # Email sending logic');
    console.log('   api/');
    console.log('   └── contact.ts             # Vercel API endpoint');
    console.log('   scripts/');
    console.log('   └── email-cli.ts           # This CLI tool\n');
    
    console.log('🎯 Available Commands:');
    console.log('   email-cli test             # Send test email');
    console.log('   email-cli preview          # Generate HTML preview');
    console.log('   email-cli validate         # Check configuration');
    console.log('   email-cli status           # Service status');
    console.log('   email-cli info             # This information\n');
    
    console.log('🔗 Useful Links:');
    console.log('   • Resend Dashboard: https://resend.com/dashboard');
    console.log('   • React Email Docs: https://react.email');
    console.log('   • Cardinal Conseils: https://cardinalconseils.com');
  });

// Parse command line arguments
program.parse();

export default program;