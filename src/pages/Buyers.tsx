import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Package, Award, MapPin, Star } from "lucide-react";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function Buyers() {
  const categories = [
    { name: "Arabica Specialty", count: "850+ farmers" },
    { name: "Organic Certified", count: "420+ farmers" },
    { name: "Fair Trade", count: "680+ farmers" },
    { name: "Single Origin", count: "320+ farmers" }
  ];

  const farmers = [
    {
      name: "Maria Santos",
      location: "Huila, Colombia",
      certifications: ["Organic", "Fair Trade"],
      specialty: "Arabica Specialty",
      rating: 4.9,
      price: "$4.80/kg",
      available: "1,200 kg",
      quality: 94
    },
    {
      name: "João Silva",
      location: "Minas Gerais, Brazil",
      certifications: ["Rainforest Alliance"],
      specialty: "Premium Robusta",
      rating: 4.8,
      price: "$3.90/kg",
      available: "2,500 kg",
      quality: 91
    },
    {
      name: "Aisha Mwangi",
      location: "Kiambu, Kenya",
      certifications: ["Organic", "UTZ"],
      specialty: "Single Origin AA",
      rating: 5.0,
      price: "$5.20/kg",
      available: "600 kg",
      quality: 98
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              For Coffee Buyers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Source Premium Coffee
              <span className="block text-primary">
                Directly from Farmers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access verified farmers with quality tracking data, certifications, and transparent pricing. 
              Build sustainable relationships and get the best beans.
            </p>

            {/* Search Bar */}
            <Card className="p-4 shadow-elevated">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search by origin, certification, or specialty..."
                    className="flex-1 bg-transparent outline-none"
                  />
                </div>
                <Button className="gradient-coffee text-primary-foreground">
                  <Filter className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-4 cursor-pointer hover:shadow-elevated transition-smooth group"
              >
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-smooth">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Farmers</h2>
              <p className="text-muted-foreground">Verified profiles with quality tracking</p>
            </div>
            <Button variant="outline">
              View All Farmers
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmers.map((farmer, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-smooth group">
                {/* Farmer Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={farmerImage} 
                    alt={farmer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm">
                      ⭐ {farmer.rating}
                    </Badge>
                    <Badge className="bg-secondary/90 text-white backdrop-blur-sm">
                      Quality: {farmer.quality}
                    </Badge>
                  </div>
                </div>

                {/* Farmer Info */}
                <div className="p-5 space-y-4">
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
                      <Badge key={i} variant="outline" className="border-secondary/30 text-secondary text-xs">
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
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-bold text-accent">{farmer.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-semibold flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        {farmer.available}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full gradient-coffee text-primary-foreground">
                    Contact Farmer
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Buyers Trust CoffeeChain</h2>
            <p className="text-lg text-muted-foreground">
              Transparent quality data and verified certifications for confident purchasing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl gradient-coffee flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Verified</h3>
              <p className="text-muted-foreground">
                Real-time IoT data tracking bean quality, soil conditions, and harvest timing
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl gradient-earth flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Certified Farmers</h3>
              <p className="text-muted-foreground">
                All certifications verified - Organic, Fair Trade, Rainforest Alliance, and more
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl gradient-golden flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Sourcing</h3>
              <p className="text-muted-foreground">
                Eliminate middlemen, reduce costs, and build lasting relationships with farmers
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Sourcing Better Coffee Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading roasters, cooperatives, and exporters on CoffeeChain
          </p>
          <Button size="lg" className="gradient-coffee text-primary-foreground shadow-elevated" onClick={() => window.location.href = '/auth'}>
            Create Buyer Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
