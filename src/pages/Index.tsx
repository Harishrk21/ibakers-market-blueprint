import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CategoryCard from "@/components/CategoryCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Clock, Heart, MessageCircle, Star, Sparkles, Play } from "lucide-react";
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from "@/constants/whatsapp";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import christmasCakeImage from "@/assets/christmas-cake.jpg";
import masterclassImage from "@/assets/masterclass.jpg";

const Index = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string, title: string, client: string } | null>(null);
  const [api, setApi] = useState<any>(null);

  // Auto-scroll carousel
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Reset to start
      }
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, [api]);

  // Generate testimonial media from gallery folder (review1.jpeg to review32.jpeg, review33.mp4 to review38.mp4)
  const testimonialMedia = (() => {
    const media: Array<{ type: 'image' | 'video', src: string, title: string, client: string }> = [];
    
    // Add all images (review1.jpeg to review32.jpeg)
    for (let i = 1; i <= 32; i++) {
      media.push({
        type: 'image' as const,
        src: `/gallery/review${i}.jpeg`,
        title: `Customer Review ${i}`,
        client: "Happy Customer"
      });
    }
    
    // Add all videos (review33.mp4 to review38.mp4)
    for (let i = 33; i <= 38; i++) {
      media.push({
        type: 'video' as const,
        src: `/gallery/review${i}.mp4`,
        title: `Customer Video Review ${i - 32}`,
        client: "Happy Customer"
      });
    }
    
    return media;
  })();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness", "FoodEstablishment"],
    "name": "IBakers - Best Homemade Cakes in Chennai",
    "alternateName": "IBakers Chennai",
    "description": "Chennai's #1 best homemade cakes bakery. Premium custom cakes, birthday cakes, wedding cakes made fresh daily. Top-rated home baker specializing in homemade cakes, custom cakes, brownies, desserts and baking masterclasses.",
    "url": "https://www.ibakers.com",
    "logo": "https://www.ibakers.com/logo.png",
    "image": [heroImage, "https://www.ibakers.com/hero-cake.jpg"],
    "founder": {
      "@type": "Person",
      "name": "Ms. N. Ayisha Millath",
      "jobTitle": "Founder & Head Baker"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chennai",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "telephone": "+918825471551",
    "priceRange": "₹₹",
    "servesCuisine": "Bakery & Desserts",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-20:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Chennai",
      "sameAs": "https://en.wikipedia.org/wiki/Chennai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Homemade Cakes and Desserts",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Birthday Cakes",
          "url": "https://www.ibakers.com/categories/birthday-cakes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Wedding Cakes",
          "url": "https://www.ibakers.com/categories/wedding-cakes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom Cakes",
          "url": "https://www.ibakers.com/products"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Happy Customer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best homemade cakes in Chennai! Fresh, delicious, and beautifully crafted."
      }
    ],
    "sameAs": [
      "https://www.ibakers.com"
    ],
    "keywords": "best homemade cakes in Chennai, homemade cakes Chennai, best home baker Chennai, custom cakes Chennai, birthday cakes Chennai"
  };

  return (
    <>
      <Helmet>
        <title>Best Homemade Cakes in Chennai | IBakers - #1 Home Baker | Custom Cakes</title>
        <meta name="description" content="IBakers - Chennai's #1 best homemade cakes bakery. Premium custom cakes, birthday cakes, wedding cakes made fresh daily. Top-rated home baker with 500+ happy customers. Best homemade cakes in Chennai. Order now!" />
        <meta name="keywords" content="best homemade cakes in Chennai, homemade cakes Chennai, best home baker Chennai, #1 cake maker Chennai, custom cakes Chennai, birthday cakes Chennai, wedding cakes Chennai, top bakery Chennai, fresh homemade cakes, best cakes in Chennai, IBakers Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Best Homemade Cakes in Chennai | IBakers - #1 Home Baker" />
        <meta property="og:description" content="Chennai's #1 best homemade cakes bakery. Premium custom cakes, birthday cakes, wedding cakes made fresh. Top-rated home baker with 500+ happy customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ibakers.com/" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="IBakers Chennai" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Homemade Cakes in Chennai | IBakers" />
        <meta name="twitter:description" content="Chennai's #1 best homemade cakes bakery. Premium custom cakes made fresh daily." />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 relative z-10">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                <span className="text-xs sm:text-sm">Proudly Serving Chennai</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Custom Cakes
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Made With Love
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                Fresh, home-made cakes for every celebration. From birthday cakes to wedding masterpieces, we create memories you can taste.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Order via WhatsApp
                </button>
                <button 
                  onClick={() => window.location.href = "/products"}
                  className="px-6 md:px-8 py-3 md:py-4 bg-slate-800/50 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-base md:text-lg hover:bg-slate-700 hover:border-white/40 transition-all flex items-center gap-2"
                >
                  View Products
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 md:gap-12 pt-8">
                {[
                  { value: "500+", label: "Happy Customers" },
                  { value: "50+", label: "Cake Varieties" },
                  { value: "100%", label: "Fresh Made" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                
                {/* Main image container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm">
                  <img
                    src={heroImage}
                    alt="Beautiful custom cake"
                    className="w-full aspect-square object-cover"
                  />
                  
                  {/* Floating review card */}
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/10 transform hover:scale-105 transition-transform">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm mb-2">"The best custom cake I've ever ordered in Chennai!"</p>
                    <p className="text-xs text-slate-400">- Priya S., Adyar</p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Explore Our
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Collections</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              From classic birthday cakes to festive specialties, discover our range of handcrafted treats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Birthday Cakes"
              description="Custom designs for kids and adults"
              image={kidsBirthdayImage}
              href="/categories/birthday-cakes"
            />
            <CategoryCard
              title="Wedding Cakes"
              description="Elegant multi-tier masterpieces"
              image={weddingCakeImage}
              href="/categories/wedding-cakes"
            />
            <CategoryCard
              title="Christmas Specials"
              description="Traditional fruit cakes & more"
              image={christmasCakeImage}
              href="/categories/christmas-specials"
            />
            <CategoryCard
              title="Brownies & Desserts"
              description="Fudgy, delicious treats"
              image={browniesImage}
              href="/categories/brownies-desserts"
            />
            <CategoryCard
              title="Custom Orders"
              description="Your dream cake, our expertise"
              image={heroImage}
              href="/custom-orders"
            />
            <CategoryCard
              title="Baking Masterclasses"
              description="Learn from expert bakers"
              image={masterclassImage}
              href="/masterclasses"
              className="opacity-60 hover:opacity-80 scale-95"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black px-2">
              Bestselling
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Cakes & Desserts</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 px-2">
              Our customers' favorites, delivered fresh to your doorstep
            </p>
          </div>
          
          {/* Marquee Container */}
          <div className="overflow-hidden relative -mx-3 sm:-mx-4">
            <div className="flex animate-marquee-right gap-4 sm:gap-6">
              {/* First set of products */}
              <div className="flex gap-4 sm:gap-6 flex-shrink-0">
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="bento-1"
                    title="Bento Cake"
                    description="Trendy Korean-style mini decorated cake perfect for individual servings"
                    price="₹450"
                    image="/bento.png"
                    category="Trending Cakes"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="mini-1"
                    title="Mini Cake"
                    description="Adorable mini cakes perfect for personal celebrations and gifting"
                    price="₹400"
                    image="/minicake.png"
                    category="Desserts"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="mug-1"
                    title="Mug Cake"
                    description="Delicious single-serve cake in a convenient mug, perfect for quick treats"
                    price="₹350"
                    image="/mugcake.png"
                    category="Desserts"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="brownies-1"
                    title="Brownies"
                    description="Fudgy, rich chocolate brownies made with premium ingredients"
                    price="₹300"
                    image={browniesImage}
                    category="Desserts"
                    isBestseller
                  />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 sm:gap-6 flex-shrink-0">
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="bento-1-duplicate"
                    title="Bento Cake"
                    description="Trendy Korean-style mini decorated cake perfect for individual servings"
                    price="₹450"
                    image="/bento.png"
                    category="Trending Cakes"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="mini-1-duplicate"
                    title="Mini Cake"
                    description="Adorable mini cakes perfect for personal celebrations and gifting"
                    price="₹400"
                    image="/minicake.png"
                    category="Desserts"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="mug-1-duplicate"
                    title="Mug Cake"
                    description="Delicious single-serve cake in a convenient mug, perfect for quick treats"
                    price="₹350"
                    image="/mugcake.png"
                    category="Desserts"
                    isBestseller
                  />
                </div>
                <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[350px] flex-shrink-0">
                  <ProductCard
                    id="brownies-1-duplicate"
                    title="Brownies"
                    description="Fudgy, rich chocolate brownies made with premium ingredients"
                    price="₹300"
                    image={browniesImage}
                    category="Desserts"
                    isBestseller
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Why Choose
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> IBakers?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">
              Quality, freshness, and love in every bite
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Heart, title: "Home-Made Quality", desc: "Fresh from our kitchen with premium ingredients" },
              { icon: Sparkles, title: "Custom Designs", desc: "Bring your vision to life with personalized cakes" },
              { icon: Clock, title: "Timely Delivery", desc: "Reliable delivery across Chennai neighborhoods" },
              { icon: Award, title: "Expert Bakers", desc: "Learn from our masterclasses" },
            ].map((feature, i) => (
              <div key={i} className="group text-center space-y-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              Customer
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Love</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">
              Real reviews from real customers across Chennai
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <TestimonialCard
              name="Rajesh Kumar"
              location="T Nagar, Chennai"
              rating={5}
              comment="Ordered a custom birthday cake for my daughter. The design was exactly what we wanted and it tasted amazing! Highly recommend IBakers."
            />
            <TestimonialCard
              name="Deepa Menon"
              location="Adyar, Chennai"
              rating={5}
              comment="The Christmas fruit cake was absolutely delicious. Fresh ingredients, perfect texture. Will definitely order again!"
            />
            <TestimonialCard
              name="Arun Patel"
              location="Anna Nagar, Chennai"
              rating={5}
              comment="Attended the baking masterclass and learned so much! The instructors are patient and knowledgeable. Great experience."
            />
          </div>

          {/* Testimonial Gallery - Images & Videos */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Customer Creations & Reviews</h2>
              <p className="text-slate-400">
                See our cakes through our customers' eyes
              </p>
            </div>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonialMedia.map((media, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div
                      className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-square border border-white/10"
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.src}
                          alt={media.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="relative w-full h-full bg-black">
                          <video
                            src={media.src}
                            className="w-full h-full object-cover"
                            muted
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="h-12 w-12 text-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-semibold text-sm">{media.title}</p>
                          <p className="text-white/80 text-xs">{media.client}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt="Customer creation"
                className="w-full h-auto rounded-2xl"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl"
              />
            )}
            <div className="mt-4 text-center">
              <p className="text-white font-semibold">{selectedMedia.title}</p>
              <p className="text-white/60">{selectedMedia.client}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
            Ready to Order Your
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dream Cake?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch with us via WhatsApp for custom orders, pricing, and delivery across Chennai
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}
              className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </button>
            <button 
              onClick={() => window.location.href = "/custom-orders"}
              className="px-8 md:px-10 py-4 md:py-5 bg-slate-800/50 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-base md:text-lg hover:bg-slate-700 hover:border-white/40 transition-all flex items-center gap-2"
            >
              Custom Order Form
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Index;
