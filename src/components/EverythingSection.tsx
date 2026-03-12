import transactionList from '../assets/features/Frame 2147227792.png';
import groupDiagram from '../assets/features/Group.png';
import iconSecurity from '../assets/00.svg';
import iconGlobe from '../assets/1.svg';
import iconDeposit from '../assets/2.svg';
import iconHistory from '../assets/88.svg';
import iconTransfer from '../assets/90.svg';
import { Button } from './Button';

const walletFeatures = [
  { icon: iconSecurity, text: 'Advanced account security' },
  { icon: iconGlobe, text: 'Multi currency crypto wallets' },
  { icon: iconDeposit, text: 'Secure withdrawals and deposits' },
  { icon: iconHistory, text: 'Complete transaction history' },
  { icon: iconTransfer, text: 'Fast, protected transfers' },
];

const convertFeatures = [
  { icon: iconSecurity, text: 'Convert Naira ⇄ US Dollar instantly' },
  { icon: iconDeposit, text: 'Store and send crypto securely' },
  { icon: iconHistory, text: 'Trade gift cards for instant payout' },
  { icon: iconTransfer, text: 'Activate global eSIM plans' },
];

export function EverythingSection() {
  return (
    <section className="relative z-20 flex justify-center bg-[#ffffff] py-20" id="everything">
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        {/* ── Heading area ── */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-[48px] leading-[1.15] font-semibold text-primary-black">
            Everything you need to manage,
            <br />
            move, and use digital money
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-500">
            From secure multi currency wallets to seamless bill payments, gift card trading, and global
            connectivity, Zena gives you full control over your assets and how you spend them in the real world.
          </p>
          <div className="mt-8 flex justify-center">
            <Button className="!bg-primary-black !text-white px-6 py-3 text-sm hover:!bg-primary-black/90">
              Learn more about Zena
            </Button>
          </div>
        </div>

        {/* ── Two cards ── */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left card: Personal Digital Wallet */}
          <div className="overflow-hidden rounded-lg bg-[#0F2618] p-10 text-white ring-1 ring-black/5">
            <h3 className="text-2xl font-bold text-white">
              Personal Digital Wallet
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
              Your secure command center for holding, sending, and tracking
              digital assets with total control and clarity.
            </p>

            {/* Feature bullet grid */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {walletFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <img src={f.icon} alt="" className="h-6 w-6 shrink-0" />
                  <span className="text-xs font-medium text-white/90">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Transaction preview image */}
            <div className="mt-8 overflow-hidden rounded-lg">
              <img
                src={transactionList}
                alt="Transaction history showing Amazon Giftcard, DOGE-USDT, and Transfer"
                className="w-full"
              />
            </div>
          </div>

          {/* Right card: Move between crypto, dollars, and naira */}
          <div className="overflow-hidden rounded-lg bg-[#F2F4F7] p-10 text-primary-black">
            <h3 className="text-2xl font-bold">
              Move between crypto, dollars
              <br />
              and naira seamlessly
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#666666]">
              Convert, trade and transact across currencies and digital assets
              without friction. One wallet. Multiple rails.
            </p>

            {/* Feature bullet grid */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {convertFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <img src={f.icon} alt="" className="h-6 w-6 shrink-0" />
                  <span className="text-xs font-medium text-primary-black">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Group diagram */}
            <div className="mt-8 flex items-center justify-center">
              <img
                src={groupDiagram}
                alt="Zenaex connects Nigeria, USA, Bitcoin, and Amazon"
                className="max-w-[320px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
