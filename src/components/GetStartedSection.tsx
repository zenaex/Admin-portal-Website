import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video1 from '../assets/Screen Recording 2026-02-27 at 02.04.09 (1).mp4';
import video2 from '../assets/Screen Recording 2026-02-27 at 02.05.53 copy.mp4';
import video3 from '../assets/Screen Recording 2026-02-27 at 02.07.28 copy.mp4';
import video4 from '../assets/Screen Recording 2026-02-27 at 02.09.08.mp4';

export const getStartedSteps = [
  {
    title: 'Download the Zena App',
    description:
      'Get Zena from the App Store or Google Play and open your digital finance hub instantly.',
    video: video1,
  },
  {
    title: 'Create your account and verify',
    description:
      'Sign up with your email or phone number and complete quick identity verification. It takes just a few minutes.',
    video: video2,
  },
  {
    title: 'Fund your wallet',
    description:
      'Deposit crypto or receive funds directly into your Zena wallet from anywhere in the world.',
    video: video3,
  },
  {
    title: 'Start using your money',
    description:
      'Convert currencies, pay bills, trade gift cards, access eTrade features, or activate global eSIM all from one powerful platform.',
    video: video4,
  },
] as const;

export function GetStartedSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative z-20 bg-primary-black py-20">
      <div className="mx-auto w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px]">
        <div className="mx-auto max-w-[1200px] grid items-stretch gap-8 md:grid-cols-2">
          {/* ── Left: Unified Big White Card ── */}
          <div className="flex h-full w-full flex-col rounded-lg bg-white p-8">
            <h2 className="mb-10 whitespace-nowrap text-[18px] md:text-[22px] lg:text-[26px] font-semibold leading-tight text-primary-black">
              Get started in under 3 minutes
            </h2>

            <div className="flex flex-col gap-3">
              {getStartedSteps.map((step, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`w-full cursor-pointer rounded-lg p-6 text-left transition-colors duration-300 ${
                    activeStep === i
                      ? 'bg-[#E8EBEE]'
                      : 'bg-transparent hover:bg-gray-50'
                  }`}
                >
                  <h3 className="text-[17px] font-bold text-primary-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Video + Step Indicators ── */}
          <div className="flex flex-col gap-6">
            {/* Video container now fills space to push indicators to the bottom */}
            <div className="relative w-full flex-1 overflow-hidden rounded-lg bg-primary-black min-h-[400px]">
              <AnimatePresence>
                <motion.video
                  key={activeStep}
                  src={getStartedSteps[activeStep].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Step indicators below the video - aligned with left card bottom */}
            <div className="flex items-center justify-center gap-3">
              {getStartedSteps.map((_, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    activeStep === i
                      ? 'bg-[#CCFF00] text-primary-black'
                      : 'bg-[#E8EBEE] text-gray-500 hover:bg-gray-300'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
