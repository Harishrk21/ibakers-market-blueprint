import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

const CategoryCard = ({ title, description, image, href, className }: CategoryCardProps) => {
  return (
    <Link to={href}>
      <Card className={`group overflow-hidden cursor-pointer border-white/10 bg-slate-900/50 backdrop-blur-xl hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/20 transition-all h-full ${className || ''}`}>
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-smooth">
              {title}
            </h3>
            <ArrowRight className="h-5 w-5 text-pink-400 transform group-hover:translate-x-1 transition-smooth" />
          </div>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
