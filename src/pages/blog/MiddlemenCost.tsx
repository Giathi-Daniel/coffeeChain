import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function MiddlemenCost() {
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

          <Badge className="mb-4">Industry Insights</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The True Cost of Coffee Middlemen
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Sarah Chen</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 8, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          <img 
            src={farmerImage} 
            alt="Coffee supply chain"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              An in-depth analysis of how traditional supply chains extract value from farmers and why 
              direct trade is the future.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Traditional Coffee Supply Chain</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The coffee industry has operated on the same model for decades. A farmer grows coffee, sells 
              to a local buyer, who sells to a regional exporter, who sells to an importer, who sells to a 
              roaster. Each step adds cost and complexity while diminishing the farmer's share.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consider a typical scenario: A farmer grows premium coffee and sells it for $2.50/kg to a 
              local middleman. That same coffee eventually reaches a specialty roaster for $8-10/kg. The 
              farmer who did all the work gets just 25-30% of the final price.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Breaking Down the Margins</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Let's examine where the money goes in a traditional supply chain for 1kg of coffee:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>Farmer receives:</strong> $2.50 (25%)</li>
              <li><strong>Local buyer margin:</strong> $1.50 (15%)</li>
              <li><strong>Regional exporter margin:</strong> $2.00 (20%)</li>
              <li><strong>Importer margin:</strong> $1.50 (15%)</li>
              <li><strong>Logistics and fees:</strong> $1.50 (15%)</li>
              <li><strong>Final roaster cost:</strong> $9.00 (90% markup from farm)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Hidden Costs to Farmers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond low prices, middlemen create several additional problems for farmers:
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">1. Price Opacity</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Farmers rarely know what their coffee is actually worth. Middlemen exploit this information 
              asymmetry, offering prices based on what farmers will accept rather than market value.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">2. Delayed Payments</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditional buyers often delay payment for weeks or months. Farmers need cash immediately 
              after harvest to pay workers and cover expenses, forcing many to accept even lower prices 
              for immediate payment.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">3. No Quality Incentive</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When middlemen buy in bulk and blend different qualities, farmers have no incentive to improve. 
              Premium coffee gets paid the same as average coffee, discouraging quality investments.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">4. Lack of Relationships</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Farmers never meet their end buyers. They miss out on feedback, recognition, and the possibility 
              of long-term partnerships that provide stable income.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Direct Trade Alternative</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Direct trade platforms like CoffeeChain eliminate unnecessary intermediaries. Here's the same 
              transaction on CoffeeChain:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>Farmer receives:</strong> $6.00 (63%)</li>
              <li><strong>Platform fee (5%):</strong> $0.30 (3%)</li>
              <li><strong>Logistics:</strong> $2.20 (23%)</li>
              <li><strong>Buyer cost:</strong> $8.50 (41% less than traditional)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The farmer more than doubles their income. The buyer pays less than through traditional 
              channels. Everyone wins except the middlemen.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Why Now?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Direct trade is now possible because of three converging technologies:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-3 text-muted-foreground">
              <li><strong>Mobile Internet:</strong> Even remote farmers can access online marketplaces</li>
              <li><strong>IoT Sensors:</strong> Objective quality data builds buyer confidence</li>
              <li><strong>Digital Payments:</strong> Fast, secure transactions without cash handling</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Industry Response</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Traditional middlemen claim they provide essential services: quality assessment, logistics 
              coordination, and market access. While these functions are important, technology has made it 
              possible to perform them more efficiently and transparently.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Some buyers worry about quality consistency without intermediaries. However, IoT sensor data 
              provides more reliable quality information than visual inspection alone. Farmer reputations 
              and ratings create accountability that didn't exist in traditional anonymous supply chains.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Path Forward</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Direct trade isn't just better for farmers and buyers - it's better for coffee quality and 
              sustainability. When farmers earn more, they can invest in better practices, equipment, and 
              worker conditions. Buyers get access to farmers who are motivated to produce exceptional coffee.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Join the direct trade revolution</p>
              <p className="text-sm text-muted-foreground mb-4">
                Whether you're a farmer or buyer, eliminate middlemen and keep more value in your pocket.
              </p>
              <Link to="/auth">
                <Button className="gradient-coffee text-primary-foreground">
                  Get Started Today
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
