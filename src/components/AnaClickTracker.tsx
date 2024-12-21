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
        '1006': 'purevpn',
        '1003': 'cyberghost',
        // Add more mappings as needed
      };

      // Check if cloid is valid and exists in vpnNames mapping
      if (!cloid || !(cloid in vpnNames)) {
        // If cloid is invalid or not in vpnNames, set to "CTA"
        const eventName = 'CTA';
        sendEvent(eventName, link, token5);
        return;
      }

      const vpnName = vpnNames[cloid];

      // Skip tracking if token4 is 'tile'
      if (token4 === 'tile') return;

      // Create the event name
      const eventName = `${token5 ? token5 : 'Unknown'} ${vpnName} ${token4}`;

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
