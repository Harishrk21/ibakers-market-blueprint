import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbMap: Record<string, string> = {
    "": "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    gallery: "Gallery",
    "custom-orders": "Custom Orders",
    masterclasses: "Masterclasses",
    desserts: "Desserts",
    hampers: "Gift Hampers",
    "festive-cakes": "Festive Cakes",
    categories: "Categories",
    "birthday-cakes": "Birthday Cakes",
    "wedding-cakes": "Wedding Cakes",
    "anniversary-cakes": "Anniversary Cakes",
    "trending-cakes": "Trending Cakes",
    "theme-cakes": "Theme Cakes",
    "flavour-cakes": "Flavour Cakes",
    "christmas-specials": "Christmas Specials",
    "brownies-desserts": "Brownies & Desserts",
    "specialty-cakes": "Specialty Cakes",
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Home", path: "/" },
  ];

  let currentPath = "";
  pathnames.forEach((pathname) => {
    currentPath += `/${pathname}`;
    const label = breadcrumbMap[pathname] || pathname.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    breadcrumbs.push({ label, path: currentPath });
  });

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://www.ibakers.in${crumb.path}`,
    })),
  };

  if (breadcrumbs.length <= 1) return null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbListSchema)}
        </script>
      </Helmet>
      <nav
        className="container mx-auto px-4 py-3 text-sm"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2 text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    crumb.label
                  )}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-primary transition-colors"
                  aria-label={`Navigate to ${crumb.label}`}
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" aria-label="Home" />
                  ) : (
                    crumb.label
                  )}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
