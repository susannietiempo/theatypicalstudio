# Resend Email Setup Guide

This guide explains how to configure Resend for the contact form on the "Start a Conversation" page.

## Prerequisites

1. Create a Resend account at [https://resend.com](https://resend.com)
2. Get your API key from the Resend dashboard

## Environment Variables

Create a `.env.local` file in the root of your project (it's already in `.gitignore`) and add:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@theatypicalstudio.com
```

### Variables Explained

- **RESEND_API_KEY**: Your Resend API key (required)
  - Get it from: https://resend.com/api-keys
  - Format: `re_...`

- **CONTACT_EMAIL**: The email address where form submissions will be sent (optional)
  - Defaults to: `hello@theatypicalstudio.com`
  - This is where you'll receive contact form submissions

## Domain Verification (Production)

For production use, you'll need to:

1. Verify your domain in Resend
2. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: "The Atypical Studio <hello@yourdomain.com>"
   ```

Currently, the code uses `onboarding@resend.dev` which works for testing but should be updated for production.

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/start-a-conversation`
3. Fill out and submit the form
4. Check your email inbox (or Resend dashboard) for the submission

## Troubleshooting

- **"Email service is not configured"**: Make sure `RESEND_API_KEY` is set in `.env.local`
- **"Failed to send email"**: Check your Resend API key is valid and has sufficient credits
- **Emails not arriving**: Check spam folder, verify domain (for production), and check Resend dashboard logs

