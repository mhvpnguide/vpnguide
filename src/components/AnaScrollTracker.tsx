'use client';

import { useEffect } from 'react';

let lastScrollDepth = 0;  // Declare the variable outside to persist across renders
let scrollEventFired = false; // To track if the generic scroll event has been fired

const ScrollTracker = () => {
  useEffect(() => {
    const trackScrollDepth = () => {
      const docHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      const scrollPercentage = (scrollPosition / docHeight) * 100;

      // Fire the generic scroll event only once when the user has scrolled down a small percentage (e.g., 5%)
      if (!scrollEventFired && scrollPercentage >= 5) {
        window.gtag('event', 'scroll', {
          event_category: 'scroll',
          value: scrollPercentage,
        });
        scrollEventFired = true; // Prevent it from firing again
      }

      // Only trigger an event if the scroll percentage crosses a new threshold
      if (scrollPercentage >= 25 && scrollPercentage < 50 && lastScrollDepth < 25) {
        window.gtag('event', 'scroll 25', {
          event_category: 'scroll',
          value: scrollPercentage,
        });
        lastScrollDepth = 25;
      } else if (scrollPercentage >= 50 && scrollPercentage < 75 && lastScrollDepth < 50) {
        window.gtag('event', 'scroll 50', {
          event_category: 'scroll',
          value: scrollPercentage,
        });
        lastScrollDepth = 50;
      } else if (scrollPercentage >= 75 && scrollPercentage < 90 && lastScrollDepth < 75) {
        window.gtag('event', 'scroll 75', {
          event_category: 'scroll',
          value: scrollPercentage,
        });
        lastScrollDepth = 75;
      } else if (scrollPercentage >= 90 && lastScrollDepth < 90) {
        window.gtag('event', 'scroll 90', {
          event_category: 'scroll',
          value: scrollPercentage,
        });
        lastScrollDepth = 90;
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
