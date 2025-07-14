import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  className,
  count = 6
}) => {
  return (
    <div className={cn('absolute inset-0 pointer-events-none overflow-hidden', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-2 h-2 bg-primary/30 rounded-full',
            'animate-float'
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;