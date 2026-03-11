import { MessageCircle, Zap, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI that handles customer queries, provides support, and enhances user engagement 24/7.',
    icon: MessageCircle,
    features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Custom personality and tone'],
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline your business processes with AI-powered automation that reduces manual work and increases efficiency.',
    icon: Zap,
    features: ['Process optimization', 'Data entry automation', 'Report generation', 'Task scheduling'],
  },
  {
    title: 'AI Assistants',
    description: 'Custom AI assistants tailored to your business needs, helping employees work smarter and faster.',
    icon: BrainCircuit,
    features: ['Document analysis', 'Decision support', 'Knowledge management', 'Predictive insights'],
  },
];

const SolvmindServices = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our AI Solutions
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI services designed to transform modern businesses with intelligent automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="h-full border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution? We build AI tools tailored to your specific business requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolvmindServices;
