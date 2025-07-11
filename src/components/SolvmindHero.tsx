import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SolvmindHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
      {/* AI Particles background */}
      <div className="ai-particles"></div>
      
      {/* Background decoration with AI glow */}
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/20),transparent)] animate-neural-pulse" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background/50 shadow-xl shadow-primary/20 ring-1 ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center ai-glow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Floating elements with AI animations */}
          <div className="absolute top-10 left-10 opacity-20 animate-float neural-pulse">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute top-20 right-20 opacity-20 animate-float animation-delay-200 ai-glow">
            <Sparkles className="h-6 w-6 text-secondary" />
          </div>
          <div className="absolute bottom-20 left-20 opacity-20 animate-float animation-delay-400 animate-rotate-slow">
            <Zap className="h-10 w-10 text-primary" />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">AI-Powered Solutions</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                for Modern Business
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with cutting-edge AI chatbots, 
              intelligent automation, and custom AI tools that revolutionize how you work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" asChild className="gradient-shift text-white hover:scale-105 transition-transform ai-glow">
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-transform border-primary/50 hover:border-primary hover:ai-glow">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Key Benefits with AI animations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-secondary mb-2 ai-glow">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support Available</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 animate-pulse-slow">100%</div>
                <div className="text-sm text-muted-foreground">AI-Focused Solutions</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 neural-pulse">Fast</div>
                <div className="text-sm text-muted-foreground">Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolvmindHero;