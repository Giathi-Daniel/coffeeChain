import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";

export default function Careers() {
  const values = [
    {
      icon: Heart,
      title: "Impact First",
      description: "We're building technology that directly improves farmers' lives and creates sustainable supply chains."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work together across teams and with our community to build the best solutions."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We embrace challenges, learn from failures, and constantly improve our skills."
    },
    {
      icon: Briefcase,
      title: "Ownership",
      description: "Every team member takes responsibility for their work and its impact on farmers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Careers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission to
              <span className="block gradient-coffee bg-clip-text text-transparent">
                Transform Coffee Trade
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us build technology that empowers coffee farmers and creates 
              transparent, fair supply chains around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="w-12 h-12 rounded-xl gradient-earth flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            
            <Card className="p-12 text-center shadow-elevated">
              <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">No Open Positions</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always interested 
                in meeting talented people who share our mission.
              </p>
              <Button 
                size="lg" 
                className="gradient-coffee text-primary-foreground"
                onClick={() => window.location.href = "mailto:careers@coffeechain.com"}
              >
                Send Us Your Resume
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                careers@coffeechain.com
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated on company news and future opportunities
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="outline">
              LinkedIn
            </Button>
            <Button size="lg" variant="outline">
              Twitter
            </Button>
            <Button size="lg" variant="outline">
              Instagram
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
