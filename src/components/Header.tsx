import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
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
        <nav className="hidden md:flex items-center space-x-8">
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
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
