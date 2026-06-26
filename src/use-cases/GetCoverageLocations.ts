import { LocationRepository } from '../domain/repositories/LocationRepository';
import { CoverageData } from '../domain/entities/Location';

export class GetCoverageLocationsUseCase {
  constructor(private locationRepository: LocationRepository) {}

  async execute(): Promise<CoverageData> {
    return this.locationRepository.getCoverageData();
  }
}
