'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    if (window.om372811_352620) {
        window.om372811_352620.reset();
    }
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}