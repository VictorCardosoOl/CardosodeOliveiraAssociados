/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { SectorGroups } from "./components/sections/SectorGroups";
import { Professionals } from "./components/sections/Professionals";
import { Culture } from "./components/sections/Culture";
import { SocialResponsibility } from "./components/sections/SocialResponsibility";
import { Insights } from "./components/sections/Insights";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <SectorGroups />
        <Professionals />
        <Culture />
        <SocialResponsibility />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
