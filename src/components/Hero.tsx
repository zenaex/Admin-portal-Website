import { useState, useEffect } from 'react';
import heroImage from '../assets/heroimage.png';
import phoneMockup from '../assets/Phone 01 Screen 1.png';
import qrCode from '../assets/qr code.png';
import playStore from '../assets/Play store.svg';
import appleSvg from '../assets/apple.svg';
import coinFlow from '../assets/Coin flow.svg';
import tooltipBtc from '../assets/Frame 2147227863-1.svg';
import tooltipWithdraw from '../assets/Frame 2147227863-2.svg';
import tooltipGiftcard from '../assets/Frame 2147227863.svg';
import tooltipFundsSent from '../assets/Frame 2147227973.svg';

export function Hero() {
  const phrases = ['No borders', 'Moving free', 'Spend locally'];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col bg-primary-black pb-80" id="hero">
      {/* ── Background hero image ── */}
      <div className="pointer-events-none absolute inset-0 h-full">
        {/* dark-to-transparent gradient on top half */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-black via-primary-black/80 to-transparent" />
        <img
          src={heroImage}
          alt=""
          className="absolute bottom-0 left-0 h-[75%] w-full object-cover object-center"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center px-8 pt-[160px] md:px-12 md:pt-[220px] lg:px-[110px] lg:pt-[280px]">
        {/* Headline */}
        <h1 className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold italic text-white min-h-[2.1em]">
          Your Money,
          <br />
          <span
            className={`inline-block transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {phrases[index]}
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-8 max-w-xl text-center text-base leading-relaxed text-text-white/70 md:mt-10 md:text-lg">
          Tired of digital assets sitting in your wallet? Pay bills, trade
          instantly, and spend anywhere. The way digital money should be.
        </p>

        {/* Download CTA Card */}
        <div className="mt-10 flex items-center gap-5 rounded-2xl border border-gray-200 bg-white px-8 py-4 shadow-sm md:mt-12">
          {/* QR Code */}
          <img
            src={qrCode}
            alt="QR code to download Zenaex"
            className="hidden h-16 w-16 rounded-lg sm:block"
          />

          <div className="flex flex-col gap-2.5">
            <span className="text-sm font-semibold text-primary-black sm:text-base">
              Scan to Download Zenaex App
            </span>

            <div className="flex flex-wrap items-center gap-4">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-full bg-primary-black px-6 py-5 transition-opacity hover:opacity-90 min-w-[180px]"
              >
                <img src={playStore} alt="" className="h-6 w-6" />
                <div className="mt-2 flex flex-col items-start justify-center">
                  <span className="mb-0.5 text-[10px] uppercase leading-none tracking-wide text-white/70 whitespace-nowrap">
                    GET IT ON
                  </span>
                  <span className="text-sm font-semibold leading-none text-white whitespace-nowrap">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-full bg-primary-black px-6 py-5 transition-opacity hover:opacity-90 min-w-[180px]"
              >
                <img src={appleSvg} alt="" className="h-6 w-6 brightness-0 invert" />
                <div className="mt-2 flex flex-col items-start justify-center">
                  <span className="mb-0.5 text-[10px] leading-none text-white/70 whitespace-nowrap">
                    Download on the
                  </span>
                  <span className="text-sm font-semibold leading-none text-white whitespace-nowrap">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Phone + Floating Cards area ── */}
        <div className="relative mt-auto w-full max-w-5xl pt-14 md:pt-16">
          {/* Coin flow decoration (behind phones) */}
          <img
            src={coinFlow}
            alt=""
            className="pointer-events-none absolute -top-[15%] left-1/2 z-0 w-[115%] max-w-none -translate-x-1/2 opacity-85"
          />

          {/* Phone mockup */}
          <img
            src={phoneMockup}
            alt="Zenaex App — Sell Giftcard, Withdraw Funds, Trade Crypto"
            className="left-40 relative z-10 mx-auto w-full max-w-[700px] top-40"
          />

          {/* ── Floating Tooltip Cards ── */}

          {/* Top-left: Bitcoin Received */}
          <img
            src={tooltipBtc}
            alt="Crypto Credited – Bitcoin Received $2500.00"
            className="absolute top-[22%] left-[-2%] z-20 hidden w-[160px] lg:block xl:left-[-4%] xl:w-[186px]"
          />

          {/* Bottom-left: Giftcard Sold */}
          <img
            src={tooltipGiftcard}
            alt="Giftcard Sold – Funds Received $1,500.00"
            className="absolute bottom-[12%] left-[-3%] z-20 hidden w-[150px] lg:block xl:left-[-5%] xl:w-[173px]"
          />

          {/* Top-right: Other Banks */}
          <img
            src={tooltipWithdraw}
            alt="You Withdrew to Other Banks $1,000.00"
            className="absolute top-[22%] right-[-2%] z-20 hidden w-[160px] lg:block xl:right-[-4%] xl:w-[186px]"
          />

          {/* Bottom-right: Funds Sent */}
          <img
            src={tooltipFundsSent}
            alt="Bills Payment – Funds Sent ₦1500.00"
            className="absolute right-[-3%] bottom-[12%] z-20 hidden w-[150px] lg:block xl:right-[-5%] xl:w-[177px]"
          />
        </div>
      </div>
    </section>
  );
}
