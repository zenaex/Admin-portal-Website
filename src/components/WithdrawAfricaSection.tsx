import bgImage from '../assets/Frame 2147228108.png';
import portraitImage from '../assets/Frame 2147228107.png';
import videoSrc from '../assets/Screen Recording 2026-03-04 at 13.52.41.mp4';

export const WithdrawAfricaSection = () => {
  return (
    <section id="withdraw-africa" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-primary-black mb-6 leading-[1.1] tracking-[-0.02em]">
          Withdraw anywhere in Africa without borders
        </h2>
        <p className="text-[#667085] text-[18px] md:text-[20px] max-w-[800px] mx-auto leading-[1.5]">
          Withdraw your funds to supported bank accounts across Africa quickly, securely, and without hassle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-8">
        {/* Left Card: Portrait */}
        <div className="relative rounded-md overflow-hidden w-full aspect-[4/5] md:aspect-auto h-[400px] md:h-full">
          <img 
            src={portraitImage} 
            alt="Woman smiling at phone" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Card: Phone and Video */}
        <div className="relative rounded-md overflow-hidden w-full bg-black">
          {/* Base Background Image (Phone + Arrow + Glow) */}
          <img 
            src={bgImage} 
            alt="Withdrawal Interface UI" 
            className="w-full h-auto block object-cover" 
          />
          
          {/* Video positioned over the white block */}
          <div className="absolute top-[8%] right-[4.5%] w-[38.5%] h-[84%] rounded-md overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={videoSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
