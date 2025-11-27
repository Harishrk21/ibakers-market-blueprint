import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import butterscotchImage from "@/assets/butterscotch-cake.jpg";
import blackForestImage from "@/assets/black-forest-cake.jpg";

const FlavourCakes = () => {
  const products = [
    {
      id: "9",
      title: "Butterscotch Bliss",
      description: "Creamy butterscotch layers with caramel drizzle",
      price: "₹800",
      image: butterscotchImage,
      category: "By Flavour",
      isBestseller: true,
    },
    {
      id: "10",
      title: "Black Forest Classic",
      description: "Traditional black forest with cherries and chocolate",
      price: "₹900",
      image: blackForestImage,
      category: "By Flavour",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Cakes by Flavour in Chennai | IBakers",
    "description": "Premium cakes in various flavours - Butterscotch, Black Forest, Chocolate, Vanilla, Red Velvet & more. Fresh home-made cakes delivered in Chennai.",
    "url": "https://www.ibakers.com/categories/flavour-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Cakes by Flavour Chennai | Butterscotch, Black Forest & More | IBakers</title>
        <meta name="description" content="Order premium flavoured cakes in Chennai - Butterscotch, Black Forest, Chocolate Truffle, Vanilla, Red Velvet, Pineapple & more. Fresh home-made quality delivered across Chennai." />
        <meta name="keywords" content="butterscotch cake Chennai, black forest cake Chennai, chocolate cake Chennai, vanilla cake Chennai, red velvet Chennai, pineapple cake Chennai, flavoured cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/flavour-cakes" />
        
        <meta property="og:title" content="Cakes by Flavour Chennai | Butterscotch, Black Forest & More" />
        <meta property="og:image" content={butterscotchImage} />
        
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
                Cakes by <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Flavour</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose from our delicious range of classic and exotic cake flavours
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Premium Flavoured Cakes Fresh from Chennai's Home Baker</h2>
            <p className="text-muted-foreground mb-4">
              Explore IBakers' extensive range of flavoured cakes in Chennai. From classic Butterscotch Bliss with caramel drizzle to traditional Black Forest with cherries, each cake is crafted with premium ingredients and fresh, natural flavours - no artificial additives or preservatives.
            </p>
            <p className="text-muted-foreground mb-4">
              Popular flavours include Chocolate Truffle, Red Velvet, Vanilla Dream, Pineapple Paradise, Mango Madness, Coffee Mocha, and Fruit & Nut. Available in multiple sizes and custom designs. Delivery available across Chennai including Adyar, T Nagar, Velachery, and Anna Nagar.
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
            <h2 className="text-4xl font-bold mb-6">Looking for a Specific Flavour?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us know your favourite flavour and we'll create it fresh for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Flavour Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FlavourCakes;
