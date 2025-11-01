import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DemoVideo() {
  const navigate = useNavigate();

  const features = [
    "How to create your farmer account",
    "Setting up your farm profile",
    "Connecting IoT sensors",
    "Listing your coffee for sale",
    "Managing orders and payments",
    "Using the analytics dashboard"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Product Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              See CoffeeChain
              <span className="block gradient-coffee bg-clip-text text-transparent">
                In Action
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Watch our comprehensive video tutorial to learn how CoffeeChain helps farmers 
              increase income and connect directly with buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-elevated">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white transition-smooth">
                    <Play className="w-12 h-12 text-primary ml-2" />
                  </div>
                  <p className="text-lg font-semibold mb-2">CoffeeChain Platform Overview</p>
                  <p className="text-sm text-muted-foreground">12:45 minutes</p>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="gradient-coffee text-primary-foreground"
                    onClick={() => navigate("/auth")}
                  >
                    Get Started Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Transcript
                  </Button>
                </div>
              </div>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-secondary mb-2">2,500+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-accent mb-2">35%</p>
                <p className="text-sm text-muted-foreground">Avg Income Increase</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Transparency</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
