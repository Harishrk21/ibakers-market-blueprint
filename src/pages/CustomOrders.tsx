import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Upload, Info, CheckCircle, Clock, MapPin, Phone, Mail, HelpCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { WHATSAPP_PHONE } from "@/constants/whatsapp";

const CustomOrders = () => {
  const [date, setDate] = useState<Date>();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    occasion: "",
    servingCount: "",
    flavor: "",
    size: "",
    tierCount: "",
    dietaryRequirements: "",
    textOnCake: "",
    colorTheme: "",
    design: "",
    deliveryArea: "",
    deliveryTime: "",
    specialRequests: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  // Update hidden inputs when select values change
  useEffect(() => {
    const cakeTypeInput = document.querySelector('input[name="Cake Type"]') as HTMLInputElement;
    if (cakeTypeInput) cakeTypeInput.value = formData.cakeType;
  }, [formData.cakeType]);

  useEffect(() => {
    const flavorInput = document.querySelector('input[name="Flavor"]') as HTMLInputElement;
    if (flavorInput) flavorInput.value = formData.flavor;
  }, [formData.flavor]);

  useEffect(() => {
    const sizeInput = document.querySelector('input[name="Size/Weight"]') as HTMLInputElement;
    if (sizeInput) sizeInput.value = formData.size;
  }, [formData.size]);

  useEffect(() => {
    const occasionInput = document.querySelector('input[name="Occasion"]') as HTMLInputElement;
    if (occasionInput) occasionInput.value = formData.occasion;
  }, [formData.occasion]);

  useEffect(() => {
    const servingInput = document.querySelector('input[name="Serving Count"]') as HTMLInputElement;
    if (servingInput) servingInput.value = formData.servingCount;
  }, [formData.servingCount]);

  useEffect(() => {
    const tierInput = document.querySelector('input[name="Tier Count"]') as HTMLInputElement;
    if (tierInput) tierInput.value = formData.tierCount;
  }, [formData.tierCount]);

  const handleSubmit = (e: React.FormEvent) => {
    // Validate required fields
    if (!formData.cakeType || !formData.flavor || !formData.size || !date) {
      e.preventDefault();
      toast.error("Please fill in all required fields");
      return;
    }
    // Allow form to submit naturally to formsubmit.io
    toast.success("Submitting your order...");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Cake Orders in Chennai | IBakers",
    "description": "Order custom cakes in Chennai. Design your dream cake with our custom order service. Available for birthdays, weddings, anniversaries & all celebrations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "IBakers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "url": "https://www.ibakers.com/custom-orders"
  };

  return (
    <>
      <Helmet>
        <title>Custom Cake Orders Chennai | Design Your Dream Cake | IBakers</title>
        <meta name="description" content="Order custom cakes in Chennai. Design your dream cake for birthdays, weddings, anniversaries & celebrations. Fill our custom order form and get a personalized cake delivered across Chennai." />
        <meta name="keywords" content="custom cakes Chennai, personalized cakes Chennai, design your cake, custom order cakes Chennai, bespoke cakes Chennai, personalized cake order" />
        <link rel="canonical" href="https://www.ibakers.com/custom-orders" />
        
        <meta property="og:title" content="Custom Cake Orders Chennai | Design Your Dream Cake" />
        <meta property="og:description" content="Order custom cakes in Chennai. Design your dream cake with our custom order service." />
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
              Custom <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Order</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Tell us about your dream cake and we'll make it reality
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-white/10">
                <CheckCircle className="h-5 w-5 text-pink-400" />
                <span className="text-sm text-slate-300">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-white/10">
                <Clock className="h-5 w-5 text-pink-400" />
                <span className="text-sm text-slate-300">24hr Response</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-white/10">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-sm text-slate-300">Chennai Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-black text-white">Order Details</CardTitle>
                <CardDescription className="text-slate-400">
                  Fill in the details below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formsubmit.co/harishradhakrishnan2001@gmail.com"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Custom Cake Order - IBakers" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={window.location.origin + "/custom-orders?success=true"} />
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <Info className="h-5 w-5 text-pink-400" />
                      <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="Full Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="Phone Number"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 88254 71551"
                        />
                        <p className="text-xs text-slate-400">We'll contact you on this number</p>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                        <p className="text-xs text-slate-400">For order confirmation and updates</p>
                      </div>
                    </div>
                  </div>

                  {/* Cake Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <Info className="h-5 w-5 text-pink-400" />
                      <h3 className="text-lg font-semibold text-white">Cake Details</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="cakeType">Cake Type *</Label>
                        <Select
                          required
                          value={formData.cakeType}
                          onValueChange={(value) => setFormData({ ...formData, cakeType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="birthday">Birthday Cake</SelectItem>
                            <SelectItem value="wedding">Wedding Cake</SelectItem>
                            <SelectItem value="anniversary">Anniversary Cake</SelectItem>
                            <SelectItem value="baby-shower">Baby Shower Cake</SelectItem>
                            <SelectItem value="graduation">Graduation Cake</SelectItem>
                            <SelectItem value="retirement">Retirement Cake</SelectItem>
                            <SelectItem value="corporate">Corporate Event Cake</SelectItem>
                            <SelectItem value="gender-reveal">Gender Reveal Cake</SelectItem>
                            <SelectItem value="engagement">Engagement Cake</SelectItem>
                            <SelectItem value="farewell">Farewell Cake</SelectItem>
                            <SelectItem value="other">Other Special Occasion</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="Cake Type" value={formData.cakeType} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="occasion">Occasion Details</Label>
                        <Input
                          id="occasion"
                          name="Occasion"
                          value={formData.occasion}
                          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                          placeholder="e.g., 25th Birthday, Golden Anniversary"
                        />
                        <input type="hidden" name="Occasion" value={formData.occasion} />
                        <p className="text-xs text-slate-400">Specify the occasion if applicable</p>
                      </div>
                    
                      <div className="space-y-2">
                        <Label htmlFor="flavor">Cake Flavor *</Label>
                        <Select
                          required
                          value={formData.flavor}
                          onValueChange={(value) => setFormData({ ...formData, flavor: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select flavor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chocolate">Chocolate</SelectItem>
                            <SelectItem value="vanilla">Vanilla</SelectItem>
                            <SelectItem value="red-velvet">Red Velvet</SelectItem>
                            <SelectItem value="strawberry">Strawberry</SelectItem>
                            <SelectItem value="butterscotch">Butterscotch</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                            <SelectItem value="black-forest">Black Forest</SelectItem>
                            <SelectItem value="fruit">Fruit Cake</SelectItem>
                            <SelectItem value="coffee">Coffee</SelectItem>
                            <SelectItem value="caramel">Caramel</SelectItem>
                            <SelectItem value="cookies-cream">Cookies & Cream</SelectItem>
                            <SelectItem value="mango">Mango</SelectItem>
                            <SelectItem value="pistachio">Pistachio</SelectItem>
                            <SelectItem value="mixed">Mixed Flavors</SelectItem>
                            <SelectItem value="custom">Custom Flavor</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="Flavor" value={formData.flavor} />
                        <p className="text-xs text-slate-400">Choose your preferred cake flavor</p>
                      </div>
                    
                      <div className="space-y-2">
                        <Label htmlFor="size">Cake Size/Weight *</Label>
                        <Select
                          required
                          value={formData.size}
                          onValueChange={(value) => setFormData({ ...formData, size: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0.5kg">0.5 kg (4-6 people)</SelectItem>
                            <SelectItem value="1kg">1 kg (8-10 people)</SelectItem>
                            <SelectItem value="1.5kg">1.5 kg (12-15 people)</SelectItem>
                            <SelectItem value="2kg">2 kg (16-20 people)</SelectItem>
                            <SelectItem value="2.5kg">2.5 kg (20-25 people)</SelectItem>
                            <SelectItem value="3kg">3 kg (25-30 people)</SelectItem>
                            <SelectItem value="4kg">4 kg (35-40 people)</SelectItem>
                            <SelectItem value="5kg">5 kg (45-50 people)</SelectItem>
                            <SelectItem value="custom">Custom Size</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="Size/Weight" value={formData.size} />
                        <p className="text-xs text-slate-400">Approximate serving size</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="servingCount">Number of Servings</Label>
                        <Input
                          id="servingCount"
                          name="Serving Count"
                          type="number"
                          min="1"
                          value={formData.servingCount}
                          onChange={(e) => setFormData({ ...formData, servingCount: e.target.value })}
                          placeholder="e.g., 25"
                        />
                        <input type="hidden" name="Serving Count" value={formData.servingCount} />
                        <p className="text-xs text-slate-400">Exact number of people to serve</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tierCount">Number of Tiers</Label>
                        <Select
                          value={formData.tierCount}
                          onValueChange={(value) => setFormData({ ...formData, tierCount: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select tiers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single Tier</SelectItem>
                            <SelectItem value="two">Two Tiers</SelectItem>
                            <SelectItem value="three">Three Tiers</SelectItem>
                            <SelectItem value="four">Four Tiers</SelectItem>
                            <SelectItem value="five">Five+ Tiers</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="Tier Count" value={formData.tierCount} />
                        <p className="text-xs text-slate-400">For multi-tier cakes</p>
                      </div>
                    
                      <div className="space-y-2">
                        <Label>Delivery Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-slate-400"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) =>
                                date < new Date(new Date().setDate(new Date().getDate() + 3))
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <input 
                          type="hidden" 
                          name="Delivery Date" 
                          value={date ? format(date, "yyyy-MM-dd") : ""} 
                          required
                        />
                        <p className="text-xs text-slate-400">
                          Minimum 3 days advance notice required
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="deliveryTime">Preferred Delivery Time</Label>
                        <Select
                          value={formData.deliveryTime}
                          onValueChange={(value) => setFormData({ ...formData, deliveryTime: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                            <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" name="Delivery Time" value={formData.deliveryTime} />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="deliveryArea">Delivery Address in Chennai *</Label>
                        <Input
                          id="deliveryArea"
                          name="Delivery Area"
                          required
                          value={formData.deliveryArea}
                          onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                          placeholder="e.g., Anna Nagar, T Nagar, Adyar (Include full address)"
                        />
                        <p className="text-xs text-slate-400">Please provide complete address with landmark</p>
                      </div>
                    </div>
                  </div>

                  {/* Design & Customization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                      <Info className="h-5 w-5 text-pink-400" />
                      <h3 className="text-lg font-semibold text-white">Design & Customization</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="colorTheme">Color Theme</Label>
                        <Input
                          id="colorTheme"
                          name="Color Theme"
                          value={formData.colorTheme}
                          onChange={(e) => setFormData({ ...formData, colorTheme: e.target.value })}
                          placeholder="e.g., Pink & Gold, Blue & White, Rainbow"
                        />
                        <p className="text-xs text-slate-400">Preferred color scheme</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="textOnCake">Text on Cake</Label>
                        <Input
                          id="textOnCake"
                          name="Text on Cake"
                          value={formData.textOnCake}
                          onChange={(e) => setFormData({ ...formData, textOnCake: e.target.value })}
                          placeholder="e.g., Happy Birthday John, Congratulations"
                        />
                        <p className="text-xs text-slate-400">What should be written on the cake?</p>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="dietaryRequirements">Dietary Requirements & Allergies</Label>
                        <Input
                          id="dietaryRequirements"
                          name="Dietary Requirements"
                          value={formData.dietaryRequirements}
                          onChange={(e) => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                          placeholder="e.g., Eggless, Sugar-free, Nut-free, Vegan, Gluten-free"
                        />
                        <p className="text-xs text-slate-400">Please mention any dietary restrictions or allergies</p>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="design">Design Description & Special Instructions *</Label>
                        <Textarea
                          id="design"
                          name="Design & Special Instructions"
                          value={formData.design}
                          onChange={(e) => setFormData({ ...formData, design: e.target.value })}
                          placeholder="Describe your desired design in detail: theme, decorations, specific elements, style preferences, any reference images you have in mind, etc."
                          rows={6}
                        />
                        <p className="text-xs text-slate-400">The more details you provide, the better we can create your dream cake</p>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="specialRequests">Additional Special Requests</Label>
                        <Textarea
                          id="specialRequests"
                          name="Additional Special Requests"
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Any other special requests, preferences, or important information we should know..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Reference Image Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="images">Reference Images (Optional)</Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="images"
                        name="Reference Images"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="images"
                        className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-pink-400 transition-smooth cursor-pointer block bg-slate-800/30"
                      >
                        <Upload className="h-8 w-8 mx-auto mb-2 text-slate-400" />
                        {selectedFiles.length > 0 ? (
                          <div className="space-y-2">
                            <p className="text-sm text-white font-semibold">
                              {selectedFiles.length} file(s) selected
                            </p>
                            <p className="text-xs text-slate-400">
                              Click to change files
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm text-slate-300 mb-1">
                              Click to upload reference images
                            </p>
                            <p className="text-xs text-slate-400">
                              PNG, JPG up to 10MB each
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                    {selectedFiles.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {selectedFiles.map((file, index) => (
                          <p key={index} className="text-xs text-slate-400">
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    >
                      Submit Order
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-4">
                      Your order will be sent to us and we'll get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information Sections */}
            <div className="mt-8 space-y-6">
              {/* Pricing Guide */}
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-black text-white">Pricing Guide</CardTitle>
                  <CardDescription className="text-slate-400">
                    Approximate pricing for custom cakes (final quote provided after consultation)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2 text-white">Basic Designs</h4>
                      <p className="text-sm text-slate-400 mb-2">
                        Simple frosting, minimal decoration, basic piping
                      </p>
                      <p className="text-2xl font-bold text-pink-400">₹800-1,200</p>
                      <p className="text-xs text-slate-400">per kg</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2 text-white">Premium Designs</h4>
                      <p className="text-sm text-slate-400 mb-2">
                        Fondant work, moderate decoration, themed designs
                      </p>
                      <p className="text-2xl font-bold text-pink-400">₹1,500-2,500</p>
                      <p className="text-xs text-slate-400">per kg</p>
                    </div>
                    
                    <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-lg">
                      <h4 className="font-semibold mb-2 text-white">Designer Cakes</h4>
                      <p className="text-sm text-slate-400 mb-2">
                        Complex designs, premium decorations, multi-tier
                      </p>
                      <p className="text-2xl font-bold text-pink-400">₹3,000+</p>
                      <p className="text-xs text-slate-400">per kg</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-pink-500/10 border border-pink-400/20 rounded-lg">
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Note:</strong> Final pricing depends on design complexity, tier count, decorations, 
                      special ingredients, delivery distance, and rush order charges (if applicable). 
                      We provide detailed quotes within 24 hours of receiving your order.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Order Process */}
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-black text-white">How It Works</CardTitle>
                  <CardDescription className="text-slate-400">
                    Our simple 4-step process to get your custom cake
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                      <h4 className="font-semibold text-white">Submit Order</h4>
                      <p className="text-sm text-slate-400">
                        Fill out the form with all your requirements and preferences
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                      <h4 className="font-semibold text-white">Consultation</h4>
                      <p className="text-sm text-slate-400">
                        We'll contact you within 24 hours to discuss details and provide a quote
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        3
                      </div>
                      <h4 className="font-semibold text-white">Confirmation</h4>
                      <p className="text-sm text-slate-400">
                        Confirm your order and make payment. We'll start preparing your cake
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                        4
                      </div>
                      <h4 className="font-semibold text-white">Delivery</h4>
                      <p className="text-sm text-slate-400">
                        Fresh cake delivered to your doorstep on your chosen date and time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-black text-white flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-pink-400" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">How much advance notice do I need?</h4>
                      <p className="text-sm text-slate-300">
                        Minimum 3 days for standard custom cakes. For complex designs, wedding cakes, or large orders, 
                        we recommend 1-2 weeks advance notice. Rush orders (less than 3 days) may incur additional charges.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Can I see the cake before delivery?</h4>
                      <p className="text-sm text-slate-300">
                        Yes! We can share progress photos during the creation process. For wedding cakes and large orders, 
                        we can arrange a viewing at our kitchen (by appointment).
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">What payment methods do you accept?</h4>
                      <p className="text-sm text-slate-300">
                        We accept cash, UPI, bank transfer, and digital wallets. A 50% advance payment is required to confirm 
                        your order, with the balance due on delivery.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Do you offer eggless and sugar-free options?</h4>
                      <p className="text-sm text-slate-300">
                        Absolutely! We specialize in eggless cakes and can make sugar-free, vegan, gluten-free, and other 
                        dietary-specific cakes. Please mention your requirements in the form.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">What areas do you deliver to?</h4>
                      <p className="text-sm text-slate-300">
                        We deliver across all major areas in Chennai including Anna Nagar, T Nagar, Adyar, Velachery, 
                        Mylapore, OMR, ECR, and more. Delivery charges may apply based on distance.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">Can I modify my order after submission?</h4>
                      <p className="text-sm text-slate-300">
                        Yes, modifications can be made within 24 hours of order confirmation, subject to feasibility. 
                        Changes after that may incur additional charges. Contact us immediately if you need to make changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-slate-900/50 backdrop-blur-xl border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-black text-white">Need Help?</CardTitle>
                  <CardDescription className="text-slate-400">
                    Have questions? Reach out to us directly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-white/10">
                      <Phone className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Call Us</h4>
                        <a href="tel:+918825471551" className="text-pink-400 hover:text-pink-300 hover:underline">
                          +91 88254 71551
                        </a>
                        <p className="text-xs text-slate-400 mt-1">Mon-Sat: 9 AM - 8 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-white/10">
                      <Mail className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                        <a href="mailto:harishradhakrishnan2001@gmail.com" className="text-pink-400 hover:text-pink-300 hover:underline text-sm">
                          harishradhakrishnan2001@gmail.com
                        </a>
                        <p className="text-xs text-slate-400 mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-white/10">
                      <MapPin className="h-6 w-6 text-pink-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">Location</h4>
                        <p className="text-sm text-slate-300">Anna Nagar, Chennai</p>
                        <p className="text-xs text-slate-400 mt-1">Tamil Nadu 600040</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default CustomOrders;
