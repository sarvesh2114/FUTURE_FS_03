# TravelEase - Make My Trip Rebrand

A modern, attractive travel booking website rebrand built with Next.js, TypeScript, Tailwind CSS, and shadcn UI.

## Features

- 🎨 **Modern UI Design** - Beautiful gradient themes and smooth animations
- ✈️ **Flight Booking** - Easy-to-use flight search interface
- 🏨 **Hotel Booking** - Comprehensive hotel search with date selection
- 📦 **Travel Packages** - Curated travel packages for popular destinations
- 🌍 **Popular Destinations** - Showcase of trending travel locations
- ⭐ **User Testimonials** - Social proof from satisfied travelers
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔒 **Security Features** - Highlighted security and support features
- 🔐 **Authentication** - Complete sign-in/sign-up system with Supabase

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn UI** - Beautiful, accessible component library
- **Lucide React** - Modern icon library
- **Radix UI** - Unstyled, accessible component primitives
- **Supabase** - Backend authentication and database

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier available)

### Installation

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your URL and anon key
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Run the SQL schema:
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase/schema.sql`
   - Click "Run" to execute the schema

4. Configure Supabase Authentication:
   - Go to Authentication > Providers in your Supabase dashboard
   - Enable Email provider (usually enabled by default)
   - Configure email templates if needed
   - Set up redirect URLs:
     - Add `http://localhost:3000/auth/callback` for local development
     - Add your production URL for deployment

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Authentication

The app includes complete authentication functionality:

- **Sign Up** - `/auth/sign-up` - Create a new account
- **Sign In** - `/auth/sign-in` - Login to existing account
- **Forgot Password** - `/auth/forgot-password` - Reset password via email

### Authentication Features

- Email/password authentication
- Password reset via email
- Secure session management
- User profile creation on signup
- Protected routes support

## Database Schema

The SQL schema (`supabase/schema.sql`) includes:

### Tables

1. **user_profiles** - Extended user information
   - Full name, email, phone, avatar
   - Auto-created when user signs up

2. **bookings** - Flight, hotel, and package bookings
   - Supports multiple booking types
   - Status tracking (pending, confirmed, cancelled, completed)
   - Payment status tracking

3. **saved_destinations** - User favorite destinations
   - Save and organize favorite places

4. **reviews** - User reviews and ratings
   - Verified review system
   - Rating from 1-5 stars

5. **payment_methods** - Stored payment methods
   - Secure payment method storage
   - Support for cards, PayPal, bank transfers

### Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Policies enforce data isolation
- Secure by default

## Project Structure

```
.
├── app/
│   ├── auth/
│   │   ├── sign-in/        # Sign in page
│   │   ├── sign-up/        # Sign up page
│   │   └── forgot-password/ # Password reset
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   └── ui/                 # shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── tabs.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts       # Browser Supabase client
│   │   └── server.ts       # Server Supabase client
│   └── utils.ts            # Utility functions
├── supabase/
│   └── schema.sql          # Database schema
└── package.json            # Dependencies and scripts
```

## Key Sections

1. **Hero Section** - Eye-catching hero with search functionality
2. **Stats Bar** - Impressive numbers and achievements
3. **Features** - Key selling points with icons
4. **Destinations** - Popular travel destinations with pricing
5. **Testimonials** - Customer reviews and ratings
6. **Special Deals** - Limited time offers
7. **Money-Back Guarantee** - Trust and security section
8. **CTA Section** - Call-to-action for conversions
9. **Footer** - Comprehensive footer with links

## Customization

- Modify colors in `tailwind.config.ts` and `app/globals.css`
- Update content in `app/page.tsx`
- Add new components in `components/ui/`
- Change destinations and testimonials in the data arrays
- Customize authentication flow in `app/auth/` pages

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Setup Steps

1. **Create Supabase Project**
   - Visit [supabase.com](https://supabase.com)
   - Click "New Project"
   - Fill in project details and wait for setup

2. **Get API Credentials**
   - Go to Settings > API
   - Copy "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy "anon public" key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Run Database Schema**
   - Go to SQL Editor
   - Paste contents of `supabase/schema.sql`
   - Click "Run"

4. **Configure Authentication**
   - Go to Authentication > Settings
   - Set Site URL: `http://localhost:3000` (development)
   - Add redirect URLs:
     - `http://localhost:3000/auth/callback`
     - Your production URL

5. **Enable Email Provider**
   - Go to Authentication > Providers
   - Enable Email provider
   - Configure email templates if needed

## License

This project is created as a rebrand demonstration.
