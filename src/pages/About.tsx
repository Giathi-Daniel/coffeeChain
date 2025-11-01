import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Zap, Globe } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Farmer First",
      description: "Every decision we make prioritizes the wellbeing and prosperity of coffee farmers"
    },
    {
      icon: Zap,
      title: "Technology for Good",
      description: "We leverage IoT and data analytics to empower farmers, not replace them"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building a sustainable coffee supply chain that benefits everyone in it"
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Open data, fair prices, and honest relationships at every step"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming the
            <span className="block text-secondary">
              Coffee Supply Chain
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            CoffeeChain is on a mission to eliminate exploitative middlemen and empower 
            coffee farmers with technology, transparency, and fair prices.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              CoffeeChain was founded in 2023 by a team of technologists and coffee industry 
              veterans who witnessed firsthand the exploitation of hardworking coffee farmers.
            </p>
            <p>
              We saw farmers earning less than $2/kg for their premium beans, while middlemen 
              took massive cuts and sold the same beans for $8-10/kg to roasters. The farmers 
              who did all the work saw almost none of the profit.
            </p>
            <p>
              We knew technology could solve this problem. By creating a direct marketplace 
              and adding IoT sensors to verify quality, we could eliminate middlemen and 
              give farmers the income they deserve.
            </p>
            <p>
              Today, CoffeeChain connects over 2,500 farmers directly with buyers worldwide, 
              increasing farmer income by an average of 35% while buyers get better quality 
              beans at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl gradient-earth flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">
              Real numbers from real farmers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">2,500+</p>
              <p className="text-muted-foreground">Farmers Empowered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">35%</p>
              <p className="text-muted-foreground">Average Income Increase</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">$12M</p>
              <p className="text-muted-foreground">Paid to Farmers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
