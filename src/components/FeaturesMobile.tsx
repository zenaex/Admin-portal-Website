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
    label: 'Recieve and Store Crypto',
    headline: 'Sell and swap crypto without delay',
    description:
      'Get multi currency wallets for BTC, ETH, USDT, USDC, and more. Your funds are protected and always accessible.',
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
      {/* 50% Top: Sticky Video + Download Area */}
      <div className="sticky top-0 z-20 flex h-[55vh] w-full flex-col items-center justify-center bg-[#F0F2F4] pb-6 pt-4">
        <div className="w-[250px] overflow-hidden rounded-lg bg-white border-2 border-black">
          <video
            src={appVideo}
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-full"
          />
        </div>

        {/* Download Button right below the video */}
        <div className="mt-4">
          <a
            href="#"
            className="flex items-center gap-3 rounded-full bg-white px-5 py-2.5 transition-all border border-gray-100"
          >
            <div className="flex items-center gap-2">
              <img src={playStore} alt="Google Play" className="h-5 w-5" />
              <img src={appleSvg} alt="App Store" className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold text-primary-black">
              Download App
            </span>
          </a>
        </div>
      </div>

      {/* 55% Bottom: Scrolling Cards Container */}
      <div className="relative z-10 flex flex-col pt-[55vh] bg-[#F0F2F4]">
        {features.map((f, i) => (
          <div
            key={i}
            className="sticky top-[55vh] flex min-h-[45vh] w-full items-start justify-center px-4"
            style={{ zIndex: 10 + i }}
          >
            <div className="w-full h-fit rounded-lg bg-white p-7 ring-1 ring-black/5 mt-4">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#eaedf1] px-4 py-1.5 text-xs font-medium text-gray-500">
                {f.label}
              </span>
              <h3 className="text-[24px] font-bold text-primary-black mb-3 leading-tight">
                {f.headline}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-500 mb-6">
                {f.description}
              </p>

              {/* Bottom Icon - No Text */}
              <div className="flex items-center justify-start pt-2">
                <img src={f.sideCard.icon} alt="" className="h-10 w-10 animate-pulse-subtle" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
