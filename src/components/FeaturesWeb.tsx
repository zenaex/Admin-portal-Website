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
    label: 'Crypto Wallet',
    headline: 'Your Crypto Wallet — Secure, Instant, Always Accessible',
    description:
      'Store, buy, sell, convert, and withdraw Bitcoin, Ethereum, USDT, USDC, and more — all from one simple interface. No unnecessary complexity. Full control over your digital assets, any time, anywhere.',
    sideCard: {
      text: 'Multi-currency wallets with secure storage, real-time pricing, and 24/7 access to your funds.',
      icon: cardIcons1,
    },
  },
  {
    label: 'Gift Cards & Global eSIM',
    headline: 'Trade Gift Cards for Cash and Access Global eSIM Plans',
    description:
      'Turn unused gift cards into real value. Sell supported gift cards on Zenaex and receive instant payouts directly to your wallet. Activate international eSIM data plans from anywhere — no physical SIM required.',
    sideCard: {
      text: 'Sell gift cards for instant cash. Buy global eSIM plans and get online anywhere in the world.',
      icon: cardIcons2,
    },
  },
  {
    label: 'eTrade',
    headline: 'eTrade — Fast, Transparent Market Access',
    description:
      'Access market opportunities and execute trades in a secure environment built for speed and transparency. Zenaex eTrade gives you the tools to act fast, trade smart, and stay in control of every position.',
    sideCard: {
      text: 'Execute OTC and assisted trades quickly with secure, real-time confirmation.',
      icon: cardIcons3,
    },
  },
  {
    label: 'Currency Withdrawal',
    headline: 'Withdraw in Naira — Fast, Secure, Zero Hidden Fees',
    description:
      'Convert your crypto or USD balance into Naira at real-time exchange rates. Send and receive money across Africa with fast settlement straight to your bank account or mobile wallet — no surprises, no delays.',
    sideCard: {
      text: 'Send and receive funds across Africa with fast, reliable settlement and zero hidden fees.',
      icon: cardIcons4,
    },
  },
  {
    label: 'Bill Payments',
    headline: 'Pay Every Nigerian Bill and Earn 2% Cashback Instantly',
    description:
      'Use your Zenaex wallet to pay electricity, cable TV, airtime, data, and other everyday essentials in seconds. Earn automatic cashback on every payment — rewards applied instantly, every time. No codes, no delays.',
    sideCard: {
      text: 'Enjoy up to 2% cashback automatically on every bill payment, applied instantly.',
      icon: cardIcons5,
    },
  },
];

export function FeaturesWeb() {
  return (
    <div className="relative hidden md:grid w-full grid-cols-[1fr_300px_1fr] gap-x-12">
      {/* Left Column: Feature Text Blocks */}
      <div className="flex flex-col items-start">
        {features.map((f, i) => (
          <div key={i} className="flex min-h-[85vh] w-full max-w-md flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-[#eaedf1] px-4 py-1.5 text-xs font-medium text-gray-600">
              {f.label}
            </span>
            <h3 className="text-[30px] leading-[1.15] font-semibold text-primary-black">
              {f.headline}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600">
              {f.description}
            </p>
          </div>
        ))}
      </div>

      {/* Center Column: Sticky Video Container */}
      <div className="flex items-start justify-center">
        <div className="sticky top-24 flex flex-col items-center gap-5">
          <div className="w-[280px] overflow-hidden rounded-lg bg-white border-2 border-black">
            <video
              src={appVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="h-auto w-full"
            />
          </div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center rounded-full bg-white px-5 py-3 transition-all duration-500 ease-in-out hover:bg-primary-black shadow-sm"
            aria-label="Download Zenaex App"
          >
            <div className="flex items-center gap-2">
              <img src={playStore} alt="Google Play" className="h-5 w-5" />
              <img src={appleSvg} alt="App Store" className="h-5 w-5 transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
            </div>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-white opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-3">
              Download App
            </span>
          </a>
        </div>
      </div>

      {/* Right Column: Side Info Cards */}
      <div className="flex flex-col items-end">
        {features.map((f, i) => (
          <div key={i} className="flex min-h-[85vh] items-center">
            <div className="w-full max-w-[320px] rounded-lg bg-white p-8 ring-1 ring-black/5">
              <p className="text-base font-medium leading-snug text-primary-black">
                {f.sideCard.text}
              </p>
              <div className="mt-6">
                <img src={f.sideCard.icon} alt="Feature visual" className="h-10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
