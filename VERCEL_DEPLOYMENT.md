# Vercel Deployment Guide

This guide will help you deploy The Atypical Studio website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your GitHub repository connected to Vercel
3. Resend API key and email configuration

## Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `susannietiempo/theatypicalstudio`
4. Vercel will automatically detect Next.js

### 2. Configure Environment Variables

In the Vercel project settings, add the following environment variables:

**Required:**
- `RESEND_API_KEY` - Your Resend API key (get from https://resend.com/api-keys)

**Optional:**
- `CONTACT_EMAIL` - Email where form submissions are sent (defaults to `hello@theatypicalstudio.com`)
- `FROM_EMAIL` - Sender email address (defaults to `onboarding@resend.dev` for testing)

**To add environment variables:**
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add each variable for all environments (Production, Preview, Development)

### 3. Deploy

1. Click "Deploy"
2. Vercel will automatically:
   - Install dependencies (`npm install`)
   - Build the project (`npm run build`)
   - Deploy to production

### 4. Verify Deployment

After deployment:
1. Visit your Vercel deployment URL
2. Test the contact form at `/start-a-conversation`
3. Verify emails are being sent correctly

## Production Optimizations

The project is configured with:
- ✅ Compression enabled
- ✅ SWC minification
- ✅ React Strict Mode
- ✅ Image optimization (AVIF/WebP)
- ✅ Static page generation where possible
- ✅ API routes for dynamic functionality

## Custom Domain Setup

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `FROM_EMAIL` in environment variables to use your verified domain

## Resend Domain Verification (Production)

For production, you should:
1. Verify your domain in Resend dashboard
2. Update `FROM_EMAIL` environment variable to use your verified domain
   - Example: `hello@yourdomain.com`
   - Currently set to `onboarding@resend.dev` (testing only)

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify Node.js version (Vercel uses Node 18+ by default)
- Check build logs in Vercel dashboard

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for API usage/limits
- Verify domain is verified in Resend (for production)

### Images Not Loading
- Ensure images are in the `public` folder
- Check file paths are correct
- Verify image formats are supported

## Build Configuration

The project uses:
- **Framework**: Next.js 14 (App Router)
- **Node Version**: 18.x (Vercel default)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (Next.js default)

## Performance

The site is optimized for:
- Fast page loads (static generation)
- Efficient API routes
- Optimized images
- Minimal JavaScript bundle size

## Monitoring

Vercel provides:
- Real-time analytics
- Performance metrics
- Error tracking
- Deployment logs

Check your Vercel dashboard for detailed insights.

