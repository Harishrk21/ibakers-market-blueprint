import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | IBakers Chennai</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to IBakers homepage to browse our cakes, desserts and masterclasses in Chennai." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.ibakers.com/404" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />
      <div className="flex min-h-[60vh] items-center justify-center relative">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">404</h1>
          <h2 className="text-3xl md:text-4xl font-black text-white">Page Not Found</h2>
          <p className="text-lg text-slate-300 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default NotFound;
