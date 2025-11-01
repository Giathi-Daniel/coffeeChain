import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function IoTIncomeSuccess() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Article Header */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-4">Success Stories</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How IoT Sensors Increased This Farmer's Income by 50%
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>CoffeeChain Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Banner Image */}
          <img 
            src={farmerImage} 
            alt="Maria Santos on her coffee farm"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Maria Santos from Colombia shares how data-driven farming transformed her coffee business 
              and doubled her earnings in just one season.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Maria Santos has been growing coffee in Colombia's Huila region for 15 years. Despite her 
              experience and dedication, she struggled to get fair prices for her beans. Middlemen would 
              offer her $2.50/kg, claiming her coffee was "average quality" without any real evidence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "I knew my coffee was better than they said," Maria explains. "But I had no way to prove 
              it. They would just look at the beans and make an offer. Take it or leave it."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Discovering CoffeeChain</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In early 2024, Maria heard about CoffeeChain from a cooperative meeting. The promise was 
              simple: install free IoT sensors on your farm, and get objective quality data that buyers 
              trust. No more guessing, no more lowball offers based on visual inspection alone.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "I was skeptical at first," she admits. "Technology on a small farm? It sounded complicated. 
              But the sensors were free, and I had nothing to lose."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Transformation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Within two weeks of installing the sensors, Maria started seeing data she'd never had access 
              to before. Soil moisture levels, temperature patterns, and yield predictions appeared on her 
              phone. More importantly, buyers could see this data too.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "The first buyer who contacted me through CoffeeChain offered $4.20/kg," Maria says, still 
              amazed. "That's 68% more than the middlemen were paying me. And they explained exactly why - 
              my moisture levels were optimal, my beans were consistently sized, and the sensor data proved it."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In her first season using CoffeeChain, Maria's income increased by 50%. But the benefits went 
              beyond just price:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li>Direct relationships with three premium roasters in the US and Europe</li>
              <li>Advance orders for next season's harvest</li>
              <li>Better farming decisions based on sensor data</li>
              <li>Recognition as a verified quality producer</li>
              <li>Predictable income instead of volatile middleman prices</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Advice for Other Farmers</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When asked what advice she'd give to other farmers, Maria is clear: "Don't wait. The sensors 
              are free, the platform is easy to use, and the results speak for themselves. I only wish I'd 
              started sooner."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              She also emphasizes the importance of building relationships: "Buyers on CoffeeChain want to 
              know their farmers. Send them updates, answer their questions quickly, and take pride in your 
              coffee. The technology helps, but the relationship is what makes it sustainable."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Looking Ahead</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Maria is now expanding her farm and helping neighboring farmers get started on CoffeeChain. 
              "This isn't just about me," she says. "It's about showing other farmers that we don't have 
              to accept unfair prices. There's a better way, and the technology is here to help us."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Her income has stabilized at around $4.50/kg - more than double what she was earning before. 
              She's investing the additional income in better equipment, worker wages, and her children's 
              education.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Want to achieve similar results?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Join CoffeeChain today and start connecting directly with buyers who value quality.
              </p>
              <Link to="/auth">
                <Button className="gradient-coffee text-primary-foreground">
                  Get Started as a Farmer
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
