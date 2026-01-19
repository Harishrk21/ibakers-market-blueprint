import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
    {
      id: "h7",
      title: "Mini Cupcake Tower (24pc)",
      description: "Tiered cupcake display for parties",
      price: "₹1,400",
      image: cupcakesImage,
      category: "Hampers",
      isBestseller: true,
    },
    {
      id: "h8",
      title: "Chocolate Lovers Hamper",
      description: "Brownies, chocolate cakes and truffles",
      price: "₹2,200",
      image: browniesImage,
      category: "Hampers",
      isNew: true,
    },
    {
      id: "h9",
      title: "Tea Time Treats Box",
      description: "Tea cakes and pastries collection",
      price: "₹1,000",
      image: jarCakesImage,
      category: "Hampers",
    },
    {
      id: "h10",
      title: "Birthday Celebration Hamper",
      description: "Complete birthday party dessert box",
      price: "₹2,800",
      image: giftHamperImage,
      category: "Hampers",
      isBestseller: true,
    },
    {
      id: "h11",
      title: "Wedding Favor Cupcakes (50pc)",
      description: "Elegant cupcakes for wedding guests",
      price: "₹3,500",
      image: cupcakesImage,
      category: "Hampers",
      isBestseller: true,
    },
    {
      id: "h12",
      title: "Executive Gift Hamper",
      description: "Premium selection for VIP gifting",
      price: "₹4,000",
      image: giftHamperImage,
      category: "Hampers",
    },
    {
      id: "h13",
      title: "Dessert Sampler Box",
      description: "Try all our signature desserts",
      price: "₹1,500",
      image: jarCakesImage,
      category: "Hampers",
      isNew: true,
    },
    {
      id: "h14",
      title: "Mini Brownie Bites (20pc)",
      description: "Bite-sized brownies gift box",
      price: "₹700",
      image: browniesImage,
      category: "Hampers",
    },
    {
      id: "h15",
      title: "Anniversary Gift Hamper",
      description: "Romantic dessert collection",
      price: "₹2,500",
      image: giftHamperImage,
      category: "Hampers",
      isBestseller: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Gift Hampers in Chennai | IBakers",
    "description": "Order premium dessert gift hampers in Chennai. Perfect for corporate gifting, festivals and celebrations. Luxury hampers with cakes, brownies, cupcakes delivered across Chennai.",
    "url": "https://www.ibakers.in/hampers"
  };

  return (
    <>
      <Helmet>
        <title>Gift Hampers Chennai | Corporate Gifts | IBakers</title>
        <meta name="description" content="Order premium gift hampers in Chennai with cakes, brownies, cupcakes & desserts. Perfect for corporate gifting, festivals & special occasions." />
        <meta name="keywords" content="gift hampers Chennai, dessert hampers Chennai, corporate gifting Chennai, festival hampers, cupcake gift boxes, brownie hampers Chennai, luxury gift boxes Chennai" />
        <link rel="canonical" href="https://www.ibakers.in/hampers" />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content="Gift Hampers Chennai | Dessert Hampers & Corporate Gifts" />
        <meta property="og:image" content={giftHamperImage} />
        
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
                Premium <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Gift Hampers</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Luxury dessert hampers perfect for corporate gifting and special occasions
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Luxury Dessert Hampers for Every Occasion in Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers specializes in creating premium gift hampers in Chennai that make lasting impressions. Our luxury hampers feature an exquisite selection of home-made cakes, gourmet brownies, artisan cupcakes, and specialty desserts, all beautifully packaged in elegant gift boxes with premium ribbons.
            </p>
            <p className="text-slate-300 mb-4">
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

        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Custom Corporate Hampers Available</h2>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              Create personalized hampers for your business with custom branding and packaging
            </p>
            <button
              onClick={() => window.location.href = "/custom-orders"}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50"
            >
              Request Custom Hampers
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Hampers;