import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import plusIcon from '../assets/faq/plus.svg';
import minusIcon from '../assets/faq/minus.svg';
import arrowRight from '../assets/shared/ArrowRight.svg';

const FAQ_DATA = [
  {
    question: "What is Zenaex and what can I use it for?",
    answer: "Zenaex is a Nigerian digital finance app that brings your entire financial life into one place. With Zenaex, you can buy and sell crypto (Bitcoin, Ethereum, USDT, USDC, and more), trade gift cards for instant cash, pay everyday bills and earn automatic cashback, withdraw to your Naira bank account, activate global eSIM data plans, and access eTrade features — all without switching between apps or dealing with hidden fees. Whether you're converting digital assets into usable money or staying connected while travelling, Zenaex is built to make it simple."
  },
  {
    question: "Is my money and crypto secure on Zenaex?",
    answer: "Yes. Security is a core part of how Zenaex is built. Your funds and digital assets are protected by industry-grade encryption and secure storage infrastructure. Every transaction on the platform comes with real-time confirmation, so you always know exactly what is happening with your money. Your account is also protected by identity verification (KYC), which ensures that only you can access your funds. We do not share your financial data with third parties. Your money stays yours."
  },
  {
    question: "What can I do with my Zenaex wallet?",
    answer: "Your Zenaex wallet is your central hub for everything. From one place, you can:\n• Store and manage multiple cryptocurrencies including Bitcoin, Ethereum, USDT, and USDC\n• Buy and sell crypto at real-time rates\n• Trade supported gift cards for instant cash\n• Pay electricity, airtime, data, cable TV, and betting bills (and earn up to 2% cashback automatically)\n• Withdraw your balance in Naira directly to your bank account or mobile wallet\n• Send and receive money across Africa\n• Activate global eSIM data plans without needing a physical SIM\nEverything you need to earn, spend, and manage money is right there."
  },
  {
    question: "How long do transactions take on Zenaex?",
    answer: "Most transactions on Zenaex are processed instantly or within a few minutes. Crypto trades and gift card exchanges are confirmed in real time. Bill payments (airtime, data, electricity, cable, betting) are processed immediately, and your cashback is applied right away — no delays. Naira withdrawals to your bank account or mobile wallet are also processed quickly, with settlement times depending on your bank. We'll always keep you updated on the status of your transaction in the app."
  },
  {
    question: "Can I convert between crypto and Naira on Zenaex?",
    answer: "Yes. Zenaex lets you convert between supported cryptocurrencies and withdraw in Naira at real-time exchange rates. You can also convert USD to Naira seamlessly through the platform. All conversions are done at live market rates with zero hidden fees, so what you see is what you get. Whether you're cashing out crypto or moving value across currencies, the process is straightforward and transparent."
  },
  {
    question: "Can I use Zenaex to pay for everyday bills and services?",
    answer: "Absolutely. Zenaex is designed to be useful every single day, not just when you're trading. You can use your wallet balance to pay electricity bills, airtime and data top-ups, cable TV subscriptions, and betting account top-ups — all in seconds. On top of that, you automatically earn up to 2% cashback on every bill payment. No promo codes, no manual claims. Your rewards are applied instantly, every time you pay. It's one of the ways Zenaex puts money back in your pocket just for using it."
  },
  {
    question: "Do I need to verify my identity to use Zenaex?",
    answer: "Yes, a quick identity verification is required to access the full features of Zenaex. This is a standard KYC (Know Your Customer) process that protects you and keeps the platform secure for everyone. Verification is straightforward and takes just a few minutes to complete after you sign up. Once verified, you unlock full access to crypto trading, withdrawals, gift card trading, bill payments, eSIM activation, and everything else Zenaex offers. Unverified accounts may have limited functionality."
  },
  {
    question: "How do I create a Zenaex account and get started?",
    answer: "Getting started on Zenaex takes less than three minutes. Here is how:\n1. Download the Zenaex app from the App Store (iOS) or Google Play (Android)\n2. Sign up using your email address or phone number\n3. Complete a quick identity verification to unlock full access\n4. Fund your wallet by depositing crypto or receiving funds from another source\nYou are now ready to trade crypto, pay bills, sell gift cards, withdraw in Naira, or activate a global eSIM. If you run into any issues along the way, our support team is available to help."
  }
];

interface FAQSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  preTitle?: React.ReactNode;
  className?: string;
}

export const FAQSection = ({
  title = "Frequently asked question",
  subtitle = "Any questions ?",
  preTitle,
  className = "bg-[#F8F9FA] py-24 md:py-32 flex flex-col items-center border-t border-gray-100"
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`w-full py-20 ${className}`} id={'faq'}>
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        <div className="mx-auto max-w-[800px]">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          {preTitle && <p className="text-[#868686] text-sm font-semibold uppercase tracking-wider mb-3">{preTitle}</p>}
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-4 text-primary-black">
            {title}
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-lg overflow-hidden border transition-all duration-300 ${isOpen ? 'border-gray-200' : 'border-transparent hover:border-gray-100'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-semibold text-primary-black text-[17px] pr-8">
                    {faq.question}
                  </span>
                  
                  <div className="shrink-0 flex items-center justify-center transition-colors">
                    <img 
                      src={isOpen ? minusIcon : plusIcon} 
                      alt={isOpen ? "Collapse" : "Expand"} 
                      className="w-7 h-7"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Chat with Support Button */}
        <div className="mt-16 flex justify-center">
          <button 
            className="flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors"
            aria-label="Chat with Zenaex Support"
          >
            Chat with Support
            <img src={arrowRight} alt="Arrow right" className="w-4 h-4" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
};
