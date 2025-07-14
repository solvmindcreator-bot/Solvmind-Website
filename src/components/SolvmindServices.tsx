import { MessageCircle, Zap, BrainCircuit, Puzzle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';
import StaggeredGrid from '@/components/StaggeredGrid';
import InteractiveCard from '@/components/InteractiveCard';

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
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/5 rounded-full animate-float blur-xl animation-delay-300"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our AI Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI services designed to transform modern businesses with intelligent automation solutions.
          </p>
        </ScrollReveal>

        <StaggeredGrid 
          className="grid-cols-1 md:grid-cols-2 gap-8"
          delay={150}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <InteractiveCard
                key={index}
                glowEffect={true}
                liftEffect={true}
                tiltEffect={true}
                borderAnimation={true}
                className="h-full"
              >
                <Card className="h-full border-0 bg-transparent shadow-none">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 ${service.color} group-hover:scale-110 transition-transform animate-neural-pulse overflow-hidden relative`}>
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
                            className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300 animate-fade-in-left"
                            style={{ animationDelay: `${featureIndex * 100}ms` }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 group-hover:animate-wiggle transition-transform"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Enhanced hover content */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <div className="h-px bg-gradient-to-r from-primary/50 to-secondary/50 mb-3 animate-shimmer"></div>
                      <p className="text-xs text-muted-foreground animate-text-shimmer bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-size-200">
                        Contact us to learn how this solution can be customized for your business needs.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveCard>
            );
          })}
        </StaggeredGrid>

        <ScrollReveal animation="fade-up" delay={800} className="text-center mt-12">
          <p className="text-muted-foreground mb-4 animate-text-shimmer bg-gradient-to-r from-muted-foreground via-foreground to-muted-foreground bg-clip-text text-transparent bg-size-200">
            Need a custom solution? We build AI tools tailored to your specific business requirements.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolvmindServices;