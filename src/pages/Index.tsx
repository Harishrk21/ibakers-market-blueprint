import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import CategoryCard from "@/components/CategoryCard";
import { Award, Clock, Heart, MessageCircle, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import christmasCakeImage from "@/assets/christmas-cake.jpg";
import masterclassImage from "@/assets/masterclass.jpg";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "IBakers",
    "description": "Premium home-based bakery in Chennai specializing in custom cakes, brownies, desserts and baking masterclasses",
    "url": "https://www.ibakers.com",
    "logo": "https://www.ibakers.com/logo.png",
    "image": heroImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "servesCuisine": "Bakery & Desserts",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-20:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <Helmet>
        <title>IBakers Chennai | Custom Home-Made Cakes, Birthday Cakes & Desserts</title>
        <meta name="description" content="Order fresh, home-made custom cakes in Chennai. Specializing in birthday cakes, wedding cakes, Christmas cakes, brownies & baking masterclasses. Same-day delivery across Chennai - Adyar, T Nagar, Velachery, Anna Nagar." />
        <meta name="keywords" content="cakes Chennai, home-made cakes, custom cakes Chennai, birthday cakes Chennai, wedding cakes Chennai, baking classes Chennai, brownies Chennai, IBakers" />
        <link rel="canonical" href="https://www.ibakers.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="IBakers Chennai | Custom Home-Made Cakes & Desserts" />
        <meta property="og:description" content="Order fresh, home-made custom cakes in Chennai. Birthday cakes, wedding cakes & more. Same-day delivery available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ibakers.com/" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="IBakers Chennai" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IBakers Chennai | Custom Home-Made Cakes" />
        <meta name="twitter:description" content="Fresh home-made cakes delivered across Chennai" />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 z-10">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="mr-1 h-3 w-3" />
                Proudly Serving Chennai
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Custom Cakes
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Made With Love
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Fresh, home-made cakes for every celebration. From birthday cakes to wedding masterpieces, we create memories you can taste.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-glow shadow-elegant text-base"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = "/products"}>
                  View Products
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Cake Varieties</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Fresh & Home-made</div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt="Beautiful custom cake"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <Star className="h-4 w-4 fill-accent text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The best custom cake I've ever ordered in Chennai!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">- Priya S., Adyar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From classic birthday cakes to festive specialties, discover our range of handcrafted treats
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Birthday Cakes"
              description="Custom designs for kids and adults"
              image={kidsBirthdayImage}
              href="/products"
            />
            <CategoryCard
              title="Wedding Cakes"
              description="Elegant multi-tier masterpieces"
              image={weddingCakeImage}
              href="/products"
            />
            <CategoryCard
              title="Christmas Specials"
              description="Traditional fruit cakes & more"
              image={christmasCakeImage}
              href="/products"
            />
            <CategoryCard
              title="Brownies & Desserts"
              description="Fudgy, delicious treats"
              image={browniesImage}
              href="/products"
            />
            <CategoryCard
              title="Baking Masterclasses"
              description="Learn from expert bakers"
              image={masterclassImage}
              href="/masterclasses"
            />
            <CategoryCard
              title="Custom Orders"
              description="Your dream cake, our expertise"
              image={heroImage}
              href="/custom-orders"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bestselling Cakes</h2>
            <p className="text-muted-foreground">
              Our customers' favorites, delivered fresh to your doorstep
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              id="1"
              title="Chocolate Truffle Cake"
              description="Rich, decadent chocolate layers with smooth truffle frosting"
              price="₹850"
              image={browniesImage}
              category="Birthday Cakes"
              isBestseller
            />
            <ProductCard
              id="2"
              title="Red Velvet Elegance"
              description="Classic red velvet with cream cheese frosting"
              price="₹900"
              image={heroImage}
              category="Birthday Cakes"
              isNew
            />
            <ProductCard
              id="3"
              title="Wedding Bliss"
              description="3-tier elegant wedding cake with fresh flowers"
              price="₹8,500"
              image={weddingCakeImage}
              category="Wedding Cakes"
            />
            <ProductCard
              id="4"
              title="Kids Birthday Special"
              description="Fun cartoon character designs your kids will love"
              price="₹1,200"
              image={kidsBirthdayImage}
              category="Birthday Cakes"
              isBestseller
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose IBakers?</h2>
            <p className="text-muted-foreground">
              Quality, freshness, and love in every bite
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Home-Made Quality</h3>
              <p className="text-sm text-muted-foreground">
                Every cake is baked fresh in our home kitchen with premium ingredients
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Custom Designs</h3>
              <p className="text-sm text-muted-foreground">
                Bring your vision to life with our personalized cake designs
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Reliable delivery across Chennai neighborhoods
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Expert Bakers</h3>
              <p className="text-sm text-muted-foreground">
                Learn from our masterclasses and create your own treats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Real reviews from real customers across Chennai
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with us via WhatsApp for custom orders, pricing, and delivery across Chennai
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              className="text-base"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "/custom-orders"}
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Custom Order Form
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Index;
