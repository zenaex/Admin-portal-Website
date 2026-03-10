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

export function FeaturesSection() {
  return (
    <section className="relative z-10 bg-[#F0F2F4] pt-20 pb-20" id="features">
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-[1fr_300px_1fr] gap-x-12 px-12 lg:px-20">
        {/* ── Left column: feature text blocks ── */}
        <div className="flex flex-col items-end">
          {features.map((f, i) => (
            <div key={i} className="flex min-h-[50vh] w-full max-w-[320px] flex-col justify-center">
              <span className="mb-4 inline-block w-fit rounded-full bg-[#eaedf1] px-4 py-1.5 text-xs font-medium text-gray-600">
                {f.label}
              </span>
              <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-bold text-primary-black">
                {f.headline}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Center column: sticky video card ── */}
        <div className="flex items-start justify-center">
          <div className="sticky top-[25%] flex flex-col items-center gap-5">
            <div className="w-[280px] overflow-hidden rounded-md bg-white ring-1 ring-black/5">
              <video
                src={appVideo}
                autoPlay
                loop
                muted
                playsInline
                onEnded={(e) => {
                  const v = e.currentTarget;
                  v.currentTime = 0;
                  v.play();
                }}
                className="h-auto w-full"
              />
            </div>
            {/* Store icons — pill that expands on hover */}
            <a
              href="#"
              className="group flex items-center gap-2 rounded-full bg-[#F0F2F4] px-4 py-3 transition-all duration-500 ease-in-out hover:bg-primary-black hover:px-6"
            >
              <img src={playStore} alt="Google Play" className="h-5 w-5" />
              <img src={appleSvg} alt="App Store" className="h-5 w-5 transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-[150px] group-hover:opacity-100">
                Download App
              </span>
            </a>
          </div>
        </div>

        {/* ── Right column: side info cards ── */}
        <div className="flex flex-col">
          {features.map((f, i) => (
            <div key={i} className="flex min-h-[50vh] items-center">
              <div className="w-full max-w-[260px] rounded-md bg-white p-6 ring-1 ring-black/5">
                <p className="text-sm font-medium leading-snug text-primary-black">
                  {f.sideCard.text}
                </p>
                <div className="mt-4">
                  <img src={f.sideCard.icon} alt="" className="h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
