import React, { createContext, useContext, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface SmoothScrollContextType {
  scroll: LocomotiveScroll | null;
  setScroll: (scroll: LocomotiveScroll | null) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
  setScroll: () => {},
});

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

  return (
    <SmoothScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
