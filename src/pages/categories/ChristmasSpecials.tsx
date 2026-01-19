import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import christmasCakeImage from "@/assets/christmas-cake.jpg";

const ChristmasSpecials = () => {
  const products = [
    {
      id: "13",
      title: "Traditional Fruit Cake",
      description: "Rich fruit cake with premium dry fruits and nuts",
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
    "description": "Order traditional Christmas fruit cakes and plum cakes in Chennai. Rich, non-alcoholic cakes with premium dry fruits and nuts. Pre-order for Christmas delivery.",
    "url": "https://www.ibakers.in/categories/christmas-specials"
  };

  return (
    <>
      <Helmet>
        <title>Christmas Cakes Chennai | Fruit Cake & Plum Cake | IBakers</title>
        <meta name="description" content="Order traditional Christmas fruit cakes and plum cakes in Chennai. Rich, non-alcoholic cakes with premium dry fruits and nuts. Fresh home-made." />
        <meta name="keywords" content="Christmas cakes Chennai, fruit cake Chennai, plum cake Chennai, Christmas bakery Chennai, non-alcoholic plum cake Chennai, festive cakes Chennai, X-mas cakes" />
        <link rel="canonical" href="https://www.ibakers.in/categories/christmas-specials" />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content="Christmas Cakes Chennai | Fruit Cake & Plum Cake" />
        <meta property="og:image" content={christmasCakeImage} />
        
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
        
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                Christmas <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Specials</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Traditional Christmas fruit cakes and plum cakes made with love for Chennai families
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Authentic Christmas Cakes Baked Fresh in Chennai</h2>
            <p className="text-slate-300 mb-4">
              Celebrate Christmas the traditional way with IBakers' authentic fruit cakes and plum cakes in Chennai. Our Christmas specials are made with premium dry fruits, nuts, and spices for that rich, festive flavour that makes Christmas celebrations complete.
            </p>
            <p className="text-slate-300 mb-4">
              Each Christmas cake is prepared weeks in advance, allowing the flavours to mature perfectly. All our plum cakes are non-alcoholic. Available in various sizes for family gatherings and corporate gifting. Pre-orders accepted from November. Delivery available across Chennai.
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
