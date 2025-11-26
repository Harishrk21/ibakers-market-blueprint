import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const TestimonialCard = ({
  name,
  location,
  rating,
  comment,
  avatar,
}: TestimonialCardProps) => {
  return (
    <Card className="border-border hover:shadow-soft transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <span className="text-primary font-semibold text-lg">
                {name.charAt(0)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-accent text-accent"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          "{comment}"
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
