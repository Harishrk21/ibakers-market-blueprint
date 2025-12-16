import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import pinataCakeImage from "@/assets/pinata-cake.jpg";
import dripCakeImage from "@/assets/drip-cake.jpg";
import unicornCakeImage from "@/assets/unicorn-cake.jpg";
import heartShapedImage from "@/assets/heart-shaped-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import jarCakesImage from "@/assets/jar-cakes.jpg";

const TrendingCakes = () => {
  const products = [
    {
      id: "6",
      title: "Pinata Surprise Cake",
      description: "Break open to reveal colorful candy surprise inside",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/sq-birthday-chocolate-overload-pinata-cake-750gm-pina2163choc-A_0.jpg",
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
    {
      id: "t3",
      title: "Pull Me Up Cake",
      description: "Interactive cake with surprise pull-up design",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/sq-pull-me-up-choco-truffle-cake-pulm1813choc-A_0.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "bento-1",
      title: "Bento Cake",
      description: "Trendy Korean-style mini decorated cake perfect for individual servings",
      price: "₹450",
      image: "/bento.png",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t5",
      title: "Money Pulling Cake",
      description: "Fun cake that pulls out cash notes surprise",
      price: "₹1,700",
      image: "https://m.media-amazon.com/images/I/51FXjhMEbCL.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t6",
      title: "Ribbon Cake Elegance",
      description: "Beautiful ribbon layers in pastel colors",
      price: "₹1,350",
      image: "https://i0.wp.com/letsbake.ca/wp-content/uploads/2025/10/IMG_7996-scaled.jpeg?fit=1920%2C2560&ssl=1",
      category: "Trending Cakes",
    },
    {
      id: "t7",
      title: "Number Cake Trending",
      description: "Instagram-worthy number shaped cream cake",
      price: "₹1,250",
      image: "https://simplebites.net/wp-content/uploads/2018/02/Final-icebox--e1519694712881-500x500.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t8",
      title: "Cream Explosion Cake",
      description: "Viral cream bomb cake with surprise filling",
      price: "₹1,550",
      image: "https://browniepointindia.com/cdn/shop/products/surpriseexplosioncake1.jpg?v=1669295598",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "t9",
      title: "Rasgulla Cake Fusion",
      description: "Trending fusion of traditional rasgulla & cake",
      price: "₹1,200",
      image: "https://www.cakesworld.in/images/web/fusioncake_04.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t10",
      title: "Chocolate Bomb Cake",
      description: "Hot chocolate bomb reveals hidden surprise",
      price: "₹1,650",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIUZrQBq7AKI9WLey-bgHbloTThJpSsZovA&s",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "t11",
      title: "Unicorn Dreams Trending",
      description: "Viral unicorn design with rainbow layers",
      price: "₹1,500",
      image: unicornCakeImage,
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t12",
      title: "Fruit Bomb Explosion",
      description: "Fresh fruit explosion trending design",
      price: "₹1,400",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHX_JsTvqbesKXC4iYt9ZzF5RCJ_diQgdGQ&s",
      category: "Trending Cakes",
    },
    {
      id: "t13",
      title: "Camera Cake Instagram",
      description: "Perfect for photography lovers & influencers",
      price: "₹1,550",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7XwX1hBFMlfZ13NEtOBd-sDg90kN204gtg&s",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "t14",
      title: "Letter Cake Personalized",
      description: "Trendy letter-shaped cake with toppings",
      price: "₹1,300",
      image: "https://cakestry15.com/cdn/shop/files/Alphabet_R_2kg_Chocolate_Cake_cakestry15noida_full_image.webp?v=1746792302&width=1946",
      category: "Trending Cakes",
    },
    {
      id: "t15",
      title: "Gourmet Overload Cake",
      description: "Loaded with premium toppings & decorations",
      price: "₹1,800",
      image: "https://www.dreamadozen.com/cdn/shop/files/chocolate-overload-cake2.jpg?v=1757418354&width=1024",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "t16",
      title: "Bento Box Set (4 Mini Cakes)",
      description: "Set of 4 Korean-style bento cakes",
      price: "₹1,600",
      image: "https://vinayakdefoodmart.com/cdn/shop/files/M100_Bento_Cake_Box.jpg?v=1751971081",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "t17",
      title: "Cricket Theme Trending",
      description: "Perfect for cricket fans & IPL celebrations",
      price: "₹1,450",
      image: "https://cakestry15.com/cdn/shop/files/Cricket_Celebration_Cake_pne_kg_chocolate_11th_birthday_cake_for_a_boy_by_cakestry15_noida_cake_full_image.webp?v=1747727730&width=1200",
      category: "Trending Cakes",
    },
    
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trending Cakes in Chennai | IBakers",
    "description": "Latest trending cake designs in Chennai - Pinata cakes, Drip cakes, Pull-me-up cakes & more viral cake designs delivered fresh.",
    "url": "https://www.ibakers.com/categories/trending-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Trending Cakes Chennai | Pinata & Drip Cakes | IBakers</title>
        <meta name="description" content="Order the latest trending cake designs in Chennai - Pinata surprise cakes, elegant drip cakes, pull-me-up cakes & more viral designs. Fresh home-made delivery across Chennai." />
        <meta name="keywords" content="trending cakes Chennai, pinata cakes Chennai, drip cakes Chennai, viral cake designs, Instagram cakes Chennai, surprise cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/trending-cakes" />
        
        <meta property="og:title" content="Trending Cakes Chennai | Pinata & Drip Cakes | IBakers" />
        <meta property="og:image" content={pinataCakeImage} />
        
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
                Trending <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Stay ahead with the latest viral cake designs and Instagram-worthy creations
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Latest Trending Cake Designs in Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers brings you the hottest cake trends in Chennai! From viral pinata surprise cakes that reveal colorful candies when broken, to elegant drip cakes adorned with macarons and berries, trendy Korean bento cakes, interactive pull-me-up cakes, and exciting money pulling cakes - we create Instagram-worthy cakes that make your celebrations extra special.
            </p>
            <p className="text-slate-300 mb-4">
              Our trending collection features the most sought-after designs including cream explosion cakes, number cakes, letter cakes, rasgulla fusion cakes, chocolate bomb cakes, fruit explosion cakes, camera cakes for influencers, gourmet overload cakes, and cricket-themed cakes. Each trending cake is made fresh with premium ingredients and delivered across Chennai including Adyar, T Nagar, Velachery, Anna Nagar, and OMR.
            </p>
          </article>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Want a Custom Trending Design?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Share your favorite cake trend and we'll recreate it for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Trending Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TrendingCakes;
