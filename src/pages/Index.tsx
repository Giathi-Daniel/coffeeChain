import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { FarmerProfiles } from "@/components/FarmerProfiles";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Dashboard />
      <FarmerProfiles />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
