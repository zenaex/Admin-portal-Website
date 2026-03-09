import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { FeaturesSection } from './components/FeaturesSection';
import { EverythingSection } from './components/EverythingSection';
import { CalculatorSection } from './components/CalculatorSection';
import { GetStartedSection } from './components/GetStartedSection';
import { SecuritySection } from './components/SecuritySection';
import { TotalControlSection } from './components/TotalControlSection';

function App() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Header />
      <Hero />
      <FeaturedServices />
      <FeaturesSection />
      {/* Spacer to separate sticky section from next section */}
      <div className="relative z-20 h-[25vh] bg-[#F0F2F4]" />
      <EverythingSection />
      <CalculatorSection />
      <GetStartedSection />
      <SecuritySection />
      <TotalControlSection />
    </div>
  );
}

export default App;
