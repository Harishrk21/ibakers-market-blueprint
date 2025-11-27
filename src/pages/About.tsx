import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Award, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-cake.jpg";
import masterclassImage from "@/assets/masterclass.jpg";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About IBakers Chennai",
    "description": "Learn about IBakers, Chennai's trusted home baker since 2018. Premium custom cakes with fresh ingredients and no preservatives.",
    "url": "https://www.ibakers.com/about"
  };

  return (
    <>
      <Helmet>
        <title>About IBakers | Chennai's Trusted Home Baker Since 2018</title>
        <meta name="description" content="Learn about IBakers, Chennai's premium home-based bakery. Crafting custom cakes with fresh ingredients, no preservatives. Serving Chennai since 2018 with 500+ happy customers." />
        <meta name="keywords" content="about IBakers, Chennai home baker, custom cake maker Chennai, bakery story Chennai, home-made cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/about" />
        
        <meta property="og:title" content="About IBakers | Chennai's Trusted Home Baker" />
        <meta property="og:description" content="Chennai's premium home baker since 2018, crafting custom cakes with love" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">IBakers</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chennai's trusted home baker, crafting custom cakes with love since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                What started as a passion for baking in a home kitchen has grown into Chennai's most loved custom cake service. IBakers was founded with a simple belief - every celebration deserves a cake that's as special as the moment itself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We specialize in creating custom cakes, brownies, and desserts that not only look stunning but taste incredible. Every order is made fresh, using premium ingredients and no preservatives - because we believe in quality you can taste.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From intimate birthday celebrations to grand wedding receptions, we've had the privilege of being part of thousands of special moments across Chennai.
              </p>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Our Story"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Premium ingredients, no preservatives, always fresh
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Every cake is a masterpiece crafted with care
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Customer Love</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our biggest achievement
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Local Pride</h3>
              <p className="text-sm text-muted-foreground">
                Proudly serving Chennai neighborhoods
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img
                src={masterclassImage}
                alt="Kitchen Standards"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl font-bold">Kitchen Standards & Hygiene</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our home kitchen follows strict hygiene and food safety standards. We maintain:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>FSSAI certified kitchen operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>Regular health and safety audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>Premium quality ingredients from trusted suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>No artificial colors or preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span>Made fresh for each order</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Service Areas in Chennai</h2>
              <p className="text-muted-foreground">
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
                  className="p-4 bg-background rounded-lg border border-border text-center hover:border-primary transition-smooth"
                >
                  <MapPin className="h-4 w-4 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-muted-foreground mt-8">
              Don't see your area? Contact us - we deliver across Chennai!
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
