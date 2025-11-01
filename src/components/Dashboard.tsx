import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Droplet, ThermometerSun, Package } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">Real-Time Insights</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Track Quality in
              <span className="block text-accent">
                Real-Time
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IoT sensors continuously monitor your farm conditions. Access live data through your phone 
              or computer. Show buyers the quality and care behind every bean.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Soil Moisture Tracking</h4>
                  <p className="text-sm text-muted-foreground">Optimize irrigation and water usage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <ThermometerSun className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Temperature Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Perfect conditions for premium beans</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Yield Predictions</h4>
                  <p className="text-sm text-muted-foreground">Plan harvests and sales in advance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="space-y-4">
            {/* Main Stats Card */}
            <Card className="p-6 shadow-elevated">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Farm Overview</h3>
                <Badge variant="outline" className="text-secondary border-secondary/30">Live</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Soil Moisture</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-secondary">68%</span>
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[68%] rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Bean Quality</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-accent">94</span>
                    <span className="text-sm text-muted-foreground">/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[94%] rounded-full" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Production Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-1">This Month</p>
                <p className="text-2xl font-bold">1,240 kg</p>
                <p className="text-xs text-secondary">+12% vs last month</p>
              </Card>
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-1">Market Price</p>
                <p className="text-2xl font-bold">$4.80/kg</p>
                <p className="text-xs text-accent">+$0.35 today</p>
              </Card>
            </div>

            {/* Chart Visualization */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Production Trends</h4>
              <div className="flex items-end justify-between h-32 gap-2">
                {[65, 78, 82, 75, 88, 92, 98].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                    <div 
                      className="bg-gradient-to-t from-primary to-secondary rounded-t transition-smooth hover:opacity-80"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-xs text-muted-foreground text-center">W{i+1}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
