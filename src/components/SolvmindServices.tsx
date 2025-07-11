import { MessageCircle, Zap, BrainCircuit, Puzzle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI that handles customer queries, provides support, and enhances user engagement 24/7.',
    icon: MessageCircle,
    features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Custom personality and tone'],
    color: 'text-primary'
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline your business processes with AI-powered automation that reduces manual work and increases efficiency.',
    icon: Zap,
    features: ['Process optimization', 'Data entry automation', 'Report generation', 'Task scheduling'],
    color: 'text-secondary'
  },
  {
    title: 'AI Assistants',
    description: 'Custom AI assistants tailored to your business needs, helping employees work smarter and faster.',
    icon: BrainCircuit,
    features: ['Document analysis', 'Decision support', 'Knowledge management', 'Predictive insights'],
    color: 'text-primary'
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows without disruption.',
    icon: Puzzle,
    features: ['API development', 'System integration', 'Data migration', 'Staff training'],
    color: 'text-secondary'
  }
];

const SolvmindServices = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI services designed to transform modern businesses with intelligent automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-500 border-border/50 hover:border-primary/30 hover:ai-glow hover:scale-105 hover-lift scroll-animate"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 ${service.color} group-hover:scale-110 transition-transform neural-pulse overflow-hidden relative`}>
                      <Icon className="h-8 w-8 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground mb-3 group-hover:text-primary transition-colors">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300"
                          style={{ animationDelay: `${(index * 150) + (featureIndex * 50)}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hidden content revealed on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="h-px bg-gradient-to-r from-primary/50 to-secondary/50 mb-3"></div>
                    <p className="text-xs text-muted-foreground">
                      Contact us to learn how this solution can be customized for your business needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We build AI tools tailored to your specific business requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolvmindServices;