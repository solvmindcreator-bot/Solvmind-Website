import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import FloatingElements from '@/components/FloatingElements';
import MorphingText from '@/components/MorphingText';
import heroAiGraphic from '@/assets/hero-ai-graphic.jpg';
import pngMapOutline from '@/assets/png-map-outline.png';

const SolvmindHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img 
          src={heroAiGraphic} 
          alt="Solvmind AI Neural Network Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
      </div>

      {/* PNG Map watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
        <img 
          src={pngMapOutline} 
          alt="Papua New Guinea map outline" 
          className="w-64 sm:w-80 md:w-96 lg:w-[500px]"
        />
      </div>

      <FloatingElements count={8} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <ScrollReveal animation="fade-up">
            <img 
              src="/lovable-uploads/2832538e-3ac7-424e-a4b9-437839705f73.png" 
              alt="Solvmind AI Logo" 
              className="h-20 w-20 mx-auto mb-6"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">
                Transform Your 
                <MorphingText 
                  texts={["Business", "Workflow", "Operations", "Future"]} 
                  className="ml-2 text-primary"
                  duration={2500}
                />
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">with AI Solutions</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/services">
                  Explore Solutions
                  <Bot className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <ScrollReveal animation="fade-left" delay={600}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">Fast Deploy</div>
                <p className="text-sm text-gray-300">Quick AI deployment</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={700}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7 Support</div>
                <p className="text-sm text-gray-300">Round-the-clock assistance</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-right" delay={800}>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">Custom AI</div>
                <p className="text-sm text-gray-300">Tailored to your needs</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolvmindHero;
