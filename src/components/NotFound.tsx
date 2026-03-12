import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import notFoundImage from '../assets/155772337.png';

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-black overflow-hidden relative">
      <Header variant="light" />
      
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-8 z-10 pt-20">
        {/* Background Graphic from Mockup */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
           <img 
            src={notFoundImage} 
            alt="404 Background" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl">
          <h1 className="text-white text-[32px] md:text-[40px] font-bold mb-4 tracking-[-0.02em]">
            Ooops... You've lost connection
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-12 max-w-lg font-medium">
            The page you're looking for isn't here, but the rest of Zenaex is just a click away.
          </p>

          {/* Large 404 Graphic or Illustration would go here, 
              but since we're using the image as a background/reference, 
              we'll rely on the visual from the asset. */}
          <div className="mt-8">
             <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary-black transition-transform hover:scale-105 active:scale-95"
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

      <Footer />
    </div>
  );
}
