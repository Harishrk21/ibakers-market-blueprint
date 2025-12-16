import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import unicornCakeImage from "@/assets/unicorn-cake.jpg";

const ThemeCakes = () => {
  const products = [
    {
      id: "theme-1",
      title: "Magical Unicorn Cake",
      description: "Adorable unicorn design with rainbow colors and magical decorations",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/unicorn-cake-bg-them2656flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-2",
      title: "Spider-Man Action Cake",
      description: "Superhero Spider-Man design with web details for action-loving kids",
      price: "₹1,650",
      image: "https://bkmedia.bakingo.com/appetizing-spiderman-cake-them2647flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-3",
      title: "Barbie Princess Castle",
      description: "Dream castle cake with Barbie doll topper for princess parties",
      price: "₹1,800",
      image: "https://bkmedia.bakingo.com/fantasy-barbie-cake-bg-them2655flav-A_0.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-4",
      title: "Frozen Elsa Castle Cake",
      description: "Magical Frozen castle cake with Elsa figurine for kids",
      price: "₹1,750",
      image: "https://bkmedia.bakingo.com/two-tier-frozen-theme-cake-theme3938flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-5",
      title: "Doraemon Character Cake",
      description: "Adorable Doraemon character cake perfect for kids' birthdays",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/doraemon-cake-bg-them2654flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-6",
      title: "Harry Potter Magic Cake",
      description: "Wizarding world themed cake with Hogwarts castle design",
      price: "₹1,900",
      image: "https://bkmedia.bakingo.com/harry-potter-cake-bg-them2657flav-AAA.jpg",
      category: "Theme Cakes",
      isNew: true,
    },
    {
      id: "theme-7",
      title: "Pokemon Pikachu Cake",
      description: "Cute Pikachu character cake with electric yellow theme",
      price: "₹1,550",
      image: "https://bkmedia.bakingo.com/pikachu-cake-bg-them2658flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-8",
      title: "Avengers Superhero Cake",
      description: "Marvel Avengers themed cake with multiple superhero characters",
      price: "₹2,000",
      image: "https://bkmedia.bakingo.com/avengers-cake-bg-them2659flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-9",
      title: "Peppa Pig Birthday Cake",
      description: "Adorable Peppa Pig character cake for little ones",
      price: "₹1,400",
      image: "https://bkmedia.bakingo.com/peppa-pig-cake-bg-them2660flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-10",
      title: "Mickey Mouse Clubhouse",
      description: "Classic Mickey Mouse themed cake with Disney magic",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/mickey-mouse-cake-bg-them2661flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-11",
      title: "Cars Lightning McQueen",
      description: "Racing themed cake with Lightning McQueen character",
      price: "₹1,700",
      image: "https://bkmedia.bakingo.com/cars-cake-bg-them2662flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-12",
      title: "Minions Despicable Me Cake",
      description: "Fun Minions character cake with yellow and blue theme",
      price: "₹1,650",
      image: "https://bkmedia.bakingo.com/minions-cake-bg-them2663flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-13",
      title: "Princess Disney Castle",
      description: "Elegant Disney princess castle cake for royal celebrations",
      price: "₹1,800",
      image: "https://bkmedia.bakingo.com/disney-princess-cake-bg-them2664flav-AAA.jpg",
      category: "Theme Cakes",
      isNew: true,
    },
    {
      id: "theme-14",
      title: "Batman Superhero Cake",
      description: "Dark knight Batman themed cake with bat symbol",
      price: "₹1,700",
      image: "https://bkmedia.bakingo.com/batman-cake-bg-them2665flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-15",
      title: "Transformers Bumblebee",
      description: "Action-packed Transformers cake with Bumblebee character",
      price: "₹1,750",
      image: "https://bkmedia.bakingo.com/transformers-cake-bg-them2666flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-16",
      title: "Tom & Jerry Cake",
      description: "Classic cartoon Tom & Jerry themed cake",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/tom-jerry-cake-bg-them2667flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-17",
      title: "Chhota Bheem Cake",
      description: "Popular Indian cartoon Chhota Bheem character cake",
      price: "₹1,450",
      image: "https://bkmedia.bakingo.com/chhota-bheem-cake-bg-them2668flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-18",
      title: "Motu Patlu Cake",
      description: "Fun Motu Patlu cartoon character cake",
      price: "₹1,400",
      image: "https://bkmedia.bakingo.com/motu-patlu-cake-bg-them2669flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-19",
      title: "Shinchan Cake",
      description: "Mischievous Shinchan character cake for kids",
      price: "₹1,550",
      image: "https://bkmedia.bakingo.com/shinchan-cake-bg-them2670flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-20",
      title: "Dinosaur Theme Cake",
      description: "Prehistoric dinosaur themed cake with T-Rex design",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/dinosaur-cake-bg-them2671flav-AAA.jpg",
      category: "Theme Cakes",
      isBestseller: true,
    },
    {
      id: "theme-21",
      title: "Football/Soccer Theme",
      description: "Sports themed cake perfect for football fans",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/football-cake-bg-them2672flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-22",
      title: "Princess Crown Cake",
      description: "Elegant princess crown design with pink and gold",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/princess-crown-cake-bg-them2673flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-23",
      title: "Butterfly Garden Cake",
      description: "Beautiful butterfly themed cake with floral decorations",
      price: "₹1,400",
      image: "https://bkmedia.bakingo.com/butterfly-cake-bg-them2674flav-AAA.jpg",
      category: "Theme Cakes",
    },
    {
      id: "theme-24",
      title: "Jungle Safari Cake",
      description: "Wild animal themed cake with jungle safari design",
      price: "₹1,550",
      image: "https://bkmedia.bakingo.com/jungle-cake-bg-them2675flav-AAA.jpg",
      category: "Theme Cakes",
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
                Theme <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Cakes</span> in Chennai
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Bring your favorite characters and themes to life with our custom theme cakes
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 relative">
          <article className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">Custom Theme Cakes for Every Celebration in Chennai</h2>
            <p className="text-slate-300 mb-4">
              IBakers specializes in creating stunning theme cakes in Chennai that bring your favorite characters and themes to life. From magical unicorn cakes with rainbow colors to superhero designs (Spider-Man, Batman, Avengers), princess themes (Barbie, Frozen, Disney), and popular cartoon characters (Doraemon, Chhota Bheem, Pokemon, Minions, Tom & Jerry, Peppa Pig, Mickey Mouse) - we craft each theme cake with intricate details and fresh, premium ingredients.
            </p>
            <p className="text-slate-300 mb-4">
              Perfect for kids' birthdays, baby showers, and themed parties. Our extensive collection includes Harry Potter, Cars, Transformers, Motu Patlu, Shinchan, and many more character themes. We also create sports-themed cakes, dinosaur cakes, butterfly garden cakes, and jungle safari designs. All theme cakes are custom-made and delivered fresh across all Chennai neighborhoods.
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
