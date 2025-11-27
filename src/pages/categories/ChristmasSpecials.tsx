import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import christmasCakeImage from "@/assets/christmas-cake.jpg";

const ChristmasSpecials = () => {
  const products = [
    {
      id: "13",
      title: "Traditional Fruit Cake",
      description: "Rich fruit cake soaked in rum with nuts",
      price: "₹1,200",
      image: christmasCakeImage,
      category: "Christmas Specials",
      isBestseller: true,
    },
    {
      id: "14",
      title: "Plum Cake",
      description: "Classic Christmas plum cake with candied fruits",
      price: "₹950",
      image: christmasCakeImage,
      category: "Christmas Specials",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Christmas Cakes in Chennai | IBakers",
    "description": "Order traditional Christmas fruit cakes and plum cakes in Chennai. Rich, rum-soaked cakes with dry fruits and nuts. Pre-order for Christmas delivery.",
    "url": "https://www.ibakers.com/categories/christmas-specials"
  };

  return (
    <>
      <Helmet>
        <title>Christmas Cakes Chennai | Fruit Cake & Plum Cake | IBakers</title>
        <meta name="description" content="Order traditional Christmas fruit cakes and plum cakes in Chennai. Rich, rum-soaked cakes with premium dry fruits and nuts. Home-made quality with advance orders accepted." />
        <meta name="keywords" content="Christmas cakes Chennai, fruit cake Chennai, plum cake Chennai, Christmas bakery Chennai, rum cake Chennai, festive cakes Chennai, X-mas cakes" />
        <link rel="canonical" href="https://www.ibakers.com/categories/christmas-specials" />
        
        <meta property="og:title" content="Christmas Cakes Chennai | Fruit Cake & Plum Cake" />
        <meta property="og:image" content={christmasCakeImage} />
        
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
                Christmas <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Specials</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Traditional Christmas fruit cakes and plum cakes made with love for Chennai families
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Authentic Christmas Cakes Baked Fresh in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              Celebrate Christmas the traditional way with IBakers' authentic fruit cakes and plum cakes in Chennai. Our Christmas specials are made with premium dry fruits, nuts, and spices, soaked in rum for that rich, festive flavour that makes Christmas celebrations complete.
            </p>
            <p className="text-muted-foreground mb-4">
              Each Christmas cake is prepared weeks in advance, allowing the flavours to mature perfectly. We offer both rum-soaked and non-alcoholic versions. Available in various sizes for family gatherings and corporate gifting. Pre-orders accepted from November. Delivery available across Chennai.
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
            <h2 className="text-4xl font-bold mb-6">Pre-Order Your Christmas Cakes Now</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Book early to ensure delivery for your Christmas celebrations
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Pre-Order Christmas Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ChristmasSpecials;
