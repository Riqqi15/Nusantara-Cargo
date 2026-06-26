import { CoverageData } from '../entities/Location';

export interface LocationRepository {
  getCoverageData(): Promise<CoverageData>;
}
