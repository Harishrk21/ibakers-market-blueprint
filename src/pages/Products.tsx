import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
      id: "bday-1",
      title: "Vanilla Rosette Birthday Cake",
      description: "Elegant vanilla cake with beautiful rosette decorations and Happy Birthday topper",
      price: "₹549",
      image: "https://bkmedia.bakingo.com/vanilla-rosette-birthday-cake-cake4034vani-AA.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-2",
      title: "Birthday Classic Black Forest Cake",
      description: "Classic Black Forest cake with Happy Birthday topper and chocolate shavings",
      price: "₹549",
      image: "https://bkmedia.bakingo.com/birthday-star-black-forest-cake-cake4036blac-a.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-3",
      title: "Happy Birthday Bear Cake",
      description: "Adorable teddy bear cream cake perfect for kids' birthdays",
      price: "₹1,149",
      image: "https://bkmedia.bakingo.com/hbd-cutesy-teddy-cake-bg-them3268flav-AAA_1.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-4",
      title: "Picture Perfect Birthday Polaroid Cake",
      description: "Unique Polaroid-style photo cake with edible photo print",
      price: "₹1,289",
      image: "https://bkmedia.bakingo.com/picture-perfect-birthday-polaroid-cake-them5424flav-A.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      isNew: true,
    },
    {
      id: "bday-5",
      title: "Choco Ferrero Birthday Drip Cake",
      description: "Luxurious chocolate cake with Ferrero Rocher and chocolate drip design",
      price: "₹1,509",
      image: "https://bkmedia.bakingo.com/choco-ferrero-cake-cake4741ferr-A.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-6",
      title: "Chocolate Truffle Drip Cake",
      description: "Rich chocolate truffle cake with elegant drip design and Happy Birthday topper",
      price: "₹549",
      image: "https://bkmedia.bakingo.com/dreamy-chocolate-cake-cake4053choc-b_0.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-7",
      title: "Superheroes Chocolate Drip Cake",
      description: "Superhero-themed chocolate drip cake perfect for kids' birthday parties",
      price: "₹1,559",
      image: "https://bkmedia.bakingo.com/superheroes-chocolate-drip-cake-them4865flav-A.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-8",
      title: "Birthday Chocolate Pinata Cake",
      description: "Surprise-filled pinata cake with hidden treats inside",
      price: "₹1,469",
      image: "https://bkmedia.bakingo.com/sq-spherical-pineapple-pinata-cake-pina2251pine-A_0.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-9",
      title: "Rose N Butterfly Designer Cake",
      description: "Beautiful designer cake with rose and butterfly decorations",
      price: "₹1,329",
      image: "https://bkmedia.bakingo.com/Rose-N-Butterfly-Designer-Cake-bg-theme3892flav-A_0.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-10",
      title: "Delightful Butterscotch Birthday Cake",
      description: "Classic butterscotch cake with creamy frosting and birthday decorations",
      price: "₹509",
      image: butterscotchImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-11",
      title: "Velvet Chocolate Truffle Cake",
      description: "Decadent chocolate truffle cake with smooth velvet texture",
      price: "₹509",
      image: "https://bkmedia.bakingo.com/sq-red-velvet-chocolate-cake-cake1637redv-AAA.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-12",
      title: "Birthday Photo Cake",
      description: "Personalized photo cake with your favorite picture printed on top",
      price: "₹689",
      image: "https://bkmedia.bakingo.com/squ-_birthday-exuberance-phot0275flav-301217-A.jpg",
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-13",
      title: "Special Six Birthday Cake",
      description: "Unique number 6 cake design perfect for 6th birthday celebrations",
      price: "₹1,329",
      image: "https://bkmedia.bakingo.com/special-six-birthday-cake-them3867flav-A_0.jpg",
      category: "Birthday Cakes",
      isNew: true,
    },
    {
      id: "bday-14",
      title: "1st Birthday Smash Cake",
      description: "Adorable cake for baby's first birthday milestone celebration",
      price: "₹1,200",
      image: kidsBirthdayImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-15",
      title: "Baby's First Birthday Unicorn",
      description: "Magical unicorn design perfect for 1st birthday celebrations",
      price: "₹1,400",
      image: unicornCakeImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    {
      id: "bday-16",
      title: "Princess Theme Cake",
      description: "Beautiful princess castle design perfect for little girls' birthdays",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/barbie-cake-1-them0080flav-AA.jpg",
      category: "Birthday Cakes",
    },
    {
      id: "bday-17",
      title: "Elegant Black & Gold Cake",
      description: "Sophisticated black and gold design perfect for adult birthdays",
      price: "₹1,300",
      image: heroImage,
      category: "Birthday Cakes",
      isBestseller: true,
    },
    // Trending Cakes
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
      id: "trend-1",
      title: "Pinata Surprise Cake",
      description: "Break open to reveal colorful candy surprise inside",
      price: "₹1,500",
      image: "https://bkmedia.bakingo.com/sq-birthday-chocolate-overload-pinata-cake-750gm-pina2163choc-A_0.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "trend-2",
      title: "Drip Cake Deluxe",
      description: "Elegant drip design with macarons and fresh berries",
      price: "₹1,400",
      image: dripCakeImage,
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "trend-3",
      title: "Pull Me Up Cake",
      description: "Interactive cake with surprise pull-up design",
      price: "₹1,600",
      image: "https://bkmedia.bakingo.com/sq-pull-me-up-choco-truffle-cake-pulm1813choc-A_0.jpg?tr=w-665,h-665,dpr-1.5&q=50",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "trend-4",
      title: "Money Pulling Cake",
      description: "Fun cake that pulls out cash notes surprise",
      price: "₹1,700",
      image: "https://m.media-amazon.com/images/I/51FXjhMEbCL.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "trend-5",
      title: "Number Cake Trending",
      description: "Instagram-worthy number shaped cream cake",
      price: "₹1,250",
      image: "https://simplebites.net/wp-content/uploads/2018/02/Final-icebox--e1519694712881-500x500.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "trend-6",
      title: "Cream Explosion Cake",
      description: "Viral cream bomb cake with surprise filling",
      price: "₹1,550",
      image: "https://browniepointindia.com/cdn/shop/products/surpriseexplosioncake1.jpg?v=1669295598",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "trend-7",
      title: "Rasgulla Cake Fusion",
      description: "Trending fusion of traditional rasgulla & cake",
      price: "₹1,200",
      image: "https://www.cakesworld.in/images/web/fusioncake_04.jpg",
      category: "Trending Cakes",
      isBestseller: true,
    },
    {
      id: "trend-8",
      title: "Chocolate Bomb Cake",
      description: "Hot chocolate bomb reveals hidden surprise",
      price: "₹1,650",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIUZrQBq7AKI9WLey-bgHbloTThJpSsZovA&s",
      category: "Trending Cakes",
      isNew: true,
    },
    {
      id: "trend-9",
      title: "Letter Cake Personalized",
      description: "Trendy letter-shaped cake with toppings",
      price: "₹1,300",
      image: "https://cakestry15.com/cdn/shop/files/Alphabet_R_2kg_Chocolate_Cake_cakestry15noida_full_image.webp?v=1746792302&width=1946",
      category: "Trending Cakes",
    },
    {
      id: "trend-10",
      title: "Gourmet Overload Cake",
      description: "Loaded with premium toppings & decorations",
      price: "₹1,800",
      image: "https://www.dreamadozen.com/cdn/shop/files/chocolate-overload-cake2.jpg?v=1757418354&width=1024",
      category: "Trending Cakes",
      isBestseller: true,
    },
    // Theme Cakes
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
    // Flavor Cakes
    {
      id: "flav-1",
      title: "Butterscotch Bliss",
      description: "Creamy butterscotch layers with caramel drizzle",
      price: "₹800",
      image: butterscotchImage,
      category: "By Flavour",
      isBestseller: true,
    },
    {
      id: "flav-2",
      title: "Black Forest Classic",
      description: "Traditional black forest with cherries and chocolate",
      price: "₹900",
      image: blackForestImage,
      category: "By Flavour",
    },
    // Wedding Cakes
    {
      id: "wed-1",
      title: "Wedding Bliss 3-Tier",
      description: "Elegant 3-tier wedding cake with fresh flowers",
      price: "₹8,500",
      image: weddingCakeImage,
      category: "Wedding Cakes",
    },
    {
      id: "wed-2",
      title: "Royal Wedding Cake",
      description: "5-tier masterpiece with gold accents",
      price: "₹15,000",
      image: weddingCakeImage,
      category: "Wedding Cakes",
      isNew: true,
    },
    // Anniversary Cakes
    {
      id: "ann-1",
      title: "1st Anniversary Special",
      description: "Romantic paper-themed cake for your first year",
      price: "₹1,200",
      image: "https://bkmedia.bakingo.com/golden-hearts-anniversary-cake-theme4293flav-AAA.jpg",
      category: "Anniversary Cakes",
      isBestseller: true,
    },
    {
      id: "ann-2",
      title: "Heart-Shaped Anniversary Cake",
      description: "Classic heart shape with romantic decorations",
      price: "₹1,000",
      image: "https://bkmedia.bakingo.com/heart-shaped-red-velvet-cake-cake1095redv-AAAAA.jpg",
      category: "Anniversary Cakes",
    },
    {
      id: "ann-3",
      title: "Silver Anniversary (25 Years)",
      description: "Elegant silver-themed 2-tier cake",
      price: "₹3,500",
      image: "https://bkmedia.bakingo.com/squ-25st-Anniversary-AA.jpg",
      category: "Anniversary Cakes",
      isBestseller: true,
    },
    {
      id: "ann-4",
      title: "Golden Anniversary (50 Years)",
      description: "Majestic gold-themed 3-tier masterpiece",
      price: "₹6,000",
      image: "https://bkmedia.bakingo.com/romantic-heart-shaped-pinata-cake-pina3587choc-A.jpg",
      category: "Anniversary Cakes",
      isBestseller: true,
    },
    // Christmas Specials
    {
      id: "xmas-1",
      title: "Traditional Fruit Cake",
      description: "Rich fruit cake with premium dry fruits and nuts",
      price: "₹1,200",
      image: christmasCakeImage,
      category: "Christmas Specials",
      isBestseller: true,
    },
    {
      id: "xmas-2",
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
    // Mini & Mug Cakes
    {
      id: "mini-1",
      title: "Mini Cake",
      description: "Adorable mini cakes perfect for personal celebrations and gifting",
      price: "₹400",
      image: "/minicake.png",
      category: "Brownies & Desserts",
      isBestseller: true,
    },
    {
      id: "mug-1",
      title: "Mug Cake",
      description: "Delicious single-serve cake in a convenient mug, perfect for quick treats",
      price: "₹350",
      image: "/mugcake.png",
      category: "Brownies & Desserts",
      isBestseller: true,
    },
    // Specialty Cakes
    {
      id: "spec-1",
      title: "Eggless Chocolate Cake",
      description: "Just as delicious, completely eggless",
      price: "₹900",
      image: heroImage,
      category: "Specialty Cakes",
    },
    {
      id: "spec-2",
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
    { value: "Trending Cakes", label: "Trending Cakes" },
    { value: "Theme Cakes", label: "Theme Cakes" },
    { value: "By Flavour", label: "By Flavour" },
    { value: "Wedding Cakes", label: "Wedding Cakes" },
    { value: "Anniversary Cakes", label: "Anniversary Cakes" },
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
        <title>All Cakes Products in Chennai | IBakers</title>
        <meta name="description" content="Browse all best homemade cakes in Chennai from IBakers. Birthday, wedding, trending cakes, brownies, desserts & more. Fresh home-made. #1 home baker Chennai." />
        <meta name="keywords" content="best homemade cakes in Chennai, homemade cakes Chennai, custom cakes Chennai, birthday cakes, wedding cakes, brownies Chennai, desserts Chennai, IBakers" />
        <link rel="canonical" href="https://www.ibakers.in/products" />
        <meta name="last-modified" content="2025-01-15" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Handcrafted cakes and treats for every celebration
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6 md:space-y-8">
            {/* Category Filter - Grid Layout */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 w-full max-w-6xl">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveTab(cat.value)}
                    className={`
                      px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300
                      ${activeTab === cat.value
                        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50 scale-105"
                        : "bg-slate-800/50 text-slate-300 border border-white/10 hover:bg-slate-700/50 hover:border-pink-400/30 hover:text-white"
                      }
                    `}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
            
            <TabsContent value={activeTab} className="mt-6 md:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
            We specialize in custom orders! <Link to="/contact" className="underline hover:text-pink-400 text-pink-400">Contact us</Link> to discuss your dream cake, or browse our <Link to="/categories/trending-cakes" className="underline hover:text-pink-400 text-pink-400">trending designs</Link> and <Link to="/categories/theme-cakes" className="underline hover:text-pink-400 text-pink-400">theme cakes</Link> for inspiration.
          </p>
          <button
            onClick={() => window.location.href = "/custom-orders"}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50"
          >
            Create Custom Order
          </button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Products;
