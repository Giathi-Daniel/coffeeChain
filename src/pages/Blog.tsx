import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import farmerImage from "@/assets/farmer-profile.jpg";

export default function Blog() {
  const posts = [
    {
      title: "How IoT Sensors Increased This Farmer's Income by 50%",
      excerpt: "Maria Santos from Colombia shares how data-driven farming transformed her coffee business and doubled her earnings in just one season.",
      category: "Success Stories",
      date: "Dec 15, 2024",
      readTime: "5 min",
      author: "CoffeeChain Team",
      image: farmerImage
    },
    {
      title: "Understanding Coffee Quality Metrics: A Complete Guide",
      excerpt: "Learn what buyers look for in premium coffee and how to optimize your farming practices for higher quality scores.",
      category: "Education",
      date: "Dec 12, 2024",
      readTime: "8 min",
      author: "Dr. James Rodriguez",
      image: farmerImage
    },
    {
      title: "The True Cost of Coffee Middlemen",
      excerpt: "An in-depth analysis of how traditional supply chains extract value from farmers and why direct trade is the future.",
      category: "Industry Insights",
      date: "Dec 8, 2024",
      readTime: "6 min",
      author: "Sarah Chen",
      image: farmerImage
    },
    {
      title: "5 Tips for Maximizing Your Coffee Prices",
      excerpt: "Proven strategies from top-earning farmers on CoffeeChain for getting the best prices for your beans.",
      category: "Tips & Tricks",
      date: "Dec 5, 2024",
      readTime: "4 min",
      author: "CoffeeChain Team",
      image: farmerImage
    },
    {
      title: "Climate Change and Coffee: Adapting Your Farm",
      excerpt: "How farmers are using IoT data to adapt to changing weather patterns and protect their crops.",
      category: "Sustainability",
      date: "Dec 1, 2024",
      readTime: "7 min",
      author: "Dr. Maria Silva",
      image: farmerImage
    },
    {
      title: "From Farm to Cup: Building Direct Buyer Relationships",
      excerpt: "Success stories of farmers who built lasting partnerships with roasters through CoffeeChain's platform.",
      category: "Success Stories",
      date: "Nov 28, 2024",
      readTime: "5 min",
      author: "CoffeeChain Team",
      image: farmerImage
    }
  ];

  const categories = ["All", "Success Stories", "Education", "Industry Insights", "Tips & Tricks", "Sustainability"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CoffeeChain
            <span className="block text-secondary">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stories, insights, and tips from the coffee farming community
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-coffee text-white cursor-pointer" : "cursor-pointer hover:bg-secondary hover:text-white transition-smooth"}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const postLinks = [
                '/blog/iot-income-success',
                '/blog/quality-metrics',
                '/blog/middlemen-cost',
                '/blog/maximizing-prices',
                '/blog/climate-adaptation',
                '/blog/buyer-relationships'
              ];
              
              return (
                <Link key={index} to={postLinks[index]}>
                  <Card className="overflow-hidden hover:shadow-elevated transition-smooth cursor-pointer group h-full">
                    {/* Post Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-secondary/90 text-white backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="pt-4 border-t border-border space-y-2">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <User className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Badge variant="outline" className="cursor-pointer hover:bg-secondary hover:text-white transition-smooth px-6 py-2">
              Load More Articles
            </Badge>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <Card className="p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest stories and insights delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
              />
              <button className="px-6 py-3 rounded-lg gradient-coffee text-primary-foreground font-medium">
                Subscribe
              </button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
