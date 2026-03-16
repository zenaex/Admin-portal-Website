import moneyLimitsSvg from '../assets/Frame 2147227839.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

export const MoneyLimitsSection = () => {
  return (
    <section id="money-limits" className="bg-[#0A0A0A] w-full overflow-hidden flex justify-center">
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center">
        
        {/* Background Compound SVG */}
        <img 
          src={moneyLimitsSvg} 
          alt="Move your money background" 
          className="w-full h-auto block object-contain"
          style={{ minHeight: '600px', objectPosition: 'center' }}
        />

        {/* Text and Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-[110px] z-10 w-full h-full">
          
          <h2 className="text-white text-[48px] font-semibold tracking-tight leading-[1.1] mb-10">
            Move your money<br />without limits
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Google Play */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[170px] items-center justify-center gap-3 rounded-full bg-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95"
              aria-label="Get Zenaex on Google Play"
            >
              <img src={playStoreIcon} alt="Google Play store" className="h-6 w-6" />
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
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[170px] items-center justify-center gap-3 rounded-full bg-white px-6 py-2.5 transition-transform hover:scale-105 active:scale-95"
              aria-label="Download Zenaex on the App Store"
            >
              <img src={appleIcon} alt="Apple App store" className="h-6 w-6" />
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
