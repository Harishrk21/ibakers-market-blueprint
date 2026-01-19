import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Heart, Award, Users, MapPin, Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-cake.jpg";
import masterclassImage from "@/assets/masterclass.jpg";

const About = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string, title: string } | null>(null);
  const [api, setApi] = useState<any>(null);

  // Generate student creations media from gallery folder
  const studentMedia = (() => {
    const media: Array<{ type: 'image' | 'video', src: string, title: string }> = [];
    
    // Add student creation images (review1.jpeg to review20.jpeg)
    for (let i = 1; i <= 20; i++) {
      media.push({
        type: 'image' as const,
        src: `/gallery/review${i}.jpeg`,
        title: `Student Creation ${i}`
      });
    }
    
    return media;
  })();

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

  // Keyboard navigation for zoom modal
  useEffect(() => {
    if (selectedMedia === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedMedia]);

  const handlePrevious = () => {
    if (selectedMedia === null) return;
    const currentIndex = studentMedia.findIndex(m => m.src === selectedMedia.src);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : studentMedia.length - 1;
    setSelectedMedia(studentMedia[newIndex]);
  };

  const handleNext = () => {
    if (selectedMedia === null) return;
    const currentIndex = studentMedia.findIndex(m => m.src === selectedMedia.src);
    const newIndex = currentIndex < studentMedia.length - 1 ? currentIndex + 1 : 0;
    setSelectedMedia(studentMedia[newIndex]);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About IBakers Chennai - Best Homemade Cakes",
    "description": "Learn about IBakers - Chennai's #1 best homemade cakes bakery since 2022. Premium custom cakes with fresh ingredients. Founded by Ms. Ayisha Millath.",
    "url": "https://www.ibakers.in/about",
    "mainEntity": {
      "@type": ["Bakery", "LocalBusiness"],
      "name": "IBakers",
      "alternateName": "IBakers Chennai - Best Homemade Cakes",
      "description": "Chennai's #1 best homemade cakes bakery. Premium home-based bakery specializing in custom cakes, birthday cakes, wedding cakes.",
      "foundingDate": "2022",
      "founder": {
        "@type": "Person",
        "name": "Ms. N. Ayisha Millath",
        "jobTitle": "Founder & Head Baker"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "telephone": "+918825471551",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>About IBakers | #1 Homemade Cakes Baker Chennai</title>
        <meta name="description" content="Learn about IBakers - Chennai's #1 best homemade cakes bakery. Founded in 2022 by Ms. Ayisha Millath. Premium home-based bakery crafting custom cakes. 500+ happy customers." />
        <meta name="keywords" content="about IBakers, best homemade cakes in Chennai, Chennai home baker, #1 cake maker Chennai, custom cake maker Chennai, bakery story Chennai, home-made cakes Chennai, best home baker Chennai" />
        <link rel="canonical" href="https://www.ibakers.in/about" />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content="About IBakers | Chennai's #1 Best Homemade Cakes Baker" />
        <meta property="og:description" content="Chennai's #1 best homemade cakes bakery since 2022. Premium home baker crafting custom cakes with love. 500+ happy customers." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        
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
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
              About <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">IBakers</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Chennai's trusted home baker, crafting custom cakes with love since 2022
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">Our Story</h2>
              
              {/* Enhanced Founder Section */}
              <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border-l-4 border-pink-400 p-6 md:p-8 rounded-r-xl border border-white/20 shadow-2xl shadow-pink-500/20">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl md:text-3xl">👩‍🍳</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-wider text-pink-400 font-semibold mb-2">Founder & Head Baker</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3">Ms. N. Ayisha Millath</p>
                    <p className="text-sm md:text-base text-slate-300 mb-4">Founder | Pastry Chef | Baking Coach | Solo Woman Entrepreneur</p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                      <span className="px-3 md:px-4 py-1.5 bg-pink-500/20 border border-pink-400/30 rounded-full text-sm font-medium text-pink-300">🏆 Award-Winning</span>
                      <span className="px-3 md:px-4 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm font-medium text-purple-300">💼 Business Owner</span>
                      <span className="px-3 md:px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300">🎓 Self-Taught</span>
                    </div>
                    <p className="text-sm md:text-base text-slate-400">
                      <span className="font-semibold text-white">Contact:</span> <a href="tel:+918825471551" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">+91 88254 71551</a>
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">🎯 Vision:</span> Ms. Ayisha Millath started IBakers in 2022 with a dream to bring artisanal, home-made cakes to every celebration in Chennai. What began as a small home-based venture has flourished into one of the city's most trusted custom cake services.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">💪 Journey:</span> As a solo woman entrepreneur, she has built IBakers from the ground up, mastering every aspect of the business - from recipe development and cake design to customer service and business management. Her dedication to quality and innovation has earned her a loyal customer base of 500+ happy families across Chennai.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">🌟 Expertise:</span> With years of hands-on experience, Ms. Ayisha specializes in creating custom cakes for birthdays, weddings, anniversaries, and all special occasions. She personally oversees every order, ensuring that each cake is crafted with precision, creativity, and love.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">🏡 Home-Based Excellence:</span> Operating from her certified home kitchen, she maintains the highest standards of hygiene and quality. Every cake is made fresh to order using premium ingredients, reflecting her commitment to excellence.
                  </p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">🎓 Baking Education:</span> As a passionate baking coach, Ms. Ayisha conducts Master Baking Classes to share her expertise with aspiring bakers. From beginner basics to advanced cake decorating techniques, wedding cake masterclasses, and brownie workshops, she teaches hands-on skills in small batches (4-10 participants) for personalized attention. Her classes cover everything from fundamental baking techniques to professional cake decorating, fondant work, and creating stunning multi-tier wedding cakes. Students learn in her certified kitchen, taking home not just knowledge but also the delicious treats they create during the class.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-6">
                {/* Story Card 1 */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 hover:border-pink-400/30 transition-all shadow-lg">
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    What started as a passion for baking in a home kitchen has grown into Chennai's most loved custom cake service. IBakers was founded by <strong className="text-white font-semibold">Ms. N. Ayisha Millath</strong> with a simple belief - every celebration deserves a cake that's as special as the moment itself.
                  </p>
                </div>

                {/* Story Card 2 */}
                <div className="bg-gradient-to-br from-slate-900/60 via-purple-900/20 to-slate-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 hover:border-pink-400/30 transition-all shadow-lg">
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    We specialize in creating <Link to="/products" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">custom cakes</Link>, <Link to="/categories/brownies-desserts" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">brownies</Link>, and <Link to="/desserts" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">desserts</Link> that not only look stunning but taste incredible. Every order is made fresh, using premium ingredients - because we believe in quality you can taste.
                  </p>
                </div>

                {/* Story Card 3 */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 hover:border-pink-400/30 transition-all shadow-lg">
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    From intimate <Link to="/categories/birthday-cakes" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">birthday celebrations</Link> to grand <Link to="/categories/wedding-cakes" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">wedding receptions</Link>, we've had the privilege of being part of thousands of special moments across Chennai.
                  </p>
                </div>

                {/* Story Card 4 */}
                <div className="bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-xl border-l-4 border-pink-400/50 border border-white/10 rounded-xl p-6 md:p-8 hover:border-pink-400/50 transition-all shadow-lg shadow-pink-500/10">
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                    Beyond creating custom cakes, IBakers also offers <Link to="/masterclasses" className="text-pink-400 hover:text-pink-300 hover:underline font-medium">Master Baking Classes</Link> for those who want to learn the art of baking. Whether you're a beginner looking to master the basics or an experienced baker wanting to perfect advanced techniques like wedding cake decoration, our hands-on classes provide personalized instruction in small batches. Join us to learn from Chennai's premier baking coach and take your baking skills to the next level.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={heroImage}
                alt="Ms. N. Ayisha Millath - Founder & Head Baker"
                className="relative rounded-3xl border border-white/20 backdrop-blur-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">Our Values</h2>
            <p className="text-lg text-slate-400">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Quality First", desc: "Premium ingredients, always fresh" },
              { icon: Award, title: "Excellence", desc: "Every cake is a masterpiece crafted with care" },
              { icon: Users, title: "Customer Love", desc: "Your satisfaction is our biggest achievement" },
              { icon: MapPin, title: "Local Pride", desc: "Proudly serving Chennai neighborhoods" },
            ].map((value, i) => (
              <div key={i} className="group text-center space-y-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={masterclassImage}
                alt="Kitchen Standards"
                className="relative rounded-3xl border border-white/20 backdrop-blur-sm w-full"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-black">Kitchen Standards & Hygiene</h2>
              <p className="text-slate-300 leading-relaxed">
                Our home kitchen follows strict hygiene and food safety standards. We maintain:
              </p>
              <ul className="space-y-3 text-slate-300">
                {[
                  "FSSAI certified kitchen operations",
                  "Regular health and safety audits",
                  "Premium quality ingredients from trusted suppliers",
                  "Fresh ingredients from trusted suppliers",
                  "Made fresh for each order"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-pink-400 text-sm font-bold">✓</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Creations Gallery Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Students' Masterpieces</h2>
            <p className="text-slate-400">
              See the amazing creations from our Master Baking Class students
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
              {studentMedia.map((media, index) => (
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
                        <p className="text-white/80 text-xs">Student Creation</p>
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
      </section>

      {/* Student Media Zoom Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 z-10 text-white hover:text-pink-400 transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          {studentMedia.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 z-10 text-white hover:text-pink-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Next Button */}
          {studentMedia.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 text-white hover:text-pink-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Media Content */}
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg object-contain"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg"
              />
            )}
          </div>

          {/* Media Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-white font-semibold text-lg">{selectedMedia.title}</p>
            <p className="text-white/80 text-sm">Student Creation</p>
            {studentMedia.length > 1 && (
              <p className="text-white/60 text-xs mt-1">
                {studentMedia.findIndex(m => m.src === selectedMedia.src) + 1} / {studentMedia.length}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Service Areas */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black">Service Areas in Chennai</h2>
              <p className="text-lg text-slate-400">
                We deliver across major Chennai neighborhoods
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Anna Nagar", "T Nagar", "Adyar", "Velachery", "Mylapore",
                "Besant Nagar", "OMR", "ECR", "Nungambakkam", "Alwarpet",
                "Guindy", "Porur", "Tambaram", "Chrompet", "Pallavaram"
              ].map((area) => (
                <div
                  key={area}
                  className="p-4 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-white/10 text-center hover:border-pink-400/50 transition-all hover:scale-105"
                >
                  <MapPin className="h-4 w-4 text-pink-400 mx-auto mb-2" />
                  <span className="text-sm font-medium text-white">{area}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-slate-300 mt-8">
              Don't see your area? <Link to="/contact" className="text-pink-400 hover:text-pink-300 hover:underline">Contact us</Link> - we deliver across Chennai!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default About;
