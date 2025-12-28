import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, HelpCircle, Cake, Truck, CreditCard, Calendar, Heart, Sparkles, Gift } from "lucide-react";
import { toast } from "sonner";
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from "@/constants/whatsapp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Allow form to submit naturally to formsubmit.co
    toast.success("Sending your message...");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact IBakers Chennai",
    "description": "Contact IBakers for custom cake orders, baking classes and inquiries. Serving Chennai with fresh home-made cakes.",
    "url": "https://www.ibakers.com/contact"
  };

  return (
    <>
      <Helmet>
        <title>Contact IBakers | Best Homemade Cakes in Chennai | Call & WhatsApp</title>
        <meta name="description" content="Contact IBakers Chennai for custom cake orders. Call, WhatsApp or email us. Serving Adyar, T Nagar, Velachery, Anna Nagar & all Chennai neighborhoods. Same-day delivery available." />
        <meta name="keywords" content="contact IBakers, cake order Chennai, custom cake inquiry, WhatsApp cake order Chennai, IBakers phone number, Chennai bakery contact" />
        <link rel="canonical" href="https://www.ibakers.com/contact" />
        
        <meta property="og:title" content="Contact IBakers Chennai | Custom Cake Orders" />
        <meta property="og:description" content="Get in touch for custom cake orders across Chennai. WhatsApp, call or email." />
        <meta property="og:type" content="website" />
        
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
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-20 md:pb-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
              Get In <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We'd love to hear from you. Reach out for orders, queries, or just to say hello!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-6">Contact Information</h2>
                <p className="text-slate-300 mb-8">
                  Have a question or ready to order? Get in touch with us through any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Phone</h3>
                        <p className="text-slate-400 mb-2">Call us for immediate assistance</p>
                        <a
                          href="tel:+918825471551"
                          className="text-pink-400 hover:text-pink-300 hover:underline font-medium"
                        >
                          +91 88254 71551
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">WhatsApp</h3>
                        <p className="text-slate-400 mb-2">Quick responses on WhatsApp</p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-pink-400 hover:text-pink-300 font-medium"
                          onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}
                        >
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Email</h3>
                        <p className="text-slate-400 mb-2">Send us a detailed message</p>
                        <a
                          href="mailto:ayisha@ibakers.in"
                          className="text-pink-400 hover:text-pink-300 hover:underline font-medium"
                        >
                          ayisha@ibakers.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Location</h3>
                        <p className="text-slate-400 mb-2">Visit us or order delivery</p>
                        <p className="text-white font-medium">
                          Anna Nagar, Chennai
                          <br />
                          Tamil Nadu 600040
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-pink-400/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-pink-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-white">Business Hours</h3>
                        <div className="space-y-1 text-slate-400">
                          <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                          <p>Sunday: 10:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-black mb-6 text-white">Send Us a Message</h2>
                  
                  <form 
                    action="https://formsubmit.co/ayisha@ibakers.in"
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="Contact Form Submission - IBakers" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact?success=true"} />
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="Phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 88254 71551"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="Message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements or questions..."
                        rows={5}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-glow"
                      size="lg"
                    >
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-slate-400 text-center">
                      Your message will be sent to us and we'll get back to you soon
                    </p>
                  </form>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 mb-6">
                <HelpCircle className="h-8 w-8 text-pink-400" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                Frequently Asked <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Everything you need to know about ordering from IBakers
              </p>
            </div>

            <Card className="bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-900/90 backdrop-blur-xl border border-pink-500/20 shadow-2xl shadow-pink-500/10">
              <CardContent className="p-6 md:p-8">
                <Accordion type="single" collapsible className="w-full space-y-2">
                  <AccordionItem 
                    value="item-1" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">How much advance notice do I need for an order?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed">
                        For standard custom cakes, we require a minimum of <strong className="text-pink-400">3 days advance notice</strong>. 
                        For wedding cakes, multi-tier cakes, or complex designs, we recommend <strong className="text-pink-400">1-2 weeks advance notice</strong> 
                        to ensure we can create your perfect cake. Rush orders (less than 3 days) may be accommodated subject to availability 
                        and may incur additional charges.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-2" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Truck className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">Do you deliver across Chennai? What are the delivery charges?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed mb-2">
                        Yes! We deliver to all major areas in Chennai including Anna Nagar, T Nagar, Adyar, Velachery, 
                        Mylapore, OMR, ECR, Porur, Ambattur, and more. Delivery charges vary based on distance:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-pink-400">Within 10 km:</strong> ₹50 - ₹100</li>
                        <li><strong className="text-pink-400">10-20 km:</strong> ₹100 - ₹200</li>
                        <li><strong className="text-pink-400">Beyond 20 km:</strong> Custom pricing (contact us)</li>
                      </ul>
                      <p className="mt-2 text-sm text-slate-400">Free delivery available for orders above ₹2000 in select areas.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-3" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Cake className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">Can I customize any cake? What customization options are available?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed mb-2">
                        Absolutely! All our cakes can be fully customized. You can customize:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li><strong className="text-pink-400">Design:</strong> Theme, colors, decorations, fondant work, edible images</li>
                        <li><strong className="text-pink-400">Flavor:</strong> Choose from our wide range or request custom flavors</li>
                        <li><strong className="text-pink-400">Size:</strong> From 0.5kg to 5kg+ or custom sizes</li>
                        <li><strong className="text-pink-400">Text:</strong> Personalized messages, names, or quotes</li>
                        <li><strong className="text-pink-400">Dietary:</strong> Eggless, sugar-free, vegan, gluten-free options</li>
                      </ul>
                      <p className="mt-2">Share your vision with us and we'll bring it to life!</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-4" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">What payment methods do you accept?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed mb-2">
                        We accept multiple payment methods for your convenience:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Cash on delivery</li>
                        <li>UPI (PhonePe, Google Pay, Paytm)</li>
                        <li>Bank transfer</li>
                        <li>Digital wallets</li>
                      </ul>
                      <p className="mt-2">
                        A <strong className="text-pink-400">50% advance payment</strong> is required to confirm your order, 
                        with the balance due on delivery. For wedding cakes and large orders, payment terms can be discussed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-5" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Heart className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">Do you offer eggless and sugar-free options?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed">
                        Yes! We specialize in <strong className="text-pink-400">eggless cakes</strong> and offer a wide variety of 
                        dietary-specific options including <strong className="text-pink-400">sugar-free, vegan, gluten-free, and nut-free</strong> cakes. 
                        All our cakes can be made eggless without compromising on taste or texture. Please mention your dietary requirements 
                        when placing your order, and we'll ensure your cake meets your needs perfectly.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-6" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">Can I see the cake before delivery?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed">
                        Yes! We can share <strong className="text-pink-400">progress photos</strong> during the creation process. 
                        For wedding cakes and large orders, we can arrange a <strong className="text-pink-400">viewing at our kitchen</strong> 
                        by appointment. We want you to be completely satisfied with your cake, so we're happy to show you the progress 
                        and make any adjustments if needed.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-7" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Gift className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">What is your pricing range? How are prices determined?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed mb-2">
                        Our pricing depends on several factors:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                        <li><strong className="text-pink-400">Basic Designs:</strong> ₹800-1,200 per kg</li>
                        <li><strong className="text-pink-400">Premium Designs:</strong> ₹1,500-2,500 per kg</li>
                        <li><strong className="text-pink-400">Designer Cakes:</strong> ₹3,000+ per kg</li>
                      </ul>
                      <p className="mb-2">
                        Final pricing is based on:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Cake size and weight</li>
                        <li>Design complexity and decorations</li>
                        <li>Number of tiers</li>
                        <li>Special ingredients or dietary requirements</li>
                        <li>Delivery distance</li>
                      </ul>
                      <p className="mt-2 text-sm text-pink-400 font-medium">
                        We provide detailed quotes within 24 hours of receiving your order details.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-8" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <Clock className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">What are your business hours? Can I place orders outside these hours?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed mb-2">
                        Our business hours are:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2 mb-2">
                        <li><strong className="text-pink-400">Monday - Saturday:</strong> 9:00 AM - 8:00 PM</li>
                        <li><strong className="text-pink-400">Sunday:</strong> 10:00 AM - 6:00 PM</li>
                      </ul>
                      <p>
                        You can <strong className="text-pink-400">place orders anytime</strong> through our website, WhatsApp, or email. 
                        We'll respond to all inquiries within 24 hours. For urgent orders, please call us during business hours, 
                        and we'll do our best to accommodate your request.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem 
                    value="item-9" 
                    className="border border-pink-500/20 rounded-lg bg-slate-800/50 hover:bg-slate-800/70 transition-all px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-5 w-5 text-pink-400" />
                        </div>
                        <span className="text-lg font-semibold text-white">Can I modify or cancel my order after placing it?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pl-14">
                      <p className="leading-relaxed">
                        Modifications can be made <strong className="text-pink-400">within 24 hours</strong> of order confirmation, 
                        subject to feasibility. Changes after that may incur additional charges depending on the modifications. 
                        For cancellations, please contact us as soon as possible. <strong className="text-pink-400">Cancellations made 
                        more than 48 hours before delivery</strong> will receive a full refund minus any processing fees. 
                        Cancellations within 48 hours may be subject to a cancellation fee. Contact us immediately if you need to 
                        make any changes to your order.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-400/20 rounded-lg">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Still have questions?</h3>
                      <p className="text-slate-300 mb-4">
                        We're here to help! Reach out to us through any of our contact channels and we'll get back to you as soon as possible.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, "_blank")}
                          className="border-pink-400/30 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400/50"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Us
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open("tel:+918825471551")}
                          className="border-pink-400/30 text-pink-400 hover:bg-pink-500/20 hover:border-pink-400/50"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Contact;
