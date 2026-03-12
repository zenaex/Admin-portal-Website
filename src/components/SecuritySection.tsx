import frameSvg from '../assets/Frame.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

export const SecuritySection = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[750px] overflow-hidden bg-[#0A0A0A] py-20" id="security">
      {/* ── Desktop Full SVG Background ── */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src={frameSvg}
          alt="Security background"
          className="w-full h-full object-cover object-[center_right] xl:object-center"
        />
      </div>

      {/* ── Content Container (Left Aligned) ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        
        {/* Left Text Block */}
        <div className="flex flex-col text-white max-w-md lg:max-w-lg xl:max-w-xl md:py-16">
          <h2 className="text-[60px] leading-[1.05] font-semibold tracking-tight mb-4 text-balance">
            Security Built Into
            <br />
            Every Transaction
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-[85%] font-medium">
            Zena is built with advanced security infrastructure designed to
            protect your funds, your data, and every transaction you make.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Google Play */}
            <a
              href="#"
              className="flex min-w-[170px] items-center justify-center gap-3 rounded-full bg-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95"
            >
              <img src={playStoreIcon} alt="" className="h-6 w-6" />
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
              <img src={appleIcon} alt="" className="h-6 w-6" />
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
        </div>

      </div>
    </section>
  );
};
