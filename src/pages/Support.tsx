import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

export default function Support() {
  const faqs = [
    {
      question: "How do I create a farmer account?",
      answer: "Creating a farmer account is simple! Click 'Get Started' and fill out the registration form with your farm details. You'll need to verify your identity and provide basic information about your coffee production."
    },
    {
      question: "What certifications are accepted on CoffeeChain?",
      answer: "We accept all major coffee certifications including Organic, Fair Trade, Rainforest Alliance, UTZ, and others. Upload your certification documents during profile setup, and our team will verify them within 48 hours."
    },
    {
      question: "How does IoT sensor installation work?",
      answer: "Once your farmer account is verified, we'll ship you a free IoT sensor kit with installation instructions. The sensors are easy to install - just place them in your fields following the guide, and they'll start sending data automatically via wireless connection."
    },
    {
      question: "When do I receive payment for my coffee?",
      answer: "Payment is processed within 24 hours of order confirmation. You'll receive an SMS notification when payment is initiated. Funds are transferred directly to your bank account or mobile money wallet."
    },
    {
      question: "What are the fees for using CoffeeChain?",
      answer: "CoffeeChain charges a small 5% transaction fee only when you successfully sell coffee. There are no monthly fees, listing fees, or hidden charges. The IoT sensor kit is completely free for verified farmers."
    },
    {
      question: "How is coffee quality determined?",
      answer: "Quality is determined through a combination of IoT sensor data (soil moisture, temperature), your quality assessments, and buyer feedback. Our algorithm calculates a quality score from 0-100 based on these factors."
    },
    {
      question: "Can I sell to multiple buyers?",
      answer: "Yes! You can have relationships with as many buyers as you want. Build your customer base by providing consistent quality and excellent communication."
    },
    {
      question: "What if a buyer disputes the quality?",
      answer: "All transactions are protected. If there's a dispute, our team reviews the IoT data, photos, and both parties' claims to make a fair decision. Your sensor data provides objective evidence of quality."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support
            <span className="block text-secondary">
              Center
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/contact">
              <Card className="p-6 text-center hover:shadow-elevated transition-smooth cursor-pointer">
                <MessageCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Available 9AM - 6PM</p>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="p-6 text-center hover:shadow-elevated transition-smooth cursor-pointer">
                <Mail className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground">Response in 24h</p>
              </Card>
            </Link>

            <Link to="/contact">
              <Card className="p-6 text-center hover:shadow-elevated transition-smooth cursor-pointer">
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground">Call us anytime</p>
              </Card>
            </Link>

            <Link to="/documentation">
              <Card className="p-6 text-center hover:shadow-elevated transition-smooth cursor-pointer">
                <FileQuestion className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Documentation</h3>
                <p className="text-sm text-muted-foreground">Self-help guides</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about CoffeeChain
            </p>
          </div>

          <Card className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our support team is here to help you succeed
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated">
              Contact Support Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
