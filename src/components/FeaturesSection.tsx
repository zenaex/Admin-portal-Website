import { FeaturesMobile } from './FeaturesMobile';
import { FeaturesWeb } from './FeaturesWeb';

export function FeaturesSection() {
  return (
    <section className="relative z-10 bg-[#F0F2F4] pt-20 pb-20" id="features">
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        {/* Mobile View */}
        <FeaturesMobile />
        
        {/* Desktop View */}
        <FeaturesWeb />
      </div>
    </section>
  );
}
