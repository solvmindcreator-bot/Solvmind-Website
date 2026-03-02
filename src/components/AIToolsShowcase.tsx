import { MessageSquare, Calendar, Brain, RefreshCw, BarChart3, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const smartDeskFeatures = [
  {
    icon: MessageSquare,
    title: "Instantly Answer Customer Questions",
    description: "24/7 support for FAQs, service inquiries, and lead capture.",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    icon: Calendar,
    title: "Book Appointments or Demos",
    description: "Integrated with your calendar to automate bookings seamlessly.",
    color: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    icon: Brain,
    title: "Learn From Your Business",
    description: "Trained with your data (docs, website, services) to give intelligent responses.",
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    icon: RefreshCw,
    title: "Follow Up Automatically",
    description: "Sends reminders, tracks leads, and follows up so you don't have to.",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    icon: BarChart3,
    title: "Collect Feedback & Reports",
    description: "Gathers customer insights and auto-generates daily or weekly summaries.",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Active Everywhere",
    description: "WhatsApp, Telegram, Facebook Messenger, your website, SMS, and Email.",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
  }
];

const channels = ['WhatsApp', 'Telegram', 'Facebook Messenger', 'Your Website', 'SMS', 'Email'];

const AIToolsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">Our Flagship Product</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Meet SmartDesk – Your AI Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            It's more than a chatbot. It's a smart system that talks, works, and follows up like a real team member.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {smartDeskFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden"
            >
              <div className={`${feature.color} p-4 text-white`}>
                <feature.icon className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <CardContent className="p-5">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Channels Section */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border text-center">
          <h3 className="text-2xl font-bold mb-2">SmartDesk is Active Everywhere</h3>
          <p className="text-muted-foreground mb-6">Your customers can reach you on any platform</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {channels.map((channel) => (
              <Badge key={channel} variant="outline" className="text-sm px-4 py-2 border-primary/30 hover:bg-primary/10 transition-colors">
                ✅ {channel}
              </Badge>
            ))}
          </div>
          <Button size="lg" className="hover:scale-105 transition-transform" asChild>
            <Link to="/contact">Get SmartDesk for Your Business</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsShowcase;
