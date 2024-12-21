// src/global.d.ts
declare global {
    interface Window {
      gtag: (command: string, event: string, params: Record<string, any>) => void;
    }
  }
  