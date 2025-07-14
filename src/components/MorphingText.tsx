import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MorphingTextProps {
  texts: string[];
  className?: string;
  duration?: number;
  morphDuration?: number;
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className,
  duration = 3000,
  morphDuration = 500
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, morphDuration / 2);
    }, duration);

    return () => clearInterval(interval);
  }, [texts.length, duration, morphDuration]);

  return (
    <span
      className={cn(
        'inline-block transition-all duration-300 ease-in-out',
        isTransitioning && 'scale-95 opacity-80 blur-[1px]',
        className
      )}
      style={{
        transitionDuration: `${morphDuration}ms`
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default MorphingText;