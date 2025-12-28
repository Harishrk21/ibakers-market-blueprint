import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-0">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              IBakers
            </h3>
            <p className="text-muted-foreground text-sm">
              Chennai's trusted home baker for custom cakes, brownies, and baking masterclasses. Made with love, delivered with care.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1DWxRT89kV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/i._.bakers_?igsh=ejM4bjh1ZGpmd285" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                About Us
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                All Products
              </Link>
              <Link to="/custom-orders" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Custom Orders
              </Link>
              <Link to="/masterclasses" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Masterclasses
              </Link>
              <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Popular</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/categories/birthday-cakes" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Birthday Cakes
              </Link>
              <Link to="/categories/wedding-cakes" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Wedding Cakes
              </Link>
              <Link to="/categories/christmas-specials" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Christmas Specials
              </Link>
              <Link to="/categories/brownies-desserts" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Brownies & Desserts
              </Link>
              <Link to="/categories/anniversary-cakes" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Anniversary Cakes
              </Link>
              <Link to="/categories/trending-cakes" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Trending Cakes
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Anna Nagar, Chennai, Tamil Nadu 600040</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+918825471551" className="hover:text-primary transition-smooth">
                  +91 88254 71551
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:ayisha@ibakers.in" className="hover:text-primary transition-smooth">
                  ayisha@ibakers.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 IBakers. All rights reserved. Proudly serving Chennai.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-smooth">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
