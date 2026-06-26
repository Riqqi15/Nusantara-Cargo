import { LandingPageContent } from '../entities';

// Interface Repository
// Ini adalah kontrak (abstraksi) bagaimana data diambil. 
// Layer use-cases hanya tahu interface ini, tidak tahu darimana data berasal (DB, API, atau Memory).

export interface ContentRepository {
  getLandingPageData(): Promise<LandingPageContent>;
}
