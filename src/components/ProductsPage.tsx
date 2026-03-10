import { Header } from './Header';
import { ProductsHero } from './ProductsHero';
import { RewardsSection } from './RewardsSection';
import { StackingSection } from './StackingSection';
import { WithdrawAfricaSection } from './WithdrawAfricaSection';
import { MoneyLimitsSection } from './MoneyLimitsSection';
import { Footer } from './Footer';

export const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F7]">
      <Header variant="dark" />
      
      <ProductsHero />
      <RewardsSection />
      <StackingSection />
      <WithdrawAfricaSection />
      <MoneyLimitsSection />
      
      <Footer />
    </div>
  );
};
