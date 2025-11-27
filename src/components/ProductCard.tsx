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
    <Card className="group overflow-hidden hover:shadow-elegant transition-smooth border-border">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">New</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
          )}
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth"
        >
          <Heart
            className={`h-5 w-5 ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">
            {category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <span className="text-sm text-muted-foreground">onwards</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex gap-2">
        <Button
          className="flex-1 bg-primary hover:bg-primary-glow"
          onClick={handleOrderClick}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Order Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
