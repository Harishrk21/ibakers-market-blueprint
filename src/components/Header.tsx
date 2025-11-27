import { useState } from "react";
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
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  const categoryLinks = [
    { to: "/categories/birthday-cakes", label: "Birthday Cakes" },
    { to: "/categories/anniversary-cakes", label: "Anniversary Cakes" },
    { to: "/categories/wedding-cakes", label: "Wedding Cakes" },
    { to: "/categories/trending-cakes", label: "Trending Cakes" },
    { to: "/categories/theme-cakes", label: "Theme Cakes" },
    { to: "/categories/flavour-cakes", label: "By Flavour" },
    { to: "/desserts", label: "Desserts" },
    { to: "/hampers", label: "Hampers" },
    { to: "/festive-cakes", label: "Festive Cakes" },
    { to: "/categories/christmas-specials", label: "Christmas Specials" },
    { to: "/categories/brownies-desserts", label: "Brownies & Desserts" },
    { to: "/categories/specialty-cakes", label: "Specialty Cakes" },
  ];

  const otherLinks = [
    { to: "/masterclasses", label: "Masterclasses" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            IBakers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="text-foreground/80 hover:text-primary transition-smooth text-sm font-medium"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Products Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-primary text-sm font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4 bg-popover">
                    <div className="space-y-1">
                      <Link
                        to="/products"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-semibold leading-none">All Products</div>
                        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                          Browse our complete collection
                        </p>
                      </Link>
                    </div>
                    {categoryLinks.map((category) => (
                      <NavigationMenuLink key={category.to} asChild>
                        <Link
                          to={category.to}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{category.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {otherLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-foreground/80 hover:text-primary transition-smooth text-sm font-medium"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("tel:+919876543210")}
            className="flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Button>
          <Button
            size="sm"
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="flex items-center gap-2 bg-primary hover:bg-primary-glow"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border bg-background",
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3 max-h-[500px] overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-smooth py-2 text-base font-medium"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Mobile Products Dropdown */}
          <div className="border-t border-border pt-3">
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className="flex items-center justify-between w-full text-foreground/80 hover:text-primary transition-smooth py-2 text-base font-medium"
            >
              Products
              <ChevronDown className={cn("h-4 w-4 transition-transform", productsDropdownOpen && "rotate-180")} />
            </button>
            {productsDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-foreground/70 hover:text-primary py-2 text-sm"
                >
                  All Products
                </Link>
                {categoryLinks.map((category) => (
                  <Link
                    key={category.to}
                    to={category.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-foreground/70 hover:text-primary py-2 text-sm"
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
              className="text-foreground/80 hover:text-primary transition-smooth py-2 text-base font-medium"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="flex flex-col space-y-2 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => {
                window.open("tel:+919876543210");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
            <Button
              onClick={() => {
                window.open("https://wa.me/919876543210", "_blank");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
