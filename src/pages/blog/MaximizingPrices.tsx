import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function MaximizingPrices() {
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

          <Badge className="mb-4">Tips & Tricks</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            5 Tips for Maximizing Your Coffee Prices
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>CoffeeChain Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 5, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>4 min read</span>
            </div>
          </div>

          <img 
            src={farmerImage} 
            alt="Coffee farming best practices"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Proven strategies from top-earning farmers on CoffeeChain for getting the best prices for your beans.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">1. Use IoT Data to Prove Quality</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The single most impactful thing you can do to increase prices is install IoT sensors. Buyers 
              pay premium prices for coffee with verified quality data. Sensor readings provide objective 
              evidence that your beans meet their standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Farmers with IoT sensors on CoffeeChain earn an average of 40% more than those without. The 
              sensors are free - there's no reason not to use them. Request your kit today and start tracking 
              moisture levels, temperature, and other critical metrics.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Build Your Reputation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your CoffeeChain profile is your storefront. Invest time in making it professional:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Upload high-quality photos of your farm and beans</li>
              <li>Complete all certification verifications</li>
              <li>Write a compelling farm story</li>
              <li>Respond quickly to buyer inquiries</li>
              <li>Maintain consistent quality to earn 5-star ratings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Top-rated farmers receive 25% more inquiries and can charge premium prices. Reputation compounds 
              over time - start building yours now.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">3. Time Your Sales</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coffee prices fluctuate throughout the year. Understanding market cycles helps you sell at peaks:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>Post-harvest glut:</strong> Prices dip when everyone sells at once</li>
              <li><strong>Pre-season demand:</strong> Buyers secure supply before harvest, prices rise</li>
              <li><strong>Quality windows:</strong> Specialty buyers pay more for fresh crop</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you have storage capacity, consider holding some inventory to sell during high-demand periods. 
              Even waiting 2-3 months can increase prices by 15-20%.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">4. Offer Multiple Lots</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Don't mix all your coffee into one blend. Separate your best beans into premium lots:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>Premium lot:</strong> Top 20% of harvest - zero defects, perfect moisture</li>
              <li><strong>Standard lot:</strong> High quality but minor imperfections</li>
              <li><strong>Commercial lot:</strong> Everything else</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Premium lots can sell for 2-3x the price of standard coffee. Buyers seeking exceptional quality 
              will pay for properly sorted, top-tier beans. Don't leave money on the table by blending 
              everything together.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">5. Build Direct Relationships</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One-off sales are good, but long-term partnerships are better:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Offer your best buyers first access to new harvest</li>
              <li>Provide crop updates and progress photos</li>
              <li>Be reliable - deliver on time, every time</li>
              <li>Ask for feedback and adjust to buyer preferences</li>
              <li>Negotiate advance contracts for stable income</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Repeat buyers pay 15-30% more than new buyers because they value the relationship and trust 
              your quality. Some CoffeeChain farmers have buyers who pre-order their entire harvest at premium 
              prices before coffee is even picked.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Bonus Tip: Never Sell Cheap</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If buyers aren't willing to pay fair prices, wait for better offers. Your coffee has value - 
              don't accept lowball offers out of desperation. CoffeeChain's analytics show you real-time 
              market rates so you know what your coffee is worth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Farmers who consistently reject low offers and wait for premium buyers end up with higher average 
              prices. Your reputation for quality justifies premium pricing - don't undermine it by selling cheap.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Ready to maximize your prices?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Join CoffeeChain and start implementing these strategies today.
              </p>
              <Link to="/auth">
                <Button className="gradient-coffee text-primary-foreground">
                  Create Your Farmer Account
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
