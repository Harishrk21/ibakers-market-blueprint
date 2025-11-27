import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import pinataCakeImage from "@/assets/pinata-cake.jpg";
import dripCakeImage from "@/assets/drip-cake.jpg";

const TrendingCakes = () => {
  const products = [
    {
      id: "6",
      title: "Pinata Surprise Cake",
      description: "Break open to reveal colorful candy surprise inside",
      price: "₹1,500",
      image: pinataCakeImage,
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "7",
      title: "Drip Cake Deluxe",
      description: "Elegant drip design with macarons and fresh berries",
      price: "₹1,400",
      image: dripCakeImage,
      category: "Trending Cakes",
      isNew: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trending Cakes in Chennai | IBakers",
    "description": "Latest trending cake designs in Chennai - Pinata cakes, Drip cakes, Pull-me-up cakes & more viral cake designs delivered fresh.",
    "url": "https://www.ibakers.com/categories/trending-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Trending Cakes Chennai | Pinata & Drip Cakes | IBakers</title>
        <meta name="description" content="Order the latest trending cake designs in Chennai - Pinata surprise cakes, elegant drip cakes, pull-me-up cakes & more viral designs. Fresh home-made delivery across Chennai." />
        <meta name="keywords" content="trending cakes Chennai, pinata cakes Chennai, drip cakes Chennai, viral cake designs, Instagram cakes Chennai, surprise cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/trending-cakes" />
        
        <meta property="og:title" content="Trending Cakes Chennai | Pinata & Drip Cakes | IBakers" />
        <meta property="og:image" content={pinataCakeImage} />
        
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
                Trending <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay ahead with the latest viral cake designs and Instagram-worthy creations
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Latest Trending Cake Designs in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              IBakers brings you the hottest cake trends in Chennai! From viral pinata surprise cakes that reveal colorful candies when broken, to elegant drip cakes adorned with macarons and berries - we create Instagram-worthy cakes that make your celebrations extra special.
            </p>
            <p className="text-muted-foreground mb-4">
              Our trending collection features the most sought-after designs including pull-me-up cakes, money pulling cakes, and cream explosion cakes. Each trending cake is made fresh with premium ingredients and delivered across Chennai.
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
            <h2 className="text-4xl font-bold mb-6">Want a Custom Trending Design?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Share your favorite cake trend and we'll recreate it for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Trending Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TrendingCakes;
