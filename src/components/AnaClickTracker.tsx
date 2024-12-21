'use client';

import { useEffect } from 'react';

const GlobalClickTracker = () => {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a');
      if (!link || !link.href.includes('track.vpns.guide/base2.php')) return;

      // Parse the URL to extract parameters
      const url = new URL(link.href);
      const cloid = url.searchParams.get('cloid'); // e.g., 1006
      let token4 = url.searchParams.get('token4'); // e.g., text, button, faq, compare, tile
      const token5 = url.searchParams.get('token5'); // e.g., DE

      // Treat token4=text and token4=button as "button"
      if (token4 === 'text' || token4 === 'button') token4 = 'button';

      // Map cloid to VPN names
      const vpnNames: Record<string, string> = {
        // '1006': 'Pure',
        // '1003': 'Nord',
        // '1001': 'Express',
        // '1002': 'Cyberghost',
        // '1004': 'PIA',
        // '1005': 'Surfshark',
        // '1007': 'Total',
        // '1008': 'Private',
        // '1009': 'Proton',
        // Add more mappings as needed
      };

      // If token4 is 'tile', do not track the event
      if (token4 === 'tile') return;

      // If cloid is not in the vpnNames mapping, use token5 + " CTA"
      let eventName = '';
      if (!cloid || !(cloid in vpnNames)) {
        // Use token5 and append "CTA" (e.g., "DE CTA")
        eventName = `${token5 ? token5 : 'Unknown'} CTA`;
        sendEvent(eventName, link, token5);
        return;
      }

      const vpnName = vpnNames[cloid];

      // Create the event name using token5 and vpnName
      eventName = `${token5 ? token5 : 'Unknown'} ${vpnName} ${token4}`;

      // Check if gtag is loaded before sending the event
      sendEvent(eventName, link, token5);
    };

    const sendEvent = (eventName: string, link: HTMLAnchorElement, token5: string | null) => {
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: 'CTA Clicks',
          event_label: link.href,
          value: 1, // Optional: Assign a value for each click
        });
      } else {
        // Retry if gtag is not yet available
        setTimeout(() => sendEvent(eventName, link, token5), 100);
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleLinkClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return null; // This component does not render anything
};

export default GlobalClickTracker;
