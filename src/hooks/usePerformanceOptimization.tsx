import { useEffect, useCallback } from 'react';

// Performance optimization hook for better loading times
const usePerformanceOptimization = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images
    const preloadImages = [
      '/lovable-uploads/2832538e-3ac7-424e-a4b9-437839705f73.png'
    ];

    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images with intersection observer
  const optimizeImages = useCallback(() => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });

      return () => imageObserver.disconnect();
    }
  }, []);

  // Implement service worker for caching
  const enableServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        // Register service worker for caching
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

  // Enable performance monitoring
  const enablePerformanceMonitoring = useCallback(() => {
    // Web Vitals monitoring
    if ('web-vitals' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`Performance metric: ${entry.name}`, entry);
        });
      });

      observer.observe({ entryTypes: ['paint', 'layout-shift', 'largest-contentful-paint'] });
    }
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    enableServiceWorker();
    enablePerformanceMonitoring();
  }, [preloadCriticalResources, optimizeImages, enableServiceWorker, enablePerformanceMonitoring]);

  return {
    preloadCriticalResources,
    optimizeImages,
    enableServiceWorker
  };
};

export default usePerformanceOptimization;