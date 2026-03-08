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
    <section className="relative overflow-hidden bg-primary-black" id="hero">
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
      <div className="relative z-20 mx-auto flex max-w-[1440px] flex-col items-center px-10 pt-40 md:px-16 md:pt-52 lg:px-20 lg:pt-60 xl:px-28">
        {/* Headline */}
        <h1 className="text-center text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-bold italic text-white">
          Your Money,
          <br />
          No borders
        </h1>

        {/* Subheading */}
        <p className="mt-8 max-w-xl text-center text-base leading-relaxed text-text-white/70 md:mt-10 md:text-lg">
          Tired of digital assets sitting in your wallet? Pay bills, trade
          instantly, and spend anywhere. The way digital money should be.
        </p>

        {/* Download CTA Card */}
        <div className="mt-10 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm md:mt-12">
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
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-primary-black px-6 py-3 transition-colors hover:border-primary-green"
              >
                <img src={playStore} alt="" className="h-5 w-5" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] text-text-white/60">GET IT ON</span>
                  <span className="text-xs font-semibold text-white">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-primary-black px-6 py-3 transition-colors hover:border-primary-green"
              >
                <img src={appleSvg} alt="" className="h-5 w-5 brightness-0 invert" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[9px] text-text-white/60">Download on the</span>
                  <span className="text-xs font-semibold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Phone + Floating Cards area ── */}
        <div className="relative mt-14 w-full max-w-5xl pb-8 md:mt-16">
          {/* Coin flow decoration (behind phones) */}
          <img
            src={coinFlow}
            alt=""
            className="pointer-events-none absolute -top-[2%] left-1/2 z-0 w-[115%] max-w-none -translate-x-1/2 opacity-85"
          />

          {/* Phone mockup */}
          <img
            src={phoneMockup}
            alt="Zenaex App — Sell Giftcard, Withdraw Funds, Trade Crypto"
            className="relative z-10 mx-auto w-full max-w-[700px]"
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
