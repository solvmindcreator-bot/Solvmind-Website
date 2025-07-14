import React from 'react';
import { useStaggeredAnimation } from '@/hooks/useAdvancedScrollAnimations';
import { cn } from '@/lib/utils';

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  delay?: number;
}

export const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className,
  itemClassName,
  delay = 100
}) => {
  const { ref, visibleItems } = useStaggeredAnimation(children.length, delay);

  return (
    <div ref={ref} className={cn('grid', className)}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-500 ease-out',
            visibleItems.includes(index)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8',
            itemClassName
          )}
          style={{
            transitionDelay: visibleItems.includes(index) ? '0ms' : `${index * delay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredGrid;