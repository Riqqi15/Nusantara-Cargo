import { GetLandingPageContent } from '../use-cases/GetLandingPageContent';
import { InMemoryContentRepository } from './repositories/InMemoryContentRepository';
import { GetCoverageLocationsUseCase } from '../use-cases/GetCoverageLocations';
import { InMemoryLocationRepository } from './repositories/InMemoryLocationRepository';

// Dependency Injection Container
// File ini bertugas merakit (wiring) semua dependencies sehingga UI component 
// cukup memanggil fungsi yang sudah jadi tanpa perlu merakit sendiri.

const contentRepository = new InMemoryContentRepository();
const getLandingPageContentUseCase = new GetLandingPageContent(contentRepository);

const locationRepository = new InMemoryLocationRepository();
const getCoverageLocationsUseCase = new GetCoverageLocationsUseCase(locationRepository);

export {
  getLandingPageContentUseCase,
  getCoverageLocationsUseCase
};
