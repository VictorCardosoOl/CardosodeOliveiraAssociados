import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

interface ActiveSectionContextType {
  activeSection: string;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);
  const observedElements = useRef<Set<Element>>(new Set());

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -40% 0%', // Trigger when section is in the upper/middle part of the viewport
        threshold: 0,
      }
    );

    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        if (!observedElements.current.has(section)) {
          observer.current?.observe(section);
          observedElements.current.add(section);
        }
      });
    };

    // Initial observation
    observeSections();

    // Observe future DOM changes (lazy loaded sections)
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mutationObserver.observe(mainElement, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }
  return context;
}
