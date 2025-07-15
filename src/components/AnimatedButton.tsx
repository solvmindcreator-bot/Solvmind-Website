import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  animation?: 'pulse' | 'glow' | 'ripple' | 'magnetic' | 'gradient-shift';
  intensity?: 'subtle' | 'medium' | 'strong';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  animation = 'glow',
  intensity = 'medium',
  asChild = false,
  ...props
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (animation === 'ripple') {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { x, y, id: Date.now() };
      
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  const animationClasses = {
    pulse: {
      subtle: 'hover:animate-pulse',
      medium: 'hover:animate-pulse-slow',
      strong: 'animate-pulse-slow'
    },
    glow: {
      subtle: 'hover:shadow-lg hover:shadow-primary/25',
      medium: 'hover:shadow-xl hover:shadow-primary/30 hover:ring-2 hover:ring-primary/20',
      strong: 'animate-ai-glow shadow-xl shadow-primary/40'
    },
    ripple: {
      subtle: 'overflow-hidden relative',
      medium: 'overflow-hidden relative',
      strong: 'overflow-hidden relative'
    },
    magnetic: {
      subtle: 'hover:scale-[1.02] active:scale-[0.98]',
      medium: 'hover:scale-105 active:scale-95',
      strong: 'hover:scale-110 active:scale-90'
    },
    'gradient-shift': {
      subtle: 'bg-gradient-to-r from-primary via-primary to-secondary bg-size-200 hover:bg-pos-100',
      medium: 'gradient-shift',
      strong: 'gradient-shift animate-gradient-shift'
    }
  };

  // When asChild is true, we need to apply animations to the child element directly
  if (asChild) {
    return (
      <Button
        {...props}
        asChild
        onClick={handleClick}
        className={cn(
          'relative transition-all duration-300 ease-out transform-gpu',
          animationClasses[animation][intensity],
          isClicked && 'scale-95',
          className
        )}
      >
        {children}
      </Button>
    );
  }

  // Normal button behavior with animation wrappers
  return (
    <Button
      {...props}
      onClick={handleClick}
      className={cn(
        'relative transition-all duration-300 ease-out transform-gpu',
        animationClasses[animation][intensity],
        isClicked && 'scale-95',
        className
      )}
    >
      {animation === 'ripple' && (
        <div className="absolute inset-0 overflow-hidden">
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="absolute bg-white/30 rounded-full animate-ping"
              style={{
                left: ripple.x - 10,
                top: ripple.y - 10,
                width: 20,
                height: 20,
                animationDuration: '600ms'
              }}
            />
          ))}
        </div>
      )}
      
      <span className="relative z-10">
        {children}
      </span>
    </Button>
  );
};

export default AnimatedButton;