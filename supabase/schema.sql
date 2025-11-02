-- =============================================
-- TravelEase Database Schema for Supabase
-- =============================================

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- User Profiles Table
-- This table extends the auth.users table with additional user information
-- =============================================
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
-- Users can view their own profile
CREATE POLICY "Users can view own profile"
  ON public.user_profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON public.user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Users can insert their own profile
CREATE POLICY "Users can insert own profile"
  ON public.user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- =============================================
-- Bookings Table
-- Stores flight, hotel, and package bookings
-- =============================================
CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  booking_type TEXT NOT NULL CHECK (booking_type IN ('flight', 'hotel', 'package')),
  destination TEXT NOT NULL,
  origin TEXT,
  check_in_date DATE,
  check_out_date DATE,
  travel_date DATE,
  number_of_travelers INTEGER DEFAULT 1,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  booking_reference TEXT UNIQUE NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for bookings
-- Users can view their own bookings
CREATE POLICY "Users can view own bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own bookings
CREATE POLICY "Users can insert own bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own bookings
CREATE POLICY "Users can update own bookings"
  ON public.bookings FOR UPDATE
  USING (auth.uid() = user_id);

-- =============================================
-- Saved Destinations Table
-- Allows users to save favorite destinations
-- =============================================
CREATE TABLE IF NOT EXISTS public.saved_destinations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  destination_name TEXT NOT NULL,
  destination_code TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, destination_name)
);

-- Enable Row Level Security
ALTER TABLE public.saved_destinations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for saved_destinations
CREATE POLICY "Users can manage own saved destinations"
  ON public.saved_destinations FOR ALL
  USING (auth.uid() = user_id);

-- =============================================
-- Reviews Table
-- User reviews for destinations, hotels, etc.
-- =============================================
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  booking_id UUID REFERENCES public.bookings(id) ON DELETE SET NULL,
  destination TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies for reviews
-- Anyone can view reviews
CREATE POLICY "Anyone can view reviews"
  ON public.reviews FOR SELECT
  USING (true);

-- Users can insert their own reviews
CREATE POLICY "Users can insert own reviews"
  ON public.reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own reviews
CREATE POLICY "Users can update own reviews"
  ON public.reviews FOR UPDATE
  USING (auth.uid() = user_id);

-- =============================================
-- Payment Methods Table
-- Store user payment methods securely
-- =============================================
CREATE TABLE IF NOT EXISTS public.payment_methods (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  payment_type TEXT NOT NULL CHECK (payment_type IN ('card', 'paypal', 'bank_transfer')),
  last_four_digits TEXT,
  card_brand TEXT,
  is_default BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;

-- RLS Policies for payment_methods
CREATE POLICY "Users can manage own payment methods"
  ON public.payment_methods FOR ALL
  USING (auth.uid() = user_id);

-- =============================================
-- Functions and Triggers
-- =============================================

-- Function to automatically create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
  BEFORE UPDATE ON public.reviews
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- =============================================
-- Indexes for Performance
-- =============================================
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_booking_reference ON public.bookings(booking_reference);
CREATE INDEX IF NOT EXISTS idx_saved_destinations_user_id ON public.saved_destinations(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user_id ON public.reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_destination ON public.reviews(destination);
CREATE INDEX IF NOT EXISTS idx_payment_methods_user_id ON public.payment_methods(user_id);

-- =============================================
-- Sample Data (Optional - for testing)
-- =============================================

-- Note: Actual user data will be created through authentication
-- This is just a reference structure

-- =============================================
-- Views for Common Queries
-- =============================================

-- View for user booking summary
CREATE OR REPLACE VIEW public.user_booking_summary AS
SELECT 
  b.user_id,
  COUNT(*) as total_bookings,
  SUM(b.total_amount) as total_spent,
  COUNT(CASE WHEN b.status = 'confirmed' THEN 1 END) as confirmed_bookings,
  COUNT(CASE WHEN b.status = 'cancelled' THEN 1 END) as cancelled_bookings
FROM public.bookings b
GROUP BY b.user_id;

-- Grant access to the view
GRANT SELECT ON public.user_booking_summary TO authenticated;

-- =============================================
-- Comments
-- =============================================
COMMENT ON TABLE public.user_profiles IS 'Extended user information beyond auth.users';
COMMENT ON TABLE public.bookings IS 'Flight, hotel, and package bookings';
COMMENT ON TABLE public.saved_destinations IS 'User saved favorite destinations';
COMMENT ON TABLE public.reviews IS 'User reviews and ratings';
COMMENT ON TABLE public.payment_methods IS 'Stored payment methods for users';

COMMENT ON COLUMN public.bookings.booking_reference IS 'Unique reference number for the booking';
COMMENT ON COLUMN public.reviews.verified IS 'Whether the review is from a verified booking';

