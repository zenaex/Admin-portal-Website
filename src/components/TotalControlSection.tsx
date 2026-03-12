import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import receiveImg from '../assets/control/999.png';
import convertImg from '../assets/control/Frame 2147227868.png';
import withdrawImg from '../assets/control/Frame 2147227868 copy.png';
import arrowRight from '../assets/shared/ArrowRight.svg';

type Tab = 'Receive' | 'Convert' | 'Withdraw';

const TABS: Tab[] = ['Receive', 'Convert', 'Withdraw'];

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
    <section className="relative w-full bg-white py-20 overflow-hidden rounded-lg" id="control">
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* Left Column (Text & Tabs) */}
        <div className="flex flex-col items-start w-full lg:w-[480px] shrink-0">
          
          {/* Tab Switcher */}
          <div className="inline-flex rounded-full bg-[#f4f4f4] p-[5px] mb-10 relative">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-8 py-2.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 ${
                  activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeControlTab"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          <h2 className="text-[48px] font-semibold leading-[1.1] tracking-tight text-primary-black mb-6">
            {currentContent.title}
          </h2>
          
          <p className="text-gray-500 text-[17px] leading-relaxed mb-10">
            {currentContent.description}
          </p>

          <button className="flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
            {currentContent.buttonText}
            <img src={arrowRight} alt="" className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column (Image) - Layout anchored to fixed container to prevent height jumping */}
        <div className="relative w-full flex-1 flex items-center justify-center lg:justify-end min-h-[400px] md:min-h-[500px] lg:min-h-[650px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={currentContent.image}
              alt={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-x-0 mx-auto lg:mx-0 lg:right-0 lg:inset-y-0 lg:my-auto w-auto h-auto max-w-full max-h-full object-contain"
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
