import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import pastriesImage from "@/assets/pastries.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import jarCakesImage from "@/assets/jar-cakes.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";
import browniesImage from "@/assets/brownies.jpg";
import teaCakesImage from "@/assets/tea-cakes.jpg";

const Desserts = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "d1",
      title: "Assorted Pastries Box",
      description: "Gourmet pastries with eclairs, tarts, and danishes",
      price: "₹650",
      image: pastriesImage,
      category: "Desserts",
      subCategory: "Pastries",
      isBestseller: true,
    },
    {
      id: "d2",
      title: "Blueberry Cheesecake",
      description: "Creamy New York-style cheesecake with berry topping",
      price: "₹550",
      image: cheesecakeImage,
      category: "Desserts",
      subCategory: "Cheesecakes",
      isNew: true,
    },
    {
      id: "d3",
      title: "Chocolate Cheesecake",
      description: "Rich chocolate cheesecake with chocolate ganache",
      price: "₹600",
      image: cheesecakeImage,
      category: "Desserts",
      subCategory: "Cheesecakes",
    },
    {
      id: "d4",
      title: "Layered Jar Cakes (Set of 4)",
      description: "Individual dessert jars perfect for parties",
      price: "₹400",
      image: jarCakesImage,
      category: "Desserts",
      subCategory: "Jar Cakes",
      isBestseller: true,
    },
    {
      id: "d5",
      title: "Premium Cupcakes (Box of 6)",
      description: "Assorted flavors with buttercream frosting",
      price: "₹450",
      image: cupcakesImage,
      category: "Desserts",
      subCategory: "Cupcakes",
    },
    {
      id: "d6",
      title: "Cupcakes Party Pack (12pc)",
      description: "Perfect for birthdays and celebrations",
      price: "₹800",
      image: cupcakesImage,
      category: "Desserts",
      subCategory: "Cupcakes",
      isBestseller: true,
    },
    {
      id: "d7",
      title: "Classic Fudge Brownies",
      description: "Dense, chocolaty perfection in every bite",
      price: "₹350",
      image: browniesImage,
      category: "Desserts",
      subCategory: "Brownies",
      isBestseller: true,
    },
    {
      id: "d8",
      title: "Lemon Pound Cake",
      description: "Moist lemon cake perfect with tea",
      price: "₹450",
      image: teaCakesImage,
      category: "Desserts",
      subCategory: "Tea Cakes",
    },
    {
      id: "d9",
      title: "Marble Tea Cake",
      description: "Classic marble cake with vanilla and chocolate swirl",
      price: "₹400",
      image: teaCakesImage,
      category: "Desserts",
      subCategory: "Tea Cakes",
    },
    {
      id: "d10",
      title: "Chocolate Eclair Pastries (6pc)",
      description: "Classic French eclairs with chocolate glaze",
      price: "₹500",
      image: pastriesImage,
      category: "Desserts",
      subCategory: "Pastries",
      isBestseller: true,
    },
    {
      id: "d11",
      title: "Strawberry Cheesecake",
      description: "Fresh strawberry topped cheesecake",
      price: "₹580",
      image: cheesecakeImage,
      category: "Desserts",
      subCategory: "Cheesecakes",
      isNew: true,
    },
    {
      id: "d12",
      title: "Red Velvet Jar Cakes (Set of 6)",
      description: "Individual red velvet dessert jars",
      price: "₹480",
      image: jarCakesImage,
      category: "Desserts",
      subCategory: "Jar Cakes",
      isBestseller: true,
    },
    {
      id: "d13",
      title: "Vanilla Cupcakes (Box of 12)",
      description: "Classic vanilla cupcakes with buttercream",
      price: "₹750",
      image: cupcakesImage,
      category: "Desserts",
      subCategory: "Cupcakes",
    },
    {
      id: "d14",
      title: "Walnut Brownies (6pc)",
      description: "Rich brownies with crunchy walnuts",
      price: "₹400",
      image: browniesImage,
      category: "Desserts",
      subCategory: "Brownies",
      isBestseller: true,
    },
    {
      id: "d15",
      title: "Orange Zest Tea Cake",
      description: "Refreshing orange flavored tea cake",
      price: "₹420",
      image: teaCakesImage,
      category: "Desserts",
      subCategory: "Tea Cakes",
    },
    {
      id: "d16",
      title: "Fruit Tart Selection (4pc)",
      description: "Assorted mini fruit tarts",
      price: "₹600",
      image: pastriesImage,
      category: "Desserts",
      subCategory: "Pastries",
      isNew: true,
    },
    {
      id: "d17",
      title: "Oreo Cheesecake",
      description: "Cookies and cream cheesecake delight",
      price: "₹620",
      image: cheesecakeImage,
      category: "Desserts",
      subCategory: "Cheesecakes",
      isBestseller: true,
    },
    {
      id: "d18",
      title: "Tiramisu Jar Cakes (Set of 4)",
      description: "Italian tiramisu in convenient jars",
      price: "₹450",
      image: jarCakesImage,
      category: "Desserts",
      subCategory: "Jar Cakes",
    },
    {
      id: "d19",
      title: "Chocolate Cupcakes (Box of 6)",
      description: "Rich chocolate cupcakes with ganache",
      price: "₹500",
      image: cupcakesImage,
      category: "Desserts",
      subCategory: "Cupcakes",
      isBestseller: true,
    },
    {
      id: "d20",
      title: "Blondie Brownies",
      description: "White chocolate blonde brownies",
      price: "₹380",
      image: browniesImage,
      category: "Desserts",
      subCategory: "Brownies",
    },
    {
      id: "mini-1",
      title: "Mini Cake",
      description: "Adorable mini cakes perfect for personal celebrations and gifting",
      price: "₹400",
      image: "/minicake.png",
      category: "Desserts",
      subCategory: "Mini Cakes",
      isBestseller: true,
    },
    {
      id: "mug-1",
      title: "Mug Cake",
      description: "Delicious single-serve cake in a convenient mug, perfect for quick treats",
      price: "₹350",
      image: "/mugcake.png",
      category: "Desserts",
      subCategory: "Mug Cakes",
      isBestseller: true,
    },
  ];

  const filterCategories = ["Pastries", "Cheesecakes", "Jar Cakes", "Cupcakes", "Brownies", "Tea Cakes", "Mini Cakes", "Mug Cakes"];

  const filteredProducts = (activeFilter === "All"
    ? products
    : products.filter(p => p.subCategory === activeFilter)
  ).sort((a, b) => {
    // Sort bestsellers first
    if (a.isBestseller && !b.isBestseller) return -1;
    if (!a.isBestseller && b.isBestseller) return 1;
    return 0;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Desserts in Chennai | IBakers",
    "description": "Order fresh pastries, cheesecakes, jar cakes, cupcakes, brownies and tea cakes in Chennai. Perfect for gifting and celebrations. Home-made quality delivered.",
    "url": "https://www.ibakers.com/desserts"
  };

  return (
    <>
      <Helmet>
        <title>Desserts in Chennai | Pastries, Cheesecakes, Cupcakes | IBakers</title>
        <meta name="description" content="Order fresh desserts in Chennai - pastries, cheesecakes, jar cakes, cupcakes, brownies & tea cakes. Perfect for gifting and parties. Same-day delivery available across Chennai." />
        <meta name="keywords" content="desserts Chennai, pastries Chennai, cheesecakes Chennai, cupcakes Chennai, jar cakes Chennai, brownies Chennai, tea cakes Chennai, dessert boxes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/desserts" />
        
        <meta property="og:title" content="Desserts in Chennai | Pastries, Cheesecakes, Cupcakes" />
        <meta property="og:image" content={pastriesImage} />
        
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
                Delicious <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Desserts</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                From pastries to cheesecakes, cupcakes to brownies - indulge in our fresh dessert collection
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Fresh Desserts Delivered Across Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers offers a delightful range of desserts in Chennai perfect for every occasion. From gourmet pastries and creamy cheesecakes to convenient jar cakes and premium cupcakes, each dessert is crafted fresh with quality ingredients. Our collection includes classic fudge brownies, tea cakes perfect for your evening chai, and beautifully packaged dessert boxes ideal for corporate gifting.
            </p>
            <p className="text-slate-300 mb-4">
              Whether you're looking for party treats, gifting options, or just a sweet indulgence, our desserts are made to order and delivered fresh across Chennai including Adyar, T Nagar, Velachery, Anna Nagar, and OMR areas.
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Need Desserts for Your Event?</h2>
            <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
              Bulk orders available for parties, corporate events and celebrations
            </p>
            <button
              onClick={() => window.location.href = "/custom-orders"}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50"
            >
              Order Bulk Desserts
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Desserts;