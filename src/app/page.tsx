import { getLandingPageContentUseCase } from '../infrastructure/di';
import Navbar from '../presentation/components/layout/Navbar';
import Footer from '../presentation/components/layout/Footer';
import Hero from '../presentation/components/sections/Hero';
import StatsBar from '../presentation/components/sections/StatsBar';
import AboutUs from '../presentation/components/sections/AboutUs';
import Services from '../presentation/components/sections/Services';
import FleetShowcase from '../presentation/components/sections/Fleet';
import Partnerships from '../presentation/components/sections/Partnerships';
import Testimonials from '../presentation/components/sections/Testimonials';

export const dynamic = 'force-dynamic';

// Next.js Server Component (Async Component in App Router)
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const lang = params.lang === 'en' ? 'en' : 'id';
  
  // Fetch data using Clean Architecture Use Case
  const content = await getLandingPageContentUseCase.execute(lang);

  return (
    <main className="relative min-h-screen selection:bg-sky-200 selection:text-sky-900 bg-slate-100 text-slate-900">
      {/* Overlay Content */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar currentLang={lang} />
        
        <Hero hero={content.hero} ctaText={content.labels.heroCta} lang={lang} />
        
        <div className="relative">
          <StatsBar stats={content.achievements} lang={lang} />
        </div>

        <AboutUs about={content.about} title={content.labels.aboutTitle} lang={lang} />
        
        <Services services={content.services} title={content.labels.servicesTitle} subTitle={content.labels.servicesSub} lang={lang} />
        
        <FleetShowcase fleets={content.fleets} title={content.labels.fleetTitle} subTitle={content.labels.fleetSub} lang={lang} />

        <Partnerships partners={content.partners} title={content.labels.partnersTitle} subTitle={content.labels.partnersSub} />

        <Testimonials testimonials={content.testimonials} title={content.labels.testimonialsTitle} subTitle={content.labels.testimonialsSub} />
        
        <Footer lang={lang} />
      </div>
    </main>
  );
}
