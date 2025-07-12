import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SolvmindHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-accent/10 rounded-full animate-float blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
              Transform Your Business
            </span>
            <br />
            <span className="text-foreground">with AI Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, 
            enhance decision-making, and accelerate growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-scale animate-glow-pulse"
              asChild
            >
              <Link to="/contact">
                Get Free AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover-lift"
              asChild
            >
              <Link to="/services">
                Explore Solutions
                <Bot className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats Section with better mobile layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle">Fast Implementation</div>
              <p className="text-sm sm:text-base text-muted-foreground">Quick deployment of AI solutions</p>
            </div>
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>24/7 Support</div>
              <p className="text-sm sm:text-base text-muted-foreground">Round-the-clock assistance</p>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle" style={{ animationDelay: '1s' }}>Custom Solutions</div>
              <p className="text-sm sm:text-base text-muted-foreground">Tailored to your business needs</p>
            </div>
          </div>
        </div>

        {/* Visual AI representation */}
        <div className="mt-16 relative">
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl animate-neural-pulse"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center hover-scale">
                  <Bot className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-primary mb-2 animate-neural-pulse" />
                  <p className="text-xs sm:text-sm font-medium">AI Brain</p>
                </div>
                <div className="text-center hover-scale" style={{ animationDelay: '0.5s' }}>
                  <Zap className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-secondary mb-2 animate-neural-pulse" />
                  <p className="text-xs sm:text-sm font-medium">Automation</p>
                </div>
                <div className="text-center hover-scale" style={{ animationDelay: '1s' }}>
                  <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-accent mb-2 animate-neural-pulse" />
                  <p className="text-xs sm:text-sm font-medium">Analytics</p>
                </div>
                <div className="text-center hover-scale" style={{ animationDelay: '1.5s' }}>
                  <ArrowRight className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-primary mb-2 animate-neural-pulse" />
                  <p className="text-xs sm:text-sm font-medium">Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolvmindHero;