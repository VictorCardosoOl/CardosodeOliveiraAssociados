import React, { createContext, useContext, useState } from 'react';
import Lenis from 'lenis';

interface SmoothScrollContextType {
  scroll: Lenis | null;
  setScroll: (scroll: Lenis | null) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
  setScroll: () => {},
});

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState<Lenis | null>(null);

  return (
    <SmoothScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
