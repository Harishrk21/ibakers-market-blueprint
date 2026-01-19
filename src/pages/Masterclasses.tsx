import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Award } from "lucide-react";
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from "@/constants/whatsapp";
import masterclassImage from "@/assets/masterclass.jpg";
import heroImage from "@/assets/hero-cake.jpg";

const Masterclasses = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Baking Masterclasses in Chennai | IBakers",
    "description": "Learn baking from expert bakers in Chennai. Beginner to advanced classes covering cake decorating, wedding cakes, brownies & desserts. Hands-on learning with small batches.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IBakers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "url": "https://www.ibakers.in/masterclasses"
  };
  const classes = [
    {
      id: "1",
      title: "Beginner Baking Basics",
      description: "Perfect for those new to baking! Learn the fundamentals of baking from scratch in this comprehensive beginner-friendly class.",
      detailedDescription: "This hands-on class is designed for absolute beginners who want to learn baking from the ground up. You'll master essential techniques that form the foundation of all great baking.",
      duration: "3 hours",
      participants: "Max 8",
      price: "₹2,500",
      level: "Beginner",
      image: masterclassImage,
      nextDate: "Dec 15, 2025",
      whatYoullLearn: [
        "Understanding different types of flour, sugar, and leavening agents",
        "Proper measuring techniques for consistent results",
        "Temperature control and oven management",
        "Basic mixing methods: creaming, folding, and whisking",
        "How to make perfect vanilla sponge cake",
        "Simple buttercream frosting and basic piping",
        "Common baking mistakes and how to avoid them",
        "Storage and freshness tips for baked goods"
      ],
      includes: [
        "All ingredients and materials provided",
        "Recipe cards to take home",
        "Hands-on practice with instructor guidance",
        "Your own cake to take home",
        "Certificate of completion",
        "Refreshments during the class"
      ],
      prerequisites: "No prior baking experience required. Just bring your enthusiasm!"
    },
    {
      id: "2",
      title: "Advanced Cake Decorating",
      description: "Take your decorating skills to the next level! Master professional piping techniques, fondant work, and create stunning cake designs.",
      detailedDescription: "This intensive class is perfect for bakers who have mastered the basics and want to create show-stopping decorated cakes. Learn professional techniques used by expert bakers.",
      duration: "4 hours",
      participants: "Max 6",
      price: "₹3,500",
      level: "Advanced",
      image: heroImage,
      nextDate: "Dec 20, 2025",
      whatYoullLearn: [
        "Advanced piping techniques: rosettes, borders, and writing",
        "Working with fondant: rolling, covering, and sculpting",
        "Creating beautiful sugar flowers and decorations",
        "Color theory and design principles for cakes",
        "Layering and stacking techniques",
        "Creating texture and dimension",
        "Professional finishing touches",
        "Photography tips for showcasing your work"
      ],
      includes: [
        "All professional tools and materials",
        "Fondant, buttercream, and decorative supplies",
        "Step-by-step instruction booklet",
        "Your decorated cake to take home",
        "Certificate of completion",
        "Light refreshments"
      ],
      prerequisites: "Basic baking knowledge recommended. Should be comfortable with basic cake making."
    },
    {
      id: "3",
      title: "Wedding Cake Masterclass",
      description: "Learn to create elegant, professional multi-tier wedding cakes. Master the art of tiered cake construction, elegant decorations, and flawless finishing.",
      detailedDescription: "This comprehensive masterclass covers everything you need to create stunning wedding cakes. From structural stability to elegant decorations, learn the secrets of professional wedding cake design.",
      duration: "6 hours",
      participants: "Max 4",
      price: "₹5,000",
      level: "Advanced",
      image: heroImage,
      nextDate: "Jan 5, 2025",
      whatYoullLearn: [
        "Planning and designing multi-tier cakes",
        "Structural support systems: dowels and boards",
        "Perfect leveling and stacking techniques",
        "Smooth fondant application on large cakes",
        "Creating elegant decorations: flowers, ribbons, and patterns",
        "Color coordination and theme matching",
        "Transportation and assembly on-site",
        "Pricing strategies for wedding cakes",
        "Client consultation and design process"
      ],
      includes: [
        "All premium ingredients and materials",
        "Professional cake decorating tools",
        "Comprehensive wedding cake guide",
        "Your tiered cake creation to take home",
        "Certificate of completion",
        "Lunch and refreshments included"
      ],
      prerequisites: "Intermediate to advanced baking skills required. Experience with fondant work recommended."
    },
    {
      id: "4",
      title: "Brownie & Desserts Workshop",
      description: "Master the art of creating perfect brownies, cookies, and popular desserts. Learn secret techniques for fudgy brownies, chewy cookies, and more!",
      detailedDescription: "This fun and interactive workshop focuses on creating crowd-pleasing desserts. Perfect for home bakers who want to impress with delicious treats that are easier than cakes but equally impressive.",
      duration: "2.5 hours",
      participants: "Max 10",
      price: "₹2,000",
      level: "Beginner",
      image: masterclassImage,
      nextDate: "Dec 18, 2025",
      whatYoullLearn: [
        "Perfect fudgy vs cakey brownie techniques",
        "Cookie science: chewy vs crispy",
        "Chocolate tempering basics",
        "Creating flavor variations and add-ins",
        "Proper baking times and temperatures",
        "Presentation and plating techniques",
        "Packaging for gifting and selling",
        "Quick dessert recipes for parties"
      ],
      includes: [
        "All ingredients and materials",
        "Recipe collection to take home",
        "Multiple dessert varieties to practice",
        "Your dessert box to take home",
        "Certificate of participation",
        "Tea and snacks"
      ],
      prerequisites: "Suitable for all levels. Great for beginners and those wanting to expand their dessert repertoire."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Baking Masterclasses Chennai | Expert Bakers</title>
        <meta name="description" content="Join baking masterclasses in Chennai. Learn cake decorating, wedding cakes, brownies & desserts from expert bakers. Beginner to advanced. Small batches." />
        <meta name="keywords" content="baking classes Chennai, cake decorating classes, baking masterclass Chennai, learn baking Chennai, wedding cake classes, dessert making classes Chennai, IBakers classes" />
        <link rel="canonical" href="https://www.ibakers.in/masterclasses" />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content="Baking Masterclasses Chennai | Learn from Expert Bakers" />
        <meta property="og:description" content="Learn baking from expert bakers in Chennai. Beginner to advanced classes with hands-on learning." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={masterclassImage} />
        
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
              Baking <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Masterclasses</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Learn from expert bakers and unlock your baking potential
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Award className="h-8 w-8 text-pink-400 mx-auto" />
              <h3 className="font-semibold text-white">Expert Instructors</h3>
              <p className="text-sm text-slate-400">Learn from professionals</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-pink-400 mx-auto" />
              <h3 className="font-semibold text-white">Small Batches</h3>
              <p className="text-sm text-slate-400">Personal attention guaranteed</p>
            </div>
            <div className="space-y-2">
              <Clock className="h-8 w-8 text-pink-400 mx-auto" />
              <h3 className="font-semibold text-white">Hands-On Learning</h3>
              <p className="text-sm text-slate-400">Practice as you learn</p>
            </div>
            <div className="space-y-2">
              <Calendar className="h-8 w-8 text-pink-400 mx-auto" />
              <h3 className="font-semibold text-white">Take Home</h3>
              <p className="text-sm text-slate-400">Your creation goes with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">Upcoming Classes</h2>
            <p className="text-lg text-slate-400">
              Choose the class that matches your skill level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-xl hover:shadow-elegant transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={
                        classItem.level === "Beginner"
                          ? "bg-accent text-white"
                          : "bg-primary text-white"
                      }
                    >
                      {classItem.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="bg-slate-900/50">
                  <h3 className="text-2xl font-semibold text-white">{classItem.title}</h3>
                  <p className="text-slate-300 mt-2">{classItem.description}</p>
                  <p className="text-slate-400 text-sm mt-3">{classItem.detailedDescription}</p>
                </CardHeader>
                
                <CardContent className="space-y-6 bg-slate-900/50">
                  {/* Class Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-white">
                      <Clock className="h-4 w-4 text-pink-400" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white">
                      <Users className="h-4 w-4 text-pink-400" />
                      <span>{classItem.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2 text-white">
                      <Calendar className="h-4 w-4 text-pink-400" />
                      <span>Next class: {classItem.nextDate}</span>
                    </div>
                  </div>

                  {/* What You'll Learn */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-semibold text-white mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {classItem.whatYoullLearn.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-pink-400 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What's Included */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {classItem.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="font-semibold text-white mb-2">Prerequisites:</h4>
                    <p className="text-sm text-slate-300">{classItem.prerequisites}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">
                        {classItem.price}
                      </span>
                      <span className="text-sm text-slate-400">per person</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="bg-slate-900/50">
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`${WHATSAPP_MESSAGE}\n\nI'm interested in the ${classItem.title} masterclass.`)}`, "_blank")}
                  >
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black">What You'll Learn</h2>
              <p className="text-lg text-slate-400">
                Our masterclasses cover everything you need to know
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">Baking Techniques</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Temperature control and oven management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ingredient selection and substitutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proper mixing and folding techniques</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">Decorating Skills</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Piping techniques and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Fondant work and sculpting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Color theory and design principles</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">Professional Tips</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Time-saving hacks for home bakers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Troubleshooting common problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Storage and transportation tips</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-slate-900/50 backdrop-blur-xl rounded-lg border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-white">Business Insights</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Pricing your creations correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Marketing your home bakery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">•</span>
                    <span>Food safety and licensing basics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Masterclasses;
