import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-coffee-farm.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Coffee farm at sunrise" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 mb-6">
            <Leaf className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Empowering Coffee Farmers</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Direct from
            <span className="block text-secondary">
              Farm to Buyer
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            CoffeeChain connects coffee farmers directly with buyers, cooperatives, and exporters. 
            No middlemen. Full transparency. Fair prices powered by IoT quality tracking and real-time analytics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated group" onClick={() => window.location.href = '/auth'}>
              Start Selling Coffee
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm" onClick={() => window.location.href = '/buyers'}>
              Find Premium Beans
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary">
                <Users className="w-5 h-5" />
                <span className="text-3xl font-bold">2,500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active Farmers</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-accent">
                <TrendingUp className="w-5 h-5" />
                <span className="text-3xl font-bold">35%</span>
              </div>
              <p className="text-sm text-muted-foreground">Higher Income</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <Leaf className="w-5 h-5" />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <p className="text-sm text-muted-foreground">Transparency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
