import { Button } from './Button';
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
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-black" id="hero">
      {/* ── Background hero image ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* dark-to-transparent gradient on top half */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-black via-primary-black/80 to-transparent" />
        <img
          src={heroImage}
          alt=""
          className="absolute bottom-0 left-0 h-[65%] w-full object-cover object-center"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-32 md:px-16 lg:px-24">
        {/* Headline */}
        <h1 className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold italic text-white">
          Your Money,
          <br />
          No borders
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-text-white/70 md:text-lg">
          Tired of digital assets sitting in your wallet? Pay bills, trade
          instantly, and spend anywhere. The way digital money should be.
        </p>

        {/* Download CTA Card */}
        <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
          {/* QR Code */}
          <img
            src={qrCode}
            alt="QR code to download Zenaex"
            className="hidden h-16 w-16 rounded-md sm:block"
          />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-text-white/60 sm:text-sm">
              Scan to Download Zenaex App
            </span>

            <div className="flex items-center gap-3">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg border border-white/20 bg-primary-black px-4 py-2 transition-colors hover:border-primary-green"
              >
                <img src={playStore} alt="" className="h-4 w-4" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] text-text-white/60">GET IT ON</span>
                  <span className="text-[11px] font-semibold text-white">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg border border-white/20 bg-primary-black px-4 py-2 transition-colors hover:border-primary-green"
              >
                <img src={appleSvg} alt="" className="h-4 w-4 brightness-0 invert" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[8px] text-text-white/60">Download on the</span>
                  <span className="text-[11px] font-semibold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Phone + Floating Cards area ── */}
        <div className="relative mt-12 w-full max-w-4xl">
          {/* Coin flow decoration (behind phones) */}
          <img
            src={coinFlow}
            alt=""
            className="pointer-events-none absolute top-[5%] left-1/2 z-0 w-[110%] max-w-none -translate-x-1/2 opacity-80"
          />

          {/* Phone mockup */}
          <img
            src={phoneMockup}
            alt="Zenaex App — Sell Giftcard, Withdraw Funds, Trade Crypto"
            className="relative z-10 mx-auto w-full max-w-[680px]"
          />

          {/* ── Floating Tooltip Cards ── */}

          {/* Top-left: Bitcoin Received */}
          <img
            src={tooltipBtc}
            alt="Crypto Credited – Bitcoin Received $2500.00"
            className="absolute top-[15%] left-0 z-20 hidden w-[160px] -translate-x-[10%] lg:block xl:w-[186px]"
          />

          {/* Bottom-left: Other Banks */}
          <img
            src={tooltipGiftcard}
            alt="You Withdrew to Other Banks $1,000.00"
            className="absolute bottom-[18%] left-0 z-20 hidden w-[150px] -translate-x-[15%] lg:block xl:w-[173px]"
          />

          {/* Top-right: Funds Received */}
          <img
            src={tooltipWithdraw}
            alt="Bitcoin Sold – Funds Received $1500.00"
            className="absolute top-[15%] right-0 z-20 hidden w-[160px] translate-x-[10%] lg:block xl:w-[186px]"
          />

          {/* Bottom-right: Funds Sent */}
          <img
            src={tooltipFundsSent}
            alt="Bills Payment – Funds Sent ₦1500.00"
            className="absolute bottom-[18%] right-0 z-20 hidden w-[150px] translate-x-[15%] lg:block xl:w-[177px]"
          />
        </div>
      </div>
    </section>
  );
}
