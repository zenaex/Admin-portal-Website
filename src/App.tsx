import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { FeaturesSection } from './components/FeaturesSection';
import { EverythingSection } from './components/EverythingSection';

function App() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Header />
      <Hero />
      <FeaturedServices />
      <FeaturesSection />
      {/* Spacer to separate sticky section from next section */}
      <div className="relative z-20 h-[25vh] bg-[#f5f5f5]" />
      <EverythingSection />
    </div>
  );
}

export default App;
