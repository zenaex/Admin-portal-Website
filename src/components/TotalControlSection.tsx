import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import receiveImg from '../assets/999.png';
import convertImg from '../assets/000.png';
import withdrawImg from '../assets/Frame 2147227868.png';
import arrowRight from '../assets/ArrowRight.svg';

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
    <section className="relative w-full bg-white py-24 md:py-32 overflow-hidden" id="control">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column */}
        <div className="flex flex-col items-start w-full max-w-xl">
          
          {/* Tab Switcher */}
          <div className="inline-flex rounded-full bg-[#f4f4f4] p-1 mb-10 relative">
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
                    className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-tight text-primary-black mb-6">
            {currentContent.title}
          </h2>
          
          <p className="text-gray-500 text-[17px] leading-relaxed mb-10 max-w-[90%]">
            {currentContent.description}
          </p>

          <button className="flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
            {currentContent.buttonText}
            <img src={arrowRight} alt="" className="w-4 h-4" />
          </button>
        </div>

        {/* Right Column (Image) */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] flex items-center justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              src={currentContent.image}
              alt={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute right-0 top-0 w-full lg:w-[120%] h-full object-cover object-left rounded-3xl"
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
