import { useState } from 'react';
import cryptoPhoto from '../assets/control/000.png';
import giftcardPhoto from '../assets/22.png';
import swapIcon from '../assets/23.svg';
import bitcoinIcon from '../assets/83.svg';
import coinIcon from '../assets/493.svg';
import addSquare from '../assets/add-square.svg';
import minusSquare from '../assets/minus-square.svg';
import arrowDown from '../assets/arrow-down.svg';
import moneyIcon from '../assets/money-3.svg';

type Tab = 'crypto' | 'giftcard';

export function CalculatorSection() {
  const [activeTab, setActiveTab] = useState<Tab>('crypto');
  const [amount, setAmount] = useState(100);

  return (
    <section className="bg-[#F7F7F7] py-24" id="calculator">
      <div className="mx-auto max-w-[1080px] px-8">
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
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1fr]">
          {/* Left: Calculator Card */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            {/* Tabs */}
            <div className="mx-auto mb-8 flex w-fit rounded-full bg-[#F0F2F4] p-1">
              <button
                onClick={() => setActiveTab('crypto')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeTab === 'crypto'
                    ? 'bg-white text-primary-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                <img src={coinIcon} alt="" className="h-4 w-4" />
                Crypto
              </button>
              <button
                onClick={() => setActiveTab('giftcard')}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeTab === 'giftcard'
                    ? 'bg-white text-primary-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                <img src={moneyIcon} alt="" className="h-4 w-4" />
                Giftcard
              </button>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="mb-1 block text-xs text-gray-400">Amount</label>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary-black">{amount}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAmount(Math.max(0, amount - 10))}
                    className="transition-opacity hover:opacity-70"
                  >
                    <img src={minusSquare} alt="Decrease" className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setAmount(amount + 10)}
                    className="transition-opacity hover:opacity-70"
                  >
                    <img src={addSquare} alt="Increase" className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form fields with swap icon */}
            <div className="relative mb-6">
              {/* Select Coin / Giftcard */}
              <div className="rounded-xl border border-gray-100 p-4">
                <label className="mb-1 block text-[10px] text-gray-400">
                  {activeTab === 'crypto' ? 'Select Coin' : 'Select Giftcard'}
                </label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {activeTab === 'crypto' ? (
                      <>
                        <img src={bitcoinIcon} alt="Bitcoin" className="h-5 w-5" />
                        <span className="text-sm font-semibold text-primary-black">Bitcoin</span>
                        <span className="text-xs text-gray-400">BTC</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-primary-black">Amazon</span>
                      </>
                    )}
                  </div>
                  <img src={arrowDown} alt="" className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Swap icon */}
              <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#F0F2F4]">
                  <img src={swapIcon} alt="Swap" className="h-5 w-5" />
                </div>
              </div>

              {/* Select Currency */}
              <div className="mt-3 rounded-xl border border-gray-100 p-4">
                <label className="mb-1 block text-[10px] text-gray-400">Select Currency</label>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-black">
                    US Dollar <span className="text-xs text-gray-400">USD</span>
                  </span>
                  <img src={arrowDown} alt="" className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Rate info */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium text-orange-500">
                {activeTab === 'crypto' ? 'Rate: $1= NGN1,400' : 'Rate: $1= NGN750'}
              </span>
              {activeTab === 'giftcard' && (
                <span className="rounded-full bg-[#F0F2F4] px-3 py-1 text-[10px] font-medium text-gray-600">
                  Card Type: Physical
                </span>
              )}
            </div>

            {/* Transition between crypto and giftcard results */}
            <div className="relative overflow-hidden">
              {/* Crypto results */}
              <div
                className={`transition-all duration-500 ease-in-out ${activeTab === 'crypto'
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full absolute inset-0 opacity-0'
                  }`}
              >
                <p className="mb-3 text-xs text-gray-400">BTC 0.00002500076527182143</p>
                <div className="flex gap-6">
                  <div>
                    <span className="mb-1 block text-[10px] text-gray-400">Buy</span>
                    <span className="text-lg font-bold text-primary-black">NGN 2,800.00</span>
                  </div>
                  <div className="border-l border-gray-100 pl-6">
                    <span className="mb-1 block text-[10px] text-gray-400">Sell</span>
                    <span className="text-lg font-bold text-primary-black">NGN 2,710.00</span>
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
                <p className="mb-3 text-center text-xs font-medium text-blue-600">
                  Average Confirmation Time 60 - 210 Minutes
                </p>
                <div>
                  <span className="mb-1 block text-[10px] text-gray-400">Cash Value</span>
                  <span className="text-lg font-bold text-primary-black">NGN 73,000.00</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <p className="mt-6 text-center text-[10px] font-medium text-orange-500">
              NOTE: This is an estimated rate. Actual rate may differ
            </p>
          </div>

          {/* Right: Image with smooth crossfade */}
          <div className="relative aspect-square overflow-hidden rounded-3xl">
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
