import { useState, useEffect } from 'react';
import heroImage from '../assets/hero/hero image.png';
import heroSvg from '../assets/hero/hero.svg';
import qrCode from '../assets/shared/qr-code.svg';
import playStore from '../assets/shared/Play store.svg';
import appleSvg from '../assets/shared/apple.svg';

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
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-primary-black" id="hero">
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
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center px-8 pt-18 md:px-12 md:pt-20 lg:px-[110px] lg:pt-24">
        {/* Headline */}
        <h1 className="text-center text-[94px] leading-[1] font-bold tracking-[-0.02em] text-white min-h-[2.1em]">
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
        <div className="mt-10 flex items-center gap-6 rounded-lg border border-gray-200 bg-white px-6 py-3 md:mt-12 md:px-8 md:py-4">
          {/* QR Code */}
          <img
            src={qrCode}
            alt="QR code to download Zenaex"
            className="hidden h-14 w-14 rounded-lg sm:block"
          />

          <div className="flex flex-col gap-2">
            <span className="text-lg leading-none font-medium text-primary-black">
              Scan to Download Zenaex App
            </span>

            <div className="flex items-center gap-2">
              {/* Google Play */}
              <a
                href="#"
                className="flex min-w-33 items-center justify-center gap-2 rounded-full bg-primary-black px-3 py-1.5 transition-opacity hover:opacity-90"
              >
                <img src={playStore} alt="" className="h-4 w-4" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] uppercase leading-none tracking-wide text-white/70 whitespace-nowrap">
                    GET IT ON
                  </span>
                  <span className="text-xs font-semibold leading-none text-white whitespace-nowrap">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex min-w-33 items-center justify-center gap-2 rounded-full bg-primary-black px-3 py-1.5 transition-opacity hover:opacity-90"
              >
                <img src={appleSvg} alt="" className="h-4 w-4 brightness-0 invert" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] leading-none text-white/70 whitespace-nowrap">
                    Download on the
                  </span>
                  <span className="text-xs font-semibold leading-none text-white whitespace-nowrap">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Combined Hero SVG (phones, coin flow, tooltip cards) ── */}
        <div className="relative -mt-2 w-full max-w-5xl pt-0 md:mt-2 md:pt-0">
          <img
            src={heroSvg}
            alt="Zenaex App — Sell Giftcard, Withdraw Funds, Trade Crypto"
            className="relative z-10 mx-auto w-[96%] md:w-[94%] lg:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
