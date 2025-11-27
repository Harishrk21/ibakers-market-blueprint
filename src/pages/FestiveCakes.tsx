import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import diwaliCakeImage from "@/assets/diwali-cake.jpg";
import holiCakeImage from "@/assets/holi-cake.jpg";
import christmasCakeImage from "@/assets/christmas-cake.jpg";
import newYearCakeImage from "@/assets/new-year-cake.jpg";
import valentineCakeImage from "@/assets/valentine-cake.jpg";
import mothersDayCakeImage from "@/assets/mothers-day-cake.jpg";
import babyShowerCakeImage from "@/assets/baby-shower-cake.jpg";
import retirementCakeImage from "@/assets/retirement-cake.jpg";
import farewellCakeImage from "@/assets/farewell-cake.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";

const FestiveCakes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "f1",
      title: "Diwali Special Cake",
      description: "Traditional Indian design with diyas and rangoli patterns",
      price: "₹1,200",
      image: diwaliCakeImage,
      category: "Festive Cakes",
      subCategory: "Diwali",
      isBestseller: true,
    },
    {
      id: "f2",
      title: "Holi Celebration Cake",
      description: "Vibrant colors celebrating the festival of colors",
      price: "₹1,100",
      image: holiCakeImage,
      category: "Festive Cakes",
      subCategory: "Holi",
      isNew: true,
    },
    {
      id: "f3",
      title: "Christmas Fruit Cake",
      description: "Traditional fruit cake soaked in rum",
      price: "₹1,200",
      image: christmasCakeImage,
      category: "Festive Cakes",
      subCategory: "Christmas",
      isBestseller: true,
    },
    {
      id: "f4",
      title: "Christmas Plum Cake",
      description: "Classic plum cake with candied fruits",
      price: "₹950",
      image: christmasCakeImage,
      category: "Festive Cakes",
      subCategory: "Christmas",
    },
    {
      id: "f5",
      title: "New Year Celebration Cake",
      description: "Champagne theme with gold decorations",
      price: "₹1,400",
      image: newYearCakeImage,
      category: "Festive Cakes",
      subCategory: "New Year",
      isNew: true,
    },
    {
      id: "f6",
      title: "Valentine's Day Special",
      description: "Romantic heart-themed cake with roses",
      price: "₹1,000",
      image: valentineCakeImage,
      category: "Festive Cakes",
      subCategory: "Valentine's Day",
      isBestseller: true,
    },
    {
      id: "f7",
      title: "Mother's Day Floral Cake",
      description: "Elegant cake with fresh flower decorations",
      price: "₹1,100",
      image: mothersDayCakeImage,
      category: "Festive Cakes",
      subCategory: "Mother's Day",
    },
    {
      id: "f8",
      title: "Baby Shower Delight",
      description: "Adorable baby-themed cake in pink or blue",
      price: "₹1,300",
      image: babyShowerCakeImage,
      category: "Festive Cakes",
      subCategory: "Baby Shower",
      isBestseller: true,
    },
    {
      id: "f9",
      title: "Retirement Celebration Cake",
      description: "Elegant cake to honor career milestones",
      price: "₹1,200",
      image: retirementCakeImage,
      category: "Festive Cakes",
      subCategory: "Retirement",
    },
    {
      id: "f10",
      title: "Farewell Party Cake",
      description: "Heartfelt goodbye cake with custom messages",
      price: "₹1,100",
      image: farewellCakeImage,
      category: "Festive Cakes",
      subCategory: "Farewell",
    },
    {
      id: "f11",
      title: "Wedding Bliss 3-Tier",
      description: "Elegant wedding cake with fresh flowers",
      price: "₹8,500",
      image: weddingCakeImage,
      category: "Festive Cakes",
      subCategory: "Wedding",
      isBestseller: true,
    },
  ];

  const filterCategories = [
    "Diwali",
    "Holi",
    "Christmas",
    "New Year",
    "Valentine's Day",
    "Mother's Day",
    "Baby Shower",
    "Retirement",
    "Farewell",
    "Wedding"
  ];

  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(p => p.subCategory === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Festive Cakes in Chennai | IBakers",
    "description": "Order festive celebration cakes in Chennai for Diwali, Holi, Christmas, New Year, Valentine's, Mother's Day, Baby Showers, Weddings & more. Custom designs available.",
    "url": "https://www.ibakers.com/festive-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Festive Cakes Chennai | Diwali, Christmas, Wedding & More | IBakers</title>
        <meta name="description" content="Order festive cakes in Chennai for every celebration - Diwali, Holi, Christmas, New Year, Valentine's, Mother's Day, Baby Showers, Weddings, Retirement & Farewell parties. Custom designs with fresh home-made quality." />
        <meta name="keywords" content="festive cakes Chennai, Diwali cakes Chennai, Christmas cakes Chennai, New Year cakes, Valentine cakes Chennai, Mother's Day cakes, Baby Shower cakes Chennai, Wedding cakes Chennai, Retirement cakes, Farewell cakes" />
        <link rel="canonical" href="https://www.ibakers.com/festive-cakes" />
        
        <meta property="og:title" content="Festive Cakes Chennai | Diwali, Christmas, Wedding & More" />
        <meta property="og:image" content={diwaliCakeImage} />
        
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
                Festive <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Celebration Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Special cakes for every festival and celebration throughout the year
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Celebrate Every Festival with Custom Cakes in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              IBakers creates stunning festive cakes in Chennai for all your celebrations throughout the year. From traditional Diwali cakes with diyas and rangoli patterns to vibrant Holi cakes, rich Christmas fruit cakes, glamorous New Year cakes, romantic Valentine's Day specials, elegant Mother's Day cakes, adorable Baby Shower cakes, memorable Wedding cakes, dignified Retirement cakes, and heartfelt Farewell cakes - we have designs for every occasion.
            </p>
            <p className="text-muted-foreground mb-4">
              Each festive cake is crafted with premium ingredients and custom decorations to match the spirit of your celebration. Available in multiple sizes and flavors with advance booking recommended for festivals. Delivery available across all Chennai areas including Adyar, T Nagar, Velachery, Anna Nagar, OMR, and surrounding neighborhoods.
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
            <h2 className="text-4xl font-bold mb-6">Book Your Festive Cake Early</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Pre-order your custom festive cakes to ensure availability during peak seasons
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Pre-Order Festive Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FestiveCakes;