import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iotImage from "@/assets/iot-sensor.jpg";

export default function ClimateAdaptation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-4">Sustainability</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Climate Change and Coffee: Adapting Your Farm
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Dr. Maria Silva</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 1, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min read</span>
            </div>
          </div>

          <img 
            src={iotImage} 
            alt="IoT sensors monitoring climate"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              How farmers are using IoT data to adapt to changing weather patterns and protect their crops.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Climate Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coffee is one of the crops most vulnerable to climate change. Rising temperatures, unpredictable 
              rainfall, and extreme weather events are already impacting coffee production worldwide. By 2050, 
              up to 50% of current coffee-growing land may become unsuitable for cultivation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              But farmers aren't helpless. With the right tools and strategies, you can adapt to changing 
              conditions and even thrive. IoT technology is proving to be a crucial ally in this fight.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Understanding Your Microclimate</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every farm has its own microclimate - local conditions that differ from regional averages. IoT 
              sensors help you understand your specific environment:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Temperature patterns throughout the day and season</li>
              <li>Rainfall distribution and soil moisture retention</li>
              <li>Wind patterns and their impact on your crops</li>
              <li>Humidity levels and disease risk</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This granular data lets you make informed decisions rather than relying on regional forecasts 
              that may not apply to your specific location.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Adaptive Strategies</h2>

            <h3 className="text-xl font-bold mt-8 mb-3">Water Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Irregular rainfall is one of the biggest climate challenges. IoT sensors monitor soil moisture 
              in real-time, helping you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Irrigate only when necessary, conserving water</li>
              <li>Prevent over-watering that leads to disease</li>
              <li>Identify areas of your farm that need drainage improvements</li>
              <li>Plan irrigation infrastructure investments wisely</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Shade Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As temperatures rise, shade becomes increasingly important. Temperature sensors help you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Identify hotspots where additional shade trees are needed</li>
              <li>Monitor the effectiveness of your shade canopy</li>
              <li>Time shade tree planting for maximum impact</li>
              <li>Balance shade levels for optimal coffee production</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Pest and Disease Prevention</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Climate change is altering pest and disease patterns. Humidity and temperature sensors provide 
              early warning:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Coffee leaf rust risk increases with specific humidity/temperature combinations</li>
              <li>Berry borer activity correlates with temperature thresholds</li>
              <li>Fungal diseases develop under certain moisture conditions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CoffeeChain's system can send alerts when conditions favor outbreaks, giving you time to take 
              preventive action.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Long-Term Planning</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Historical sensor data helps you plan for the future:
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Variety Selection</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Analyze which areas of your farm are warming fastest. Consider planting heat-tolerant varieties 
              like Robusta or newer Arabica cultivars bred for climate resilience in those zones.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Altitude Migration</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have hillside land, temperature trends might indicate when to start planting at higher 
              elevations. As lower areas warm, higher elevation plots maintain optimal temperatures for Arabica.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Infrastructure Investments</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Data on rainfall patterns helps you decide where to invest in:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Water storage systems for dry periods</li>
              <li>Drainage improvements for heavy rainfall areas</li>
              <li>Irrigation systems for moisture-challenged zones</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Community Resilience</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Climate adaptation works best when farmers collaborate. CoffeeChain's platform lets you:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Compare your data with nearby farms</li>
              <li>Learn what strategies are working for others</li>
              <li>Share successful adaptation techniques</li>
              <li>Coordinate on larger infrastructure projects</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Success Story: Adapting in Ethiopia</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Farmer Abebe Tadesse in Ethiopia used sensor data to identify that his farm's traditional growing 
              areas were experiencing more frequent heat stress. By analyzing three years of temperature data, 
              he gradually shifted production to higher elevations on his property.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "The sensors showed me exactly when and where to make changes," he explains. "I didn't guess - 
              I used data. Now my yields are stable even as my neighbors struggle with heat stress."
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Start adapting to climate change</p>
              <p className="text-sm text-muted-foreground mb-4">
                Get free IoT sensors and the data you need to protect your farm's future.
              </p>
              <Link to="/iot">
                <Button className="gradient-coffee text-primary-foreground">
                  Request Free IoT Kit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
