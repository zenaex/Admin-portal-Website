import { useState, useEffect } from 'react';
import heroImage from '../assets/hero/hero image.png';
import heroSvg from '../assets/hero/hero.svg';
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

        {/* App Download Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 md:mt-12">
          {/* Google Play */}
          <a
            href="#"
            className="flex min-w-[170px] items-center justify-center gap-3 rounded-full bg-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95"
          >
            <img src={playStore} alt="" className="h-6 w-6" />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] uppercase font-bold leading-none tracking-wide text-black/60 whitespace-nowrap">
                GET IT ON
              </span>
              <span className="text-[15px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
                Google Play
              </span>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex min-w-[170px] items-center justify-center gap-3 rounded-full bg-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95"
          >
            <img src={appleSvg} alt="" className="h-6 w-6" />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[10px] font-bold leading-none text-black/60 whitespace-nowrap">
                Download on the
              </span>
              <span className="text-[15px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
                App Store
              </span>
            </div>
          </a>
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
