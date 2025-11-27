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
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "1st Year",
      isBestseller: true,
    },
    {
      id: "a2",
      title: "Heart-Shaped Anniversary Cake",
      description: "Classic heart shape with romantic decorations",
      price: "₹1,000",
      image: heartShapedImage,
      category: "Anniversary Cakes",
      subCategory: "1st Year",
    },
    {
      id: "a3",
      title: "Silver Anniversary (25 Years)",
      description: "Elegant silver-themed 2-tier cake",
      price: "₹3,500",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "25th Year",
      isBestseller: true,
    },
    {
      id: "a4",
      title: "25th Silver Jubilee Celebration",
      description: "Grand silver-accented wedding anniversary cake",
      price: "₹4,000",
      image: weddingCakeImage,
      category: "Anniversary Cakes",
      subCategory: "25th Year",
    },
    {
      id: "a5",
      title: "Golden Anniversary (50 Years)",
      description: "Majestic gold-themed 3-tier masterpiece",
      price: "₹6,000",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "50th Year",
      isBestseller: true,
    },
    {
      id: "a6",
      title: "50th Golden Jubilee Cake",
      description: "Luxurious golden celebration cake",
      price: "₹6,500",
      image: weddingCakeImage,
      category: "Anniversary Cakes",
      subCategory: "50th Year",
    },
    {
      id: "a7",
      title: "5th Anniversary Wood Theme",
      description: "Creative wood-themed anniversary design",
      price: "₹1,500",
      image: anniversaryCakeImage,
      category: "Anniversary Cakes",
      subCategory: "Other Years",
    },
    {
      id: "a8",
      title: "10th Anniversary Tin Theme",
      description: "Elegant tin-themed decade celebration",
      price: "₹2,000",
      image: anniversaryCakeImage,
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

      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Anniversary <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Celebrate your love milestones with custom anniversary cakes for every special year
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Custom Anniversary Cakes for Every Milestone in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              IBakers specializes in creating stunning anniversary cakes in Chennai that honor your love story. From romantic first anniversary cakes with paper-themed elements to magnificent Silver Jubilee (25th) and Golden Jubilee (50th) anniversary cakes with elegant metallic accents, we craft each cake to match the traditional anniversary theme.
            </p>
            <p className="text-muted-foreground mb-4">
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

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Design Your Perfect Anniversary Cake</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Share your anniversary story and we'll create a cake that celebrates your journey together
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Anniversary Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnniversaryCakes;