/// <reference types="vite/client" />

export interface NavItem {
  name: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: string;
}

export interface SiteContent {
  navigation: NavItem[];
  hero: HeroContent;
}

declare module 'leaflet/dist/images/marker-icon.png' {
  const value: string;
  export default value;
}

declare module 'leaflet/dist/images/marker-shadow.png' {
  const value: string;
  export default value;
}
