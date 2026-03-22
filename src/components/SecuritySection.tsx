import frameSvg from '../assets/Frame.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

export const SecuritySection = () => {
  return (
    <section
      className="relative flex min-h-0 flex-col justify-center overflow-hidden bg-[#0A0A0A] py-12 md:min-h-[600px] md:py-20 lg:min-h-[750px]"
      id="security"
    >
      {/* Desktop: full-bleed illustration */}
      <div className="absolute inset-0 z-0 hidden h-full w-full md:block">
        <img
          src={frameSvg}
          alt="Security background"
          className="h-full w-full object-cover object-[center_right] xl:object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Mobile: green glow behind circular graphic */}
      <div
        className="pointer-events-none absolute bottom-[8%] left-1/2 z-0 h-[min(55vh,420px)] w-[140%] max-w-none -translate-x-1/2 md:hidden"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 50% 55%, rgba(38, 85, 67, 0.55) 0%, rgba(10, 10, 10, 0) 65%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-12 lg:px-[110px]">
        <div className="flex max-w-md flex-col text-white md:max-w-lg lg:max-w-xl md:py-16">
          <h2 className="mb-4 text-left text-[28px] font-semibold leading-[1.1] tracking-tight text-balance md:text-[36px] lg:text-[60px]">
            Security Built Into
            <br />
            Every Transaction
          </h2>
          <p className="mb-8 max-w-[95%] text-left text-sm font-medium leading-relaxed text-gray-300 md:mb-8 md:max-w-[85%] md:text-base">
            Zena is built with advanced security infrastructure designed to
            protect your funds, your data, and every transaction you make.
          </p>

          <div className="flex flex-row flex-wrap items-stretch gap-3 md:gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-transform active:scale-95 sm:min-w-[170px] sm:flex-initial sm:gap-3 sm:px-6 sm:py-2.5 md:hover:scale-105"
              aria-label="Get Zenaex on Google Play"
            >
              <img src={playStoreIcon} alt="" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <div className="flex min-w-0 flex-col items-start justify-center">
                <span className="text-[9px] font-bold uppercase leading-none tracking-wide text-black/60 sm:text-[10px]">
                  GET IT ON
                </span>
                <span className="mt-0.5 text-[13px] font-bold leading-none text-black sm:text-[15px]">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-transform active:scale-95 sm:min-w-[170px] sm:flex-initial sm:gap-3 sm:px-6 sm:py-2.5 md:hover:scale-105"
              aria-label="Download Zenaex on the App Store"
            >
              <img src={appleIcon} alt="" className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
              <div className="flex min-w-0 flex-col items-start justify-center">
                <span className="text-[9px] font-bold leading-none text-black/60 sm:text-[10px]">
                  Download on the
                </span>
                <span className="mt-0.5 text-[13px] font-bold leading-none text-black sm:text-[15px]">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile: circular hero art (same asset as desktop, cropped) */}
        <div className="relative mx-auto mt-12 flex w-full max-w-[320px] justify-center md:hidden">
          <div className="relative aspect-square w-full max-w-[300px] overflow-hidden rounded-full ring-1 ring-white/10">
            <img
              src={frameSvg}
              alt=""
              className="h-full w-full scale-[1.35] object-cover object-[62%_42%]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
