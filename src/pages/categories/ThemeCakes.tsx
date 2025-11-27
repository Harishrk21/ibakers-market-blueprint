import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import unicornCakeImage from "@/assets/unicorn-cake.jpg";

const ThemeCakes = () => {
  const products = [
    {
      id: "8",
      title: "Magical Unicorn Cake",
      description: "Adorable unicorn design with rainbow colors",
      price: "₹1,600",
      image: unicornCakeImage,
      category: "Theme Cakes",
      isBestseller: true,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Theme Cakes in Chennai | IBakers",
    "description": "Custom theme cakes in Chennai - Unicorn, superhero, cartoon character, princess & more themed birthday cakes for kids and adults.",
    "url": "https://www.ibakers.com/categories/theme-cakes"
  };

  return (
    <>
      <Helmet>
        <title>Theme Cakes Chennai | Unicorn, Superhero & Character Cakes | IBakers</title>
        <meta name="description" content="Order custom theme cakes in Chennai. Unicorn, superhero, cartoon characters, princess themes & more. Perfect for kids' birthdays with fresh home-made quality." />
        <meta name="keywords" content="theme cakes Chennai, unicorn cakes Chennai, superhero cakes, cartoon character cakes Chennai, princess cakes, kids theme cakes Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/categories/theme-cakes" />
        
        <meta property="og:title" content="Theme Cakes Chennai | Unicorn, Superhero & Character Cakes" />
        <meta property="og:image" content={unicornCakeImage} />
        
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
                Theme <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bring your favorite characters and themes to life with our custom theme cakes
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Custom Theme Cakes for Every Celebration in Chennai</h2>
            <p className="text-muted-foreground mb-4">
              IBakers specializes in creating stunning theme cakes in Chennai that bring your favorite characters and themes to life. From magical unicorn cakes with rainbow colors to superhero designs, princess themes, and cartoon characters - we craft each theme cake with intricate details and fresh, premium ingredients.
            </p>
            <p className="text-muted-foreground mb-4">
              Perfect for kids' birthdays, baby showers, and themed parties. Popular themes include Frozen, Avengers, Spider-Man, Barbie, Pokemon, Doraemon, and many more. We deliver custom theme cakes across all Chennai neighborhoods.
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
            <h2 className="text-4xl font-bold mb-6">Need a Specific Theme?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Tell us your favorite character or theme and we'll create it for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => window.location.href = "/custom-orders"}
            >
              Order Custom Theme Cake
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ThemeCakes;
