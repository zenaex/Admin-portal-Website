import { useEffect } from 'react';
import { Header } from './Header';
import { ProductsHero } from './ProductsHero';
import { RewardsSection } from './RewardsSection';
import { StackingSection } from './StackingSection';
import { WithdrawAfricaSection } from './WithdrawAfricaSection';
import { MoneyLimitsSection } from './MoneyLimitsSection';
import { Footer } from './Footer';

export const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Zenaex Products | Crypto Wallet, Gift Cards, eSIM & Bill Payments in Nigeria';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore everything Zenaex offers — buy and sell crypto in Nigeria, trade gift cards for cash, pay bills with cashback, activate global eSIM plans, and withdraw in Naira. One app, zero limits.');
    }
    return () => {
      document.title = 'Zenaex | Buy Crypto, Trade Gift Cards & Pay Bills in Nigeria';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Buy and sell Bitcoin, USDT & more. Trade gift cards, pay bills, and withdraw in Naira. Zenaex is Nigeria\'s all-in-one crypto and digital finance app. Download free.');
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#F2F4F7]">
      <Header variant="dark" />
      
      <main>
        <ProductsHero />
        <RewardsSection />
        <StackingSection />
        <WithdrawAfricaSection />
        <MoneyLimitsSection />
      </main>
      
      <Footer />
    </div>
  );
};
