import { FileText, Shield, Search, FolderSync, Users, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import pngMapOutline from '@/assets/png-map-outline.png';

const secureDocsFeatures = [
  {
    icon: FileText,
    title: "Digitize & Organize Documents",
    description: "Convert paper-based records into searchable digital files with AI-powered OCR and classification.",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption, access controls, and audit trails to keep sensitive documents safe.",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find any document instantly with intelligent search that understands context and content.",
    color: "bg-gradient-to-br from-violet-500 to-purple-600"
  },
  {
    icon: FolderSync,
    title: "Automated Workflows",
    description: "Route documents for approval, review, and signing with configurable workflow automation.",
    color: "bg-gradient-to-br from-orange-500 to-amber-600"
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Control who can view, edit, and share documents with granular permission management.",
    color: "bg-gradient-to-br from-rose-500 to-pink-600"
  },
  {
    icon: Lock,
    title: "Compliance & Audit Ready",
    description: "Full document history, version control, and compliance reporting for regulatory requirements.",
    color: "bg-gradient-to-br from-cyan-500 to-sky-600"
  }
];

const SecureDocsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* PNG Map watermark on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
        <img src={pngMapOutline} alt="" className="w-96" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Our Product</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            SecureDocs – AI-Powered Document Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A smart electronic document management system that organizes, secures, and retrieves your business documents with the power of AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {secureDocsFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
            >
              <div className={`${feature.color} p-4 text-white`}>
                <feature.icon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border text-center">
          <h3 className="text-2xl font-bold mb-2">Go Paperless with SecureDocs</h3>
          <p className="text-muted-foreground mb-6">Modernize your document management with AI-powered intelligence and enterprise security.</p>
          <Button size="lg" className="hover:scale-105 transition-transform" asChild>
            <Link to="/contact">Get SecureDocs for Your Business</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecureDocsShowcase;
