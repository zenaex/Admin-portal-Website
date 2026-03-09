import zenaexLogo from '../assets/green_logo.svg';
import qrCodeImg from '../assets/qr code.png';
import playStoreIcon from '../assets/Play store.svg';
import appleIcon from '../assets/apple.svg';

// Socials
import facebookIcon from '../assets/uiw_facebook.svg';
import xIcon from '../assets/streamline-logos_x-twitter-logo-block.svg';
import instaIcon from '../assets/ri_instagram-fill.svg';
import youtubeIcon from '../assets/mdi_youtube.svg';
import linkedinIcon from '../assets/Link.svg';
import tiktokIcon from '../assets/lineicons_tiktok-alt.svg';

import arrowRightBlack from '../assets/ArrowRight.svg'; // Needs to be black if on white button, but maybe we can just use an inline SVG for the arrow on the footer to be safe or use css invert

export const Footer = () => {
  return (
    <footer className="bg-[#0A0D0F] text-white pt-24 pb-12 w-full">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] max-w-2xl">
            Get paid faster, Send<br />money without borders
          </h2>
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shrink-0">
            Get started for free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-20" />

        {/* Middle Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Left Column (Brand & App Download) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img src={zenaexLogo} alt="Zenaex Logo" className="h-8 mb-10" />
            
            <p className="text-white font-medium mb-4 text-[15px]">Download the app</p>
            
            {/* App Store Buttons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-opacity hover:opacity-90"
              >
                <img src={playStoreIcon} alt="" className="h-5 w-5" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] uppercase leading-none tracking-wide text-black/70 whitespace-nowrap">
                    GET IT ON
                  </span>
                  <span className="text-[13px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-opacity hover:opacity-90"
              >
                <img src={appleIcon} alt="" className="h-5 w-5" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[8px] leading-none text-black/70 whitespace-nowrap">
                    Download on the
                  </span>
                  <span className="text-[13px] font-bold leading-none text-black whitespace-nowrap mt-0.5">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* QR Code Box */}
            <div className="flex items-center justify-between border border-white/20 rounded-2xl p-4 w-full max-w-[280px]">
              <span className="text-white/60 text-sm font-medium leading-tight max-w-[100px]">
                Scan to Get the app
              </span>
              <div className="bg-white p-1 rounded-lg">
                <img src={qrCodeImg} alt="QR Code" className="w-16 h-16" />
              </div>
            </div>
          </div>

          {/* Right Column (Links) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full pt-2">
            
            {/* Products */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-[15px]">Products</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Crypto</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Cross border</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Gift cards</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Bill payment</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">E-trade</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-[15px]">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">FAQ</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Terms of service</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Privacy policy</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-5">
              <h4 className="text-white font-medium text-[15px]">Support</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Help center</a></li>
                <li><a href="#" className="text-[#A3A3A3] hover:text-white transition-colors text-sm">Contact us</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-[#A3A3A3] text-sm hidden md:block">
            Copyright ©Zenaex 2026 . All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={xIcon} alt="X (Twitter)" className="w-6 h-6" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={tiktokIcon} alt="TikTok" className="w-6 h-6" />
            </a>
            <a href="#" className="transition-opacity hover:opacity-80">
              <img src={youtubeIcon} alt="YouTube" className="w-auto h-6" />
            </a>
          </div>

          <p className="text-[#A3A3A3] text-sm md:hidden text-center">
            Copyright ©Zenaex 2026 . All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
