import { useState } from "react";
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
    // Wedding Cakes
    {
      id: "5",
      title: "Wedding Bliss 3-Tier",
      description: "Elegant 3-tier wedding cake with fresh flowers",
      price: "₹8,500",
      image: weddingCakeImage,
      category: "Wedding Cakes",
    },
    {
      id: "6",
      title: "Royal Wedding Cake",
      description: "5-tier masterpiece with gold accents",
      price: "₹15,000",
      image: weddingCakeImage,
      category: "Wedding Cakes",
      isNew: true,
    },
    // Christmas Specials
    {
      id: "7",
      title: "Traditional Fruit Cake",
      description: "Rich fruit cake soaked in rum with nuts",
      price: "₹1,200",
      image: christmasCakeImage,
      category: "Christmas Specials",
      isBestseller: true,
    },
    {
      id: "8",
      title: "Plum Cake",
      description: "Classic Christmas plum cake with candied fruits",
      price: "₹950",
      image: christmasCakeImage,
      category: "Christmas Specials",
    },
    // Brownies
    {
      id: "9",
      title: "Classic Fudge Brownies",
      description: "Dense, chocolaty perfection in every bite",
      price: "₹350",
      image: browniesImage,
      category: "Brownies",
      isBestseller: true,
    },
    {
      id: "10",
      title: "Cream Cheese Brownies",
      description: "Fudgy brownies with tangy cream cheese swirl",
      price: "₹400",
      image: browniesImage,
      category: "Brownies",
    },
    // Specialty Cakes
    {
      id: "11",
      title: "Eggless Chocolate Cake",
      description: "Just as delicious, completely eggless",
      price: "₹900",
      image: heroImage,
      category: "Specialty Cakes",
    },
    {
      id: "12",
      title: "Sugar-Free Delight",
      description: "Diabetic-friendly cake without compromising taste",
      price: "₹1,100",
      image: heroImage,
      category: "Specialty Cakes",
      isNew: true,
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "Birthday Cakes", label: "Birthday Cakes" },
    { value: "Wedding Cakes", label: "Wedding Cakes" },
    { value: "Christmas Specials", label: "Christmas Specials" },
    { value: "Brownies", label: "Brownies" },
    { value: "Specialty Cakes", label: "Specialty Cakes" },
  ];

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
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
  );
};

export default Products;
