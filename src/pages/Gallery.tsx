import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import heroImage from "@/assets/hero-cake.jpg";

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: string;
  type: MediaType;
  src: string;
  category: string;
  title: string;
}

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  // Generate gallery items from public/gallery folder (review1.jpeg to review32.jpeg, review33.mp4 to review38.mp4)
  const galleryItems = (() => {
    const items: GalleryItem[] = [];
    
    // Add all images from gallery folder (review1.jpeg to review32.jpeg)
    for (let i = 1; i <= 32; i++) {
      items.push({
        id: `gallery-${i}`,
        type: 'image' as MediaType,
        src: `/gallery/review${i}.jpeg`,
        category: "Customer Creations",
        title: `Customer Review ${i}`
      });
    }
    
    // Add all videos from gallery folder (review33.mp4 to review38.mp4)
    for (let i = 33; i <= 38; i++) {
      items.push({
        id: `gallery-${i}`,
        type: 'video' as MediaType,
        src: `/gallery/review${i}.mp4`,
        category: "Customer Creations",
        title: `Customer Video Review ${i - 32}`
      });
    }
    
    return items;
  })();

  const categories = [
    { value: "all", label: "All" },
    { value: "Customer Creations", label: "Customer Creations" },
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrevious = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1;
    setSelectedIndex(newIndex);
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const newIndex = selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
  }, [selectedIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, handlePrevious, handleNext]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Cake Gallery | IBakers Chennai",
    "description": "Browse our collection of handcrafted cakes, wedding cakes, birthday cakes, desserts and masterclass photos. See our work and get inspired for your celebration.",
    "url": "https://www.ibakers.com/gallery"
  };

  return (
    <>
      <Helmet>
        <title>Cake Gallery | Our Work & Creations | IBakers Chennai</title>
        <meta name="description" content="Browse our cake gallery showcasing handcrafted birthday cakes, wedding cakes, desserts, and masterclass photos. See our work and get inspired for your celebration in Chennai." />
        <meta name="keywords" content="cake gallery Chennai, IBakers gallery, birthday cake photos, wedding cake photos, dessert gallery Chennai, cake designs Chennai" />
        <link rel="canonical" href="https://www.ibakers.com/gallery" />
        
        <meta property="og:title" content="Cake Gallery | Our Work & Creations | IBakers Chennai" />
        <meta property="og:description" content="Browse our collection of handcrafted cakes and get inspired for your celebration" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroImage} />
        
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
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our collection of handcrafted cakes and happy moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="flex justify-center overflow-x-auto pb-2">
              <TabsList className="flex-wrap h-auto gap-2 min-w-max">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value} className="px-6">
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
                    onClick={() => handleItemClick(index)}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-black">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="text-white/80 text-sm">
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

      {/* Media Zoom Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 text-white hover:text-pink-400 transition-colors p-2 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 z-10 text-white hover:text-pink-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 text-white hover:text-pink-400 transition-colors p-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Media Content */}
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg object-contain"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg"
              />
            )}
          </div>

          {/* Media Info */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-white font-semibold text-lg">{selectedItem.title}</p>
            <p className="text-white/80 text-sm">{selectedItem.category}</p>
            {filteredItems.length > 1 && (
              <p className="text-white/60 text-xs mt-1">
                {selectedIndex !== null ? selectedIndex + 1 : 0} / {filteredItems.length}
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
    </>
  );
};

export default Gallery;
