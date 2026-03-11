import { ArrowRight, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroAiBackground from '@/assets/hero-ai-background.jpg';
import pngMapOutline from '@/assets/png-map-outline.png';

const SolvmindHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img src={heroAiBackground} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215,80%,15%)]/80 via-[hsl(215,80%,20%)]/70 to-[hsl(215,80%,25%)]/60"></div>
      </div>

      {/* PNG Map watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img 
          src={pngMapOutline} 
          alt="Papua New Guinea map outline" 
          className="w-64 sm:w-80 md:w-96 lg:w-[500px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/2832538e-3ac7-424e-a4b9-437839705f73.png" 
              alt="Solvmind AI Logo" 
              className="h-16 w-16 mx-auto mb-8"
            />
          </div>

          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-4">
              🇵🇬 Proudly PNG-Owned
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Transform Your Business
              <br />
              <span className="text-blue-300">with AI Solutions</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automate processes, 
              enhance decision-making, and accelerate growth.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base sm:text-lg px-8 py-4 bg-white text-[hsl(215,80%,25%)] font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Get Free AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center text-base sm:text-lg px-8 py-4 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Explore Solutions
                <Bot className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Fast Deploy</div>
              <p className="text-sm text-white/60">Quick AI deployment</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7 Support</div>
              <p className="text-sm text-white/60">Round-the-clock assistance</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/10 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Custom AI</div>
              <p className="text-sm text-white/60">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolvmindHero;
