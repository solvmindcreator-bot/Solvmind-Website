import { CheckCircle, MessageSquare, Settings, Rocket, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Consultation',
    description: 'We analyze your business needs and identify AI opportunities',
    icon: MessageSquare,
    duration: '1-2 weeks',
    color: 'from-primary to-primary/80'
  },
  {
    step: 2,
    title: 'Solution Design',
    description: 'Custom AI solution architecture tailored to your requirements',
    icon: Settings,
    duration: '2-3 weeks',
    color: 'from-secondary to-secondary/80'
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Building, training, and rigorously testing your AI solution',
    icon: Rocket,
    duration: '4-8 weeks',
    color: 'from-primary to-secondary'
  },
  {
    step: 4,
    title: 'Deployment & Training',
    description: 'Launch your AI solution and train your team to use it effectively',
    icon: CheckCircle,
    duration: '1-2 weeks',
    color: 'from-secondary to-primary'
  },
  {
    step: 5,
    title: 'Optimization & Support',
    description: 'Ongoing monitoring, improvements, and 24/7 support',
    icon: BarChart,
    duration: 'Ongoing',
    color: 'from-primary to-primary/80'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 neural-pulse">
            Our AI Implementation Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to ongoing support, we guide you through every step of your AI transformation
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative group">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:ai-glow scroll-animate">
                    <CardContent className="p-6 text-center">
                      {/* Step Number */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-4 neural-pulse group-hover:scale-110 transition-transform`}>
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="mb-4">
                        <Icon className="h-8 w-8 text-primary mx-auto ai-glow" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      
                      {/* Duration */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Progress Arrow (hidden on mobile) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-white transform rotate-45"></div>
                      </div>
                    </div>
                  )}
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
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-md font-medium hover:scale-105 transition-all ai-glow"
          >
            Begin Your AI Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;