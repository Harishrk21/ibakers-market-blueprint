import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from "@/constants/whatsapp";
import { toast } from "sonner";

const ProductInquiry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    deliveryDate: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // If no product data, redirect to products page
    if (!product) {
      navigate("/products", { replace: true });
    }
  }, [product, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product) {
      toast.error("Product information is missing. Please select a product again.");
      navigate("/products");
      return;
    }
    
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      formDataToSend.append("_subject", `New Order Inquiry: ${product.title}`);
      formDataToSend.append("_captcha", "false");
      formDataToSend.append("_template", "table");
      formDataToSend.append("Product Name", product.title);
      formDataToSend.append("Product Price", product.price);
      formDataToSend.append("Category", product.category);

      const response = await fetch("https://formsubmit.co/ayisha@ibakers.in", {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      toast.success("Order inquiry submitted successfully! We'll get back to you soon.");
      form.reset();
      setFormData({
        name: "",
        phone: "",
        email: "",
        quantity: "",
        deliveryDate: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state while checking for product
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <Header />
        <div className="text-center">
          <p className="text-xl text-slate-300 mb-4">Loading product information...</p>
          <p className="text-sm text-slate-400">If this page doesn't load, please select a product from the products page.</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "IBakers",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.title} - Order Now | IBakers Chennai</title>
        <meta name="description" content={`Order ${product.title} in Chennai. ${product.description}. Fresh home-made cakes delivered across Chennai.`} />
        <meta name="keywords" content={`${product.title}, ${product.category}, order cakes Chennai, IBakers`} />
        <link rel="canonical" href={`https://www.ibakers.in/product/${product.id}`} />
        <meta name="last-modified" content="2025-01-15" />
        
        <meta property="og:title" content={`${product.title} | IBakers Chennai`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        
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
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-elegant aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Bestseller
                      </span>
                    )}
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        New
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Details & Form */}
                <div className="space-y-8">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">{product.category}</p>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">{product.title}</h1>
                    <p className="text-xl text-slate-300 mb-6">{product.description}</p>
                    <p className="text-3xl font-bold text-pink-400">{product.price}</p>
                  </div>

                  {/* Order Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
                  >

                    <h2 className="text-2xl md:text-3xl font-black text-white">Order This Cake</h2>

                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="Customer Name"
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="Phone Number"
                        type="tel"
                        placeholder="Enter your 10-digit mobile number"
                        pattern="[0-9]{10}"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">Cake Weight *</Label>
                      <Select name="Cake Weight" required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select weight" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0.5kg">0.5 kg (4-6 people)</SelectItem>
                          <SelectItem value="1kg">1 kg (8-10 people)</SelectItem>
                          <SelectItem value="1.5kg">1.5 kg (12-15 people)</SelectItem>
                          <SelectItem value="2kg">2 kg (16-20 people)</SelectItem>
                          <SelectItem value="3kg">3 kg (24-30 people)</SelectItem>
                          <SelectItem value="custom">Custom (specify in message)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delivery-date">Delivery Date *</Label>
                      <Input
                        id="delivery-date"
                        name="Delivery Date"
                        type="date"
                        required
                        min={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                        className="w-full"
                      />
                      <p className="text-xs text-slate-400">Minimum 3 days advance notice required</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delivery-location">Delivery Location in Chennai *</Label>
                      <Input
                        id="delivery-location"
                        name="Delivery Location"
                        placeholder="e.g., Adyar, T Nagar, Velachery"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Special Instructions</Label>
                      <Textarea
                        id="message"
                        name="Special Instructions"
                        placeholder="Any customization requests, flavor preferences, or special messages on cake"
                        rows={4}
                        className="w-full"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Send Order Inquiry"}
                    </button>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => window.open("tel:+918825471551")}
                        className="flex-1 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold text-base hover:bg-slate-700 hover:border-white/40 transition-all flex items-center justify-center gap-2"
                      >
                        <Phone className="h-5 w-5" />
                        Call to Order
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const msg = `${WHATSAPP_MESSAGE}\n\nI'm interested in ordering *${product.title}* (${product.price}) from your ${product.category} collection.`;
                          window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
                        }}
                        className="flex-1 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-semibold text-base hover:scale-105 transition-transform shadow-2xl shadow-pink-500/50 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductInquiry;
