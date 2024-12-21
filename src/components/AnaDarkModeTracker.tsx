'use client';

import { useEffect } from 'react';

const AnaDarkModeTracker = () => {
  useEffect(() => {
    // Function to check if gtag is available
    const checkGtagAvailability = () => {
      if (window && window.gtag) {
        const currentTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark_mode'
          : 'light_mode';

        // Fire the event to Google Analytics
        window.gtag('event', 'theme_preference', {
          event_category: 'appearance',
          event_label: currentTheme,
        });
      } else {
        // Retry after a short delay if gtag is not available yet
        setTimeout(checkGtagAvailability, 100);
      }
    };

    // Initial call to check for gtag
    checkGtagAvailability();

  }, []);

  return null;
};

export default AnaDarkModeTracker;
