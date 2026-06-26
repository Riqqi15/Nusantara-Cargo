import { ContentRepository } from '../domain/repositories/ContentRepository';
import { LandingPageContent } from '../domain/entities';

// Use Case: Mengambil data landing page
// Berisi aturan bisnis aplikasi. Layer ini mengoordinasikan antara domain dan repository.

export class GetLandingPageContent {
  private repository: ContentRepository;

  // Dependency Injection: Repository diinjeksi ke dalam use case
  constructor(repository: ContentRepository) {
    this.repository = repository;
  }

  async execute(lang?: 'id' | 'en'): Promise<LandingPageContent> {
    // Di sini bisa ditambahkan logic tambahan jika perlu (misal: filtering, sorting)
    const content = await this.repository.getLandingPageData(lang);
    return content;
  }
}
