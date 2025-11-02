# Supabase Setup Guide for TravelEase

This guide will walk you through setting up Supabase authentication and database for the TravelEase application.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in the project details:
   - **Name**: TravelEase (or any name you prefer)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is sufficient for development
5. Click "Create new project" and wait 2-3 minutes for setup

## Step 2: Get API Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Find the following values:
   - **Project URL**: Copy this value
   - **anon public** key: Copy this key (not the service_role key!)

3. Create a `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 3: Run Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the entire contents of `supabase/schema.sql`
4. Paste it into the SQL editor
5. Click "Run" or press `Ctrl/Cmd + Enter`
6. You should see "Success. No rows returned" if everything worked

The schema creates:
- `user_profiles` table for extended user data
- `bookings` table for flight/hotel/package bookings
- `saved_destinations` table for user favorites
- `reviews` table for user reviews
- `payment_methods` table for stored payment methods
- Automatic triggers and functions
- Row Level Security (RLS) policies

## Step 4: Configure Authentication

1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Set the **Site URL**:
   - For development: `http://localhost:3000`
   - For production: Your production domain
3. Add **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/sign-in`
   - `http://localhost:3000/auth/sign-up`
   - Add your production URLs when deploying

## Step 5: Enable Email Provider

1. Go to **Authentication** → **Providers**
2. Make sure **Email** is enabled (it's enabled by default)
3. (Optional) Customize email templates:
   - Go to **Authentication** → **Email Templates**
   - Customize the confirmation email, password reset email, etc.

## Step 6: Test Authentication

1. Make sure your `.env.local` file is set up correctly
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Navigate to `http://localhost:3000/auth/sign-up`
4. Create a test account
5. Check your email for the confirmation link (if email confirmation is enabled)
6. Sign in at `http://localhost:3000/auth/sign-in`

## SQL Schema Overview

The SQL schema (`supabase/schema.sql`) includes:

### Tables Created:

1. **user_profiles**
   - Stores extended user information
   - Automatically created when a user signs up

2. **bookings**
   - Stores flight, hotel, and package bookings
   - Tracks booking status and payment information

3. **saved_destinations**
   - Allows users to save favorite destinations

4. **reviews**
   - User reviews and ratings for destinations

5. **payment_methods**
   - Securely stores user payment methods

### Security Features:

- **Row Level Security (RLS)** enabled on all tables
- Users can only access their own data
- Automatic profile creation on signup
- Secure by default

## Troubleshooting

### "Invalid API key" error
- Make sure you're using the `anon public` key, not the `service_role` key
- Check that your `.env.local` file is in the project root
- Restart your development server after changing `.env.local`

### "User profile not created" error
- Check that the trigger function was created successfully
- Verify the SQL schema ran without errors
- Check the Supabase logs for errors

### Email not sending
- Check your Supabase project's email settings
- Verify your redirect URLs are configured correctly
- Check spam folder for confirmation emails

### RLS policies blocking access
- Make sure you're signed in when testing
- Check that RLS policies were created correctly
- Verify the user ID matches in queries

## Next Steps

After setup:
1. Test sign up and sign in flows
2. Customize email templates if needed
3. Add additional fields to user_profiles if needed
4. Deploy your app with environment variables set

## Production Deployment

When deploying to production:

1. Update **Site URL** in Supabase settings to your production domain
2. Add production redirect URLs
3. Set environment variables in your hosting platform:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Test authentication on production domain

## Support

For issues with:
- **Supabase setup**: Check [Supabase documentation](https://supabase.com/docs)
- **Authentication**: Check Supabase Auth docs
- **Database**: Check Supabase Database docs
- **This project**: Check the main README.md

