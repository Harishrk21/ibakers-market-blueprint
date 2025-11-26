import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImage from "@/assets/hero-cake.jpg";
import browniesImage from "@/assets/brownies.jpg";
import weddingCakeImage from "@/assets/wedding-cake.jpg";
import kidsBirthdayImage from "@/assets/kids-birthday.jpg";
import christmasCakeImage from "@/assets/christmas-cake.jpg";
import masterclassImage from "@/assets/masterclass.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const galleryItems = [
    { id: "1", image: heroImage, category: "Birthday Cakes", title: "Elegant Pink Birthday Cake" },
    { id: "2", image: weddingCakeImage, category: "Wedding Cakes", title: "5-Tier Wedding Masterpiece" },
    { id: "3", image: kidsBirthdayImage, category: "Birthday Cakes", title: "Colorful Kids Birthday" },
    { id: "4", image: christmasCakeImage, category: "Festival", title: "Traditional Christmas Cake" },
    { id: "5", image: browniesImage, category: "Desserts", title: "Fudgy Chocolate Brownies" },
    { id: "6", image: masterclassImage, category: "Masterclass", title: "Baking Workshop Session" },
    { id: "7", image: heroImage, category: "Birthday Cakes", title: "Red Velvet Creation" },
    { id: "8", image: weddingCakeImage, category: "Wedding Cakes", title: "Gold Accent Wedding Cake" },
    { id: "9", image: kidsBirthdayImage, category: "Birthday Cakes", title: "Cartoon Character Cake" },
    { id: "10", image: christmasCakeImage, category: "Festival", title: "Plum Cake Special" },
    { id: "11", image: browniesImage, category: "Desserts", title: "Cream Cheese Brownies" },
    { id: "12", image: masterclassImage, category: "Masterclass", title: "Advanced Decorating Class" },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "Birthday Cakes", label: "Birthday Cakes" },
    { value: "Wedding Cakes", label: "Wedding Cakes" },
    { value: "Festival", label: "Festival Specials" },
    { value: "Desserts", label: "Desserts" },
    { value: "Masterclass", label: "Masterclass" },
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of handcrafted cakes and happy moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="flex-wrap h-auto gap-2">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value} className="px-6">
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-primary-foreground font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="text-primary-foreground/80 text-sm">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
