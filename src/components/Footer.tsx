import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-earth flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">CoffeeChain</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering coffee farmers with technology, transparency, and fair trade.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/farmers" className="hover:text-foreground transition-smooth">For Farmers</Link></li>
              <li><Link to="/buyers" className="hover:text-foreground transition-smooth">For Buyers</Link></li>
              <li><Link to="/iot" className="hover:text-foreground transition-smooth">IoT Sensors</Link></li>
              <li><Link to="/analytics" className="hover:text-foreground transition-smooth">Analytics</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/documentation" className="hover:text-foreground transition-smooth">Documentation</Link></li>
              <li><Link to="/documentation" className="hover:text-foreground transition-smooth">API Access</Link></li>
              <li><Link to="/support" className="hover:text-foreground transition-smooth">Support Center</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-smooth">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-smooth">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-smooth">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-smooth">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-smooth">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 CoffeeChain. All rights reserved. Built with care for coffee farmers worldwide.</p>
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://github.com/Giathi-Daniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Giathi Daniel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
