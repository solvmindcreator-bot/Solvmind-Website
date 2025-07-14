import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollState {
  isInView: boolean;
  progress: number;
  direction: 'up' | 'down';
  scrollY: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    isInView: false,
    progress: 0,
    direction: 'down',
    scrollY: 0
  });

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState(prev => ({
        ...prev,
        direction,
        scrollY: currentScrollY
      }));
      
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const progress = entry.intersectionRatio;
        
        setScrollState(prev => ({
          ...prev,
          isInView: entry.isIntersecting,
          progress
        }));

        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin
      }
    );

    observer.observe(element);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: elementRef, ...scrollState };
};

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref: elementRef, offset };
};

export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animation of child items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, i * delay);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [itemCount, delay]);

  return { ref: containerRef, visibleItems };
};

export const useMouseParallax = (intensity: number = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) * intensity;
      const y = (e.clientY - centerY) * intensity;
      
      setPosition({ x, y });
    };

    const element = elementRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', () => setPosition({ x: 0, y: 0 }));
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', () => setPosition({ x: 0, y: 0 }));
      }
    };
  }, [intensity]);

  return { ref: elementRef, position };
};