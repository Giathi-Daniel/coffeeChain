import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function QualityMetrics() {
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

          <Badge className="mb-4">Education</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Understanding Coffee Quality Metrics: A Complete Guide
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Dr. James Rodriguez</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 12, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <img 
            src={farmerImage} 
            alt="Coffee quality assessment"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Learn what buyers look for in premium coffee and how to optimize your farming practices 
              for higher quality scores.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What is Coffee Quality?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coffee quality is a combination of physical characteristics, sensory attributes, and 
              consistency. Premium coffee commands higher prices because it delivers a superior experience 
              in the cup. Understanding what makes coffee "high quality" is essential for any farmer looking 
              to maximize their income.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The 5 Key Quality Metrics</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-3">1. Bean Size and Uniformity</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Larger, more uniform beans are prized by buyers. Screen size 17+ is considered specialty grade. 
              Uniformity ensures even roasting and consistent flavor. IoT sensors can track growing conditions 
              that produce larger beans, such as optimal moisture and temperature ranges.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">2. Moisture Content</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The ideal moisture content for green coffee is 10-12%. Too high and beans risk mold; too low 
              and they become brittle. CoffeeChain's IoT sensors monitor moisture levels throughout the drying 
              process, helping you hit the sweet spot every time.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">3. Defect Count</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Specialty coffee allows for minimal defects - no more than 5 full defects per 350g sample. 
              Common defects include black beans, sour beans, insect damage, and foreign matter. Proper 
              sorting and processing are critical.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">4. Cupping Score</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Professional buyers use the SCAA cupping protocol to score coffee on a 100-point scale. Scores 
              above 80 are considered specialty. Factors include aroma, flavor, aftertaste, acidity, body, 
              balance, and overall impression.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">5. Traceability and Certifications</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Premium buyers increasingly demand traceability - knowing exactly where and how their coffee 
              was grown. Certifications like Organic, Fair Trade, and Rainforest Alliance can add $0.50-1.50/kg 
              to your price.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">How CoffeeChain Measures Quality</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CoffeeChain uses a comprehensive quality scoring system that combines:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Real-time IoT sensor data (soil moisture, temperature, humidity)</li>
              <li>Historical yield and quality patterns</li>
              <li>Farmer-submitted quality assessments and photos</li>
              <li>Buyer feedback and ratings</li>
              <li>Third-party certification verification</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Improving Your Quality Score</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here are proven strategies to boost your coffee quality:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong>Harvest at Peak Ripeness:</strong> Only pick fully red cherries. Under-ripe beans create sour notes.</li>
              <li><strong>Process Quickly:</strong> Begin processing within 6 hours of picking to prevent fermentation defects.</li>
              <li><strong>Monitor Drying:</strong> Use sensor data to maintain 10-12% moisture. Turn beans regularly for even drying.</li>
              <li><strong>Sort Carefully:</strong> Remove all defects. Premium buyers will reject lots with excessive defects.</li>
              <li><strong>Store Properly:</strong> Keep dried beans in cool, dry conditions. High humidity during storage ruins quality.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Economic Impact</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Quality improvements directly translate to higher prices. Here's what CoffeeChain farmers typically see:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Score 82-84: +$1.00-1.50/kg premium</li>
              <li>Score 85-87: +$2.00-3.00/kg premium</li>
              <li>Score 88+: +$4.00+/kg premium</li>
            </ul>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Ready to improve your coffee quality?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Get free IoT sensors and start tracking the metrics that matter to premium buyers.
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
