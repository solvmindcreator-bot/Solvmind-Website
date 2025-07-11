import { Bot, Brain, Zap } from 'lucide-react';

interface LoadingAnimationProps {
  text?: string;
  variant?: 'default' | 'skeleton' | 'ai';
}

const LoadingAnimation = ({ text = "Loading...", variant = 'default' }: LoadingAnimationProps) => {
  if (variant === 'skeleton') {
    return (
      <div className="space-y-4 p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-full bg-muted h-12 w-12"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
            <div className="h-4 bg-muted rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'ai') {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="relative">
          <div className="flex space-x-2">
            <Bot className="h-8 w-8 text-primary animate-bounce neural-pulse" style={{ animationDelay: '0ms' }} />
            <Brain className="h-8 w-8 text-secondary animate-bounce ai-glow" style={{ animationDelay: '200ms' }} />
            <Zap className="h-8 w-8 text-primary animate-bounce neural-pulse" style={{ animationDelay: '400ms' }} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        <p className="text-muted-foreground text-sm neural-pulse">{text}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center space-x-2 p-4">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
};

export default LoadingAnimation;