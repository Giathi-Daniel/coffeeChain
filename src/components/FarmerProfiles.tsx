import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Award, Package } from "lucide-react";
import farmerImage from "@/assets/farmer-profile.jpg";

const farmers = [
  {
    name: "Maria Santos",
    location: "Huila, Colombia",
    certifications: ["Organic", "Fair Trade"],
    specialty: "Arabica Specialty",
    rating: 4.9,
    production: "1,500 kg/month",
    image: farmerImage
  },
  {
    name: "João Silva",
    location: "Minas Gerais, Brazil",
    certifications: ["Rainforest Alliance"],
    specialty: "Premium Robusta",
    rating: 4.8,
    production: "2,200 kg/month",
    image: farmerImage
  },
  {
    name: "Aisha Mwangi",
    location: "Kiambu, Kenya",
    certifications: ["Organic", "UTZ"],
    specialty: "Single Origin AA",
    rating: 5.0,
    production: "800 kg/month",
    image: farmerImage
  }
];

export const FarmerProfiles = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our
            <span className="block text-secondary">
              Verified Farmers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every farmer on CoffeeChain is verified with certifications and quality tracking. 
            Connect directly with trusted producers.
          </p>
        </div>

        {/* Farmers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmers.map((farmer, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elevated transition-smooth group">
              {/* Farmer Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={farmer.image} 
                  alt={farmer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm">
                    ⭐ {farmer.rating}
                  </Badge>
                </div>
              </div>

              {/* Farmer Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{farmer.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{farmer.location}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {farmer.certifications.map((cert, i) => (
                    <Badge key={i} variant="outline" className="border-secondary/30 text-secondary">
                      <Award className="w-3 h-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Specialty</span>
                    <span className="font-semibold">{farmer.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Production</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {farmer.production}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full gradient-coffee text-primary-foreground">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
