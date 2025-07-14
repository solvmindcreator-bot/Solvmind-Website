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

  // Load chatbot widget
  useEffect(() => {
    if ((window as any).chatWidgetScriptLoaded) return;
    
    (window as any).ChatWidgetConfig = {
      projectId: "6874c17b258966087f87caba", 
    };

    const chatWidgetScript = document.createElement("script");
    chatWidgetScript.type = 'text/javascript';
    chatWidgetScript.src = "https://storage.googleapis.com/cdwidget/dist/assets/js/main.js";
    document.body.appendChild(chatWidgetScript);

    (window as any).chatWidgetScriptLoaded = true;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SolvmindNavbar />
      {children}
      <SolvmindFooter />
      <div id="cd-widget"></div>
    </div>
  );
};

export default SolvmindLayout;