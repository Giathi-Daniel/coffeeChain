import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Farmers from "./pages/Farmers";
import Buyers from "./pages/Buyers";
import IoT from "./pages/IoT";
import Analytics from "./pages/Analytics";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Auth from "./pages/Auth";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import DemoVideo from "./pages/DemoVideo";
import SensorRequest from "./pages/SensorRequest";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import IoTIncomeSuccess from "./pages/blog/IoTIncomeSuccess";
import QualityMetrics from "./pages/blog/QualityMetrics";
import MiddlemenCost from "./pages/blog/MiddlemenCost";
import MaximizingPrices from "./pages/blog/MaximizingPrices";
import ClimateAdaptation from "./pages/blog/ClimateAdaptation";
import BuyerRelationships from "./pages/blog/BuyerRelationships";
import GettingStarted from "./pages/docs/GettingStarted";
import APIDocumentation from "./pages/docs/APIDocumentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/iot" element={<IoT />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/iot-income-success" element={<IoTIncomeSuccess />} />
          <Route path="/blog/quality-metrics" element={<QualityMetrics />} />
          <Route path="/blog/middlemen-cost" element={<MiddlemenCost />} />
          <Route path="/blog/maximizing-prices" element={<MaximizingPrices />} />
          <Route path="/blog/climate-adaptation" element={<ClimateAdaptation />} />
          <Route path="/blog/buyer-relationships" element={<BuyerRelationships />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/api" element={<APIDocumentation />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/demo" element={<DemoVideo />} />
          <Route path="/sensor-request" element={<SensorRequest />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
