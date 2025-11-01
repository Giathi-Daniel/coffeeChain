import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, DollarSign, Users, BarChart3 } from "lucide-react";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function Farmers() {
  const benefits = [
    {
      icon: DollarSign,
      title: "35% Higher Income",
      description: "Earn more by selling directly to buyers without middlemen taking a cut"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Build trust with certification badges and quality tracking data"
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Access real-time pricing and demand trends to optimize sales"
    },
    {
      icon: Users,
      title: "Direct Relationships",
      description: "Connect with buyers, cooperatives, and exporters worldwide"
    }
  ];

  const features = [
    "IoT sensors to monitor soil, temperature, and bean quality",
    "SMS notifications for orders and payments",
    "Mobile-friendly dashboard accessible from any device",
    "Secure payment processing with instant notifications",
    "Quality certification verification and display",
    "Production analytics and yield predictions"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                For Coffee Farmers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sell Your Coffee
                <span className="block text-primary">
                  Directly to Buyers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join 2,500+ farmers who've increased their income by eliminating middlemen 
                and using data-driven insights to sell their premium coffee beans.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated" onClick={() => window.location.href = '/auth'}>
                  Create Farmer Account
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/demo'}>
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={farmerImage} 
                alt="Coffee farmer"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Farmers Choose CoffeeChain</h2>
            <p className="text-lg text-muted-foreground">
              Technology and transparency working together to increase your income
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-elevated transition-smooth">
                  <div className="w-16 h-16 rounded-full gradient-earth flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Everything You Need
                <span className="block text-secondary">
                  In One Platform
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                CoffeeChain provides all the tools you need to succeed in the modern coffee market
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="mt-8 gradient-coffee text-primary-foreground" onClick={() => window.location.href = '/auth'}>
                Get Started Free
              </Button>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Success Story</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground italic mb-4">
                    "Before CoffeeChain, I was selling my coffee for $3.20/kg to middlemen. 
                    Now I sell directly to buyers at $4.80/kg. That's a 50% increase in my income!"
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={farmerImage} 
                      alt="Maria Santos"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">Maria Santos</p>
                      <p className="text-sm text-muted-foreground">Huila, Colombia</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  <div>
                    <div className="flex items-center gap-2 text-secondary mb-1">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-2xl font-bold">+50%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Income Increase</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <BarChart3 className="w-5 h-5" />
                      <span className="text-2xl font-bold">15+</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Direct Buyers</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Coffee Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of farmers earning more and selling smarter
          </p>
          <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated" onClick={() => window.location.href = '/auth'}>
            Create Your Free Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
