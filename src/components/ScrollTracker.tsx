'use client';

import { useEffect } from 'react';

let lastScrollDepth = 0;  // Declare the variable outside to persist across renders

const ScrollTracker = () => {
  useEffect(() => {
    const trackScrollDepth = () => {
      const docHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollPercentage = (scrollPosition / docHeight) * 100;

      // Only trigger an event if the scroll percentage crosses a new threshold
      if (scrollPercentage >= 25 && scrollPercentage < 50 && lastScrollDepth < 25) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'scroll',
          event_label: '25%',
          value: scrollPercentage,
        });
        lastScrollDepth = 25;
      } else if (scrollPercentage >= 50 && scrollPercentage < 75 && lastScrollDepth < 50) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'scroll',
          event_label: '50%',
          value: scrollPercentage,
        });
        lastScrollDepth = 50;
      } else if (scrollPercentage >= 75 && scrollPercentage < 100 && lastScrollDepth < 75) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'scroll',
          event_label: '75%',
          value: scrollPercentage,
        });
        lastScrollDepth = 75;
      } else if (scrollPercentage >= 100 && lastScrollDepth < 100) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'scroll',
          event_label: '100%',
          value: scrollPercentage,
        });
        lastScrollDepth = 100;
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default ScrollTracker;
