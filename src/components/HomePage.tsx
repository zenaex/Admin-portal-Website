import { Header } from './Header';
import { Hero } from './Hero';
import { FeaturedServices } from './FeaturedServices';
import { FeaturesSection } from './FeaturesSection';
import { EverythingSection } from './EverythingSection';
import { CalculatorSection } from './CalculatorSection';
import { GetStartedSection } from './GetStartedSection';
import { SecuritySection } from './SecuritySection';
import { TotalControlSection } from './TotalControlSection';
import { FAQSection } from './FAQSection';
import { NewsletterSection } from './NewsletterSection';
import { Footer } from './Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary-black">
      <Header variant="light" />
      
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
      <FAQSection />
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};
