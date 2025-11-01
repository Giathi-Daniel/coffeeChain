import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Package, DollarSign, Users, TrendingUp } from "lucide-react";

export default function FarmerDashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [farmerAccount, setFarmerAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    farm_name: "",
    farm_size_hectares: "",
    coffee_varieties: "",
    certifications: "",
    annual_production_kg: "",
    price_per_kg: "",
    available_stock_kg: "",
  });

  useEffect(() => {
    checkUser();
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

      if (profileData?.user_type !== "farmer") {
        navigate("/dashboard");
        return;
      }

      const { data: farmerData } = await supabase
        .from("farmer_accounts")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (farmerData) {
        setFarmerAccount(farmerData);
      setFormData({
        farm_name: farmerData.farm_name || "",
        farm_size_hectares: farmerData.farm_size_hectares?.toString() || "",
        coffee_varieties: farmerData.coffee_varieties?.join(", ") || "",
        certifications: farmerData.certifications?.join(", ") || "",
        annual_production_kg: farmerData.annual_production_kg?.toString() || "",
        price_per_kg: farmerData.price_per_kg?.toString() || "",
        available_stock_kg: farmerData.available_stock_kg?.toString() || "",
      });
      } else {
        setEditing(true);
      }
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

  const handleSave = async () => {
    try {
      setLoading(true);

      const dataToSave = {
        user_id: user.id,
        farm_name: formData.farm_name,
        farm_size_hectares: parseFloat(formData.farm_size_hectares),
        coffee_varieties: formData.coffee_varieties.split(",").map((v) => v.trim()),
        certifications: formData.certifications.split(",").map((c) => c.trim()),
        annual_production_kg: parseInt(formData.annual_production_kg),
        price_per_kg: parseFloat(formData.price_per_kg),
        available_stock_kg: parseInt(formData.available_stock_kg),
      };

      if (farmerAccount) {
        const { error } = await supabase
          .from("farmer_accounts")
          .update(dataToSave)
          .eq("id", farmerAccount.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("farmer_accounts")
          .insert(dataToSave);

        if (error) throw error;
      }

      toast({
        title: "Success",
        description: "Farmer profile saved successfully",
      });

      setEditing(false);
      checkUser();
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

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
              <h1 className="text-4xl font-bold mb-2">Farmer Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {profile?.full_name || user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>

          {!editing && farmerAccount && (
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <Package className="w-8 h-8 text-primary mb-2" />
                <h3 className="text-2xl font-bold">{farmerAccount.available_stock_kg} kg</h3>
                <p className="text-sm text-muted-foreground">Available Stock</p>
              </Card>
              <Card className="p-6">
                <DollarSign className="w-8 h-8 text-accent mb-2" />
                <h3 className="text-2xl font-bold">${farmerAccount.price_per_kg}/kg</h3>
                <p className="text-sm text-muted-foreground">Current Price</p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="w-8 h-8 text-secondary mb-2" />
                <h3 className="text-2xl font-bold">{farmerAccount.annual_production_kg} kg</h3>
                <p className="text-sm text-muted-foreground">Annual Production</p>
              </Card>
              <Card className="p-6">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h3 className="text-2xl font-bold">{farmerAccount.certifications?.length || 0}</h3>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <Card className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Farm Profile</h2>
              {!editing && farmerAccount && (
                <Button onClick={() => setEditing(true)}>Edit Profile</Button>
              )}
            </div>

            {editing ? (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Farm Name</Label>
                    <Input
                      value={formData.farm_name}
                      onChange={(e) => setFormData({ ...formData, farm_name: e.target.value })}
                      placeholder="e.g., Santos Coffee Estate"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Farm Size (Hectares)</Label>
                    <Input
                      type="number"
                      value={formData.farm_size_hectares}
                      onChange={(e) => setFormData({ ...formData, farm_size_hectares: e.target.value })}
                      placeholder="e.g., 5.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Coffee Varieties (comma-separated)</Label>
                    <Input
                      value={formData.coffee_varieties}
                      onChange={(e) => setFormData({ ...formData, coffee_varieties: e.target.value })}
                      placeholder="e.g., Arabica, Robusta"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Certifications (comma-separated)</Label>
                    <Input
                      value={formData.certifications}
                      onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                      placeholder="e.g., Organic, Fair Trade"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Annual Production (kg)</Label>
                    <Input
                      type="number"
                      value={formData.annual_production_kg}
                      onChange={(e) => setFormData({ ...formData, annual_production_kg: e.target.value })}
                      placeholder="e.g., 10000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Price per kg ($)</Label>
                    <Input
                      type="number"
                      step="0.01"
                      value={formData.price_per_kg}
                      onChange={(e) => setFormData({ ...formData, price_per_kg: e.target.value })}
                      placeholder="e.g., 4.80"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Available Stock (kg)</Label>
                    <Input
                      type="number"
                      value={formData.available_stock_kg}
                      onChange={(e) => setFormData({ ...formData, available_stock_kg: e.target.value })}
                      placeholder="e.g., 1200"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleSave} className="gradient-coffee text-primary-foreground">
                    Save Profile
                  </Button>
                  {farmerAccount && (
                    <Button variant="outline" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {farmerAccount ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Farm Name</p>
                        <p className="font-semibold">{farmerAccount.farm_name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Farm Size</p>
                        <p className="font-semibold">{farmerAccount.farm_size_hectares} hectares</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Coffee Varieties</p>
                        <p className="font-semibold">{farmerAccount.coffee_varieties?.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Certifications</p>
                        <p className="font-semibold">{farmerAccount.certifications?.join(", ")}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground">No farm profile found. Please create one.</p>
                )}
              </div>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
