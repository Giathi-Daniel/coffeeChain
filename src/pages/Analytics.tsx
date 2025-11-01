import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, Package, Users, BarChart3, PieChart, LineChart, Activity } from "lucide-react";

export default function Analytics() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Analytics Dashboard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Data-Driven Insights for
              <span className="block text-primary">
                Better Decisions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Visualize production trends, market prices, and buyer demand with powerful analytics tools. 
              Make informed decisions that increase your income.
            </p>
            <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated" onClick={() => window.location.href = '/dashboard'}>
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-8 h-8 text-primary" />
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-1">1,240 kg</h3>
              <p className="text-sm text-muted-foreground">This Month Production</p>
              <p className="text-xs text-secondary mt-1">+12% vs last month</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8 text-accent" />
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-1">$4.80</h3>
              <p className="text-sm text-muted-foreground">Current Price / kg</p>
              <p className="text-xs text-secondary mt-1">+$0.35 today</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-secondary" />
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-1">15</h3>
              <p className="text-sm text-muted-foreground">Active Buyers</p>
              <p className="text-xs text-accent mt-1">3 new this week</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="w-8 h-8 text-primary" />
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-1">$5,952</h3>
              <p className="text-sm text-muted-foreground">Revenue This Month</p>
              <p className="text-xs text-secondary mt-1">+18% vs last month</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Analytics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Production Trends */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Production Trends</h3>
                  <p className="text-sm text-muted-foreground">Weekly output over 3 months</p>
                </div>
                <LineChart className="w-6 h-6 text-secondary" />
              </div>

              <div className="space-y-4">
                <div className="flex items-end justify-between h-48 gap-1 sm:gap-2 overflow-x-auto pb-2">
                  {[
                    { height: 45, label: "W1", value: "280kg" },
                    { height: 52, label: "W2", value: "320kg" },
                    { height: 58, label: "W3", value: "360kg" },
                    { height: 48, label: "W4", value: "300kg" },
                    { height: 62, label: "W5", value: "380kg" },
                    { height: 68, label: "W6", value: "420kg" },
                    { height: 75, label: "W7", value: "460kg" },
                    { height: 72, label: "W8", value: "440kg" },
                    { height: 80, label: "W9", value: "490kg" },
                    { height: 85, label: "W10", value: "520kg" },
                    { height: 88, label: "W11", value: "540kg" },
                    { height: 92, label: "W12", value: "560kg" }
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 min-w-[30px] flex flex-col justify-end gap-1 group relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap">
                        <Badge className="text-xs">{bar.value}</Badge>
                      </div>
                      <div 
                        className="bg-gradient-to-t from-primary via-secondary to-accent rounded-t transition-smooth hover:opacity-80 cursor-pointer min-h-[20px]"
                        style={{ height: `${bar.height}%` }}
                      />
                      <span className="text-[10px] sm:text-xs text-muted-foreground text-center">{bar.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-secondary">+28%</p>
                      <p className="text-xs text-muted-foreground">Growth Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">5,200kg</p>
                      <p className="text-xs text-muted-foreground">Total Q4</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">560kg</p>
                      <p className="text-xs text-muted-foreground">Peak Week</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Price Analytics */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Price Trends</h3>
                  <p className="text-sm text-muted-foreground">Market prices over 30 days</p>
                </div>
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>

              <div className="space-y-4">
                {/* Price Chart */}
                <div className="relative h-48">
                  <div className="absolute inset-0 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" className="text-accent" stopColor="currentColor" stopOpacity="0.3" />
                          <stop offset="100%" className="text-accent" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area under line */}
                      <path
                        d="M0,180 L20,175 L40,170 L60,165 L80,160 L100,155 L120,150 L140,145 L160,142 L180,138 L200,135 L220,130 L240,125 L260,122 L280,118 L300,115 L320,110 L340,105 L360,100 L380,95 L400,90 L400,200 L0,200 Z"
                        fill="url(#priceGradient)"
                      />
                      
                      {/* Price line */}
                      <path
                        d="M0,180 L20,175 L40,170 L60,165 L80,160 L100,155 L120,150 L140,145 L160,142 L180,138 L200,135 L220,130 L240,125 L260,122 L280,118 L300,115 L320,110 L340,105 L360,100 L380,95 L400,90"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="3"
                        className="drop-shadow-lg"
                      />
                    </svg>
                  </div>

                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground">
                    <span>$5.20</span>
                    <span>$4.80</span>
                    <span>$4.40</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Current</p>
                      <p className="text-xl font-bold text-accent">$4.80</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">30d High</p>
                      <p className="text-xl font-bold text-secondary">$5.10</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Low</p>
                      <p className="text-xl font-bold text-muted-foreground">$4.35</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm font-medium text-accent">Price Alert</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Current price is 8% above your target. Consider increasing sales volume.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Buyer Analytics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quality Distribution */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Bean Quality Distribution</h3>
                  <p className="text-sm text-muted-foreground">Last 1000kg harvested</p>
                </div>
                <PieChart className="w-6 h-6 text-secondary" />
              </div>

              <div className="space-y-6">
                {/* Quality Bars */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Premium (90-100)</span>
                      <span className="text-sm font-bold text-secondary">45%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full gradient-earth w-[45%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">High Quality (80-89)</span>
                      <span className="text-sm font-bold text-accent">35%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[35%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Standard (70-79)</span>
                      <span className="text-sm font-bold text-primary">15%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[15%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Below Standard (&lt;70)</span>
                      <span className="text-sm font-bold text-muted-foreground">5%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-muted-foreground w-[5%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                  <p className="text-sm font-medium text-secondary mb-1">Quality Insight</p>
                  <p className="text-xs text-muted-foreground">
                    80% of your harvest is premium or high quality. This positions you in the top 15% of farmers on the platform.
                  </p>
                </div>
              </div>
            </Card>

            {/* Buyer Analytics */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Top Buyers</h3>
                  <p className="text-sm text-muted-foreground">Last 90 days</p>
                </div>
                <Users className="w-6 h-6 text-accent" />
              </div>

              <div className="space-y-3">
                {[
                  { name: "Premium Roasters Co.", volume: "420kg", revenue: "$2,016", growth: "+15%" },
                  { name: "Global Coffee Exports", volume: "380kg", revenue: "$1,824", growth: "+22%" },
                  { name: "Artisan Coffee Cooperative", volume: "290kg", revenue: "$1,392", growth: "+8%" },
                  { name: "Direct Trade Buyers", volume: "250kg", revenue: "$1,200", growth: "+35%" },
                  { name: "Specialty Roasters Ltd", volume: "180kg", revenue: "$864", growth: "+12%" }
                ].map((buyer, index) => (
                  <div 
                    key={index}
                    className="p-3 border border-border rounded-lg hover:shadow-soft transition-smooth cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{buyer.name}</p>
                        <p className="text-xs text-muted-foreground">Volume: {buyer.volume}</p>
                      </div>
                      <Badge variant="outline" className="text-secondary border-secondary/30 text-xs">
                        {buyer.growth}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Revenue</span>
                      <span className="text-sm font-bold text-accent">{buyer.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Using Data to Grow Your Business
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant access to powerful analytics when you join CoffeeChain
          </p>
          <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated">
            Access Your Dashboard
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
