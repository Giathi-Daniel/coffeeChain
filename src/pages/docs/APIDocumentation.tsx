import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code } from "lucide-react";
import { Link } from "react-router-dom";

export default function APIDocumentation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <article className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/documentation">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Button>
          </Link>

          <Badge className="mb-4">API Documentation</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            CoffeeChain API Reference
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Integrate CoffeeChain data and functionality into your applications with our REST API.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Authentication</h2>
            <Card className="p-6 mb-6 bg-slate-950 text-slate-50">
              <p className="text-sm mb-4 text-slate-300">All API requests require authentication using an API key.</p>
              <pre className="bg-slate-900 p-4 rounded overflow-x-auto">
                <code className="text-sm text-slate-300">{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.coffeechain.com/v1/farmers`}</code>
              </pre>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Base URL</h2>
            <Card className="p-4 mb-6">
              <code className="text-secondary">https://api.coffeechain.com/v1</code>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Endpoints</h2>

            <h3 className="text-xl font-bold mt-8 mb-3">Get Farmer Profile</h3>
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge>GET</Badge>
                <code className="text-sm">/farmers/:id</code>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Retrieve detailed information about a specific farmer.
              </p>
              <div className="bg-slate-950 p-4 rounded overflow-x-auto">
                <pre>
                  <code className="text-sm text-slate-300">{`// Request
curl -X GET "https://api.coffeechain.com/v1/farmers/123" \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response
{
  "id": "123",
  "name": "Maria Santos",
  "location": "Huila, Colombia",
  "farmSize": "5 hectares",
  "certifications": ["Organic", "Fair Trade"],
  "qualityScore": 94,
  "listings": [...]
}`}</code>
                </pre>
              </div>
            </Card>

            <h3 className="text-xl font-bold mt-8 mb-3">List Coffee Listings</h3>
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge>GET</Badge>
                <code className="text-sm">/listings</code>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Get all available coffee listings with optional filters.
              </p>
              <div className="bg-slate-950 p-4 rounded overflow-x-auto">
                <pre>
                  <code className="text-sm text-slate-300">{`// Request with filters
curl -X GET "https://api.coffeechain.com/v1/listings?country=colombia&minQuality=85" \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response
{
  "listings": [
    {
      "id": "456",
      "farmerId": "123",
      "variety": "Caturra",
      "processing": "Washed",
      "quantity": "500kg",
      "pricePerKg": 4.80,
      "qualityScore": 94,
      "harvestDate": "2024-01-15"
    }
  ],
  "pagination": {
    "page": 1,
    "totalPages": 5,
    "totalResults": 50
  }
}`}</code>
                </pre>
              </div>
            </Card>

            <h3 className="text-xl font-bold mt-8 mb-3">Get IoT Sensor Data</h3>
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge>GET</Badge>
                <code className="text-sm">/sensors/:farmerId/data</code>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Retrieve real-time and historical sensor data for a farm.
              </p>
              <div className="bg-slate-950 p-4 rounded overflow-x-auto">
                <pre>
                  <code className="text-sm text-slate-300">{`// Request
curl -X GET "https://api.coffeechain.com/v1/sensors/123/data?days=7" \\
  -H "Authorization: Bearer YOUR_API_KEY"

// Response
{
  "farmerId": "123",
  "currentData": {
    "soilMoisture": 68,
    "temperature": 22.5,
    "humidity": 75,
    "lastUpdated": "2024-01-20T14:30:00Z"
  },
  "historicalData": [
    {
      "timestamp": "2024-01-20T00:00:00Z",
      "soilMoisture": 65,
      "temperature": 21.0,
      "humidity": 78
    }
  ]
}`}</code>
                </pre>
              </div>
            </Card>

            <h3 className="text-xl font-bold mt-8 mb-3">Create Purchase Order</h3>
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-accent text-white">POST</Badge>
                <code className="text-sm">/orders</code>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Place a purchase order for coffee from a listing.
              </p>
              <div className="bg-slate-950 p-4 rounded overflow-x-auto">
                <pre>
                  <code className="text-sm text-slate-300">{`// Request
curl -X POST "https://api.coffeechain.com/v1/orders" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "listingId": "456",
    "quantity": 100,
    "deliveryAddress": {
      "street": "123 Coffee St",
      "city": "Portland",
      "country": "USA",
      "postalCode": "97201"
    }
  }'

// Response
{
  "orderId": "789",
  "status": "pending_confirmation",
  "totalPrice": 480.00,
  "estimatedDelivery": "2024-02-15",
  "paymentDue": "2024-01-25"
}`}</code>
                </pre>
              </div>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Rate Limits</h2>
            <Card className="p-6 mb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Standard tier: 1,000 requests per hour</li>
                <li>• Premium tier: 10,000 requests per hour</li>
                <li>• Rate limit headers included in all responses</li>
              </ul>
            </Card>

            <h2 className="text-2xl font-bold mt-10 mb-4">Error Handling</h2>
            <Card className="p-6 mb-6">
              <div className="bg-slate-950 p-4 rounded overflow-x-auto">
                <pre>
                  <code className="text-sm text-slate-300">{`// Error Response
{
  "error": {
    "code": "INVALID_LISTING",
    "message": "The specified listing does not exist",
    "details": "Listing ID 999 not found"
  }
}`}</code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Common HTTP status codes: 200 (Success), 400 (Bad Request), 401 (Unauthorized), 
                404 (Not Found), 429 (Rate Limit Exceeded), 500 (Server Error)
              </p>
            </Card>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">Need API Access?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our team to get your API key and start integrating CoffeeChain.
              </p>
              <Link to="/contact">
                <Button className="gradient-coffee text-primary-foreground">
                  Request API Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
