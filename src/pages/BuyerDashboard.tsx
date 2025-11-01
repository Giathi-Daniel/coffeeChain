import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Package, Users, TrendingUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import farmerImage from "@/assets/farmer-profile.jpg";
import { Badge } from "@/components/ui/badge";

export default function BuyerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [farmers, setFarmers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
    loadFarmers();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/auth");
        return;
      }

      setUser(session.user);

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      setProfile(profileData);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadFarmers = async () => {
    try {
      const { data, error } = await supabase
        .from("farmer_accounts")
        .select(`
          *,
          profiles:user_id(full_name, location)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setFarmers(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const filteredFarmers = farmers.filter((farmer) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      farmer.farm_name?.toLowerCase().includes(searchLower) ||
      farmer.profiles?.location?.toLowerCase().includes(searchLower) ||
      farmer.coffee_varieties?.some((v: string) => v.toLowerCase().includes(searchLower)) ||
      farmer.certifications?.some((c: string) => c.toLowerCase().includes(searchLower))
    );
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Buyer Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {profile?.full_name || user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-2" />
              <h3 className="text-2xl font-bold">{farmers.length}</h3>
              <p className="text-sm text-muted-foreground">Available Farmers</p>
            </Card>
            <Card className="p-6">
              <Package className="w-8 h-8 text-secondary mb-2" />
              <h3 className="text-2xl font-bold">
                {farmers.reduce((sum, f) => sum + (f.available_stock_kg || 0), 0)} kg
              </h3>
              <p className="text-sm text-muted-foreground">Total Available Stock</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="w-8 h-8 text-accent mb-2" />
              <h3 className="text-2xl font-bold">
                ${farmers.length > 0 ? (farmers.reduce((sum, f) => sum + (f.price_per_kg || 0), 0) / farmers.length).toFixed(2) : "0.00"}
              </h3>
              <p className="text-sm text-muted-foreground">Avg Price/kg</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Browse Farmers</h2>
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg">
                <Search className="w-5 h-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="Search by farm, location, variety, or certification..."
                  className="flex-1 bg-transparent border-0 focus-visible:ring-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFarmers.map((farmer) => (
              <Card key={farmer.id} className="overflow-hidden hover:shadow-elevated transition-smooth">
                <div className="relative h-48">
                  <img 
                    src={farmerImage} 
                    alt={farmer.farm_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-secondary/90 text-white backdrop-blur-sm">
                      Quality: {farmer.quality_score || 90}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{farmer.farm_name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {farmer.profiles?.location || "Unknown location"}
                    </p>
                  </div>

                  {farmer.certifications && farmer.certifications.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {farmer.certifications.map((cert: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-bold text-accent">${farmer.price_per_kg}/kg</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-semibold">{farmer.available_stock_kg} kg</span>
                    </div>
                  </div>

                  <Button className="w-full gradient-coffee text-primary-foreground">
                    Contact Farmer
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredFarmers.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No farmers found matching your search.</p>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
