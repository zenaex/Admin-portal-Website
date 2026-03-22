import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Assets
import receiveImg from '../assets/control/999.png';
import convertImg from '../assets/control/Frame 2147227868.png';
import withdrawImg from '../assets/control/Frame 2147227868 copy.png';
import arrowRight from '../assets/shared/ArrowRight.svg';

type Tab = 'Receive' | 'Convert' | 'Withdraw';

const TABS: Tab[] = ['Receive', 'Convert', 'Withdraw'];

const MOBILE_DESCRIPTION =
  'Get instant estimates for crypto conversions and gift card payouts in real time.';

const TAB_CONTENT = {
  Receive: {
    title: 'Total control over your digital money',
    description: 'Zena gives you complete freedom to store, move, convert, and use your digital assets. From crypto wallets to bill payments, gift card trading, and global connectivity, everything you need lives in one secure place.',
    buttonText: 'Explore our Products',
    image: receiveImg,
  },
  Convert: {
    title: 'Total control over your digital money',
    description: 'Zena gives you complete freedom to store, move, convert, and use your digital assets. From crypto wallets to bill payments, gift card trading, and global connectivity, everything you need lives in one secure place.',
    buttonText: 'Explore your wallet',
    image: convertImg,
  },
  Withdraw: {
    title: 'Total control over your digital money',
    description: 'Zena gives you complete freedom to store, move, convert, and use your digital assets. From crypto wallets to bill payments, gift card trading, and global connectivity, everything you need lives in one secure place.',
    buttonText: 'Explore your wallet',
    image: withdrawImg,
  },
};

export const TotalControlSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Receive');
  const currentContent = TAB_CONTENT[activeTab];

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20" id="control">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-0 px-4 md:px-12 lg:flex-row lg:items-center lg:gap-20 lg:px-[110px]">
        {/* Text + tabs + CTA */}
        <div className="flex w-full shrink-0 flex-col items-start lg:w-[480px]">
          {/* Tab Switcher */}
          <div className="relative mb-8 inline-flex rounded-full bg-[#f4f4f4] p-[5px] md:mb-10">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 rounded-full px-5 py-2.5 text-xs font-medium transition-colors duration-300 sm:px-8 sm:text-sm ${
                  activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeControlTab"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <h2 className="mb-4 text-[28px] font-semibold leading-[1.1] tracking-tight text-primary-black md:mb-6 md:text-[32px] lg:text-[48px]">
            {currentContent.title}
          </h2>

          <p className="mb-8 hidden text-[17px] leading-relaxed text-gray-500 md:mb-10 md:block">
            {currentContent.description}
          </p>
          <p className="mb-8 text-base leading-relaxed text-gray-500 md:hidden">
            {MOBILE_DESCRIPTION}
          </p>

          <Link
            to="/products"
            className="flex items-center gap-3 rounded-full bg-[#0A0A0A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            {currentContent.buttonText}
            <img src={arrowRight} alt="" className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile: image card + pagination */}
        <div className="mt-10 flex w-full flex-col lg:hidden">
          <div className="relative w-full overflow-hidden rounded-3xl bg-[#f4f4f4]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={currentContent.image}
                alt={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full max-h-[min(72vh,520px)] object-contain object-center"
              />
            </AnimatePresence>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-label={tab}
                aria-current={activeTab === tab ? 'true' : undefined}
                className={
                  activeTab === tab
                    ? 'h-2 w-8 rounded-full bg-[#CCFF00] transition-all'
                    : 'h-2 w-2 rounded-full bg-gray-300 transition-all'
                }
              />
            ))}
          </div>
        </div>

        {/* Desktop: image column */}
        <div className="relative hidden min-h-[400px] w-full flex-1 items-center justify-center md:min-h-[500px] lg:flex lg:min-h-[650px] lg:justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={currentContent.image}
              alt={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-x-0 mx-auto h-auto w-auto max-h-full max-w-full object-contain lg:inset-y-0 lg:my-auto lg:mx-0 lg:right-0"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
