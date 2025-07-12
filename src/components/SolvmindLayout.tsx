import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SolvmindNavbar from '@/components/SolvmindNavbar';
import SolvmindFooter from '@/components/SolvmindFooter';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import usePerformanceOptimization from '@/hooks/usePerformanceOptimization';

type SolvmindLayoutProps = {
  children: React.ReactNode;
};

const SolvmindLayout = ({ children }: SolvmindLayoutProps) => {
  const location = useLocation();
  useScrollAnimation();
  usePerformanceOptimization();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <SolvmindNavbar />
      {children}
      <SolvmindFooter />
    </div>
  );
};

export default SolvmindLayout;