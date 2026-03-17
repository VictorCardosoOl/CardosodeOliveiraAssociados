/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScrollWrapper } from "./components/layout/SmoothScrollWrapper";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
import { Expertise } from "./components/sections/Expertise";
import { SectorGroups } from "./components/sections/SectorGroups";
import { Professionals } from "./components/sections/Professionals";
import { Culture } from "./components/sections/Culture";
import { SocialResponsibility } from "./components/sections/SocialResponsibility";
import { Insights } from "./components/sections/Insights";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <SmoothScrollWrapper>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <SectorGroups />
        <Professionals />
        <Culture />
        <SocialResponsibility />
        <Insights />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollWrapper>
  );
}
