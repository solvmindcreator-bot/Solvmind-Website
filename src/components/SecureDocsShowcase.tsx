import { FileText, Shield, Search, FolderSync, Users, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import pngMapOutline from '@/assets/png-map-outline.png';
import secureDocsProduct from '@/assets/securedocs-product.jpg';

const secureDocsFeatures = [
  {
    icon: FileText,
    title: "Digitize & Organize Documents",
    description: "Convert paper-based records into searchable digital files with AI-powered OCR and classification.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption, access controls, and audit trails to keep sensitive documents safe.",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find any document instantly with intelligent search that understands context and content.",
  },
  {
    icon: FolderSync,
    title: "Automated Workflows",
    description: "Route documents for approval, review, and signing with configurable workflow automation.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Control who can view, edit, and share documents with granular permission management.",
  },
  {
    icon: Lock,
    title: "Compliance & Audit Ready",
    description: "Full document history, version control, and compliance reporting for regulatory requirements.",
  }
];

const SecureDocsShowcase = () => {
  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* PNG Map watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
        <img src={pngMapOutline} alt="" className="w-96" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 text-xs font-semibold tracking-wider uppercase px-3 py-1">
              Our Product
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              SecureDocs — AI-Powered Document Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A smart electronic document management system that organizes, secures, and retrieves your business documents with the power of AI.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={secureDocsProduct} 
              alt="SecureDocs AI Document Management" 
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl shadow-lg border border-border"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {secureDocsFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-xl p-8 sm:p-10 shadow-sm border border-border text-center">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Go Paperless with SecureDocs</h3>
          <p className="text-muted-foreground mb-6">Modernize your document management with AI-powered intelligence and enterprise security.</p>
          <Button size="lg" asChild>
            <Link to="/contact">Get SecureDocs for Your Business</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecureDocsShowcase;
