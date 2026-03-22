import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    description: "Store your crypto safely and access it anytime. Buy, sell, convert, and withdraw in seconds, all from one simple wallet. Switch/move options as you like.",
    image: cryptoImage,
    bgColor: "bg-white",
    textColor: "text-primary-black",
    buttonColor: "text-primary-black",
    containerClass: 'flex flex-col justify-start md:justify-center min-h-[min(520px,85vh)] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-full px-6 py-10 md:p-14 lg:p-20 pointer-events-none',
    imageContainerClass: 'relative z-10 flex w-full shrink-0 justify-center overflow-visible px-2 pb-8 md:absolute md:top-0 md:right-0 md:h-full md:w-full md:overflow-hidden md:pb-0 md:pointer-events-none',
    imageClass: 'relative mx-auto w-full max-w-[min(100%,400px)] h-auto object-contain md:absolute md:bottom-0 md:right-[5%] md:mx-0 md:max-w-none md:translate-x-[15%] md:translate-y-[50%] md:w-[70%] lg:w-[65%]'
  },
  {
    id: 2,
    title: "Pay bills and essential services seamlessly",
    description: "Use your wallet balance to handle electricity, cable, airtime, data, and other everyday payments in seconds.",
    image: billsImage,
    bgColor: "bg-primary-black",
    textColor: "text-white",
    buttonColor: "text-primary-green",
    hasButton: false,
    titleClass: 'font-semibold max-w-[596px]',
    descriptionClass: 'max-w-[100%] md:max-w-[480px]',
    containerClass: 'flex flex-col justify-start relative min-h-[min(480px,80vh)] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-30 w-full px-6 py-10 md:p-14 lg:p-20 pointer-events-none',
    imageContainerClass: 'relative z-10 flex w-full justify-center overflow-visible pb-4 md:absolute md:bottom-0 md:left-0 md:h-[80%] md:w-full md:overflow-hidden md:pb-0 md:pointer-events-none',
    imageClass: 'relative w-full max-w-[min(100%,400px)] h-auto object-contain md:absolute md:bottom-[-10%] md:left-[40%] md:w-[100%] md:max-w-none md:-translate-x-[40%] md:translate-y-[35%] lg:w-[90%]'
  },
  {
    id: 3,
    title: "Gift Cards",
    description: "Sell supported gift cards and receive payouts directly into your wallet at best safety and security.",
    logoGridImage: tradeImage,
    image: giftCardsImage,
    bgColor: "bg-white",
    textColor: "text-primary-black",
    buttonColor: "text-primary-black",
    hasButton: false,
    descriptionClass: "max-w-[100%] md:max-w-[320px] text-[#667085] md:!text-[18px] mb-6 md:mb-8",
    containerClass: 'flex flex-col justify-start md:flex-row md:justify-between min-h-[min(500px,82vh)] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-full px-6 py-10 md:w-fit md:p-14 lg:p-16 lg:pl-20 pointer-events-none self-center md:self-start',
    imageContainerClass: 'relative z-10 mx-4 mt-4 mb-8 overflow-hidden rounded-[24px] md:absolute md:bottom-4 md:right-6 md:left-auto md:top-1/2 md:-translate-y-1/2 md:mx-0 md:mt-0 md:mb-0 md:h-[85%] md:w-[50%] lg:w-[52%] md:rounded-lg md:pointer-events-none',
    imageClass: 'relative aspect-[4/3] w-full object-cover md:absolute md:inset-0 md:aspect-auto md:h-full',
    logoGridClass: 'hidden md:block w-[220px] md:w-[260px] lg:w-[280px] h-auto object-contain flex-shrink-0 mt-2'
  },
  {
    id: 4,
    title: "E-Trade",
    description: "Access market opportunities and execute trades with this secure environment built for speed and transparency.",
    image: etradeImage,
    bgColor: "bg-primary-black",
    textColor: "text-white",
    buttonColor: "text-primary-green",
    hasButton: false,
    descriptionClass: "max-w-[100%] md:max-w-[400px] text-[#98A2B3] text-[15px] md:text-[16px] xl:text-[18px] mb-8 md:mb-14",
    listItems: [
      { icon: otcIcon, text: "OTC Crypto Trading" },
      { icon: deskIcon, text: "Asset of Trading Desk" },
      { icon: multiAssetIcon, text: "Multi-Asset Trading" },
    ],
    containerClass: 'flex flex-col justify-start md:flex-row md:justify-between items-stretch md:items-center min-h-[min(560px,90vh)] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-full px-6 py-10 md:w-fit md:p-14 lg:p-16 lg:pl-20 xl:pl-24 pointer-events-none',
    imageContainerClass: 'relative z-10 flex w-full justify-center overflow-visible pb-6 md:absolute md:top-0 md:right-0 md:h-full md:w-full md:overflow-hidden md:pb-0 md:pointer-events-none',
    imageClass: 'relative w-full max-w-[min(100%,340px)] h-auto object-contain object-bottom md:absolute md:bottom-[-40%] md:right-0 md:max-w-none md:w-[125%] lg:bottom-[-45%] lg:w-[130%] lg:right-[5%] object-right-bottom'
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
    descriptionClass: "max-w-[100%] md:max-w-[360px] text-[#667085] text-[15px] md:text-[16px] lg:text-[18px] mb-8 leading-[1.4]",
    containerClass: 'flex flex-col justify-start md:flex-row md:justify-between items-start min-h-[min(520px,85vh)] md:min-h-[480px] lg:min-h-[540px]',
    textWrapperClass: 'relative z-20 w-full px-6 py-10 md:w-fit md:p-14 lg:p-16 lg:pl-20 xl:pl-24 pointer-events-none',
    imageContainerClass: 'relative z-10 flex w-full justify-center overflow-visible pb-8 md:absolute md:bottom-0 md:right-0 md:h-[60%] md:w-full md:max-w-none lg:h-full md:pointer-events-none md:overflow-hidden rounded-bl-md md:rounded-bl-none md:rounded-tr-md md:rounded-br-md',
    imageClass: 'relative w-full max-w-[min(100%,420px)] h-auto object-contain md:absolute md:top-[5%] md:right-[-30%] md:w-[160%] md:max-w-none md:top-[0%] lg:top-[5%] xl:top-[0%] md:right-[-40%] lg:right-[-35%] xl:right-[-25%] md:w-[150%] lg:w-[140%] xl:w-[130%]'
  }
];

export function StackingSection() {
  return (
    <section id="stacking" className="relative w-full bg-[#F2F4F7] py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12 lg:px-[110px]">

        {/* Header Content */}
        <div className="mb-12 text-center md:mb-24">
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
              className="sticky top-4 w-full md:top-24"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
                className={`${card.bgColor} relative mb-6 overflow-hidden rounded-[40px] min-h-0 md:mb-[4vh] md:min-h-[480px] md:rounded-lg lg:min-h-[540px] ${card.containerClass}`}
              >
                {/* Text Content Layer */}
                <div className={card.textWrapperClass}>
                  <div className="max-w-xl pointer-events-auto overflow-visible">
                    <h3 className={`${card.textColor} ${card.titleClass || 'font-bold whitespace-pre-line'} mb-4 text-[clamp(1.35rem,5vw,1.85rem)] leading-tight tracking-tight md:mb-6 md:text-[30px] md:leading-[1.2] md:tracking-[-0.02em]`}>
                      {card.title}
                    </h3>

                    {card.logoGridImage ? (
                      <div className="flex w-full max-w-xl flex-col items-start">
                        <p className={`${card.bgColor === 'bg-primary-black' ? 'text-[#98A2B3]' : 'text-gray-600'} text-[15px] font-normal leading-relaxed md:text-[16px] ${card.descriptionClass || 'max-w-[280px] md:max-w-[320px]'} tracking-normal`}>
                          {card.description}
                        </p>
                        <img src={card.logoGridImage} alt="Brands" className={card.logoGridClass || "w-[180px] md:w-[220px] lg:w-[240px] h-auto object-contain flex-shrink-0 mt-2"} loading="lazy" decoding="async" />
                      </div>
                    ) : (
                      <p className={`${card.bgColor === 'bg-primary-black' ? 'text-[#A3A3A3]' : 'text-gray-600'} mb-8 text-[15px] font-normal leading-relaxed md:mb-10 md:text-[16px] ${card.descriptionClass || 'max-w-[280px] md:max-w-[320px]'} tracking-normal`}>
                        {card.description}
                      </p>
                    )}

                    {card.listItems && (
                      <div className="mt-2 mb-8 flex w-full max-w-md flex-col gap-3 md:mt-6 md:mb-0 md:gap-4">
                        {card.listItems.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex w-full items-center justify-between gap-3 rounded-full bg-white py-2 pr-2 pl-4 md:max-w-[340px] ${idx === 1 ? 'md:max-w-[400px]' : ''
                              }`}
                          >
                            <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug text-[#101828] md:text-[16px] xl:text-[18px]">{item.text}</span>
                            <img src={item.icon} alt="" className="h-9 w-9 shrink-0 object-contain md:h-[42px] md:w-[42px]" loading="lazy" decoding="async" />
                          </div>
                        ))}
                      </div>
                    )}
                    {card.hasButton !== false && (
                      <Link to="/waitlist" className={`${card.buttonColor} mt-2 flex w-fit items-center gap-2 text-base font-semibold transition-all group hover:gap-4 md:mt-0 md:gap-3 md:text-lg md:hover:gap-5`}>
                        Get started now
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                <div className={card.imageContainerClass}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={card.imageClass}
                    loading="lazy"
                    decoding="async"
                  />
                  {card.id === 3 && (
                    <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-end p-3 md:hidden">
                      <div className="rounded-2xl bg-white p-3 shadow-md">
                        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">Trade result</p>
                        <p className="text-sm font-semibold text-gray-900">Amazon Card</p>
                        <p className="text-sm font-semibold text-emerald-600">$100.00</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
