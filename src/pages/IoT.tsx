import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Droplet, ThermometerSun, CloudRain, Smartphone, Wifi, Battery } from "lucide-react";
import iotImage from "@/assets/iot-sensor.jpg";

export default function IoT() {
  const sensors = [
    {
      icon: Droplet,
      title: "Soil Moisture Sensors",
      description: "Monitor water content in soil to optimize irrigation and prevent over or under-watering",
      metrics: ["Real-time readings", "0-100% range", "±2% accuracy"]
    },
    {
      icon: ThermometerSun,
      title: "Temperature Monitoring",
      description: "Track ambient and soil temperature to ensure optimal growing conditions",
      metrics: ["24/7 monitoring", "-20°C to 60°C", "±0.5°C accuracy"]
    },
    {
      icon: CloudRain,
      title: "Weather Prediction",
      description: "Integrated weather data to help plan harvests and protect crops",
      metrics: ["7-day forecast", "Rain alerts", "Frost warnings"]
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "Wireless Connectivity",
      description: "Long-range wireless sensors connect to your phone via LoRaWAN technology"
    },
    {
      icon: Battery,
      title: "Solar Powered",
      description: "Self-sustaining sensors with solar panels - no battery changes needed"
    },
    {
      icon: Smartphone,
      title: "Mobile Dashboard",
      description: "View all sensor data from your smartphone with the CoffeeChain app"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                IoT Technology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Smart Sensors for
                <span className="block text-secondary">
                  Smarter Farming
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Real-time farm monitoring with IoT sensors that track soil moisture, temperature, 
                and weather conditions. Make data-driven decisions to improve quality and yield.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated" onClick={() => window.location.href = '/sensor-request'}>
                  Request Sensor Kit
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/documentation'}>
                  View Technical Specs
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-secondary">2.5k+</p>
                  <p className="text-sm text-muted-foreground">Active Sensors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">99.8%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Monitoring</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={iotImage} 
                alt="IoT sensor on coffee plant"
                className="rounded-2xl shadow-elevated w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sensors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Sensors Monitor</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive farm data collection for optimal coffee production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sensors.map((sensor, index) => {
              const Icon = sensor.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-elevated transition-smooth">
                  <div className="w-14 h-14 rounded-xl gradient-earth flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sensor.title}</h3>
                  <p className="text-muted-foreground mb-4">{sensor.description}</p>
                  <div className="space-y-2">
                    {sensor.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Real-Time Data
                <span className="block text-primary">
                  At Your Fingertips
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access all your sensor data through an intuitive mobile dashboard. 
                Get instant alerts and make informed decisions from anywhere.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              {/* Live Data Card */}
              <Card className="p-6 shadow-elevated">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Farm Sensors - Live</h3>
                  <Badge variant="outline" className="text-secondary border-secondary/30">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse mr-2" />
                    Active
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Droplet className="w-5 h-5 text-secondary" />
                        <span className="font-medium">Soil Moisture</span>
                      </div>
                      <span className="text-2xl font-bold text-secondary">68%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[68%] rounded-full transition-smooth" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Optimal range: 60-75%</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <ThermometerSun className="w-5 h-5 text-accent" />
                        <span className="font-medium">Temperature</span>
                      </div>
                      <span className="text-2xl font-bold text-accent">24°C</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-accent w-[75%] rounded-full transition-smooth" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Ideal range: 18-28°C</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CloudRain className="w-5 h-5 text-primary" />
                        <span className="font-medium">Rainfall (24h)</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">12mm</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Next rain: Tomorrow, 40% chance</p>
                  </div>
                </div>
              </Card>

              {/* Alert Card */}
              <Card className="p-4 bg-secondary/10 border-secondary/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Droplet className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Irrigation Recommended</h4>
                    <p className="text-sm text-muted-foreground">
                      Soil moisture dropping. Consider irrigation in the next 24 hours.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Free for Verified Farmers</h2>
            <p className="text-lg text-muted-foreground">
              Get a complete IoT sensor kit at no cost when you create a verified farmer account
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-elevated">
              <h3 className="text-2xl font-bold mb-4">Sensor Kit Includes:</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>3x Soil Moisture Sensors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>2x Temperature Sensors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>1x Weather Station</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Solar panels and mounting hardware</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Free lifetime cloud storage and analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Installation guide and support</span>
                </div>
              </div>

              <Button size="lg" className="w-full gradient-coffee text-primary-foreground" onClick={() => window.location.href = '/sensor-request'}>
                Request Your Free Sensor Kit
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
