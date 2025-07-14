import React from 'react';
import { useMouseParallax } from '@/hooks/useAdvancedScrollAnimations';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
  liftEffect?: boolean;
  tiltEffect?: boolean;
  borderAnimation?: boolean;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className,
  glowEffect = false,
  liftEffect = true,
  tiltEffect = false,
  borderAnimation = false
}) => {
  const { ref, position } = useMouseParallax(tiltEffect ? 0.05 : 0);

  return (
    <div
      ref={ref}
      className={cn(
        'relative group transition-all duration-300 ease-out',
        liftEffect && 'hover:-translate-y-2 hover:shadow-2xl',
        glowEffect && 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
        borderAnimation && 'overflow-hidden',
        'transform-gpu will-change-transform',
        className
      )}
      style={{
        transform: tiltEffect 
          ? `perspective(1000px) rotateX(${position.y * 0.5}deg) rotateY(${position.x * 0.5}deg) translateZ(0)`
          : undefined
      }}
    >
      {borderAnimation && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveCard;