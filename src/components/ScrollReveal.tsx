import React from 'react';
import { useScrollAnimation } from '@/hooks/useAdvancedScrollAnimations';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'flip' | 'blur' | 'zoom-in' | 'bounce-in';
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const animationClasses = {
  'fade-up': 'translate-y-8 opacity-0',
  'fade-down': '-translate-y-8 opacity-0',
  'fade-left': 'translate-x-8 opacity-0',
  'fade-right': '-translate-x-8 opacity-0',
  'scale': 'scale-95 opacity-0',
  'flip': 'rotate-12 opacity-0',
  'blur': 'blur-sm opacity-0',
  'zoom-in': 'scale-50 opacity-0',
  'bounce-in': 'scale-75 opacity-0'
};

const visibleClasses = {
  'fade-up': 'translate-y-0 opacity-100',
  'fade-down': 'translate-y-0 opacity-100',
  'fade-left': 'translate-x-0 opacity-100',
  'fade-right': 'translate-x-0 opacity-100',
  'scale': 'scale-100 opacity-100',
  'flip': 'rotate-0 opacity-100',
  'blur': 'blur-0 opacity-100',
  'zoom-in': 'scale-100 opacity-100',
  'bounce-in': 'scale-100 opacity-100'
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  triggerOnce = true,
  threshold = 0.1
}) => {
  const { ref, isInView } = useScrollAnimation({ 
    triggerOnce, 
    threshold 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isInView ? visibleClasses[animation] : animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;