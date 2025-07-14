import React from 'react';
import { useParallax } from '@/hooks/useAdvancedScrollAnimations';
import { cn } from '@/lib/utils';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className,
  direction = 'vertical'
}) => {
  const { ref, offset } = useParallax(speed);

  const transform = direction === 'vertical' 
    ? `translateY(${offset}px)`
    : `translateX(${offset}px)`;

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{
        transform
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;