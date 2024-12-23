'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function RouteChangeListener() {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    if (window.om352620_372811) {
        window.om352620_372811.reset();
    }
    setChanges((prev) => prev + 1);
  }, [pathname]);

  return <></>;
}