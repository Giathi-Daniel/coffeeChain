import { Card } from "@/components/ui/card";
import { Store, Smartphone, TrendingUp, Shield, Wifi, DollarSign } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Direct Marketplace",
    description: "Connect directly with buyers, cooperatives, and exporters. Eliminate exploitative middlemen and maximize your profits.",
    color: "text-primary"
  },
  {
    icon: Wifi,
    title: "IoT Quality Tracking",
    description: "Real-time monitoring of bean quality, soil moisture, and yield through smart farm sensors. Data you can trust.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Live Analytics Dashboard",
    description: "Visualize production trends, buyer demand, and price fluctuations. Make data-driven sales decisions with confidence.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Verified Certifications",
    description: "Showcase your organic, fair-trade, and quality certifications. Build trust with verified farmer profiles.",
    color: "text-secondary"
  },
  {
    icon: Smartphone,
    title: "SMS Payment Updates",
    description: "Get instant notifications for payment updates, orders, and important marketplace activities on your mobile.",
    color: "text-primary"
  },
  {
    icon: DollarSign,
    title: "Fair Price Discovery",
    description: "Access transparent pricing information and market rates. Negotiate better deals with real-time market data.",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block text-primary">
              Thrive as a Farmer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technology-powered platform designed to give coffee farmers control, transparency, and better income.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-elevated transition-smooth cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-background to-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
