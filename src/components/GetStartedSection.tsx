import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video1 from '../assets/Screen Recording 2026-02-27 at 02.04.09 (1).mp4';
import video2 from '../assets/Screen Recording 2026-02-27 at 02.05.53 copy.mp4';
import video3 from '../assets/Screen Recording 2026-02-27 at 02.07.28 copy.mp4';
import video4 from '../assets/Screen Recording 2026-02-27 at 02.09.08.mp4';

const steps = [
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
];

export function GetStartedSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#F0F2F4] py-24" id="get-started">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* ── Left: Unified Big White Card ── */}
          <div className="flex h-full w-full flex-col justify-center rounded-md bg-white p-8 lg:p-12 md:aspect-square">
            <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.15] text-primary-black">
              Get started in under 3 minutes
            </h2>

            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`w-full cursor-pointer rounded-md p-4 text-left transition-colors duration-300 ${
                    activeStep === i
                      ? 'bg-[#E8EBEE]'
                      : 'bg-transparent hover:bg-gray-50'
                  }`}
                >
                  <h3 className="text-sm font-bold text-primary-black">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Video + Step Indicators ── */}
          <div className="flex flex-col gap-6">
            {/* Video container matches the left card dimensions via aspect-square */}
            <div className="relative w-full aspect-square overflow-hidden rounded-md bg-primary-black">
              <AnimatePresence>
                <motion.video
                  key={activeStep}
                  src={steps[activeStep].video}
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

            {/* Step indicators below the video */}
            <div className="flex items-center justify-center gap-3">
              {steps.map((_, i) => (
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
    </section>
  );
}
