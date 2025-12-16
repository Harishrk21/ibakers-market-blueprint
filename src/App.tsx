import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Masterclasses from "./pages/Masterclasses";
import CustomOrders from "./pages/CustomOrders";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductInquiry from "./pages/ProductInquiry";
import BirthdayCakes from "./pages/categories/BirthdayCakes";
import WeddingCakes from "./pages/categories/WeddingCakes";
import TrendingCakes from "./pages/categories/TrendingCakes";
import ThemeCakes from "./pages/categories/ThemeCakes";
import FlavourCakes from "./pages/categories/FlavourCakes";
import ChristmasSpecials from "./pages/categories/ChristmasSpecials";
import BrowniesDesserts from "./pages/categories/BrowniesDesserts";
import SpecialtyCakes from "./pages/categories/SpecialtyCakes";
import AnniversaryCakes from "./pages/categories/AnniversaryCakes";
import Desserts from "./pages/Desserts";
import Hampers from "./pages/Hampers";
import FestiveCakes from "./pages/FestiveCakes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-inquiry" element={<ProductInquiry />} />
          <Route path="/categories/birthday-cakes" element={<BirthdayCakes />} />
          <Route path="/categories/wedding-cakes" element={<WeddingCakes />} />
          <Route path="/categories/trending-cakes" element={<TrendingCakes />} />
          <Route path="/categories/theme-cakes" element={<ThemeCakes />} />
          <Route path="/categories/flavour-cakes" element={<FlavourCakes />} />
          <Route path="/categories/christmas-specials" element={<ChristmasSpecials />} />
          <Route path="/categories/brownies-desserts" element={<BrowniesDesserts />} />
          <Route path="/categories/specialty-cakes" element={<SpecialtyCakes />} />
          <Route path="/categories/anniversary-cakes" element={<AnniversaryCakes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/hampers" element={<Hampers />} />
          <Route path="/festive-cakes" element={<FestiveCakes />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
