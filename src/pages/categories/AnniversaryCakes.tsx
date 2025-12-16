import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import anniversaryCakeImage from "@/assets/anniversary-cake.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";

const AnniversaryCakes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "a1",
      title: "1st Anniversary Special",
      description: "Romantic paper-themed cake for your first year",
      price: "₹1,200",
      image: "https://bkmedia.bakingo.com/golden-hearts-anniversary-cake-theme4293flav-AAA.jpg",
      category: "Anniversary Cakes",
      subCategory: "1st Year",
      isBestseller: true,
    },
    {
      id: "a2",
      title: "Heart-Shaped Anniversary Cake",
      description: "Classic heart shape with romantic decorations",
      price: "₹1,000",
      image: "https://bkmedia.bakingo.com/heart-shaped-red-velvet-cake-cake1095redv-AAAAA.jpg",
      category: "Anniversary Cakes",
      subCategory: "1st Year",
    },
    {
      id: "a3",
      title: "Silver Anniversary (25 Years)",
      description: "Elegant silver-themed 2-tier cake",
      price: "₹3,500",
      image: "https://bkmedia.bakingo.com/squ-25st-Anniversary-AA.jpg",
      category: "Anniversary Cakes",
      subCategory: "25th Year",
      isBestseller: true,
    },
    {
      id: "a4",
      title: "25th Silver Jubilee Celebration",
      description: "Grand silver-accented wedding anniversary cake",
      price: "₹4,000",
      image: "https://bkmedia.bakingo.com/silver-jubilee-photo-cake-photo2777flav-AA.jpg",
      category: "Anniversary Cakes",
      subCategory: "25th Year",
    },
    {
      id: "a5",
      title: "Golden Anniversary (50 Years)",
      description: "Majestic gold-themed 3-tier masterpiece",
      price: "₹6,000",
      image: "https://bkmedia.bakingo.com/romantic-heart-shaped-pinata-cake-pina3587choc-A.jpg",
      category: "Anniversary Cakes",
      subCategory: "50th Year",
      isBestseller: true,
    },
    {
      id: "a6",
      title: "50th Golden Jubilee Cake",
      description: "Luxurious golden celebration cake",
      price: "₹6,500",
      image: "https://bkmedia.bakingo.com/sq-round-golden-jubilee-anniversary-cake-them1386flav-A_0.jpg",
      category: "Anniversary Cakes",
      subCategory: "50th Year",
    },
    {
      id: "a7",
      title: "5th Anniversary cake",
      description: "Creative wood-themed anniversary design",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/square-shaped-5th-anniversary-cake-phot1411flav-AA.jpg",
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a8",
      title: "10th Anniversary Tin Theme",
      description: "Elegant tin-themed decade celebration",
      price: "₹2,000",
      image: "data:image/jpeg;base64,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",
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a9",
      title: "1st Year Paper-Themed Delight",
      description: "Creative paper flower decorations",
      price: "₹1,150",
      image: heartShapedImage,
      category: "Anniversary Cakes",
      subCategory: "1st Year",
      isNew: true,
    },
    {
      id: "a10",
      title: "25th Silver Celebration Classic",
      description: "Traditional silver anniversary cake",
      price: "₹3,200",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "25th Year",
    },
    {
      id: "a11",
      title: "50th Year Golden Memories",
      description: "Grand golden jubilee with photo collage",
      price: "₹7,000",
      image: weddingCakeImage,
      category: "Anniversary Cakes",
      subCategory: "50th Year",
      isBestseller: true,
    },
    {
      id: "a12",
      title: "15th Anniversary Crystal Theme",
      description: "Elegant crystal-inspired design",
      price: "₹2,500",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a13",
      title: "20th Anniversary China Theme",
      description: "Porcelain-inspired elegant cake",
      price: "₹2,800",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a14",
      title: "30th Anniversary Pearl Theme",
      description: "Beautiful pearl-decorated design",
      price: "₹3,200",
      image: weddingCakeImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
      isBestseller: true,
    },
    {
      id: "a15",
      title: "35th Anniversary Coral Theme",
      description: "Coral-inspired ocean design",
      price: "₹3,500",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a16",
      title: "40th Anniversary Ruby Red",
      description: "Luxurious ruby red themed cake",
      price: "₹4,000",
      image: heartShapedImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
      isBestseller: true,
    },
  ];

  const filterCategories = ["1st Year", "25th Year", "50th Year", "Other Years"];

  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(p => p.subCategory === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Anniversary Cakes in Chennai | IBakers",
    "description": "Order custom anniversary cakes in Chennai for 1st, 25th, 50th anniversaries & more. Romantic designs with gold, silver themes. Home-made quality delivered across Chennai.",
    "url": "https://www.ibakers.com/categories/anniversary-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Anniversary Cakes Chennai | 1st, 25th, 50th Anniversary | IBakers</title>
        <meta name="description" content="Order custom anniversary cakes in Chennai for 1st year, Silver (25th), Golden (50th) & milestone anniversaries. Romantic heart-shaped designs, elegant multi-tier cakes with fresh delivery." />
        <meta name="keywords" content="anniversary cakes Chennai, 1st anniversary cake, 25th anniversary cake Chennai, 50th anniversary cake, silver jubilee cake, golden jubilee cake Chennai, wedding anniversary cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/anniversary-cakes" />
        
        <meta property="og:title" content="Anniversary Cakes Chennai | 1st, 25th, 50th Anniversary" />
        <meta property="og:image" content={anniversaryCakeImage} />
        
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
        
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                Anniversary <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Celebrate your love milestones with custom anniversary cakes for every special year
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Custom Anniversary Cakes for Every Milestone in Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers specializes in creating stunning anniversary cakes in Chennai that honor your love story. From romantic first anniversary cakes with paper-themed elements to magnificent Silver Jubilee (25th) and Golden Jubilee (50th) anniversary cakes with elegant metallic accents, we craft each cake to match the traditional anniversary theme.
            </p>
            <p className="text-slate-300 mb-4">
              Our anniversary collection includes heart-shaped cakes for intimate celebrations, multi-tier cakes for grand parties, and custom designs featuring your photos, names, and anniversary messages. Available in all flavors including eggless options. Delivery across Chennai with professional setup for larger cakes.
            </p>
          </article>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <FilterBar
              categories={filterCategories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Design Your Perfect Anniversary Cake</h2>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              Share your anniversary story and we'll create a cake that celebrates your journey together
            </p>
            <button
              onClick={() => window.location.href = "/custom-orders"}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50"
            >
              Order Custom Anniversary Cake
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnniversaryCakes;