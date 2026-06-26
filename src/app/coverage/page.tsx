import { getCoverageLocationsUseCase } from '../../infrastructure/di';
import Navbar from '../../presentation/components/layout/Navbar';
import Footer from '../../presentation/components/layout/Footer';
import CoverageMap from '../../presentation/components/sections/CoverageMap';

export default async function CoveragePage() {
  const coverageData = await getCoverageLocationsUseCase.execute();

  return (
    <main className="relative min-h-screen bg-slate-100 text-slate-900 selection:bg-sky-200 selection:text-sky-900">
      {/* Overlay Content */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        
        {/* Spacer for sticky navbar */}
        <div className="h-20 w-full bg-slate-100 border-b border-slate-200" />

        <div className="flex-grow flex items-center justify-center">
          <CoverageMap data={coverageData} />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
