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
            preload="metadata"
            className="h-auto w-full"
          />
        </div>

        {/* Download Button right below the video — icon-only pill */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 transition-opacity hover:opacity-90"
            aria-label="Download Zenaex on Google Play or App Store"
          >
            <img src={playStore} alt="" className="h-5 w-5" />
            <img src={appleSvg} alt="" className="h-5 w-5 brightness-0" />
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
              <span className="mb-4 inline-block w-fit rounded-full bg-[#eaedf1] px-4 py-1.5 text-xs font-medium text-gray-600">
                {f.label}
              </span>
              <h3 className="text-[28px] font-bold text-primary-black mb-3 leading-tight">
                {f.headline}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-600 mb-6">
                {f.description}
              </p>

              {/* Bottom Icon - No Text */}
              <div className="flex items-center justify-start pt-2">
                <img src={f.sideCard.icon} alt="Feature visual" className="h-10 w-10 animate-pulse-subtle" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
