// src/components/DarkModeTracker.tsx
'use client';

import { useEffect } from 'react';

const DarkModeTracker = () => {
  useEffect(() => {
    // Detect if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Fire an event to Google Analytics with the user's preference
    if (prefersDarkMode) {
      window.gtag('event', 'theme_preference', {
        event_category: 'appearance',
        event_label: 'dark_mode',
        value: 1, // Indicating dark mode preference
      });
    } else {
      window.gtag('event', 'theme_preference', {
        event_category: 'appearance',
        event_label: 'light_mode',
        value: 0, // Indicating light mode preference
      });
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  return null; // This component doesn't render anything
};

export default DarkModeTracker;
