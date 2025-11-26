import { useState } from "react";
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
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const CustomOrders = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    flavor: "",
    size: "",
    design: "",
    deliveryArea: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Custom Cake Order*
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Cake Type: ${formData.cakeType}
Flavor: ${formData.flavor}
Size: ${formData.size}
Delivery Date: ${date ? format(date, "PPP") : "Not specified"}
Delivery Area: ${formData.deliveryArea}
Design Details: ${formData.design}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
    
    toast.success("Redirecting to WhatsApp to complete your order!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Custom <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Order</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tell us about your dream cake and we'll make it reality
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-3xl">Order Details</CardTitle>
                <CardDescription>
                  Fill in the details below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Cake Details */}
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
                          <SelectItem value="baby-shower">Baby Shower</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="flavor">Flavor *</Label>
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
                          <SelectItem value="custom">Custom Flavor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="size">Size/Weight *</Label>
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
                          <SelectItem value="3kg">3 kg (25-30 people)</SelectItem>
                          <SelectItem value="custom">Custom Size</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Delivery Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
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
                      <p className="text-xs text-muted-foreground">
                        Minimum 3 days advance notice required
                      </p>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="deliveryArea">Delivery Area in Chennai *</Label>
                      <Input
                        id="deliveryArea"
                        required
                        value={formData.deliveryArea}
                        onChange={(e) => setFormData({ ...formData, deliveryArea: e.target.value })}
                        placeholder="e.g., Anna Nagar, T Nagar, Adyar"
                      />
                    </div>
                  </div>

                  {/* Design Details */}
                  <div className="space-y-2">
                    <Label htmlFor="design">Design & Special Instructions</Label>
                    <Textarea
                      id="design"
                      value={formData.design}
                      onChange={(e) => setFormData({ ...formData, design: e.target.value })}
                      placeholder="Describe your desired design, theme, colors, decorations, text on cake, dietary restrictions, etc."
                      rows={5}
                    />
                  </div>

                  {/* Reference Image Upload */}
                  <div className="space-y-2">
                    <Label>Reference Images (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-smooth cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-1">
                        You can share reference images via WhatsApp after submitting
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-glow"
                    >
                      Continue to WhatsApp
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting, you'll be redirected to WhatsApp to complete your order
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Pricing Guide */}
            <Card className="mt-8 border-border">
              <CardHeader>
                <CardTitle>Pricing Guide</CardTitle>
                <CardDescription>
                  Approximate pricing for custom cakes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Basic Designs</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Simple frosting, minimal decoration
                    </p>
                    <p className="text-2xl font-bold text-primary">₹800-1,200</p>
                    <p className="text-xs text-muted-foreground">per kg</p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Premium Designs</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Fondant work, moderate decoration
                    </p>
                    <p className="text-2xl font-bold text-primary">₹1,500-2,500</p>
                    <p className="text-xs text-muted-foreground">per kg</p>
                  </div>
                  
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">Designer Cakes</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Complex 3D work, sculptures
                    </p>
                    <p className="text-2xl font-bold text-primary">₹3,000+</p>
                    <p className="text-xs text-muted-foreground">per kg</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Final pricing depends on design complexity, tier count, and decorations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomOrders;
