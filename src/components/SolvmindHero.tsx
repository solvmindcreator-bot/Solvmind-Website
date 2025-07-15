import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import FloatingElements from '@/components/FloatingElements';
import MorphingText from '@/components/MorphingText';

const SolvmindHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Enhanced floating elements */}
      <FloatingElements count={12} />
      
      {/* Advanced animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-float blur-xl animation-delay-200"></div>
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-accent/10 rounded-full animate-float blur-xl animation-delay-400"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary/5 rounded-full animate-pulse-slow blur-lg animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
                Transform Your 
                <MorphingText 
                  texts={["Business", "Workflow", "Operations", "Future"]} 
                  className="ml-2"
                  duration={2500}
                />
              </span>
              <br />
              <span className="text-foreground">with AI Solutions</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automate processes, 
              enhance decision-making, and accelerate growth
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <AnimatedButton 
                size="lg" 
                animation="glow"
                intensity="medium"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                asChild
              >
                <Link to="/contact">
                  Get Free AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedButton>
              
              <AnimatedButton 
                variant="outline" 
                size="lg" 
                animation="magnetic"
                intensity="subtle"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                asChild
              >
                <Link to="/services">
                  Explore Solutions
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <ScrollReveal animation="fade-left" delay={600}>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle group-hover:animate-wiggle transition-all duration-300">Fast Deploy</div>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Quick deployment of AI solutions</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={700}>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle group-hover:animate-wiggle transition-all duration-300 animation-delay-500">24/7 Support</div>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Round-the-clock assistance</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={800}>
              <div className="text-center group cursor-pointer">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-subtle group-hover:animate-wiggle transition-all duration-300 animation-delay-800">Custom Solutions</div>
                <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Tailored to your business needs</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Enhanced Visual AI representation */}
        <ScrollReveal animation="zoom-in" delay={1000}>
          <div className="mt-16 relative">
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-3xl animate-neural-pulse"></div>
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  <ScrollReveal animation="bounce-in" delay={1100}>
                    <div className="text-center hover-scale group/item cursor-pointer">
                      <Bot className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-primary mb-2 animate-neural-pulse group-hover/item:animate-wiggle transition-all duration-300" />
                      <p className="text-xs sm:text-sm font-medium group-hover/item:text-primary transition-colors duration-300">AI Brain</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="bounce-in" delay={1200}>
                    <div className="text-center hover-scale group/item cursor-pointer">
                      <Zap className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-secondary mb-2 animate-neural-pulse group-hover/item:animate-wiggle transition-all duration-300" />
                      <p className="text-xs sm:text-sm font-medium group-hover/item:text-secondary transition-colors duration-300">Automation</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="bounce-in" delay={1300}>
                    <div className="text-center hover-scale group/item cursor-pointer">
                      <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-accent mb-2 animate-neural-pulse group-hover/item:animate-wiggle transition-all duration-300" />
                      <p className="text-xs sm:text-sm font-medium group-hover/item:text-accent transition-colors duration-300">Analytics</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal animation="bounce-in" delay={1400}>
                    <div className="text-center hover-scale group/item cursor-pointer">
                      <ArrowRight className="h-8 w-8 sm:h-12 sm:w-12 mx-auto text-primary mb-2 animate-neural-pulse group-hover/item:animate-wiggle transition-all duration-300" />
                      <p className="text-xs sm:text-sm font-medium group-hover/item:text-primary transition-colors duration-300">Growth</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolvmindHero;