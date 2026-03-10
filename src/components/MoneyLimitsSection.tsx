import moneyLimitsSvg from '../assets/Frame 2147227839.svg';
import qrCodeImg from '../assets/shared/qr-code.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

export const MoneyLimitsSection = () => {
  return (
    <section className="bg-[#0A0A0A] w-full pt-10 pb-20 md:pt-16 md:pb-32 overflow-hidden flex justify-center">
      <div className="relative w-full max-w-[1440px] mx-auto flex justify-center items-center">
        
        {/* Background Compound SVG */}
        <img 
          src={moneyLimitsSvg} 
          alt="Move your money background" 
          className="w-full h-auto block object-contain"
          style={{ minHeight: '600px', objectPosition: 'center' }}
        />

        {/* Text and Button Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 w-full h-full">
          
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-10">
            Move your money<br />without limits
          </h2>
          
          {/* QR Code Box */}
          <div className="hidden md:flex items-center justify-center gap-3 border border-white/20 rounded-xl p-3 bg-transparent mb-12">
            <div className="flex flex-col items-start justify-center pr-2">
              <span className="text-white/90 text-sm font-medium leading-[1.2]">Scan to</span>
              <span className="text-white/90 text-sm font-medium leading-[1.2]">Get the</span>
              <span className="text-white/90 text-sm font-medium leading-[1.2]">app</span>
            </div>
            <div className="bg-white p-1 rounded-lg">
              <img src={qrCodeImg} alt="QR Code" className="w-[60px] h-[60px]" />
            </div>
          </div>

          <p className="text-white/80 text-sm font-medium mb-4">
            Download the app
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* App Store Buttons Group */}
            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-full bg-white px-5 py-2.5 transition-opacity hover:opacity-90 min-w-[160px]"
            >
              <img src={playStoreIcon} alt="" className="h-6 w-6" />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[10px] uppercase leading-none tracking-wide text-black/70 whitespace-nowrap">
                  GET IT ON
                </span>
                <span className="text-[14px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-center gap-3 rounded-full bg-white px-5 py-2.5 transition-opacity hover:opacity-90 min-w-[160px]"
            >
              <img src={appleIcon} alt="" className="h-6 w-6" />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[10px] leading-none text-black/70 whitespace-nowrap">
                  Download on the
                </span>
                <span className="text-[14px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
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
