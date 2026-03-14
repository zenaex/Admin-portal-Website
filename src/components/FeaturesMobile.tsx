import appVideo from '../assets/features/appVideo.mp4';
import playStore from '../assets/shared/Play store.svg';
import appleSvg from '../assets/shared/apple.svg';

// Custom icons
import cardIcons1 from '../assets/features/Frame 2147227760.svg';
import cardIcons2 from '../assets/features/Frame 214.svg';
import cardIcons3 from '../assets/features/Frame 214722.svg';
import cardIcons4 from '../assets/features/Frame.svg';
import cardIcons5 from '../assets/features/Frame 2147227761.svg';

interface FeatureBlock {
  label: string;
  headline: string;
  description: string;
  sideCard: {
    text: string;
    icon: string; // SVG icon set
  };
}

const features: FeatureBlock[] = [
  {
    label: 'Recieve and Send',
    headline: 'Sell and buy crypto without delay',
    description:
      'Get multi currency wallets for BTC, ETH, USDD, USDC, and more. Your funds are protected and always accessible.',
    sideCard: {
      text: 'Store and access your crypto instantly with built in protection.',
      icon: cardIcons1,
    },
  },
  {
    label: 'Flexible Digital Services',
    headline: 'Trade gift cards and access eSIM',
    description:
      'Sell supported gift cards for instant value. Purchase international eSIM plans without a physical SIM.',
    sideCard: {
      text: 'Convert gift cards and activate global data instantly.',
      icon: cardIcons2,
    },
  },
  {
    label: 'Fast Assisted Trading',
    headline: 'Execute E-Trade with confidence',
    description:
      'Complete assisted OTC trades, and access listed assets with rapid execution and secure confirmation.',
    sideCard: {
      text: 'Execute OTC and assisted trades quickly with secure confirmation.',
      icon: cardIcons3,
    },
  },
  {
    label: 'Pan African Payouts',
    headline: 'Withdraw funds to local currencies.',
    description:
      'Swap between USD and local currency seamlessly with transparent pricing and fast processing.',
    sideCard: {
      text: 'Send and receive funds across Africa with fast, reliable settlement.',
      icon: cardIcons4,
    },
  },
  {
    label: 'Earn While You Pay',
    headline: 'Instant Cashback on all bills paid',
    description:
      'Get up to 2% cashback on Betting, Electricity, Cable, Airtime and Data payments with rewards applied automatically.',
    sideCard: {
      text: 'Enjoy up to 2% cashback automatically when you pay your bills.',
      icon: cardIcons5,
    },
  },
];

export function FeaturesMobile() {
  return (
    <div className="flex flex-col md:hidden">
      {/* Sticky Video Container */}
      <div className="sticky top-0 z-0 flex h-[45vh] w-full flex-col items-center justify-center pt-8">
        <div className="w-[180px] overflow-hidden rounded-lg bg-white border-2 border-black">
          <video
            src={appVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Scrolling Cards Container */}
      <div className="relative z-10 flex flex-col pt-[45vh]">
        {features.map((f, i) => (
          <div 
            key={i} 
            className="sticky top-12 flex min-h-[55vh] w-full items-start justify-center px-4 pt-12"
            style={{ zIndex: 10 + i }}
          >
            <div className="w-full rounded-lg bg-white p-8 shadow-xl ring-1 ring-black/5">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#eaedf1] px-4 py-1.5 text-xs font-medium text-gray-600">
                {f.label}
              </span>
              <h3 className="text-[32px] font-bold text-primary-black mb-3">
                {f.headline}
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-500 mb-6">
                {f.description}
              </p>
              <div className="flex items-start gap-4 pt-6 border-t border-gray-100">
                <img src={f.sideCard.icon} alt="" className="h-10 shrink-0" />
                <p className="text-base font-medium leading-snug text-primary-black">
                  {f.sideCard.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download Button - Fixed at Bottom on Mobile */}
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
        <a
          href="#"
          className="flex items-center gap-3 rounded-full bg-primary-black px-6 py-3 shadow-2xl transition-all"
        >
          <img src={playStore} alt="Google Play" className="h-5 w-5" />
          <img src={appleSvg} alt="App Store" className="h-5 w-5 brightness-0 invert" />
          <span className="text-sm font-semibold text-white">
            Download App
          </span>
        </a>
      </div>
    </div>
  );
}
