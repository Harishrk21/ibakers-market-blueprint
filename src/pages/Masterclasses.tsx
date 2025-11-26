import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Award } from "lucide-react";
import masterclassImage from "@/assets/masterclass.jpg";
import heroImage from "@/assets/hero-cake.jpg";

const Masterclasses = () => {
  const classes = [
    {
      id: "1",
      title: "Beginner Baking Basics",
      description: "Learn the fundamentals of baking - mixing, temperature control, and basic decorating",
      duration: "3 hours",
      participants: "Max 8",
      price: "₹2,500",
      level: "Beginner",
      image: masterclassImage,
      nextDate: "Dec 15, 2024",
    },
    {
      id: "2",
      title: "Advanced Cake Decorating",
      description: "Master piping techniques, fondant work, and creating stunning cake designs",
      duration: "4 hours",
      participants: "Max 6",
      price: "₹3,500",
      level: "Advanced",
      image: heroImage,
      nextDate: "Dec 20, 2024",
    },
    {
      id: "3",
      title: "Wedding Cake Masterclass",
      description: "Learn to create elegant multi-tier wedding cakes with professional finishing",
      duration: "6 hours",
      participants: "Max 4",
      price: "₹5,000",
      level: "Advanced",
      image: heroImage,
      nextDate: "Jan 5, 2025",
    },
    {
      id: "4",
      title: "Brownie & Desserts Workshop",
      description: "Perfect your brownies, cookies, and other popular desserts",
      duration: "2.5 hours",
      participants: "Max 10",
      price: "₹2,000",
      level: "Beginner",
      image: masterclassImage,
      nextDate: "Dec 18, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Baking <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Masterclasses</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Learn from expert bakers and unlock your baking potential
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Award className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Expert Instructors</h3>
              <p className="text-sm text-muted-foreground">Learn from professionals</p>
            </div>
            <div className="space-y-2">
              <Users className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Small Batches</h3>
              <p className="text-sm text-muted-foreground">Personal attention guaranteed</p>
            </div>
            <div className="space-y-2">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Hands-On Learning</h3>
              <p className="text-sm text-muted-foreground">Practice as you learn</p>
            </div>
            <div className="space-y-2">
              <Calendar className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold">Take Home</h3>
              <p className="text-sm text-muted-foreground">Your creation goes with you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Classes</h2>
            <p className="text-muted-foreground">
              Choose the class that matches your skill level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="overflow-hidden border-border hover:shadow-elegant transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={
                        classItem.level === "Beginner"
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {classItem.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <h3 className="text-2xl font-semibold">{classItem.title}</h3>
                  <p className="text-muted-foreground">{classItem.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{classItem.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{classItem.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>Next class: {classItem.nextDate}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground">
                        {classItem.price}
                      </span>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button
                    className="w-full bg-primary hover:bg-primary-glow"
                    onClick={() => window.open("https://wa.me/919876543210?text=I'm interested in the " + classItem.title, "_blank")}
                  >
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-muted-foreground">
                Our masterclasses cover everything you need to know
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">Baking Techniques</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Temperature control and oven management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ingredient selection and substitutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proper mixing and folding techniques</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">Decorating Skills</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Piping techniques and patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fondant work and sculpting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Color theory and design principles</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">Professional Tips</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Time-saving hacks for home bakers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Troubleshooting common problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Storage and transportation tips</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="text-lg font-semibold mb-3">Business Insights</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Pricing your creations correctly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Marketing your home bakery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Food safety and licensing basics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masterclasses;
