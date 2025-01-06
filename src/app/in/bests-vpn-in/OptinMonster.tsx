// components/OptinMonster.js
"use client"
import { useEffect } from 'react';

const OptinMonster = () => {
  useEffect(() => {
    // Check if window is available to ensure it's running on the client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://a.omappapi.com/app/js/api.min.js';
      script.async = true;
      script.dataset.user = '352620';  // Replace with your user ID
      script.dataset.campaign = 'pcjcu8maq4zx6s1tttuc';  // Replace with your campaign ID

      // Append the script to the head
      document.head.appendChild(script);

      return () => {
        // Cleanup the script on component unmount
        document.head.removeChild(script);
      };
    }
  }, []); // Empty dependency array ensures this runs once after the component mounts

  return null; // No need to render anything on the screen
};

export default OptinMonster;