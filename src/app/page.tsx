import { getLandingPageContentUseCase } from '../infrastructure/di';
import Navbar from '../presentation/components/layout/Navbar';
import Footer from '../presentation/components/layout/Footer';
import Hero from '../presentation/components/sections/Hero';
import StatsBar from '../presentation/components/sections/StatsBar';
import AboutUs from '../presentation/components/sections/AboutUs';
import Services from '../presentation/components/sections/Services';
import FleetShowcase from '../presentation/components/sections/Fleet';

// Next.js Server Component (Async Component in App Router)
export default async function Home() {
  // Fetch data using Clean Architecture Use Case
  const content = await getLandingPageContentUseCase.execute();

  return (
    <main className="relative min-h-screen selection:bg-sky-200 selection:text-sky-900 bg-slate-100 text-slate-900">
      {/* Overlay Content */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        
        <Hero hero={content.hero} />
        
        <div className="relative">
          <StatsBar stats={content.achievements} />
        </div>
        
        <AboutUs about={content.about} />
        
        <Services services={content.services} />
        
        <FleetShowcase fleets={content.fleets} />
        
        <Footer />
      </div>
    </main>
  );
}
