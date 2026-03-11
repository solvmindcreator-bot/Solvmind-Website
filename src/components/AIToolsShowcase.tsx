import { MessageSquare, Calendar, Brain, RefreshCw, BarChart3, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import pngMapOutline from '@/assets/png-map-outline.png';
import smartDeskProduct from '@/assets/smartdesk-product.jpg';

const smartDeskFeatures = [
  {
    icon: MessageSquare,
    title: "Instantly Answer Customer Questions",
    description: "24/7 support for FAQs, service inquiries, and lead capture.",
  },
  {
    icon: Calendar,
    title: "Book Appointments or Demos",
    description: "Integrated with your calendar to automate bookings seamlessly.",
  },
  {
    icon: Brain,
    title: "Learn From Your Business",
    description: "Trained with your data (docs, website, services) to give intelligent responses.",
  },
  {
    icon: RefreshCw,
    title: "Follow Up Automatically",
    description: "Sends reminders, tracks leads, and follows up so you don't have to.",
  },
  {
    icon: BarChart3,
    title: "Collect Feedback & Reports",
    description: "Gathers customer insights and auto-generates daily or weekly summaries.",
  },
  {
    icon: Zap,
    title: "Active Everywhere",
    description: "WhatsApp, Telegram, Facebook Messenger, your website, SMS, and Email.",
  }
];

const channels = ['WhatsApp', 'Telegram', 'Facebook Messenger', 'Your Website', 'SMS', 'Email'];

const AIToolsShowcase = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* PNG Map watermark */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-[0.03] pointer-events-none">
        <img src={pngMapOutline} alt="" className="w-96" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-4 text-xs font-semibold tracking-wider uppercase px-3 py-1">
              Flagship Product
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet SmartDesk — Your AI Assistant
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              More than a chatbot. A smart system that talks, works, and follows up like a real team member.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={smartDeskProduct} 
              alt="SmartDesk AI Assistant" 
              className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-xl shadow-lg border border-border"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {smartDeskFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <CardContent className="p-6">
                <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Channels Section */}
        <div className="bg-muted/50 rounded-xl p-8 sm:p-10 border border-border text-center">
          <h3 className="text-2xl font-bold mb-2 text-foreground">SmartDesk is Active Everywhere</h3>
          <p className="text-muted-foreground mb-6">Your customers can reach you on any platform</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {channels.map((channel) => (
              <Badge key={channel} variant="outline" className="text-sm px-4 py-2 border-border hover:bg-primary/5 transition-colors">
                ✅ {channel}
              </Badge>
            ))}
          </div>
          <Button size="lg" asChild>
            <Link to="/contact">Get SmartDesk for Your Business</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsShowcase;
