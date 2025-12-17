import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  image,
  category,
  isNew,
  isBestseller,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/product-inquiry", {
      state: {
        product: { id, title, description, price, image, category, isBestseller, isNew }
      }
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-border h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1.5 sm:gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">New</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-accent text-accent-foreground text-xs px-1.5 py-0.5 sm:px-2 sm:py-1">Bestseller</Badge>
          )}
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth"
        >
          <Heart
            className={`h-4 w-4 sm:h-5 sm:w-5 ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
      
      <CardContent className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
        <div className="mb-1.5 sm:mb-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 sm:mb-3 flex-1">
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-bold text-foreground">{price}</span>
          <span className="text-xs sm:text-sm text-muted-foreground">onwards</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 sm:p-4 md:p-5 pt-0 flex gap-2">
        <Button
          className="flex-1 bg-primary hover:bg-primary-glow text-xs sm:text-sm py-2 sm:py-2.5"
          onClick={handleOrderClick}
        >
          <ShoppingCart className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
