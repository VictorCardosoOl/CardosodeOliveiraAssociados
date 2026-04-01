/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { AreasDeAtuacao } from "./components/sections/AreasDeAtuacao";
import { Professionals } from "./components/sections/Professionals";
import { Insights } from "./components/sections/Insights";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <ActiveSectionProvider>
        <SmoothScrollWrapper>
          <Navbar />
          <main>
            <Hero />
            <About />
            <AreasDeAtuacao />
            <Professionals />
            <Insights />
            <Contact />
          </main>
          <Footer />
        </SmoothScrollWrapper>
      </ActiveSectionProvider>
    </ErrorBoundary>
  );
}
