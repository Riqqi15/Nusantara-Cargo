// Entitas Utama untuk Landing Page Kargo
// File ini mendefinisikan bentuk data inti (Core Business Models) yang tidak bergantung pada framework apapun.

export interface Achievement {
  id: string;
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Fleet {
  id: string;
  name: string;
  payloadCapacity: string;
  volume: string;
  maxRange: string;
  minRunway: string;
  description: string;
  imageUrl: string;
}

export interface AboutCompany {
  title: string;
  description: string;
  mission: string;
  vision: string;
  imageUrl: string;
}

export interface LandingPageContent {
  hero: {
    headline: string;
    subHeadline: string;
    bgImageUrl: string;
    bgImageUrls?: string[];
  };
  about: AboutCompany;
  achievements: Achievement[];
  services: Service[];
  fleets: Fleet[];
}
