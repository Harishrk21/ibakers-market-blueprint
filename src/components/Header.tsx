import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone, MessageCircle, ChevronDown, Cake, Heart, Sparkles, Gift, PartyPopper, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from "@/constants/whatsapp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  const categoryLinks = [
    { to: "/categories/birthday-cakes", label: "Birthday Cakes", icon: Cake },
    { to: "/categories/anniversary-cakes", label: "Anniversary Cakes", icon: Heart },
    { to: "/categories/wedding-cakes", label: "Wedding Cakes", icon: Crown },
    { to: "/categories/trending-cakes", label: "Trending Cakes", icon: Sparkles },
    { to: "/categories/theme-cakes", label: "Theme Cakes", icon: PartyPopper },
    { to: "/categories/flavour-cakes", label: "By Flavour", icon: Cake },
    { to: "/desserts", label: "Desserts", icon: Gift },
    { to: "/hampers", label: "Hampers", icon: Gift },
    { to: "/festive-cakes", label: "Festive Cakes", icon: Sparkles },
    { to: "/categories/christmas-specials", label: "Christmas Specials", icon: PartyPopper },
    { to: "/categories/brownies-desserts", label: "Brownies & Desserts", icon: Gift },
    { to: "/categories/specialty-cakes", label: "Specialty Cakes", icon: Crown },
  ];

  const otherLinks = [
    { to: "/masterclasses", label: "Master Baking Class" },
    { to: "/gallery", label: "Gallery" },
    { to: "/custom-orders", label: "Custom Order" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[10000] w-full border-b transition-all duration-300 overflow-visible",
        isScrolled 
          ? "bg-slate-900/98 backdrop-blur-xl border-white/20 shadow-xl shadow-black/40" 
          : "bg-slate-900/95 backdrop-blur-xl border-white/15 shadow-lg shadow-black/20"
      )}
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto flex h-14 sm:h-16 md:h-20 items-center justify-between px-3 sm:px-4 md:px-6 relative overflow-visible">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-10 flex-shrink-0 group overflow-visible" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40">
            <img 
              src="/iabkerslogo.jpeg" 
              alt="IBakers Logo - Best Homemade Cakes in Chennai" 
              loading="eager"
              className="h-full w-full object-cover object-center scale-125 transition-transform duration-300 group-hover:scale-135"
            />
          </div>
          <div className="flex flex-col overflow-visible" style={{ paddingBottom: '2px' }}>
            <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight" style={{ fontFamily: 'Castellar, serif', letterSpacing: '0.05em' }}>
              I BAKERS
            </span>
            <span className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", "Lucida Handwriting", cursive', lineHeight: '1.4', paddingBottom: '2px' }}>
              Yummylicious.HomeBaked
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="text-slate-200 hover:text-pink-400 transition-smooth text-sm xl:text-base font-medium whitespace-nowrap"
              activeClassName="text-pink-400 font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Products Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-200 hover:text-pink-400 text-sm xl:text-base font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] xl:w-[600px] grid-cols-2 gap-3 p-4 bg-slate-900 border border-white/20 rounded-lg">
                    <div className="space-y-1">
                      <Link
                        to="/products"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-slate-800 hover:bg-pink-500/20 focus:bg-pink-500/20 group border border-white/10"
                      >
                        <div className="text-sm font-semibold leading-none text-white group-hover:text-pink-400 transition-colors">All Products</div>
                        <p className="line-clamp-2 text-xs leading-snug text-slate-300 mt-1">
                          Browse our complete collection
                        </p>
                      </Link>
                    </div>
                    {categoryLinks.map((category) => {
                      const Icon = category.icon;
                      return (
                        <NavigationMenuLink key={category.to} asChild>
                          <Link
                            to={category.to}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-slate-800 hover:bg-pink-500/20 focus:bg-pink-500/20 group border border-white/10"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-pink-400 group-hover:text-pink-300 transition-colors" />
                              <div className="text-sm font-medium leading-none text-white group-hover:text-pink-400 transition-colors">{category.label}</div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {otherLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-slate-200 hover:text-pink-400 transition-smooth text-sm xl:text-base font-medium whitespace-nowrap"
              activeClassName="text-pink-400 font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
          <button
            onClick={() => window.open("tel:+918825471551")}
            className="px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium text-slate-200 hover:text-pink-400 border border-white/30 rounded-lg hover:border-pink-400/50 transition-all flex items-center gap-1.5 xl:gap-2 bg-slate-800/50 hover:bg-slate-800/70"
          >
            <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            <span className="hidden xl:inline">Call Us</span>
          </button>
          <button
            onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}
            className="px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-lg transition-all flex items-center gap-1.5 xl:gap-2 shadow-lg shadow-pink-500/30 text-white"
          >
            <MessageCircle className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-200 hover:text-pink-400 transition-colors z-10 flex-shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Backdrop */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-14 sm:top-16 md:top-20 bg-black/70 backdrop-blur-sm z-[10000]"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out border-b border-white/20 bg-slate-900 shadow-2xl",
          mobileMenuOpen ? "max-h-[80vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
        style={{ zIndex: 10001 }}
      >
        <nav className="container mx-auto px-4 py-4 sm:py-6 flex flex-col space-y-2 max-h-[75vh] overflow-y-auto bg-slate-900">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-pink-400 transition-smooth py-3 px-4 text-base sm:text-lg font-medium bg-slate-800 rounded-lg hover:bg-slate-700 border border-white/10"
              activeClassName="text-pink-400 font-semibold bg-pink-500/10 border-pink-400/30"
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Mobile Products Dropdown */}
          <div className="border-t border-white/20 pt-3">
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className="flex items-center justify-between w-full text-white hover:text-pink-400 transition-smooth py-3 px-4 text-base sm:text-lg font-medium bg-slate-800 rounded-lg hover:bg-slate-700 border border-white/10"
            >
              Products
              <ChevronDown className={cn("h-4 w-4 sm:h-5 sm:w-5 transition-transform text-pink-400", productsDropdownOpen && "rotate-180")} />
            </button>
            {productsDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2 bg-slate-900 p-2 rounded-lg border border-white/10">
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-pink-400 py-2.5 px-3 text-sm sm:text-base transition-colors bg-slate-800 rounded-md hover:bg-slate-700 border border-white/5"
                >
                  All Products
                </Link>
                {categoryLinks.map((category) => (
                  <Link
                    key={category.to}
                    to={category.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white hover:text-pink-400 py-2.5 px-3 text-sm sm:text-base transition-colors bg-slate-800 rounded-md hover:bg-slate-700 border border-white/5"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {otherLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-pink-400 transition-smooth py-3 px-4 text-base sm:text-lg font-medium bg-slate-800 rounded-lg hover:bg-slate-700 border border-white/10"
              activeClassName="text-pink-400 font-semibold bg-pink-500/10 border-pink-400/30"
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
            <button
              onClick={() => {
                window.open("tel:+918825471551");
                setMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2.5 text-sm sm:text-base font-medium text-white hover:text-pink-400 border border-white/30 rounded-lg hover:border-pink-400/50 transition-all flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Call Us
            </button>
            <button
              onClick={() => {
                window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank");
                setMobileMenuOpen(false);
              }}
              className="w-full px-4 py-2.5 text-sm sm:text-base font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30 text-white"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
