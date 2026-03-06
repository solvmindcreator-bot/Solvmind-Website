import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolvmindFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/2832538e-3ac7-424e-a4b9-437839705f73.png" 
                alt="Solvmind AI" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Solvmind AI</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              AI solutions provider specializing in chatbots, automation, 
              and custom AI tools for modern businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Papua New Guinea</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sales@solvmind.com</span>
              </div>
              <div className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+675 7452 7191</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-background/80 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-background/80 hover:text-background transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-background/80 hover:text-background transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <nav className="space-y-2">
              <div className="text-background/80">AI Chatbots</div>
              <div className="text-background/80">Workflow Automation</div>
              <div className="text-background/80">AI Assistants</div>
              <div className="text-background/80">AI Integration</div>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Solvmind AI. All rights reserved. Empowering business with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SolvmindFooter;