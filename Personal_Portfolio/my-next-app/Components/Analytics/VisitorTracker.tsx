'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // Don't track in development if needed, but for now let's track
    const trackVisit = async () => {
      try {
        // Get or create visitorId
        let visitorId = localStorage.getItem('visitorId');
        if (!visitorId) {
          visitorId = typeof crypto.randomUUID === 'function' 
            ? crypto.randomUUID() 
            : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          localStorage.setItem('visitorId', visitorId);
        }

        // Send tracking request
        await fetch('/api/stats/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ visitorId }),
        });
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    trackVisit();
  }, []);

  return null; // This component doesn't render anything
}
