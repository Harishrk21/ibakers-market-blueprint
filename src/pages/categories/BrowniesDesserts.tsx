import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import browniesImage from "@/assets/brownies.jpg";
import jarCakesImage from "@/assets/jar-cakes.jpg";
import cupcakesImage from "@/assets/cupcakes.jpg";

const BrowniesDesserts = () => {
  const products = [
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
    {
      id: "17",
      title: "Assorted Jar Cakes",
      description: "Layered cake desserts in convenient glass jars",
      price: "₹300",
      image: jarCakesImage,
      category: "Brownies & Desserts",
      isNew: true,
    },
    {
      id: "18",
      title: "Gourmet Cupcakes Box",
      description: "Assorted flavors with premium frosting",
      price: "₹600",
      image: cupcakesImage,
      category: "Brownies & Desserts",
      isBestseller: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Brownies & Desserts in Chennai | IBakers",
    "description": "Order fresh brownies, jar cakes, cupcakes and desserts in Chennai. Perfect for gifting and parties. Home-made quality delivered across Chennai.",
    "url": "https://www.ibakers.com/categories/brownies-desserts"
  };

  return (
    <>
      <Helmet>
        <title>Brownies & Desserts Chennai | Jar Cakes, Cupcakes | IBakers</title>
        <meta name="description" content="Order fresh brownies, jar cakes, and gourmet cupcakes in Chennai. Perfect for gifting, parties and treats. Fudge brownies, cream cheese brownies & more delivered fresh." />
        <meta name="keywords" content="brownies Chennai, jar cakes Chennai, cupcakes Chennai, desserts Chennai, fudge brownies, cream cheese brownies, dessert boxes Chennai, gifting Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/brownies-desserts" />
        
        <meta property="og:title" content="Brownies & Desserts Chennai | Jar Cakes, Cupcakes" />
        <meta property="og:image" content={browniesImage} />
        
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
                Brownies & <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Desserts</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Indulge in our delicious brownies, jar cakes, cupcakes and more sweet treats
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Premium Brownies and Desserts Fresh from Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers offers a delightful range of brownies and desserts in Chennai perfect for every occasion. From classic fudge brownies with dense, chocolaty perfection to cream cheese brownies with tangy swirls, each treat is baked fresh with premium ingredients.
            </p>
            <p className="text-slate-300 mb-4">
              Our collection includes convenient jar cakes for on-the-go treats, gourmet cupcake boxes with assorted flavours, and dessert hampers perfect for gifting. Ideal for corporate gifting, party treats, and personal indulgence. Same-day delivery available across Chennai.
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

export default BrowniesDesserts;
