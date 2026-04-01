/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/layout/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

// Lazy Loading: O React só carrega estes ficheiros quando forem necessários
const About = React.lazy(() => import("./components/sections/About").then(m => ({ default: m.About })));
const AreasDeAtuacao = React.lazy(() => import("./components/sections/AreasDeAtuacao").then(m => ({ default: m.AreasDeAtuacao })));
const Professionals = React.lazy(() => import("./components/sections/Professionals").then(m => ({ default: m.Professionals })));
const Insights = React.lazy(() => import("./components/sections/Insights").then(m => ({ default: m.Insights })));
const Contact = React.lazy(() => import("./components/sections/Contact").then(m => ({ default: m.Contact })));

// Componente simples para mostrar enquanto carrega
const SectionLoader = () => <div className="w-full h-32 flex items-center justify-center text-[10px] uppercase tracking-widest text-muted">Carregando...</div>;

export default function App() {
  return (
    <ErrorBoundary>
      <ActiveSectionProvider>
        <SmoothScrollWrapper>
          <Navbar />
          <main>
            {/* O Hero carrega de imediato para não atrasar a primeira impressão */}
            <Hero />
            
            {/* As restantes secções são encapsuladas num Suspense */}
            <Suspense fallback={<SectionLoader />}>
              <About />
              <AreasDeAtuacao />
              <Professionals />
              <Insights />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </SmoothScrollWrapper>
      </ActiveSectionProvider>
    </ErrorBoundary>
  );
}
