import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";
import firstBirthdayImage from "@/assets/1st-birthday-cake.jpg";
import photoCakeImage from "@/assets/photo-cake.jpg";
import characterCakeImage from "@/assets/character-cake.jpg";
import grownUpCakeImage from "@/assets/grown-up-cake.jpg";

const BirthdayCakes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "1",
      title: "1st Birthday Smash Cake",
      description: "Adorable cake for baby's first birthday milestone",
      price: "₹1,200",
      image: firstBirthdayImage,
      category: "Birthday Cakes",
      subCategory: "1st Birthday",
      isBestseller: true,
    },
    {
      id: "2",
      title: "Baby's 1st Year Celebration",
      description: "Pastel colors with number 1 topper",
      price: "₹1,100",
      image: firstBirthdayImage,
      category: "Birthday Cakes",
      subCategory: "1st Birthday",
      isNew: true,
    },
    {
      id: "3",
      title: "Custom Photo Birthday Cake",
      description: "Your favorite photo printed on delicious cake",
      price: "₹1,000",
      image: photoCakeImage,
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
      isBestseller: true,
    },
    {
      id: "4",
      title: "Edible Photo Rectangle Cake",
      description: "Large rectangular cake perfect for photo prints",
      price: "₹1,100",
      image: photoCakeImage,
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
    },
    {
      id: "5",
      title: "Superhero Character Cake",
      description: "Kids' favorite superhero characters in fondant",
      price: "₹1,500",
      image: characterCakeImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "6",
      title: "Princess Theme Cake",
      description: "Beautiful princess castle design for little girls",
      price: "₹1,600",
      image: characterCakeImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
    },
    {
      id: "7",
      title: "Kids Birthday Special",
      description: "Fun cartoon character designs your kids will love",
      price: "₹1,200",
      image: kidsBirthdayImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "8",
      title: "Chocolate Truffle Cake",
      description: "Rich, decadent chocolate layers with smooth truffle frosting",
      price: "₹850",
      image: browniesImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "9",
      title: "Red Velvet Elegance",
      description: "Classic red velvet with cream cheese frosting",
      price: "₹900",
      image: heroImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
      isNew: true,
    },
    {
      id: "10",
      title: "Elegant Black & Gold Cake",
      description: "Sophisticated design perfect for adult birthdays",
      price: "₹1,300",
      image: grownUpCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
      isBestseller: true,
    },
    {
      id: "11",
      title: "Minimalist Modern Cake",
      description: "Sleek contemporary design for grown-up celebrations",
      price: "₹1,200",
      image: grownUpCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
    },
    {
      id: "12",
      title: "Heart-Shaped Delight",
      description: "Romantic heart-shaped cake perfect for celebrations",
      price: "₹950",
      image: heartShapedImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
      isNew: true,
    },
    {
      id: "13",
      title: "Baby's First Birthday Unicorn",
      description: "Magical unicorn design for 1st birthday",
      price: "₹1,400",
      image: firstBirthdayImage,
      category: "Birthday Cakes",
      subCategory: "1st Birthday",
      isNew: true,
    },
    {
      id: "14",
      title: "Dinosaur Theme Photo Cake",
      description: "Combine photo with dinosaur decorations",
      price: "₹1,250",
      image: photoCakeImage,
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
      isBestseller: true,
    },
    {
      id: "15",
      title: "Barbie Princess Castle",
      description: "Dream castle with Barbie doll topper",
      price: "₹1,800",
      image: characterCakeImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "16",
      title: "Spider-Man Action Cake",
      description: "Superhero Spider-Man design with web details",
      price: "₹1,650",
      image: characterCakeImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
    },
    {
      id: "17",
      title: "Vanilla Bean Classic",
      description: "Premium Madagascar vanilla sponge",
      price: "₹800",
      image: heroImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
    },
    {
      id: "18",
      title: "Strawberry Fresh Cream",
      description: "Light sponge with fresh strawberries",
      price: "₹850",
      image: heartShapedImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
      isNew: true,
    },
    {
      id: "19",
      title: "Luxury Black & Gold Drip Cake",
      description: "Elegant drip design for milestone birthdays",
      price: "₹1,500",
      image: grownUpCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
      isBestseller: true,
    },
    {
      id: "20",
      title: "Geometric Modern Art Cake",
      description: "Contemporary geometric patterns",
      price: "₹1,400",
      image: grownUpCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
    },
    {
      id: "21",
      title: "Frozen Theme Elsa Castle",
      description: "Magical Frozen castle with Elsa figurine",
      price: "₹1,750",
      image: characterCakeImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "22",
      title: "Customized Photo Portrait Cake",
      description: "High-quality edible photo portrait",
      price: "₹1,150",
      image: photoCakeImage,
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
    },
  ];

  const filterCategories = ["1st Birthday", "Photo Cakes", "Theme Cakes", "Adult Birthday", "Classic"];

  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(p => p.subCategory === activeFilter);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Birthday Cakes in Chennai | IBakers",
    "description": "Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more. Same-day delivery available across Chennai.",
    "url": "https://www.ibakers.com/categories/birthday-cakes",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IBakers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "offers": products.map(p => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": p.title,
        "description": p.description,
        "image": p.image
      },
      "price": p.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR"
    }))
  };

  return (
    <>
      <Helmet>
        <title>Birthday Cakes in Chennai | Custom Home-Made Cakes | IBakers</title>
        <meta name="description" content="Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more. Same-day delivery available across Chennai neighborhoods - Adyar, T Nagar, Velachery." />
        <meta name="keywords" content="birthday cakes Chennai, custom birthday cakes, kids birthday cakes Chennai, photo cakes Chennai, chocolate birthday cake, red velvet cake Chennai, home-made cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/birthday-cakes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Birthday Cakes in Chennai | Custom Home-Made Cakes | IBakers" />
        <meta property="og:description" content="Order fresh, home-made birthday cakes in Chennai. Custom designs, photo cakes, kids' specials & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ibakers.com/categories/birthday-cakes" />
        <meta property="og:image" content={heroImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Birthday Cakes in Chennai | IBakers" />
        <meta name="twitter:description" content="Order fresh, home-made birthday cakes in Chennai with same-day delivery" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                Birthday <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Celebrate every milestone with our custom-made birthday cakes, crafted fresh with love in Chennai
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl font-bold mb-6">Custom Birthday Cakes Delivered Fresh Across Chennai</h2>
            <p className="text-muted-foreground mb-4">
              Looking for the perfect birthday cake in Chennai? IBakers specializes in custom home-made birthday cakes that make every celebration memorable. From kids' birthday cakes featuring their favorite cartoon characters to elegant designs for adults, we create each cake fresh to order with premium ingredients and no preservatives.
            </p>
            <p className="text-muted-foreground mb-4">
              Our birthday cake collection includes chocolate truffle, red velvet, photo cakes, heart-shaped designs, and custom tier cakes. We deliver across Chennai including Adyar, T Nagar, Velachery, Anna Nagar, OMR, and Thoraipakkam. Same-day delivery available for orders placed before noon.
            </p>
          </article>
        </section>

        {/* Products Grid */}
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Birthday Cake Design?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Share your ideas and we'll create the perfect birthday cake for your celebration
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Birthday Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BirthdayCakes;
