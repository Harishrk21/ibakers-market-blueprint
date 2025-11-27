import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";

const BirthdayCakes = () => {
  const products = [
    {
      id: "1",
      title: "Chocolate Truffle Cake",
      description: "Rich, decadent chocolate layers with smooth truffle frosting",
      price: "₹850",
      image: browniesImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "2",
      title: "Red Velvet Elegance",
      description: "Classic red velvet with cream cheese frosting",
      price: "₹900",
      image: heroImage,
      category: "Birthday Cakes",
      isNew: true,
    },
    {
      id: "3",
      title: "Kids Birthday Special",
      description: "Fun cartoon character designs your kids will love",
      price: "₹1,200",
      image: kidsBirthdayImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "4",
      title: "Photo Cake",
      description: "Your favorite photo printed on delicious cake",
      price: "₹1,000",
      image: heroImage,
      category: "Birthday Cakes",
    },
    {
      id: "5",
      title: "Heart-Shaped Delight",
      description: "Romantic heart-shaped cake perfect for celebrations",
      price: "₹950",
      image: heartShapedImage,
      category: "Birthday Cakes",
      isNew: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Birthday Cakes in Chennai | IBakers",
    "description": "Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more. Same-day delivery available across Chennai.",
    "url": "https://www.ibakers.com/categories/birthday-cakes",
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
    "offers": products.map(p => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": p.title,
        "description": p.description,
        "image": p.image
      },
      "price": p.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR"
    }))
  };

  return (
    <>
      <Helmet>
        <title>Birthday Cakes in Chennai | Custom Home-Made Cakes | IBakers</title>
        <meta name="description" content="Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more. Same-day delivery available across Chennai neighborhoods - Adyar, T Nagar, Velachery." />
        <meta name="keywords" content="birthday cakes Chennai, custom birthday cakes, kids birthday cakes Chennai, photo cakes Chennai, chocolate birthday cake, red velvet cake Chennai, home-made cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/birthday-cakes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Birthday Cakes in Chennai | Custom Home-Made Cakes | IBakers" />
        <meta property="og:description" content="Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ibakers.com/categories/birthday-cakes" />
        <meta property="og:image" content={heroImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Birthday Cakes in Chennai | IBakers" />
        <meta name="twitter:description" content="Order fresh, home-made birthday cakes in Chennai with same-day delivery" />
        
        {/* Structured Data */}
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
                Birthday <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Celebrate every milestone with our custom-made birthday cakes, crafted fresh with love in Chennai
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Custom Birthday Cakes Delivered Fresh Across Chennai</h2>
            <p className="text-muted-foreground mb-4">
              Looking for the perfect birthday cake in Chennai? IBakers specializes in custom home-made birthday cakes that make every celebration memorable. From kids' birthday cakes featuring their favorite cartoon characters to elegant designs for adults, we create each cake fresh to order with premium ingredients and no preservatives.
            </p>
            <p className="text-muted-foreground mb-4">
              Our birthday cake collection includes chocolate truffle, red velvet, photo cakes, heart-shaped designs, and custom tier cakes. We deliver across Chennai including Adyar, T Nagar, Velachery, Anna Nagar, OMR, and Thoraipakkam. Same-day delivery available for orders placed before noon.
            </p>
          </article>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Birthday Cake Design?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Share your ideas and we'll create the perfect birthday cake for your celebration
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Birthday Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BirthdayCakes;
