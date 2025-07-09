import SolvmindLayout from '@/components/SolvmindLayout';
import SolvmindHero from '@/components/SolvmindHero';
import SolvmindServices from '@/components/SolvmindServices';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Phone, Users } from 'lucide-react';

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
      
      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized AI solutions for key sectors across Papua New Guinea and the Pacific region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join leading Pacific businesses that are already benefiting from our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Get Free Consultation
            </a>
            <a 
              href="mailto:sales@solvmind.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </SolvmindLayout>
  );
};

export default SolvmindHome;