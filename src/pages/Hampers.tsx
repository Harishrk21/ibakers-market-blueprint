import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import giftHamperImage from "@/assets/gift-hamper.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";
import browniesImage from "@/assets/brownies.jpg";
import jarCakesImage from "@/assets/jar-cakes.jpg";

const Hampers = () => {
  const products = [
    {
      id: "h1",
      title: "Premium Gift Hamper",
      description: "Luxurious assortment of cakes, brownies and cupcakes",
      price: "₹2,500",
      image: giftHamperImage,
      category: "Hampers",
      isBestseller: true,
    },
    {
      id: "h2",
      title: "Cupcake Gift Box (12pc)",
      description: "Beautifully packaged cupcakes perfect for gifting",
      price: "₹850",
      image: cupcakesImage,
      category: "Hampers",
      isNew: true,
    },
    {
      id: "h3",
      title: "Brownie Delight Hamper",
      description: "Assorted brownies in elegant gift packaging",
      price: "₹1,200",
      image: browniesImage,
      category: "Hampers",
    },
    {
      id: "h4",
      title: "Dessert Jar Collection",
      description: "Set of 6 layered dessert jars with gift box",
      price: "₹600",
      image: jarCakesImage,
      category: "Hampers",
    },
    {
      id: "h5",
      title: "Corporate Gifting Hamper",
      description: "Professional gift box for business occasions",
      price: "₹3,000",
      image: giftHamperImage,
      category: "Hampers",
      isBestseller: true,
    },
    {
      id: "h6",
      title: "Festival Special Hamper",
      description: "Assorted treats perfect for festive celebrations",
      price: "₹1,800",
      image: giftHamperImage,
      category: "Hampers",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gift Hampers in Chennai | IBakers",
    "description": "Order premium dessert gift hampers in Chennai. Perfect for corporate gifting, festivals and celebrations. Luxury hampers with cakes, brownies, cupcakes delivered across Chennai.",
    "url": "https://www.ibakers.com/hampers"
  };

  return (
    <>
      <Helmet>
        <title>Gift Hampers Chennai | Dessert Hampers & Corporate Gifts | IBakers</title>
        <meta name="description" content="Order premium gift hampers in Chennai with cakes, brownies, cupcakes & desserts. Perfect for corporate gifting, festivals and special occasions. Luxury packaging with same-day delivery." />
        <meta name="keywords" content="gift hampers Chennai, dessert hampers Chennai, corporate gifting Chennai, festival hampers, cupcake gift boxes, brownie hampers Chennai, luxury gift boxes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/hampers" />
        
        <meta property="og:title" content="Gift Hampers Chennai | Dessert Hampers & Corporate Gifts" />
        <meta property="og:image" content={giftHamperImage} />
        
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
                Premium <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Gift Hampers</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Luxury dessert hampers perfect for corporate gifting and special occasions
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Luxury Dessert Hampers for Every Occasion in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              IBakers specializes in creating premium gift hampers in Chennai that make lasting impressions. Our luxury hampers feature an exquisite selection of home-made cakes, gourmet brownies, artisan cupcakes, and specialty desserts, all beautifully packaged in elegant gift boxes with premium ribbons.
            </p>
            <p className="text-muted-foreground mb-4">
              Perfect for corporate gifting to clients and employees, festival celebrations (Diwali, Christmas, New Year), wedding favors, baby showers, and personal celebrations. We offer customization options, bulk orders for corporate events, and delivery across Chennai including OMR IT corridor, Nungambakkam, T Nagar, and all major areas.
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
            <h2 className="text-4xl font-bold mb-6">Custom Corporate Hampers Available</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Create personalized hampers for your business with custom branding and packaging
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Request Custom Hampers
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Hampers;