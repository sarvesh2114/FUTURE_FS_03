"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Star, 
  Shield, 
  Headphones, 
  ArrowRight,
  TrendingUp,
  Award,
  Globe,
  Sparkles,
  Clock,
  CheckCircle,
  BadgeCheck,
  Zap,
  Gift,
  Percent,
  CreditCard,
  Lock,
  Flame
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TravelEase
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/sign-in">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Special Offer Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <Flame className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-lg">🔥 FLASH SALE: Up to 50% OFF on International Flights!</span>
          <span className="hidden sm:inline">|</span>
          <span className="text-sm">Limited Time Only - Book Now!</span>
          <Clock className="w-4 h-4" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">✨ Your Next Adventure Awaits - Book Today & Save!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Travel Made Simple,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Adventures Made Memorable
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium">
              <span className="text-blue-600 font-bold">Save up to 40%</span> on flights & hotels. 
              Discover amazing destinations, book with ease, and create unforgettable memories with our seamless travel platform.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700">
                <Lock className="w-4 h-4" />
                <span className="font-semibold">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700">
                <BadgeCheck className="w-4 h-4" />
                <span className="font-semibold">Instant Confirmation</span>
              </div>
            </div>
            
            {/* Search Tabs */}
            <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <Tabs defaultValue="flights" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="flights" className="flex items-center gap-2">
                      <Plane className="w-4 h-4" />
                      Flights
                    </TabsTrigger>
                    <TabsTrigger value="hotels" className="flex items-center gap-2">
                      <Hotel className="w-4 h-4" />
                      Hotels
                    </TabsTrigger>
                    <TabsTrigger value="packages" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Packages
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="flights" className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">From</label>
                        <Input placeholder="Departure city" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">To</label>
                        <Input placeholder="Destination city" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Date</label>
                        <Input type="date" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                        <Zap className="w-4 h-4" />
                        <span>Save up to 40%</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="flex items-center gap-1 text-sm text-orange-600 font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>Limited Time Offer</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                      Search Flights & Save Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </TabsContent>
                  <TabsContent value="hotels" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Destination</label>
                        <Input placeholder="Where are you going?" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Check-in / Check-out</label>
                        <div className="flex gap-2">
                          <Input type="date" className="flex-1" />
                          <Input type="date" className="flex-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                        <Gift className="w-4 h-4" />
                        <span>Free Breakfast Included</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold">
                        <Percent className="w-4 h-4" />
                        <span>Up to 35% OFF</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                      Search Hotels & Save Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </TabsContent>
                  <TabsContent value="packages" className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Destination</label>
                        <Input placeholder="Choose your dream destination" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Travel Dates</label>
                        <div className="flex gap-2">
                          <Input type="date" className="flex-1" />
                          <Input type="date" className="flex-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>All-Inclusive Deals</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="flex items-center gap-1 text-sm text-purple-600 font-semibold">
                        <Award className="w-4 h-4" />
                        <span>Curated Experiences</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-14 text-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                      View Exclusive Packages <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">2M+</div>
              <div className="text-blue-100 font-medium">Happy Travelers</div>
              <div className="text-xs text-blue-200 mt-1">Trusted by millions</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">150+</div>
              <div className="text-blue-100 font-medium">Countries</div>
              <div className="text-xs text-blue-200 mt-1">Global coverage</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">50K+</div>
              <div className="text-blue-100 font-medium">Hotels</div>
              <div className="text-xs text-blue-200 mt-1">Verified properties</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">24/7</div>
              <div className="text-blue-100 font-medium">Support</div>
              <div className="text-xs text-blue-200 mt-1">Always here for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-bold text-gray-900">Best Price</div>
                <div className="text-sm text-gray-600">Guarantee</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-bold text-gray-900">Secure</div>
                <div className="text-sm text-gray-600">SSL Protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-600" />
              <div>
                <div className="font-bold text-gray-900">Award Winning</div>
                <div className="text-sm text-gray-600">Travel Platform</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-pink-600" />
              <div>
                <div className="font-bold text-gray-900">Flexible</div>
                <div className="text-sm text-gray-600">Payment Options</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <div className="font-bold text-gray-900">Instant</div>
                <div className="text-sm text-gray-600">Confirmation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose TravelEase?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make travel planning effortless and enjoyable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Secure & Safe</CardTitle>
                <CardDescription>
                  Your data and payments are protected with bank-level security
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Our travel experts are always ready to help you, anytime, anywhere
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Best Prices</CardTitle>
                <CardDescription>
                  We guarantee the best deals with our price match promise
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Exclusive Deals</CardTitle>
                <CardDescription>
                  Access member-only discounts and special offers
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>
                  Explore destinations across 150+ countries worldwide
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Verified Reviews</CardTitle>
                <CardDescription>
                  Real reviews from verified travelers to help you decide
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the world's most beautiful places
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Bali, Indonesia", price: "$899", originalPrice: "$1,499", discount: 40, rating: 4.9, reviews: 12.5, badge: "Trending", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
              { name: "Paris, France", price: "$1,299", originalPrice: "$1,899", discount: 32, rating: 4.8, reviews: 8.2, badge: "Popular", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80" },
              { name: "Tokyo, Japan", price: "$1,499", originalPrice: "$2,199", discount: 32, rating: 4.9, reviews: 15.3, badge: "Best Seller", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80" },
              { name: "Dubai, UAE", price: "$1,199", originalPrice: "$1,699", discount: 29, rating: 4.7, reviews: 9.8, badge: "Luxury", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" },
              { name: "Santorini, Greece", price: "$1,099", originalPrice: "$1,599", discount: 31, rating: 4.8, reviews: 11.2, badge: "Romantic", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80" },
              { name: "Maldives", price: "$1,799", originalPrice: "$2,499", discount: 28, rating: 5.0, reviews: 7.5, badge: "Premium", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80" },
            ].map((destination, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      {destination.badge}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                      Save {destination.discount}%
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-16 left-4 z-20 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-sm font-bold">{destination.rating}</span>
                    <span className="text-white/70 text-xs">({destination.reviews}k)</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{destination.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-extrabold">From {destination.price}</p>
                      <p className="text-sm line-through text-white/70">{destination.originalPrice}</p>
                    </div>
                    <p className="text-xs text-white/80 mt-1">per person • All inclusive</p>
                  </div>
                </div>
                <CardContent className="p-0 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Button className="w-full rounded-none h-12 font-bold text-white bg-transparent hover:bg-white/10 border-0 group-hover:shadow-lg transition-all">
                    Book Now & Save {destination.discount}% <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real travelers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", location: "New York", rating: 5, review: "TravelEase made our honeymoon absolutely perfect! Everything was seamless from booking to return. Saved over $800 compared to other sites!", verified: true, trip: "Honeymoon to Maldives" },
              { name: "Michael Chen", location: "Singapore", rating: 5, review: "Best travel platform I've ever used. Great prices and excellent customer service. The 24/7 support saved me when I had flight issues!", verified: true, trip: "Business Trip to Tokyo" },
              { name: "Emma Williams", location: "London", rating: 5, review: "Amazing experience! Found the perfect hotel at an unbeatable price. The package deals are incredible - highly recommended!", verified: true, trip: "Family Vacation to Bali" },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        {testimonial.verified && (
                          <BadgeCheck className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </CardDescription>
                      <div className="mt-2 text-xs text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded w-fit">
                        {testimonial.trip}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed italic">"{testimonial.review}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified Booking</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full mb-4">
              <Gift className="w-5 h-5" />
              <span className="font-bold">EXCLUSIVE DEALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Limited Time Offers
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Don't miss out on these incredible savings - Book now before they're gone!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-orange-500 shadow-2xl bg-white">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Flash Sale</span>
                  <Flame className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-orange-600 mb-2">50% OFF</div>
                <p className="text-gray-700 mb-4">On all international flights. Valid for next 48 hours only!</p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Claim Offer <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-500 shadow-2xl bg-white">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Hotel Deal</span>
                  <Hotel className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-purple-600 mb-2">35% OFF</div>
                <p className="text-gray-700 mb-4">Premium hotels worldwide. Free cancellation available.</p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Book Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-500 shadow-2xl bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Package Deal</span>
                  <MapPin className="w-6 h-6" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-4xl font-extrabold text-blue-600 mb-2">40% OFF</div>
                <p className="text-gray-700 mb-4">All-inclusive vacation packages. Book 2, get 1 free!</p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  View Packages <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Money-Back Guarantee
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
              Not satisfied? Get 100% refund within 30 days. No questions asked. We're so confident you'll love your trip, we guarantee it.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <CheckCircle className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Best Price</h3>
                <p className="text-green-100">Find a lower price? We'll match it + 10%</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Free Cancellation</h3>
                <p className="text-green-100">Cancel up to 24 hours before for free</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <BadgeCheck className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-green-100">Round-the-clock assistance whenever you need</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Join 2 Million Happy Travelers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Ready to Start Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                Dream Journey?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto font-medium">
              Save up to <span className="font-bold text-yellow-300">50%</span> on your next trip. 
              Create your account now and unlock exclusive member-only deals!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="#destinations">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 font-bold shadow-2xl hover:shadow-white/20">
                  Explore Destinations
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button size="lg" className="text-lg px-10 py-6 font-bold bg-white text-blue-600 hover:bg-gray-100 shadow-2xl hover:shadow-white/20">
                  Create Free Account
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Free to sign up</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Instant access to deals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">TravelEase</span>
              </div>
              <p className="text-sm">
                Your trusted travel partner for flights, hotels, and unforgettable experiences.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
