import SolvmindLayout from '@/components/SolvmindLayout';
import SolvmindHero from '@/components/SolvmindHero';
import SolvmindServices from '@/components/SolvmindServices';
import ConsultationBooking from '@/components/ConsultationBooking';
import AIToolsShowcase from '@/components/AIToolsShowcase';
import Process from '@/components/Process';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Phone, Users } from 'lucide-react';
import ctaBackground from '@/assets/cta-ai-background.jpg';
import pngMapOutline from '@/assets/png-map-outline.png';

const industries = [
  {
    name: 'Banking & Finance',
    description: 'AI-powered customer service and fraud detection for financial institutions.',
    icon: Building
  },
  {
    name: 'Telecommunications',
    description: 'Intelligent customer support and network optimization solutions.',
    icon: Phone
  },
  {
    name: 'Government & Public Services',
    description: 'Streamlined citizen services and automated administrative processes.',
    icon: Users
  }
];

const SolvmindHome = () => {
  return (
    <SolvmindLayout>
      <SolvmindHero />
      <SolvmindServices />
      <AIToolsShowcase />
      <Process />
      <ConsultationBooking />
      
      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI solutions for key industries and modern business sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center group hover:shadow-lg transition-all duration-500 hover:scale-105 hover:ai-glow hover-lift scroll-animate"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform neural-pulse relative overflow-hidden">
                      <Icon className="h-8 w-8 text-primary relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* CTA Background Image */}
        <div className="absolute inset-0">
          <img src={ctaBackground} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        {/* PNG Map watermark */}
        <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
          <img src={pngMapOutline} alt="" className="w-48" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neural-pulse">
            Ready to Get SmartDesk for Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            Join leading businesses already using SmartDesk AI to automate support, bookings, and follow-ups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-all hover:scale-105 ai-glow"
            >
              Get Free Consultation
            </a>
            <a 
              href="mailto:sales@solvmind.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-all hover:scale-105"
            >
              sales@solvmind.com
            </a>
            <a 
              href="tel:+67574527191" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-all hover:scale-105"
            >
              +675 7452 7191
            </a>
          </div>
        </div>
      </section>
    </SolvmindLayout>
  );
};

export default SolvmindHome;