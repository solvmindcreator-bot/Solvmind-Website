import { Bot, Workflow, Brain, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational AI that handles customer queries, provides support, and enhances user engagement 24/7.',
    icon: Bot,
    features: ['Natural language processing', 'Multi-language support', 'Integration with existing systems', 'Custom personality and tone'],
    color: 'text-primary'
  },
  {
    title: 'Workflow Automation',
    description: 'Streamline your business processes with AI-powered automation that reduces manual work and increases efficiency.',
    icon: Workflow,
    features: ['Process optimization', 'Data entry automation', 'Report generation', 'Task scheduling'],
    color: 'text-secondary'
  },
  {
    title: 'AI Assistants',
    description: 'Custom AI assistants tailored to your business needs, helping employees work smarter and faster.',
    icon: Brain,
    features: ['Document analysis', 'Decision support', 'Knowledge management', 'Predictive insights'],
    color: 'text-primary'
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows without disruption.',
    icon: Settings,
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
            Comprehensive AI services designed specifically for businesses in Papua New Guinea and the Pacific region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 ${service.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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