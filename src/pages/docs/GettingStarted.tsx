import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function GettingStarted() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/documentation">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Button>
          </Link>

          <Badge className="mb-4">Getting Started</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Create Your Farmer Account
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Follow this step-by-step guide to set up your CoffeeChain farmer account and start selling directly to buyers.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 1: Sign Up</h2>
            <Card className="p-6 mb-6">
              <ol className="space-y-3 list-decimal pl-6">
                <li>Navigate to the <Link to="/auth" className="text-secondary hover:underline">Sign Up page</Link></li>
                <li>Select "Farmer" as your account type</li>
                <li>Enter your email address and create a secure password</li>
                <li>Verify your email address by clicking the link sent to your inbox</li>
              </ol>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 2: Complete Your Profile</h2>
            <Card className="p-6 mb-6">
              <p className="mb-4 text-muted-foreground">
                A complete profile builds trust with buyers. Make sure to include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Farm Details:</strong> Location, size, altitude, and growing conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Photos:</strong> High-quality images of your farm, coffee plants, and harvested beans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Certifications:</strong> Upload any organic, fair trade, or quality certifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span><strong>Farm Story:</strong> Tell buyers about your farming practices and what makes your coffee special</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 3: Request Free IoT Sensors</h2>
            <Card className="p-6 mb-6">
              <p className="mb-4 text-muted-foreground">
                IoT sensors are crucial for proving coffee quality to buyers:
              </p>
              <ol className="space-y-3 list-decimal pl-6">
                <li>Visit the <Link to="/sensor-request" className="text-secondary hover:underline">Sensor Request page</Link></li>
                <li>Fill out the sensor kit request form with your farm details</li>
                <li>Wait 5-7 days for delivery (free shipping)</li>
                <li>Follow the installation guide included in the kit</li>
                <li>Start collecting quality data automatically</li>
              </ol>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 4: Create Your First Listing</h2>
            <Card className="p-6 mb-6">
              <p className="mb-4 text-muted-foreground">
                Once your sensors are installed and collecting data:
              </p>
              <ol className="space-y-3 list-decimal pl-6">
                <li>Go to your <Link to="/farmer-dashboard" className="text-secondary hover:underline">Farmer Dashboard</Link></li>
                <li>Click "Create New Listing"</li>
                <li>Enter coffee details: variety, processing method, harvest date, quantity</li>
                <li>Set your asking price (view market rates for guidance)</li>
                <li>Publish your listing - buyers can now discover and purchase your coffee</li>
              </ol>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Step 5: Connect with Buyers</h2>
            <Card className="p-6 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Respond to buyer inquiries within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Share sensor data and photos when requested</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Negotiate prices and terms directly on the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span>Receive payment within 24 hours of order confirmation</span>
                </li>
              </ul>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Tips for Success</h2>
            <div className="bg-muted/50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li>• <strong>Keep sensors clean:</strong> Regular maintenance ensures accurate data</li>
                <li>• <strong>Update listings regularly:</strong> Keep quantity and availability current</li>
                <li>• <strong>Build relationships:</strong> Repeat buyers pay premium prices</li>
                <li>• <strong>Ask for feedback:</strong> Continuous improvement leads to better ratings</li>
                <li>• <strong>Join the community:</strong> Learn from other successful farmers</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">Need help?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is here to assist you at every step.
              </p>
              <Link to="/contact">
                <Button className="gradient-coffee text-primary-foreground">
                  Contact Support
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
