import SolvmindLayout from '@/components/SolvmindLayout';
import { MessageCircle, Zap, BrainCircuit, Puzzle, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Advanced conversational AI that understands context, learns from interactions, and provides human-like customer support.',
    icon: MessageCircle,
    features: [
      'Natural Language Processing in English and Tok Pisin',
      'Multi-platform deployment (Web, WhatsApp, Facebook)',
      'Integration with CRM and database systems',
      'Analytics and conversation insights',
      '24/7 customer support automation',
      'Custom personality and brand voice'
    ],
    benefits: [
      'Reduce customer service costs by up to 80%',
      'Handle unlimited simultaneous conversations',
      'Improve customer satisfaction with instant responses',
      'Free up human agents for complex issues'
    ],
    color: 'from-primary to-primary/80'
  },
  {
    title: 'Workflow Automation',
    description: 'Intelligent automation that streamlines your business processes, reduces manual work, and eliminates human error.',
    icon: Zap,
    features: [
      'Document processing and data extraction',
      'Automated report generation',
      'Email and communication automation',
      'Inventory and supply chain management',
      'Customer onboarding automation',
      'Compliance and audit trail automation'
    ],
    benefits: [
      'Save 10-20 hours per week per employee',
      'Reduce processing errors by 95%',
      'Improve compliance and documentation',
      'Focus staff on strategic work'
    ],
    color: 'from-secondary to-secondary/80'
  },
  {
    title: 'AI Assistants',
    description: 'Personalized AI assistants that help your team make better decisions with data-driven insights and recommendations.',
    icon: BrainCircuit,
    features: [
      'Document analysis and summarization',
      'Predictive analytics and forecasting',
      'Knowledge management systems',
      'Decision support tools',
      'Research and information gathering',
      'Meeting transcription and action items'
    ],
    benefits: [
      'Accelerate decision-making processes',
      'Access insights from vast amounts of data',
      'Improve knowledge sharing across teams',
      'Enhance productivity and efficiency'
    ],
    color: 'from-primary to-secondary'
  },
  {
    title: 'AI Integration Services',
    description: 'Seamless integration of AI capabilities into your existing systems without disrupting current operations.',
    icon: Puzzle,
    features: [
      'Custom API development and integration',
      'Legacy system AI enhancement',
      'Cloud and on-premise deployment',
      'Staff training and change management',
      'Ongoing support and maintenance',
      'Security and compliance implementation'
    ],
    benefits: [
      'Maximize ROI on existing technology investments',
      'Smooth transition with minimal disruption',
      'Scalable solutions that grow with your business',
      'Expert guidance throughout implementation'
    ],
    color: 'from-secondary to-primary'
  }
];

const SolvmindServicesPage = () => {
  return (
    <SolvmindLayout>
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            AI Solutions That <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transform</span> Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive AI services designed to transform modern businesses with intelligent solutions.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 neural-pulse`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits:</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild className={`gradient-shift text-white hover:opacity-90 hover:scale-105 transition-all ai-glow`}>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <Card className="h-full hover:ai-glow transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">Features & Capabilities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* AI Particles */}
        <div className="ai-particles"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 neural-pulse">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a free consultation to discuss your specific needs and discover how AI can transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gradient-shift text-white hover:scale-105 transition-all ai-glow">
              <Link to="/contact">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform border-primary/50 hover:border-primary">
              <a href="mailto:sales@solvmind.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>
    </SolvmindLayout>
  );
};

export default SolvmindServicesPage;