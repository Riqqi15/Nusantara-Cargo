export interface Location {
  id: string;
  name: string;
  country: string;
  type: 'hub' | 'domestic' | 'international';
  coordinates: [number, number]; // [Longitude, Latitude]
}

export interface Route {
  id: string;
  fromId: string;
  toId: string;
  type: 'primary' | 'secondary';
}

export interface CoverageData {
  locations: Location[];
  routes: Route[];
}
