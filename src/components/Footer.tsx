import { Link } from 'react-router-dom';
import zenaexLogo from '../assets/shared/green_logo.svg';
import qrCodeImg from '../assets/shared/qr-code.svg';
import playStoreIcon from '../assets/shared/Play store.svg';
import appleIcon from '../assets/shared/apple.svg';

import facebookIcon from '../assets/socials/facebook.svg';
import xIcon from '../assets/socials/streamline-logos_x-twitter-logo-block.svg';
import instaIcon from '../assets/socials/ri_instagram-fill.svg';
import youtubeIcon from '../assets/socials/mdi_youtube.svg';
import linkedinIcon from '../assets/socials/Link.svg';
import tiktokIcon from '../assets/socials/lineicons_tiktok-alt.svg';

const linkGroups = (
  <>
    <div className="flex flex-col gap-4">
      <h4 className="text-[15px] font-medium text-white">Products</h4>
      <ul className="flex flex-col gap-3">
        <li>
          <Link to="/products#stacking" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Crypto
          </Link>
        </li>
        <li>
          <Link to="/products#withdraw-africa" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Cross border
          </Link>
        </li>
        <li>
          <Link to="/products#stacking" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Gift cards
          </Link>
        </li>
        <li>
          <Link to="/products#stacking" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Bill payment
          </Link>
        </li>
        <li>
          <Link to="/products#stacking" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            E-trade
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex flex-col gap-4">
      <h4 className="text-[15px] font-medium text-white">Company</h4>
      <ul className="flex flex-col gap-3">
        <li>
          <Link to="/FAQ" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Terms of service
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Privacy policy
          </Link>
        </li>
        <li>
          <Link to="/aml-policy" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            AML policy
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex flex-col gap-4">
      <h4 className="text-[15px] font-medium text-white">Support</h4>
      <ul className="flex flex-col gap-3">
        <li>
          <Link to="/support" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Help center
          </Link>
        </li>
        <li>
          <Link to="/support#contact-form" className="text-sm text-[#A3A3A3] transition-colors hover:text-white">
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  </>
);

const storeButtons = (
  <div className="flex flex-wrap items-center gap-3">
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-opacity hover:opacity-90 sm:flex-initial"
    >
      <img src={playStoreIcon} alt="" className="h-5 w-5 shrink-0" />
      <div className="flex min-w-0 flex-col items-start justify-center">
        <span className="whitespace-nowrap text-[8px] uppercase leading-none tracking-wide text-black/70">GET IT ON</span>
        <span className="mt-0.5 whitespace-nowrap text-[13px] font-bold leading-none text-black">Google Play</span>
      </div>
    </a>
    <a
      href="https://apple.com/app-store"
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 transition-opacity hover:opacity-90 sm:flex-initial"
    >
      <img src={appleIcon} alt="" className="h-5 w-5 shrink-0" />
      <div className="flex min-w-0 flex-col items-start justify-center">
        <span className="whitespace-nowrap text-[8px] leading-none text-black/70">Download on the</span>
        <span className="mt-0.5 whitespace-nowrap text-[13px] font-bold leading-none text-black">App Store</span>
      </div>
    </a>
  </div>
);

const socialRow = (
  <div className="flex flex-wrap items-center gap-6">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Facebook">
      <img src={facebookIcon} alt="" className="h-6 w-6" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="Instagram">
      <img src={instaIcon} alt="" className="h-6 w-6" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="LinkedIn">
      <img src={linkedinIcon} alt="" className="h-6 w-6" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="X">
      <img src={xIcon} alt="" className="h-6 w-6" />
    </a>
    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="TikTok">
      <img src={tiktokIcon} alt="" className="h-6 w-6" />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80" aria-label="YouTube">
      <img src={youtubeIcon} alt="" className="h-6 w-auto" />
    </a>
  </div>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-black pb-12 pt-16 text-white md:pt-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-12 lg:px-[110px]">
        {/* CTA */}
        <div className="mb-10 flex flex-col items-center gap-6 text-center md:mb-20 md:flex-row md:items-center md:justify-between md:text-left">
          <h2 className="max-w-2xl text-[28px] font-semibold leading-[1.15] tracking-tight md:text-[48px]">
            Get paid faster, Send
            <br />
            money without borders
          </h2>
          <Link
            to="/#get-started"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            Get started for free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mb-10 h-px w-full bg-white/10 md:mb-20" />

        {/* Mobile */}
        <div className="md:hidden">
          <Link to="/" className="inline-block">
            <img src={zenaexLogo} alt="Zenaex" className="h-8" />
          </Link>
          <div className="mt-10 grid grid-cols-3 gap-6">{linkGroups}</div>

          <div className="my-10 h-px w-full bg-white/10" />

          <p className="mb-4 text-[15px] font-medium text-white">Download the app</p>
          {storeButtons}
          <div className="mt-8">{socialRow}</div>

          <div className="my-10 h-px w-full bg-white/10" />

          <p className="text-center text-sm text-[#A3A3A3]">Copyright ©Zenaex 2026 . All Rights Reserved.</p>
        </div>

        {/* Desktop */}
        <div className="mb-24 hidden grid-cols-1 gap-16 md:grid lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-5">
            <Link to="/">
              <img src={zenaexLogo} alt="Zenaex Logo" className="mb-10 h-8" />
            </Link>
            <p className="mb-4 text-[15px] font-medium">Download the app</p>
            <div className="mb-6">{storeButtons}</div>
            <div className="flex w-full max-w-[280px] items-center justify-between rounded-lg border border-white/20 p-4">
              <span className="max-w-[100px] text-sm font-medium leading-tight text-white/60">Scan to Get the app</span>
              <div className="rounded-lg bg-white p-1">
                <img src={qrCodeImg} alt="" className="h-16 w-16" />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 pt-2 md:grid-cols-3 md:gap-12 lg:col-span-7">{linkGroups}</div>
        </div>

        <div className="hidden items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex">
          <p className="text-sm text-[#A3A3A3]">Copyright ©Zenaex 2026 . All Rights Reserved.</p>
          {socialRow}
        </div>
      </div>
    </footer>
  );
};
