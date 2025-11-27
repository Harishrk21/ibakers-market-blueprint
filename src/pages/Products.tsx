import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import christmasCakeImage from "@/assets/christmas-cake.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";
import pinataCakeImage from "@/assets/pinata-cake.jpg";
import dripCakeImage from "@/assets/drip-cake.jpg";
import unicornCakeImage from "@/assets/unicorn-cake.jpg";
import butterscotchImage from "@/assets/butterscotch-cake.jpg";
import blackForestImage from "@/assets/black-forest-cake.jpg";
import jarCakesImage from "@/assets/jar-cakes.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    // Birthday Cakes
    {
      id: "1",
      title: "Chocolate Truffle Cake",
      description: "Rich, decadent chocolate layers with smooth truffle frosting",
      price: "₹850",
      image: browniesImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "2",
      title: "Red Velvet Elegance",
      description: "Classic red velvet with cream cheese frosting",
      price: "₹900",
      image: heroImage,
      category: "Birthday Cakes",
      isNew: true,
    },
    {
      id: "3",
      title: "Kids Birthday Special",
      description: "Fun cartoon character designs your kids will love",
      price: "₹1,200",
      image: kidsBirthdayImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "4",
      title: "Photo Cake",
      description: "Your favorite photo printed on delicious cake",
      price: "₹1,000",
      image: heroImage,
      category: "Birthday Cakes",
    },
    {
      id: "5",
      title: "Heart-Shaped Delight",
      description: "Romantic heart-shaped cake perfect for celebrations",
      price: "₹950",
      image: heartShapedImage,
      category: "Birthday Cakes",
      isNew: true,
    },
    // Trending Cakes
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
    // Theme Cakes
    {
      id: "8",
      title: "Magical Unicorn Cake",
      description: "Adorable unicorn design with rainbow colors",
      price: "₹1,600",
      image: unicornCakeImage,
      category: "Theme Cakes",
      isBestseller: true,
    },
    // Flavor Cakes
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
    // Wedding Cakes
    {
      id: "11",
      title: "Wedding Bliss 3-Tier",
      description: "Elegant 3-tier wedding cake with fresh flowers",
      price: "₹8,500",
      image: weddingCakeImage,
      category: "Wedding Cakes",
    },
    {
      id: "12",
      title: "Royal Wedding Cake",
      description: "5-tier masterpiece with gold accents",
      price: "₹15,000",
      image: weddingCakeImage,
      category: "Wedding Cakes",
      isNew: true,
    },
    // Christmas Specials
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
    // Brownies
    {
      id: "15",
      title: "Classic Fudge Brownies",
      description: "Dense, chocolaty perfection in every bite",
      price: "₹350",
      image: browniesImage,
      category: "Brownies & Desserts",
      isBestseller: true,
    },
    {
      id: "16",
      title: "Cream Cheese Brownies",
      description: "Fudgy brownies with tangy cream cheese swirl",
      price: "₹400",
      image: browniesImage,
      category: "Brownies & Desserts",
    },
    // Jar Cakes
    {
      id: "17",
      title: "Assorted Jar Cakes",
      description: "Layered cake desserts in convenient glass jars",
      price: "₹300",
      image: jarCakesImage,
      category: "Brownies & Desserts",
      isNew: true,
    },
    // Cupcakes
    {
      id: "18",
      title: "Gourmet Cupcakes Box",
      description: "Assorted flavors with premium frosting",
      price: "₹600",
      image: cupcakesImage,
      category: "Brownies & Desserts",
      isBestseller: true,
    },
    // Specialty Cakes
    {
      id: "19",
      title: "Eggless Chocolate Cake",
      description: "Just as delicious, completely eggless",
      price: "₹900",
      image: heroImage,
      category: "Specialty Cakes",
    },
    {
      id: "20",
      title: "Sugar-Free Delight",
      description: "Diabetic-friendly cake without compromising taste",
      price: "₹1,100",
      image: heroImage,
      category: "Specialty Cakes",
      isNew: true,
    },
    {
      id: "21",
      title: "Vegan Chocolate Cake",
      description: "100% plant-based, rich chocolate flavor",
      price: "₹1,050",
      image: browniesImage,
      category: "Specialty Cakes",
      isNew: true,
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "Birthday Cakes", label: "Birthday Cakes" },
    { value: "Trending Cakes", label: "Trending Cakes" },
    { value: "Theme Cakes", label: "Theme Cakes" },
    { value: "By Flavour", label: "By Flavour" },
    { value: "Wedding Cakes", label: "Wedding Cakes" },
    { value: "Christmas Specials", label: "Christmas Specials" },
    { value: "Brownies & Desserts", label: "Brownies & Desserts" },
    { value: "Specialty Cakes", label: "Specialty Cakes" },
  ];

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <>
      <Helmet>
        <title>All Products | Custom Cakes, Brownies & Desserts | IBakers Chennai</title>
        <meta name="description" content="Browse all cake products from IBakers Chennai. Birthday cakes, wedding cakes, trending designs, brownies, desserts & more. Fresh home-made with same-day delivery." />
        <link rel="canonical" href="https://www.ibakers.com/products" />
      </Helmet>
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Handcrafted cakes and treats for every celebration
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="flex-wrap h-auto gap-2">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value} className="px-6">
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We specialize in custom orders! Contact us to discuss your dream cake
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.location.href = "/custom-orders"}
          >
            Create Custom Order
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Products;
