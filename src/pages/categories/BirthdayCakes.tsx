import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";
import firstBirthdayImage from "@/assets/1st-birthday-cake.jpg";
import photoCakeImage from "@/assets/photo-cake.jpg";
import characterCakeImage from "@/assets/character-cake.jpg";
import grownUpCakeImage from "@/assets/grown-up-cake.jpg";
import blackForestImage from "@/assets/black-forest-cake.jpg";
import butterscotchImage from "@/assets/butterscotch-cake.jpg";
import dripCakeImage from "@/assets/drip-cake.jpg";
import pinataCakeImage from "@/assets/pinata-cake.jpg";
import unicornCakeImage from "@/assets/unicorn-cake.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";

const BirthdayCakes = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "1",
      title: "Vanilla Rosette Birthday Cake",
      description: "Elegant vanilla cake with beautiful rosette decorations and Happy Birthday topper",
      price: "₹549",
      image:"https://bkmedia.bakingo.com/vanilla-rosette-birthday-cake-cake4034vani-AA.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "2",
      title: "Birthday Classic Black Forest Cake",
      description: "Classic Black Forest cake with Happy Birthday topper and chocolate shavings",
      price: "₹549",
      image: "https://bkmedia.bakingo.com/birthday-star-black-forest-cake-cake4036blac-a.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "3",
      title: "Happy Birthday Bear Cake",
      description: "Adorable teddy bear cream cake perfect for kids' birthdays",
      price: "₹1,149",
      image: "https://bkmedia.bakingo.com/hbd-cutesy-teddy-cake-bg-them3268flav-AAA_1.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "4",
      title: "Picture Perfect Birthday Polaroid Cake",
      description: "Unique Polaroid-style photo cake with edible photo print",
      price: "₹1,289",
      image: "https://bkmedia.bakingo.com/picture-perfect-birthday-polaroid-cake-them5424flav-A.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
      isNew: true,
    },
    {
      id: "5",
      title: "Choco Ferrero Birthday Drip Cake",
      description: "Luxurious chocolate cake with Ferrero Rocher and chocolate drip design",
      price: "₹1,509",
      image: "https://bkmedia.bakingo.com/choco-ferrero-cake-cake4741ferr-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "6",
      title: "Chocolate Truffle Drip Cake",
      description: "Rich chocolate truffle cake with elegant drip design and Happy Birthday topper",
      price: "₹549",
      image: "https://bkmedia.bakingo.com/dreamy-chocolate-cake-cake4053choc-b_0.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "7",
      title: "Superheroes Chocolate Drip Cake",
      description: "Superhero-themed chocolate drip cake perfect for kids' birthday parties",
      price: "₹1,559",
      image: "https://bkmedia.bakingo.com/superheroes-chocolate-drip-cake-them4865flav-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "8",
      title: "Birthday Chocolate Pinata Cake",
      description: "Surprise-filled pinata cake with hidden treats inside",
      price: "₹1,469",
      image: "https://bkmedia.bakingo.com/sq-spherical-pineapple-pinata-cake-pina2251pine-A_0.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "9",
      title: "Rose N Butterfly Designer Cake",
      description: "Beautiful designer cake with rose and butterfly decorations",
      price: "₹1,329",
      image: "https://bkmedia.bakingo.com/Rose-N-Butterfly-Designer-Cake-bg-theme3892flav-A_0.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "10",
      title: "Delightful Butterscotch Birthday Cake",
      description: "Classic butterscotch cake with creamy frosting and birthday decorations",
      price: "₹509",
      image: butterscotchImage,
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "11",
      title: "Velvet Chocolate Truffle Cake",
      description: "Decadent chocolate truffle cake with smooth velvet texture",
      price: "₹509",
      image: "https://bkmedia.bakingo.com/sq-red-velvet-chocolate-cake-cake1637redv-AAA.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "12",
      title: "Birthday Photo Cake",
      description: "Personalized photo cake with your favorite picture printed on top",
      price: "₹689",
      image: "https://bkmedia.bakingo.com/squ-_birthday-exuberance-phot0275flav-301217-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
      isBestseller: true,
    },
    {
      id: "13",
      title: "Special Six Birthday Cake",
      description: "Unique number 6 cake design perfect for 6th birthday celebrations",
      price: "₹1,329",
      image: "https://bkmedia.bakingo.com/special-six-birthday-cake-them3867flav-A_0.jpg",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isNew: true,
    },
    {
      id: "14",
      title: "Fortieth Birthday Photo Cake",
      description: "Elegant photo cake perfect for 40th birthday milestone",
      price: "₹689",
      image: "https://bkmedia.bakingo.com/fortieth-birthday-photo-cake-phot5535flav-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
    },
    {
      id: "15",
      title: "Rosette Chocolate Cake",
      description: "Beautiful chocolate cake with rosette swirls and Happy Birthday topper",
      price: "₹649",
      image: "https://bkmedia.bakingo.com/rosy-swirls-chocolate-cake-cake4035choc-a.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isBestseller: true,
    },
    {
      id: "16",
      title: "Classic At Forty Birthday Cake",
      description: "Sophisticated design perfect for 40th birthday celebrations",
      price: "₹689",
      image: "https://bkmedia.bakingo.com/classic-at-forty-birthday-cake-phot5534flav-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
    },
    {
      id: "17",
      title: "1st Birthday Smash Cake",
      description: "Adorable cake for baby's first birthday milestone celebration",
      price: "₹1,200",
      image: "",
      category: "Birthday Cakes",
      subCategory: "1st Birthday",
      isBestseller: true,
    },
    {
      id: "18",
      title: "Baby's First Birthday Unicorn",
      description: "Magical unicorn design perfect for 1st birthday celebrations",
      price: "₹1,400",
      image: unicornCakeImage,
      category: "Birthday Cakes",
      subCategory: "1st Birthday",
      isBestseller: true,
    },
    {
      id: "19",
      title: "Kids Birthday Special",
      description: "Fun cartoon character designs your kids will absolutely love",
      price: "₹1,200",
      image: kidsBirthdayImage,
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "20",
      title: "Princess Theme Cake",
      description: "Beautiful princess castle design perfect for little girls' birthdays",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/barbie-cake-1-them0080flav-AA.jpg",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
    },
    {
      id: "21",
      title: "Heart-Shaped Birthday Delight",
      description: "Romantic heart-shaped cake perfect for birthday celebrations",
      price: "₹950",
      image: "https://bkmedia.bakingo.com/sq-heart-shaped-photo-cake-phot1130flav-AA.jpg.jpg",
      category: "Birthday Cakes",
      subCategory: "Classic",
      isNew: true,
    },
    {
      id: "22",
      title: "Elegant Black & Gold Cake",
      description: "Sophisticated black and gold design perfect for adult birthdays",
      price: "₹1,300",
      image: grownUpCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
      isBestseller: true,
    },
    {
      id: "23",
      title: "Luxury Black & Gold Drip Cake",
      description: "Elegant drip design with gold accents for milestone birthdays",
      price: "₹1,500",
      image: dripCakeImage,
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
      isBestseller: true,
    },
    
    {
      id: "25",
      title: "Custom Photo Portrait Cake",
      description: "High-quality edible photo portrait cake for personalized celebrations",
      price: "₹1,150",
      image: photoCakeImage,
      category: "Birthday Cakes",
      subCategory: "Photo Cakes",
    },
    {
      id: "26",
      title: "Frozen Theme Elsa Castle",
      description: "Magical Frozen castle cake with Elsa figurine for kids",
      price: "₹1,750",
      image: "https://bkmedia.bakingo.com/two-tier-frozen-theme-cake-theme3938flav-AAA.jpg",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "27",
      title: "Spider-Man Action Cake",
      description: "Superhero Spider-Man design with web details for action-loving kids",
      price: "₹1,650",
      image: "https://bkmedia.bakingo.com/appetizing-spiderman-cake-them2647flav-AAA.jpg",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
    },
    {
      id: "28",
      title: "Barbie Princess Castle",
      description: "Dream castle cake with Barbie doll topper for princess parties",
      price: "₹1,800",
      image: "https://bkmedia.bakingo.com/fantasy-barbie-cake-bg-them2655flav-A_0.jpg ",
      category: "Birthday Cakes",
      subCategory: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "29",
      title: "Minimalist Modern Cake",
      description: "Sleek contemporary design perfect for grown-up celebrations",
      price: "₹1,200",
      image: "https://bkmedia.bakingo.com/classic-vanilla-minimalist-cake-cake5441vani-A.jpg",
      category: "Birthday Cakes",
      subCategory: "Adult Birthday",
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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Header />
        
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                Birthday <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Celebrate every milestone with our custom-made birthday cakes, crafted fresh with love in Chennai
              </p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Custom Birthday Cakes Delivered Fresh Across Chennai</h2>
            <p className="text-slate-300 mb-4">
              Looking for the perfect birthday cake in Chennai? IBakers specializes in custom home-made birthday cakes that make every celebration memorable. From kids' birthday cakes featuring their favorite cartoon characters to elegant designs for adults, we create each cake fresh to order with premium ingredients.
            </p>
            <p className="text-slate-300 mb-4">
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
