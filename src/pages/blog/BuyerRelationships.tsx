import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function BuyerRelationships() {
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

          <Badge className="mb-4">Success Stories</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From Farm to Cup: Building Direct Buyer Relationships
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>CoffeeChain Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          <img 
            src={farmerImage} 
            alt="Farmers building relationships with buyers"
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Success stories of farmers who built lasting partnerships with roasters through CoffeeChain's platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Power of Direct Relationships</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For decades, coffee farmers never met the people who ultimately roasted and served their coffee. 
              Middlemen stood in between, making relationships impossible. CoffeeChain is changing that, creating 
              direct connections that benefit both farmers and buyers.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Carlos & Blue Mountain Roasters</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Carlos Mendoza grows coffee in Guatemala's Antigua region. In 2023, he joined CoffeeChain and 
              was contacted by Blue Mountain Roasters, a specialty roaster in Portland, Oregon.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "The buyer asked about my processing methods, my elevation, even the trees I use for shade," 
              Carlos recalls. "No one had ever cared about those details before. They just wanted cheap beans."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Blue Mountain placed a small test order. The coffee scored 86 points in their cupping. They were 
              impressed. For the next harvest, they pre-ordered Carlos's entire crop at a 45% premium over 
              commodity prices.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "Now I know exactly what they want," Carlos says. "They give me feedback, I adjust my process, 
              and every year the coffee gets better. And they pay better too."
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Priya's Journey to Specialty Status</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Priya Kumar's family has grown coffee in India's Western Ghats for three generations. They always 
              sold to local traders who mixed their coffee with others. No recognition, no premium for quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through CoffeeChain, Priya connected with a roaster in Melbourne, Australia. The roaster was 
              specifically looking for Indian coffee with unique flavor profiles. Priya's naturally processed 
              beans had the fruity notes they wanted.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "They featured my farm on their website," Priya says with pride. "Customers in Australia can 
              see photos of our farm, read our story, and know exactly where their coffee comes from."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The partnership has been so successful that Priya now works with three different roasters. Each 
              one wants slightly different processing styles, so she segregates her harvest into multiple lots. 
              Her income has tripled.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">What Makes These Relationships Work</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Successful farmer-buyer relationships on CoffeeChain share common elements:
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">1. Transparency</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              IoT sensor data provides objective quality information that both parties trust. No more 
              arguments about whether beans meet standards - the data speaks for itself.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">2. Communication</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Direct messaging on the platform keeps everyone informed. Farmers send harvest updates and 
              photos. Buyers share feedback and upcoming needs. Problems get resolved quickly.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">3. Fair Pricing</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When buyers understand the work that goes into quality coffee, they're willing to pay more. 
              Farmers who know their coffee is valued produce even better quality. It's a virtuous cycle.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">4. Mutual Respect</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These aren't anonymous transactions. Farmers and buyers develop genuine relationships. Some 
              roasters even visit their farmers' fields. This human connection makes the partnership stronger.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Building Your First Relationship</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              New farmers on CoffeeChain often wonder how to stand out and attract buyers. Here's what works:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
              <li><strong>Tell your story:</strong> Buyers want to know about you and your farm. Share what makes you unique.</li>
              <li><strong>Show your quality:</strong> Upload high-res photos of your beans, farm, and process.</li>
              <li><strong>Be responsive:</strong> Answer inquiries quickly. First impressions matter.</li>
              <li><strong>Start small:</strong> Offer sample lots so buyers can test your coffee without big commitment.</li>
              <li><strong>Accept feedback:</strong> Buyers have valuable insights. Listen and adapt.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">The Long-Term View</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most successful farmers on CoffeeChain think in terms of years, not transactions. They 
              invest in relationships knowing that loyal buyers provide stable income and predictable demand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "My grandfather sold to traders his whole life," says Carlos. "He never knew where his coffee 
              went or who drank it. Now I get photos from Portland of customers enjoying my beans. That 
              connection drives me to make every harvest better than the last."
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-10">
              <p className="text-sm font-semibold mb-2">Start building your buyer relationships</p>
              <p className="text-sm text-muted-foreground mb-4">
                Join CoffeeChain and connect directly with roasters who value quality and transparency.
              </p>
              <Link to="/auth">
                <Button className="gradient-coffee text-primary-foreground">
                  Create Your Farmer Profile
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
