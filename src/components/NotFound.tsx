import { Link } from 'react-router-dom';
import { Header } from './Header';
import bgImage from '../assets/image 2924.png';
import notFoundArt from '../assets/Group 1321314265.svg';

export function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-primary-black">
      <Header variant="light" />
      
      <main className="relative flex flex-1 flex-col items-center justify-center px-8 pt-18 text-center md:pt-22">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <img src={bgImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary-black/55" />
        </div>

        <div className="relative z-10 flex w-full max-w-230 flex-col items-center">
          <h1 className="text-white text-[22px] md:text-[26px] font-semibold mb-3 tracking-[-0.02em]">
            Ooops... You've lost connection
          </h1>
          <p className="text-white/60 text-xs md:text-sm mb-4 max-w-md font-medium">
            The page you're looking for isn't here, but the rest of Zenaex is just a click away.
          </p>

          {/* 404 artwork */}
          <img
            src={notFoundArt}
            alt="404"
            className="mx-auto block w-full max-w-170 max-h-[48vh] object-contain select-none"
            draggable={false}
          />

          <div className="-mt-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-5 py-2 text-[11px] font-semibold text-primary-black transition-transform hover:scale-105 active:scale-95"
            >
              Back to home
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
