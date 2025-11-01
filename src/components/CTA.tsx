import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Smartphone } from "lucide-react";
import iotImage from "@/assets/iot-sensor.jpg";

export const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <Card className="overflow-hidden shadow-elevated">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your
                <span className="block text-secondary">
                  Coffee Business?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of coffee farmers who are earning more, selling smarter, and 
                building sustainable businesses with CoffeeChain.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Free to Get Started</h4>
                    <p className="text-sm text-muted-foreground">No upfront costs or hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Works on Your Phone</h4>
                    <p className="text-sm text-muted-foreground">SMS updates and mobile-friendly dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">IoT Sensors Included</h4>
                    <p className="text-sm text-muted-foreground">Free sensor kit with verified farmer accounts</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated group" onClick={() => window.location.href = '/auth'}>
                  Create Farmer Account
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/demo'}>
                  <Smartphone className="mr-2 w-5 h-5" />
                  Request Demo
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
              <img 
                src={iotImage} 
                alt="IoT sensor on coffee plant"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
