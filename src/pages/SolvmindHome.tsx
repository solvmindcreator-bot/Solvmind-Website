import SolvmindLayout from '@/components/SolvmindLayout';
import SolvmindHero from '@/components/SolvmindHero';
import SolvmindServices from '@/components/SolvmindServices';
import ConsultationBooking from '@/components/ConsultationBooking';
import AIToolsShowcase from '@/components/AIToolsShowcase';
import SecureDocsShowcase from '@/components/SecureDocsShowcase';
import Process from '@/components/Process';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Phone, Users } from 'lucide-react';
import pngMapOutline from '@/assets/png-map-outline.png';
import ctaBackground from '@/assets/cta-background.jpg';

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
      <SecureDocsShowcase />
      <Process />
      <ConsultationBooking />
      
      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <div className="section-divider mb-6"></div>
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
                  className="text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground">
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
        {/* CTA Background */}
        <div className="absolute inset-0">
          <img src={ctaBackground} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(215,80%,20%)]/85"></div>
        </div>
        {/* PNG Map watermark */}
        <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
          <img src={pngMapOutline} alt="" className="w-48" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get SmartDesk for Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join businesses already using SmartDesk AI to automate support, bookings, and follow-ups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[hsl(215,80%,25%)] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Get Free Consultation
            </a>
            <a 
              href="mailto:sales@solvmind.com" 
              className="border-2 border-white/40 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              sales@solvmind.com
            </a>
            <a 
              href="tel:+67574527191" 
              className="border-2 border-white/40 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
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
