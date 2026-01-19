import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
      description: "Traditional fruit cake with premium dry fruits and nuts",
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
    {
      id: "f12",
      title: "Diwali Sweets Fusion Cake",
      description: "Traditional Indian sweets inspired design",
      price: "₹1,300",
      image: diwaliCakeImage,
      category: "Festive Cakes",
      subCategory: "Diwali",
    },
    {
      id: "f13",
      title: "Holi Rainbow Layers",
      description: "Multi-colored rainbow layered cake",
      price: "₹1,200",
      image: holiCakeImage,
      category: "Festive Cakes",
      subCategory: "Holi",
      isBestseller: true,
    },
    {
      id: "f14",
      title: "Christmas Gingerbread House Cake",
      description: "Edible gingerbread house design",
      price: "₹1,500",
      image: christmasCakeImage,
      category: "Festive Cakes",
      subCategory: "Christmas",
      isNew: true,
    },
    {
      id: "f15",
      title: "New Year Midnight Special",
      description: "Clock tower design for countdown",
      price: "₹1,350",
      image: newYearCakeImage,
      category: "Festive Cakes",
      subCategory: "New Year",
    },
    {
      id: "f16",
      title: "Valentine's Chocolate Heart",
      description: "Rich chocolate heart with roses",
      price: "₹1,100",
      image: valentineCakeImage,
      category: "Festive Cakes",
      subCategory: "Valentine's Day",
    },
    {
      id: "f17",
      title: "Mother's Day Garden Cake",
      description: "Beautiful garden theme with edible flowers",
      price: "₹1,250",
      image: mothersDayCakeImage,
      category: "Festive Cakes",
      subCategory: "Mother's Day",
      isBestseller: true,
    },
    {
      id: "f18",
      title: "Baby Shower Blue Theme",
      description: "Adorable baby boy themed cake",
      price: "₹1,250",
      image: babyShowerCakeImage,
      category: "Festive Cakes",
      subCategory: "Baby Shower",
    },
    {
      id: "f19",
      title: "Baby Shower Pink Theme",
      description: "Sweet baby girl themed cake",
      price: "₹1,250",
      image: babyShowerCakeImage,
      category: "Festive Cakes",
      subCategory: "Baby Shower",
      isBestseller: true,
    },
    {
      id: "f20",
      title: "Retirement Golf Theme",
      description: "Golf course design for retiree",
      price: "₹1,350",
      image: retirementCakeImage,
      category: "Festive Cakes",
      subCategory: "Retirement",
    },
    {
      id: "f21",
      title: "Farewell Journey Cake",
      description: "Travel-themed goodbye cake",
      price: "₹1,200",
      image: farewellCakeImage,
      category: "Festive Cakes",
      subCategory: "Farewell",
    },
    {
      id: "f22",
      title: "Wedding Elegance 2-Tier",
      description: "Classic white wedding cake",
      price: "₹6,500",
      image: weddingCakeImage,
      category: "Festive Cakes",
      subCategory: "Wedding",
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
    "url": "https://www.ibakers.in/festive-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Festive Cakes Chennai | Diwali, Christmas & More</title>
        <meta name="description" content="Order festive cakes in Chennai for Diwali, Holi, Christmas, New Year, Valentine's, Mother's Day, Baby Showers, Weddings & more. Custom designs. Fresh home-made." />
        <meta name="keywords" content="festive cakes Chennai, Diwali cakes Chennai, Christmas cakes Chennai, New Year cakes, Valentine cakes Chennai, Mother's Day cakes, Baby Shower cakes Chennai, Wedding cakes Chennai, Retirement cakes, Farewell cakes" />
        <link rel="canonical" href="https://www.ibakers.in/festive-cakes" />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content="Festive Cakes Chennai | Diwali, Christmas, Wedding & More" />
        <meta property="og:image" content={diwaliCakeImage} />
        
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
                Festive <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Celebration Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Special cakes for every festival and celebration throughout the year
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Celebrate Every Festival with Custom Cakes in Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers creates stunning festive cakes in Chennai for all your celebrations throughout the year. From traditional Diwali cakes with diyas and rangoli patterns to vibrant Holi cakes, rich Christmas fruit cakes, glamorous New Year cakes, romantic Valentine's Day specials, elegant Mother's Day cakes, adorable Baby Shower cakes, memorable Wedding cakes, dignified Retirement cakes, and heartfelt Farewell cakes - we have designs for every occasion.
            </p>
            <p className="text-slate-300 mb-4">
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

        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Book Your Festive Cake Early</h2>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              Pre-order your custom festive cakes to ensure availability during peak seasons
            </p>
            <button
              onClick={() => window.location.href = "/custom-orders"}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50"
            >
              Pre-Order Festive Cake
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FestiveCakes;