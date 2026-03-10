import frameSvg from '../assets/Frame.svg';
import qrCodeImg from '../assets/shared/qr-code.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

export const SecuritySection = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden bg-[#0A0A0A]" id="security">
      {/* ── Desktop Full SVG Background ── */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src={frameSvg}
          alt="Security background"
          className="w-full h-full object-cover object-[center_right] xl:object-center"
        />
      </div>

      {/* ── Content Container (Left Aligned) ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8">
        
        {/* Left Text Block */}
        <div className="flex flex-col text-white max-w-md lg:max-w-lg xl:max-w-xl md:py-16">
          <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.05] font-bold tracking-tight mb-4 text-balance">
            Security Built Into
            <br />
            Every Transaction
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-[85%] font-medium">
            Zena is built with advanced security infrastructure designed to
            protect your funds, your data, and every transaction you make.
          </p>

          {/* Download CTA Card */}
          <div className="flex items-center gap-4 rounded-md bg-white pl-3 pr-7 py-3 md:pl-4 md:pr-8 md:py-3.5 w-fit">
            {/* QR Code */}
            <img
              src={qrCodeImg}
              alt="QR code to download Zenaex"
              className="h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-lg shrink-0 object-contain"
            />

            <div className="flex flex-col gap-1.5 justify-center">
              <span className="text-[13px] sm:text-[15px] font-bold text-primary-black tracking-tight leading-none mb-1">
                Scan to Download Zenaex App
              </span>

              <div className="flex items-center gap-2">
                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md bg-black px-3 py-1.5 transition-transform hover:scale-105 active:scale-95"
                >
                  <img src={playStoreIcon} alt="" className="h-[18px] w-[18px]" />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[7px] uppercase font-medium leading-[1] tracking-wider text-white/80 whitespace-nowrap">
                      GET IT ON
                    </span>
                    <span className="text-[11px] sm:text-[13px] font-semibold leading-[1.2] text-white whitespace-nowrap">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-md bg-black px-3 py-1.5 transition-transform hover:scale-105 active:scale-95"
                >
                  <img src={appleIcon} alt="" className="h-[20px] w-[20px] text-white brightness-0 invert" />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[7px] font-medium leading-[1] text-white/80 whitespace-nowrap">
                      Download on the
                    </span>
                    <span className="text-[11px] sm:text-[13px] font-semibold leading-[1.2] text-white whitespace-nowrap">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
