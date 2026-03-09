import group3Img from '../assets/Group 3.svg';
import qrCodeImg from '../assets/qr code.png';
import playStoreIcon from '../assets/Play store.svg';
import appleIcon from '../assets/apple.svg';

export const SecuritySection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0A0D0F] pt-24 pb-24" id="security">
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & QR Box */}
        <div className="flex flex-col text-white max-w-xl">
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[1.1] font-bold tracking-tight mb-6">
            Security Built Into
            <br />
            Every Transaction
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-[90%]">
            Zena is built with advanced security infrastructure designed to
            protect your funds, your data, and every transaction you make.
          </p>

          {/* Download CTA Card */}
          <div className="flex items-center gap-5 rounded-2xl bg-white pl-3 pr-7 py-2.5 shadow-sm md:pl-4 md:pr-8 md:py-3 self-start">
            {/* QR Code */}
            <img
              src={qrCodeImg}
              alt="QR code to download Zenaex"
              className="hidden h-14 w-14 rounded-md sm:block"
            />

            <div className="flex flex-col gap-2">
              <span className="text-lg leading-none font-medium text-primary-black">
                Scan to Download Zenaex App
              </span>

              <div className="flex items-center gap-2 mt-1">
                {/* Google Play */}
                <a
                  href="#"
                  className="flex min-w-33 items-center justify-center gap-2 rounded-full bg-primary-black px-3.5 py-1.5 transition-opacity hover:opacity-90"
                >
                  <img src={playStoreIcon} alt="" className="h-4 w-4" />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[8px] uppercase leading-none tracking-wide text-white/70 whitespace-nowrap">
                      GET IT ON
                    </span>
                    <span className="text-[13px] font-semibold leading-none text-white whitespace-nowrap mt-0.5">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="flex min-w-33 items-center justify-center gap-2 rounded-full bg-primary-black px-3.5 py-1.5 transition-opacity hover:opacity-90"
                >
                  <img src={appleIcon} alt="" className="h-4 w-4 brightness-0 invert" />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[8px] leading-none text-white/70 whitespace-nowrap">
                      Download on the
                    </span>
                    <span className="text-[13px] font-semibold leading-none text-white whitespace-nowrap mt-0.5">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Grouped Graphic */}
        <div className="relative flex justify-center lg:justify-end w-full mt-12 lg:mt-0">
          {/* Increased scale and added negative right margin to hide the right rim */}
          <div className="w-full max-w-[900px] lg:scale-125 lg:origin-left lg:-mr-[15%] flex justify-end">
             <img 
              src={group3Img} 
              alt="Security Infrastructure"
              className="relative z-10 w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
