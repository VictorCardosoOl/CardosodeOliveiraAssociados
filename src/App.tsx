/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <SmoothScrollWrapper>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
