import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, FileText, Video, Code, HelpCircle, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

type DocLink = {
  text: string;
  url: string;
};

export default function Documentation() {
  const sections: Array<{
    icon: typeof Book;
    title: string;
    description: string;
    links: DocLink[];
  }> = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guides for farmers and buyers",
      links: [
        { text: "Create your farmer account", url: "/docs/getting-started" },
        { text: "Set up your first listing", url: "/docs/getting-started" },
        { text: "How to buy coffee on CoffeeChain", url: "/docs/getting-started" },
        { text: "Understanding quality metrics", url: "/blog/quality-metrics" }
      ]
    },
    {
      icon: Smartphone,
      title: "IoT Sensors",
      description: "Installation and usage guides",
      links: [
        { text: "Sensor installation guide", url: "/iot" },
        { text: "Reading sensor data", url: "/iot" },
        { text: "Troubleshooting sensors", url: "/iot" },
        { text: "Maintenance and care", url: "/iot" }
      ]
    },
    {
      icon: FileText,
      title: "Marketplace",
      description: "Buying and selling on the platform",
      links: [
        { text: "Creating effective listings", url: "/docs/getting-started" },
        { text: "Pricing your coffee", url: "/blog/maximizing-prices" },
        { text: "Negotiating with buyers", url: "/blog/buyer-relationships" },
        { text: "Payment processing", url: "/docs/getting-started" }
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "For developers and integrations",
      links: [
        { text: "API overview", url: "/docs/api" },
        { text: "Authentication", url: "/docs/api" },
        { text: "Endpoints reference", url: "/docs/api" },
        { text: "Code examples", url: "/docs/api" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CoffeeChain
            <span className="block text-secondary">
              Documentation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know to succeed on CoffeeChain
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Search documentation..."
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <Button className="gradient-coffee text-primary-foreground">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-elevated transition-smooth cursor-pointer">
              <Video className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground">Watch step-by-step guides</p>
            </Card>

            <Card className="p-6 hover:shadow-elevated transition-smooth cursor-pointer">
              <HelpCircle className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">FAQ</h3>
              <p className="text-sm text-muted-foreground">Common questions answered</p>
            </Card>

            <Link to="/contact">
              <Card className="p-6 hover:shadow-elevated transition-smooth cursor-pointer">
                <Smartphone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground">Get help from our team</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-earth flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{section.title}</h3>
                      <p className="text-sm text-muted-foreground">{section.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.url}
                          className="text-sm text-secondary hover:underline flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-8">Popular Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "How to maximize your coffee prices",
              "Understanding IoT sensor readings",
              "Best practices for coffee quality",
              "Setting up payment methods",
              "Verification and certifications",
              "Dealing with weather challenges"
            ].map((article, index) => (
              <Card key={index} className="p-5 hover:shadow-elevated transition-smooth cursor-pointer">
                <FileText className="w-5 h-5 text-muted-foreground mb-3" />
                <h3 className="font-semibold mb-2">{article}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn essential tips and strategies...
                </p>
                <a href="#" className="text-sm text-secondary hover:underline">
                  Read more →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
