import { motion } from 'framer-motion';
import cryptoImage from '../assets/Group 14.svg';
import billsImage from '../assets/Group 15.svg';
import giftCardsImage from '../assets/Frame 2147227943.png';
import tradeImage from '../assets/Frame 2147228047.png';
import esimImage from '../assets/Frame 2147228052.png';
import otcIcon from '../assets/Frame 2147227952.svg';
import deskIcon from '../assets/Frame 2147227952-1.svg';
import multiAssetIcon from '../assets/Frame 2147227952-2.svg';
import etradeImage from '../assets/Group 16.png';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  buttonColor: string;
  hasButton?: boolean;
  titleClass?: string;
  descriptionClass?: string;
  logoGridImage?: string;
  // Layout classes are now inline so you can manually edit them easily
  containerClass: string;
  textWrapperClass: string;
  imageContainerClass: string;
  imageClass: string;
  logoGridClass?: string;
  listItems?: { icon: string; text: string }[];
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Crypto Wallet",
    description: "Store your crypto safely and access it anytime. Buy, sell, convert, and withdraw in seconds, all from one simple wallet built to move as fast as you do.",
    image: cryptoImage,
    bgColor: "bg-white",
    textColor: "text-primary-black",
    buttonColor: "text-primary-black",
    containerClass: 'flex flex-col justify-center min-h-[420px] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-full p-10 md:p-14 lg:p-20 pointer-events-none',
    imageContainerClass: 'absolute top-0 right-0 w-full h-full pointer-events-none z-10 overflow-hidden',
    imageClass: 'absolute bottom-0 right-[5%] w-[80%] md:w-[70%] lg:w-[65%] max-w-none h-auto object-contain translate-x-[15%] translate-y-[50%]'
  },
  {
    id: 2,
    title: "Pay bills and essential services seamlessly",
    description: "Use your wallet balance to handle electricity, cable, airtime, data, and other\neveryday payments in seconds.",
    image: billsImage,
    bgColor: "bg-primary-black",
    textColor: "text-white",
    buttonColor: "text-primary-green",
    hasButton: false, // Hidden to match design screenshot
    titleClass: 'font-semibold w-[596px] max-w-none whitespace-nowrap', // Forces the title to precisely 596px width on a single line
    descriptionClass: 'max-w-[100%] md:max-w-[480px] whitespace-pre-line', // Wider to allow the explicit \n break
    containerClass: 'flex flex-col justify-start relative min-h-[420px] md:min-h-[480px] lg:min-h-[540px]', // Reverted to standard height
    textWrapperClass: 'relative z-30 w-full p-10 md:p-14 lg:p-20 pointer-events-none',
    imageContainerClass: 'absolute bottom-0 left-0 w-full h-[80%] pointer-events-none z-10 overflow-hidden',
    // Scaled down the width so it can fit inside the standard height without overlapping the button.
    imageClass: 'w-[120%] max-w-none md:w-[100%] lg:w-[90%] absolute bottom-[-10%] left-[40%] -translate-x-[40%] translate-y-[35%] h-auto object-contain'
  },
  {
    id: 3,
    title: "Gift Cards",
    description: "Sell supported gift cards and\nreceive payouts directly into your\nwallet or bank quickly and securely.",
    logoGridImage: tradeImage,
    image: giftCardsImage,
    bgColor: "bg-white",
    textColor: "text-primary-black",
    buttonColor: "text-primary-black",
    hasButton: false, // The screenshot doesn't show a button
    descriptionClass: "max-w-[100%] md:max-w-[320px] whitespace-pre-line text-[#667085] !text-[18px] mb-8", // Explicit line breaks and exact grey color
    containerClass: 'flex flex-col md:flex-row justify-between min-h-[420px] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-fit p-10 md:p-14 lg:p-16 lg:pl-20 pointer-events-none self-center md:self-start',
    // Using top-1/2 and -translate-y-1/2 to perfectly center the fixed-height container vertically
    imageContainerClass: 'absolute bottom-4 right-4 left-4 h-[45%] md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:right-6 md:left-auto md:w-[50%] lg:w-[52%] md:h-[85%] pointer-events-none z-10 overflow-hidden rounded-md',
    imageClass: 'absolute inset-0 w-full h-full object-cover',
    logoGridClass: 'w-[220px] md:w-[260px] lg:w-[280px] h-auto object-contain flex-shrink-0 mt-2'
  },
  {
    id: 4,
    title: "E-Trade",
    description: "Access market opportunities and execute trades within a\nsecure environment built for speed and transparency.",
    image: etradeImage,
    bgColor: "bg-primary-black",
    textColor: "text-white",
    buttonColor: "text-primary-green",
    hasButton: false, // The screenshot doesn't show a button
    descriptionClass: "max-w-[100%] md:max-w-[400px] whitespace-pre-line text-[#98A2B3] text-[16px] xl:text-[18px] mb-14",
    listItems: [
      { icon: otcIcon, text: "OTC Crypto Trading" },
      { icon: deskIcon, text: "Assisted Trading Desk" },
      { icon: multiAssetIcon, text: "Multi-Asset Trading" },
    ],
    containerClass: 'flex flex-col md:flex-row justify-between min-h-[420px] md:min-h-[480px] lg:min-h-[540px] items-center',
    textWrapperClass: 'relative z-20 w-fit p-10 md:p-14 lg:p-16 lg:pl-20 xl:pl-24 pointer-events-none',
    imageContainerClass: 'absolute top-0 right-0 w-full md:w-[50%] lg:w-[48%] h-full pointer-events-none z-10 overflow-hidden rounded-bl-md md:rounded-bl-none md:rounded-br-md md:rounded-tr-md',
    imageClass: 'absolute bottom-[-35%] md:bottom-[-40%] lg:bottom-[-45%] right-0 md:right-[-2%] lg:right-[5%] w-[100%] md:w-[125%] lg:w-[130%] h-auto object-contain object-right-bottom'
  },
  {
    id: 5,
    title: "Global ESIM",
    description: "Store, send, receive, and manage supported digital assets with full visibility and control.",
    image: esimImage,
    bgColor: "bg-white",
    textColor: "text-primary-black",
    buttonColor: "text-primary-black",
    hasButton: true,
    descriptionClass: "max-w-[100%] md:max-w-[360px] text-[#667085] text-[16px] lg:text-[18px] mb-8 leading-[1.4]",
    containerClass: 'flex flex-col md:flex-row justify-between min-h-[420px] md:min-h-[480px] lg:min-h-[540px] items-start',
    textWrapperClass: 'relative z-20 w-fit p-10 md:p-14 lg:p-16 lg:pl-20 xl:pl-24 pointer-events-none',
    imageContainerClass: 'absolute bottom-0 right-0 w-full md:w-[65%] lg:w-[60%] h-[60%] md:h-full pointer-events-none z-10 overflow-hidden rounded-bl-md md:rounded-bl-none md:rounded-tr-md md:rounded-br-md',
    imageClass: 'absolute top-[5%] md:top-[0%] lg:top-[5%] xl:top-[0%] right-[-30%] md:right-[-40%] lg:right-[-35%] xl:right-[-25%] w-[160%] md:w-[150%] lg:w-[140%] xl:w-[130%] max-w-none h-auto object-contain'
  }
];

export function StackingSection() {
  return (
    <section id="stacking" className="relative w-full bg-[#F2F4F7] pt-32 pb-64">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-[110px]">

        {/* Header Content */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.5rem,5vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-primary-black mb-6"
          >
            A complete ecosystem<br />for modern finance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto"
          >
            From crypto wallets to bill payments, trading, and global connectivity, Zena brings every part of your financial life together.
          </motion.p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-0">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="sticky top-24 w-full"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`${card.bgColor} rounded-md overflow-hidden min-h-[420px] md:min-h-[480px] lg:min-h-[540px] relative mb-[4vh] ${card.containerClass}`}
              >
                {/* Text Content Layer */}
                <div className={card.textWrapperClass}>
                  <div className="max-w-xl pointer-events-auto overflow-visible">
                    <h3 className={`${card.textColor} text-[30px] ${card.titleClass || 'font-bold whitespace-pre-line'} mb-6 leading-[1.2] tracking-[-0.02em]`}>
                      {card.title}
                    </h3>

                    {card.logoGridImage ? (
                      <div className="flex flex-col items-start w-fit">
                        <p className={`${card.bgColor === 'bg-primary-black' ? 'text-[#98A2B3]' : 'text-gray-500'} text-[16px] font-normal ${card.descriptionClass || 'max-w-[280px] md:max-w-[320px]'} leading-[1.3] tracking-normal mb-8`}>
                          {card.description}
                        </p>
                        <img src={card.logoGridImage} alt="Brands" className={card.logoGridClass || "w-[180px] md:w-[220px] lg:w-[240px] h-auto object-contain flex-shrink-0"} />
                      </div>
                    ) : (
                      <p className={`${card.bgColor === 'bg-primary-black' ? 'text-[#98A2B3]' : 'text-gray-500'} text-[16px] font-normal mb-10 ${card.descriptionClass || 'max-w-[280px] md:max-w-[320px]'} leading-[1.3] tracking-normal`}>
                        {card.description}
                      </p>
                    )}

                    {/* New List Items Rendering */}
                    {card.listItems && (
                      <div className="flex flex-col gap-4 mt-6">
                        {card.listItems.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-between gap-6 bg-white rounded-full py-[6px] pr-[6px] pl-6 w-full ${idx === 1 ? 'max-w-[380px] md:max-w-[400px]' : 'max-w-[320px] md:max-w-[340px]'
                              }`}
                          >
                            <span className="text-[#101828] font-medium text-[16px] xl:text-[18px] leading-[1.2] whitespace-nowrap">{item.text}</span>
                            <img src={item.icon} alt={item.text} className="w-[42px] h-[42px] flex-shrink-0 object-contain" />
                          </div>
                        ))}
                      </div>
                    )}
                    {card.hasButton !== false && (
                      <button className={`${card.buttonColor} font-semibold text-lg flex items-center gap-3 hover:gap-5 transition-all w-fit group`}>
                        Get Started Now
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Background/Side Image Layer */}
                <div className={card.imageContainerClass}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={card.imageClass}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
