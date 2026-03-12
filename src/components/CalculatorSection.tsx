import { useState } from 'react';
import cryptoPhoto from '../assets/control/000.png';
import giftcardPhoto from '../assets/22.png';
import swapIcon from '../assets/23.svg';
import bitcoinIcon from '../assets/83.svg';
import coinIcon from '../assets/493.svg';
import arrowDown from '../assets/arrow-down.svg';
import moneyIcon from '../assets/money-3.svg';

type Tab = 'crypto' | 'giftcard';

export function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<Tab>('crypto');
  const [amount, setAmount] = useState<string>('100');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow integers
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  const adjustAmount = (delta: number) => {
    const current = parseInt(amount) || 0;
    setAmount(Math.max(0, current + delta).toString());
  };

  return (
    <section className="bg-[#F7F7F7] py-24" id="calculator">
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        {/* ── Heading ── */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.15] text-primary-black">
            Calculate Your Rate in Seconds
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Get instant estimates for crypto conversions and gift card payouts in real time.
          </p>
        </div>

        {/* ── Content: Calculator + Image ── */}
        <div className="grid items-stretch gap-12 md:grid-cols-[1fr_1fr]">
          {/* Left: Calculator Card */}
          <div className="rounded-lg border border-gray-100 bg-white p-8  flex flex-col justify-center h-full">
            {/* Tabs */}
            <div className="mx-auto mb-8 flex w-fit rounded-full bg-[#F0F2F4] p-1.5 ">
              <button
                onClick={() => setActiveTab('crypto')}
                className={`flex items-center gap-2.5 rounded-full px-8 py-2.5 text-sm font-semibold transition-all duration-300 ${activeTab === 'crypto'
                  ? 'bg-white text-primary-black '
                  : 'text-[#9CA3AF] hover:text-gray-700'
                  }`}
              >
                <img src={coinIcon} alt="" className={`h-[18px] w-[18px] ${activeTab === 'crypto' ? 'opacity-100' : 'opacity-40 grayscale'}`} />
                Crypto
              </button>
              <button
                onClick={() => setActiveTab('giftcard')}
                className={`flex items-center gap-2.5 rounded-full px-8 py-2.5 text-sm font-semibold transition-all duration-300 ${activeTab === 'giftcard'
                  ? 'bg-white text-primary-black'
                  : 'text-[#9CA3AF] hover:text-gray-700'
                  }`}
              >
                <img src={moneyIcon} alt="" className={`h-[18px] w-[18px] ${activeTab === 'giftcard' ? 'opacity-100' : 'opacity-40 grayscale'}`} />
                Giftcard
              </button>
            </div>

            {/* Amount */}
            <div className="mb-6 flex items-end justify-between">
              <div>
                <label className="mb-1 block text-[11px] font-medium text-gray-400">Amount</label>
                <div className="flex items-center text-[40px] font-bold tracking-tight text-primary-black leading-none">
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-[120px] bg-transparent outline-none p-0 border-none focus:ring-0"
                    placeholder="0"
                  />
                  <span className="text-gray-200 font-light translate-y-[2px]">|</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pb-1">
                <button
                  onClick={() => adjustAmount(-10)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2F4F7] font-medium text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  −
                </button>
                <button
                  onClick={() => adjustAmount(10)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F2F4F7] font-medium text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Form fields with swap icon */}
            <div className="relative mb-6 rounded-lg bg-[#FAFAFA] p-2 border border-gray-50">
              {/* Select Coin / Giftcard */}
              <div className="rounded-lg bg-white p-4 relative z-0">
                <label className="mb-1 block text-[11px] font-medium text-gray-400">
                  {activeTab === 'crypto' ? 'Select Coin' : 'Select Giftcard'}
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {activeTab === 'crypto' ? (
                      <>
                        <img src={bitcoinIcon} alt="Bitcoin" className="h-[22px] w-[22px]" />
                        <span className="text-sm font-medium text-primary-black">
                          Bitcoin <span className="text-[#A3A3A3] font-normal ml-0.5">BTC</span>
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-medium text-primary-black">Amazon</span>
                      </>
                    )}
                  </div>
                  <img src={arrowDown} alt="" className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Swap icon */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-gray-50 cursor-pointer">
                  <img src={swapIcon} alt="Swap" className="h-5 w-5 opacity-80" />
                </div>
              </div>

              {/* Select Currency */}
              <div className="mt-2 rounded-lg bg-white p-4 relative z-0">
                <label className="mb-1 block text-[11px] font-medium text-gray-400">Select Currency</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary-black">
                    US Dollar <span className="text-[#A3A3A3] font-normal ml-0.5">USD</span>
                  </span>
                  <img src={arrowDown} alt="" className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Rate info */}
            <div className="mb-6">
              <span className="inline-block rounded-full bg-[#FFF5E6] px-3 py-1 text-[11px] font-semibold text-[#FF8A00]">
                {activeTab === 'crypto' ? 'Rate: $1= NGN1,400' : 'Rate: $1= NGN750'}
              </span>
              {activeTab === 'giftcard' && (
                <span className="ml-3 inline-block rounded-full bg-[#F0F2F4] px-3 py-1 text-[11px] font-medium text-gray-600">
                  Card Type: Physical
                </span>
              )}
            </div>

            <div className="border-t border-dashed border-gray-200 mb-6 w-full"></div>

            {/* Transition between crypto and giftcard results */}
            <div className="relative overflow-hidden min-h-[120px]">
              {/* Crypto results */}
              <div
                className={`transition-all duration-500 ease-in-out ${activeTab === 'crypto'
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full absolute inset-0 opacity-0'
                  }`}
              >
                <p className="mb-4 text-sm font-semibold text-primary-black">BTC 0.000029200716527182143</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#FAFAFA] p-4">
                    <span className="mb-1.5 block text-xs font-medium text-gray-400">Buy</span>
                    <span className="text-xl font-bold tracking-tight text-primary-black">NGN 2,800.00</span>
                  </div>
                  <div className="rounded-lg bg-[#FAFAFA] p-4">
                    <span className="mb-1.5 block text-xs font-medium text-gray-400">Sell</span>
                    <span className="text-xl font-bold tracking-tight text-primary-black">NGN 2,710.00</span>
                  </div>
                </div>
              </div>

              {/* Giftcard results */}
              <div
                className={`transition-all duration-500 ease-in-out ${activeTab === 'giftcard'
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full absolute inset-0 opacity-0'
                  }`}
              >
                <p className="mb-4 text-center text-sm font-medium text-blue-600">
                  Average Confirmation Time 60 - 210 Minutes
                </p>
                <div className="rounded-lg bg-[#FAFAFA] p-4 text-center">
                  <span className="mb-1.5 block text-xs font-medium text-gray-400">Cash Value</span>
                  <span className="text-xl font-bold tracking-tight text-primary-black">NGN 73,000.00</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="mt-6 text-center text-[13px] font-medium text-[#D42626]">
              NOTE: This is an estimated rate. Actual rate may differ
            </p>
          </div>

          {/* Right: Image with smooth crossfade */}
          <div className="relative aspect-square md:aspect-auto h-full w-full overflow-hidden rounded-lg">
            <img
              src={cryptoPhoto}
              alt="Crypto trading"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${activeTab === 'crypto' ? 'opacity-100' : 'opacity-0'
                }`}
            />
            <img
              src={giftcardPhoto}
              alt="Gift card trading"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${activeTab === 'giftcard' ? 'opacity-100' : 'opacity-0'
                }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
