import { useState } from 'react';
import { Brain, MessageSquare, BarChart3, Image, FileText, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const AIToolsShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const aiTools = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "Automate complex business processes with AI-powered decision making",
      demo: "Process 1000+ documents in minutes instead of days",
      benefits: ["99% accuracy", "24/7 operation", "Cost reduction"],
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Smart Chatbots",
      description: "Customer service bots that understand context and emotion",
      demo: "Handle 80% of customer queries automatically",
      benefits: ["Human-like responses", "Multi-language", "Always available"],
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions",
      demo: "Predict sales with 95% accuracy for next quarter",
      benefits: ["Market insights", "Risk mitigation", "Revenue optimization"],
      color: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      icon: Image,
      title: "Computer Vision",
      description: "Analyze images and videos for quality control and insights",
      demo: "Detect defects faster than human inspection",
      benefits: ["Real-time analysis", "Quality assurance", "Safety monitoring"],
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Extract and process information from any document type",
      demo: "Convert paper forms to digital data instantly",
      benefits: ["OCR technology", "Data extraction", "Workflow automation"],
      color: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-time Intelligence",
      description: "Monitor and respond to events as they happen",
      demo: "Instant alerts and automated responses",
      benefits: ["Live monitoring", "Instant reactions", "Proactive solutions"],
      color: "bg-gradient-to-br from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AI Tools That Transform Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the power of artificial intelligence with our cutting-edge tools designed to revolutionize your operations
          </p>
        </div>

        {/* Mobile-first grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiTools.map((tool, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 overflow-hidden ${
                activeDemo === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveDemo(index)}
            >
              <CardHeader className={`${tool.color} text-white relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <tool.icon className="h-8 w-8 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">{tool.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{tool.description}</p>
                <div className="space-y-2">
                  {tool.benefits.map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-1 text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Live Demo</h3>
            <p className="text-muted-foreground">See {aiTools[activeDemo].title} in action</p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 sm:p-8 text-white">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">AI Demo Terminal</span>
            </div>
            
            <div className="font-mono text-sm">
              <div className="text-green-400 mb-2">$ ai-tools --run {aiTools[activeDemo].title.toLowerCase().replace(/\s+/g, '-')}</div>
              <div className="text-blue-400 mb-2">Initializing AI model...</div>
              <div className="text-yellow-400 mb-2">Processing data...</div>
              <div className="text-green-400 mb-4">✓ {aiTools[activeDemo].demo}</div>
              <div className="text-white">
                Ready to implement this solution for your business.
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" className="hover-scale" asChild>
              <Link to="/contact">
                Schedule Demo Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsShowcase;