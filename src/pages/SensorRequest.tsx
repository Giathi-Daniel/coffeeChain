import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Droplet, ThermometerSun, CloudRain } from "lucide-react";

export default function SensorRequest() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    farm_location: "",
    farm_size_hectares: "",
  });

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      setUser(session.user);
      setFormData((prev) => ({
        ...prev,
        email: session.user.email || "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to request a sensor kit.",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("sensor_requests").insert({
        user_id: user.id,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        farm_location: formData.farm_location,
        farm_size_hectares: parseFloat(formData.farm_size_hectares),
      });

      if (error) throw error;

      toast({
        title: "Request submitted!",
        description: "We'll contact you within 2-3 business days to arrange delivery.",
      });

      setFormData({
        full_name: "",
        email: user.email || "",
        phone: "",
        farm_location: "",
        farm_size_hectares: "",
      });
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

  const sensorKit = [
    { icon: Droplet, name: "3x Soil Moisture Sensors" },
    { icon: ThermometerSun, name: "2x Temperature Sensors" },
    { icon: CloudRain, name: "1x Weather Station" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Free for Verified Farmers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Request Your
              <span className="block gradient-earth bg-clip-text text-transparent">
                Free Sensor Kit
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get advanced IoT sensors to monitor your farm's conditions in real-time. 
              Completely free for verified CoffeeChain farmers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card className="p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Your Sensor Kit Includes</h2>
                
                <div className="space-y-6 mb-8">
                  {sensorKit.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-earth flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-3 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm">Solar panels and mounting hardware</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm">Free lifetime cloud storage and analytics</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm">Installation guide and 24/7 support</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm">Mobile app for real-time monitoring</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Request Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farm_location">Farm Location *</Label>
                    <Input
                      id="farm_location"
                      placeholder="e.g., Huila, Colombia"
                      value={formData.farm_location}
                      onChange={(e) => setFormData({ ...formData, farm_location: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farm_size">Farm Size (Hectares) *</Label>
                    <Input
                      id="farm_size"
                      type="number"
                      step="0.1"
                      placeholder="e.g., 5.5"
                      value={formData.farm_size_hectares}
                      onChange={(e) => setFormData({ ...formData, farm_size_hectares: e.target.value })}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-coffee text-primary-foreground"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Request Free Sensor Kit"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll review your request and contact you within 2-3 business days
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
