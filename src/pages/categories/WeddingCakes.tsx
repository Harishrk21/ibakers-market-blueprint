import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import weddingCakeImage from "@/assets/wedding-cake.jpg";

const WeddingCakes = () => {
  const products = [
    {
      id: "11",
      title: "Wedding Bliss 3-Tier",
      description: "Elegant 3-tier wedding cake with fresh flowers",
      price: "₹8,500",
      image: weddingCakeImage,
      category: "Wedding Cakes",
    },
    {
      id: "12",
      title: "Royal Wedding Cake",
      description: "5-tier masterpiece with gold accents",
      price: "₹15,000",
      image: weddingCakeImage,
      category: "Wedding Cakes",
      isNew: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Wedding Cakes in Chennai | IBakers",
    "description": "Exquisite multi-tier wedding cakes in Chennai. Custom designs with fresh flowers, gold accents & elegant decorations. Perfect for your special day.",
    "url": "https://www.ibakers.com/categories/wedding-cakes",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IBakers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Wedding Cakes Chennai | Multi-Tier Custom Wedding Cakes | IBakers</title>
        <meta name="description" content="Order exquisite multi-tier wedding cakes in Chennai. Custom designs with fresh flowers, gold accents & elegant decorations. Serving Chennai weddings with premium home-made cakes." />
        <meta name="keywords" content="wedding cakes Chennai, multi-tier wedding cakes, custom wedding cakes Chennai, engagement cakes, anniversary cakes Chennai, wedding cake designers Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/wedding-cakes" />
        
        <meta property="og:title" content="Wedding Cakes Chennai | Multi-Tier Custom Wedding Cakes | IBakers" />
        <meta property="og:description" content="Exquisite multi-tier wedding cakes in Chennai with custom designs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={weddingCakeImage} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Wedding <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Elegant multi-tier wedding cakes crafted to perfection for your special day
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Custom Wedding Cakes for Chennai Weddings</h2>
            <p className="text-muted-foreground mb-4">
              Make your wedding day unforgettable with IBakers' custom wedding cakes in Chennai. We specialize in elegant multi-tier cakes adorned with fresh flowers, gold accents, and intricate designs that match your wedding theme perfectly. Each wedding cake is crafted with premium ingredients and meticulous attention to detail.
            </p>
            <p className="text-muted-foreground mb-4">
              From intimate 3-tier cakes to grand 5-tier masterpieces, we create wedding cakes that serve as the centerpiece of your celebration. Available for weddings across Chennai with professional delivery and setup services.
            </p>
          </article>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Plan Your Dream Wedding Cake</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a consultation to discuss your wedding cake vision
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Book Consultation
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WeddingCakes;
