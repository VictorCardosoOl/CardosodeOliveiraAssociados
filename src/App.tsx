/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Footer } from "./components/layout/Footer";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
import { SmoothScrollProvider } from "./context/SmoothScrollContext";
import { ErrorBoundary } from "./components/common/ErrorBoundary";

// Lazy load sections for better performance
const About = React.lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const AreasDeAtuacao = React.lazy(() => import('./components/sections/AreasDeAtuacao').then(module => ({ default: module.AreasDeAtuacao })));
const Professionals = React.lazy(() => import('./components/sections/Professionals').then(module => ({ default: module.Professionals })));
const Insights = React.lazy(() => import('./components/sections/Insights').then(module => ({ default: module.Insights })));
const Contact = React.lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tayna C. B. Oliveira | Advocacia Estratégica e Resolução de Conflitos</title>
        <meta name="description" content="Escritório de advocacia boutique especializado em Direito Empresarial, Contratos, Família e Sucessões, e Contencioso Cível Estratégico." />
        <meta name="keywords" content="advocacia, direito empresarial, contratos, direito de família, sucessões, contencioso cível, advogado" />
      </Helmet>
      <ErrorBoundary>
        <SmoothScrollProvider>
          <ActiveSectionProvider>
            <Navbar />
            <SmoothScrollWrapper>
              <main>
                <Hero />
                <Suspense fallback={<div className="h-screen bg-secondary flex items-center justify-center text-primary font-editorial text-2xl">Carregando...</div>}>
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
        </SmoothScrollProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
