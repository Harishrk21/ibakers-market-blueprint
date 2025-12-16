import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";

const SpecialtyCakes = () => {
  const products = [
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
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Specialty Cakes in Chennai | IBakers",
    "description": "Eggless, sugar-free and gluten-free cakes in Chennai. Dietary-specific cakes without compromising on taste. Fresh home-made quality.",
    "url": "https://www.ibakers.com/categories/specialty-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Specialty Cakes Chennai | Eggless & Sugar-Free Cakes | IBakers</title>
        <meta name="description" content="Order specialty cakes in Chennai - Eggless, sugar-free, and gluten-free options. Dietary-specific cakes without compromising taste. Perfect for health-conscious celebrations." />
        <meta name="keywords" content="eggless cakes Chennai, sugar-free cakes Chennai, gluten-free cakes Chennai, diabetic cakes, specialty cakes, dietary cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/specialty-cakes" />
        
        <meta property="og:title" content="Specialty Cakes Chennai | Eggless & Sugar-Free Cakes" />
        <meta property="og:image" content={heroImage} />
        
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
                Specialty <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Delicious cakes crafted for your specific dietary needs without compromising on taste
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Dietary-Specific Cakes for Health-Conscious Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers specializes in creating specialty cakes in Chennai that cater to specific dietary requirements without sacrificing flavor. Our eggless cakes are just as moist and delicious as traditional cakes, perfect for vegetarians and those with egg allergies.
            </p>
            <p className="text-slate-300 mb-4">
              We offer sugar-free cakes using natural sweeteners for diabetics, and gluten-free options for those with celiac disease or gluten sensitivity. Each specialty cake is crafted with care using premium alternative ingredients. Available across Chennai with customizable designs and flavors.
            </p>
          </article>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Specialty Cake?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Tell us your dietary requirements and we'll create the perfect cake for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Specialty Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SpecialtyCakes;
