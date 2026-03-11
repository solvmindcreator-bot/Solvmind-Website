import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolvmindFooter = () => {
  return (
    <footer className="bg-[hsl(215,80%,12%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <img 
                src="/lovable-uploads/2832538e-3ac7-424e-a4b9-437839705f73.png" 
                alt="Solvmind AI" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">Solvmind AI</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              A proudly PNG-owned AI solutions provider specializing in chatbots, automation, 
              and custom AI tools for modern businesses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Papua New Guinea</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:sales@solvmind.com" className="text-sm hover:text-white transition-colors">sales@solvmind.com</a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+67574527191" className="text-sm hover:text-white transition-colors">+675 7452 7191</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/90">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-white/60 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="block text-white/60 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="block text-white/60 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="block text-white/60 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-white/90">Services</h3>
            <nav className="space-y-3">
              <div className="text-white/60 text-sm">AI Chatbots</div>
              <div className="text-white/60 text-sm">Workflow Automation</div>
              <div className="text-white/60 text-sm">AI Assistants</div>
              <div className="text-white/60 text-sm">SmartDesk</div>
              <div className="text-white/60 text-sm">SecureDocs</div>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Solvmind AI. All rights reserved. 🇵🇬 Proudly PNG-Owned.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SolvmindFooter;
