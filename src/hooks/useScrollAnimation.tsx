import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((element) => observer.observe(element));

      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(observeElements, 100);
    
    return () => clearTimeout(timer);
  }, []);
};