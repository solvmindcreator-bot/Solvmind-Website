import { CheckCircle, MessageSquare, Settings, Rocket, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Consultation',
    description: 'We analyze your business needs and identify AI opportunities',
    icon: MessageSquare,
    duration: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Solution Design',
    description: 'Custom AI solution architecture tailored to your requirements',
    icon: Settings,
    duration: '2-3 weeks',
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Building, training, and rigorously testing your AI solution',
    icon: Rocket,
    duration: '4-8 weeks',
  },
  {
    step: 4,
    title: 'Deployment & Training',
    description: 'Launch your AI solution and train your team to use it effectively',
    icon: CheckCircle,
    duration: '1-2 weeks',
  },
  {
    step: 5,
    title: 'Optimization & Support',
    description: 'Ongoing monitoring, improvements, and 24/7 support',
    icon: BarChart,
    duration: 'Ongoing',
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Implementation Process
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to ongoing support, we guide you through every step of your AI transformation.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border">
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4">
                        <Icon className="h-7 w-7 text-primary mx-auto" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      
                      {/* Duration */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your AI transformation journey?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Begin Your AI Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
