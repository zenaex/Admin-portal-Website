import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import plusIcon from '../assets/faq/plus.svg';
import minusIcon from '../assets/faq/minus.svg';
import arrowRight from '../assets/shared/ArrowRight.svg';

const FAQ_DATA = [
  {
    question: "What is Zena?",
    answer: "Zena is a digital wallet that allows you to store, send, receive, convert, and use crypto and digital money in one secure platform. You can also pay bills, trade gift cards, activate global eSIM, and access digital financial services."
  },
  {
    question: "Is my money and crypto safe on Zena?",
    answer: "Yes. Zena uses industry-standard encryption and security protocols to protect your assets, transactions, and personal data. Your wallet is secured and accessible only by you."
  },
  {
    question: "What can I do with my Zena wallet?",
    answer: "With Zena, you can:\n• Store multiple cryptocurrencies\n• Send and receive crypto securely\n• Withdraw funds to your local bank account\n• Convert between supported currencies\n• Trade gift cards for instant payouts\n• Pay bills like electricity, cable, and mobile data\n• Activate and manage global eSIM\n• Access eTrade and other digital financial services"
  },
  {
    question: "How long do transactions take?",
    answer: "Most transactions are processed within seconds to minutes. The exact time may vary depending on the network and transaction confirmation requirements."
  },
  {
    question: "Can I convert between currencies?",
    answer: "Yes. Zena allows you to convert supported assets within your wallet. You can easily manage your digital funds based on your needs."
  },
  {
    question: "Can I use Zena for everyday services?",
    answer: "Yes. With Zena, you can pay bills, buy airtime and data, trade gift cards, activate eSIM, and seamlessly use your digital money in real life."
  },
  {
    question: "Do I need verification to use Zena?",
    answer: "Yes. Basic verification helps keep your account secure and ensures safe access to all features and services."
  },
  {
    question: "How do I get started?",
    answer: "Download the Zena app, create your account, verify your identity, and start using your wallet immediately."
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
                      <div className="px-6 pb-6 pt-0 text-[#868686] text-sm leading-relaxed whitespace-pre-wrap">
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
          <button className="flex items-center gap-3 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
            Chat with Support
            <img src={arrowRight} alt="" className="w-4 h-4" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
};
