import { LocationRepository } from '../../domain/repositories/LocationRepository';
import { CoverageData } from '../../domain/entities/Location';

export class InMemoryLocationRepository implements LocationRepository {
  async getCoverageData(): Promise<CoverageData> {
    return {
      locations: [
        // HUB
        { id: 'jkt', name: 'Jakarta', country: 'Indonesia', type: 'hub', coordinates: [106.8271, -6.1751] },
        
        // DOMESTIC
        { id: 'sub', name: 'Surabaya', country: 'Indonesia', type: 'domestic', coordinates: [112.7520, -7.2504] },
        { id: 'dps', name: 'Bali', country: 'Indonesia', type: 'domestic', coordinates: [115.1889, -8.4095] },
        { id: 'upg', name: 'Makassar', country: 'Indonesia', type: 'domestic', coordinates: [119.4327, -5.1476] },
        { id: 'kno', name: 'Medan', country: 'Indonesia', type: 'domestic', coordinates: [98.6722, 3.5951] },

        // INTERNATIONAL
        { id: 'mnl', name: 'Manila', country: 'Philippines', type: 'international', coordinates: [120.9842, 14.5995] },
        { id: 'kul', name: 'Kuala Lumpur', country: 'Malaysia', type: 'international', coordinates: [101.6869, 3.1390] },
        { id: 'sin', name: 'Singapore', country: 'Singapore', type: 'international', coordinates: [103.8198, 1.3521] },
        { id: 'tyo', name: 'Tokyo', country: 'Japan', type: 'international', coordinates: [139.6917, 35.6895] },
        { id: 'sel', name: 'Seoul', country: 'South Korea', type: 'international', coordinates: [126.9780, 37.5665] },
        { id: 'ruh', name: 'Riyadh', country: 'Saudi Arabia', type: 'international', coordinates: [46.6753, 24.7136] },
        { id: 'bkk', name: 'Bangkok', country: 'Thailand', type: 'international', coordinates: [100.5018, 13.7563] },
        { id: 'syd', name: 'Sydney', country: 'Australia', type: 'international', coordinates: [151.2093, -33.8688] },
      ],
      routes: [
        // HUB to Domestic
        { id: 'r-jkt-sub', fromId: 'jkt', toId: 'sub', type: 'secondary' },
        { id: 'r-jkt-dps', fromId: 'jkt', toId: 'dps', type: 'secondary' },
        { id: 'r-jkt-upg', fromId: 'jkt', toId: 'upg', type: 'secondary' },
        { id: 'r-jkt-kno', fromId: 'jkt', toId: 'kno', type: 'secondary' },

        // HUB to International
        { id: 'r-jkt-mnl', fromId: 'jkt', toId: 'mnl', type: 'primary' },
        { id: 'r-jkt-kul', fromId: 'jkt', toId: 'kul', type: 'primary' },
        { id: 'r-jkt-sin', fromId: 'jkt', toId: 'sin', type: 'primary' },
        { id: 'r-jkt-tyo', fromId: 'jkt', toId: 'tyo', type: 'primary' },
        { id: 'r-jkt-sel', fromId: 'jkt', toId: 'sel', type: 'primary' },
        { id: 'r-jkt-ruh', fromId: 'jkt', toId: 'ruh', type: 'primary' },
        { id: 'r-jkt-bkk', fromId: 'jkt', toId: 'bkk', type: 'primary' },
        { id: 'r-jkt-syd', fromId: 'jkt', toId: 'syd', type: 'primary' },
      ],
    };
  }
}
