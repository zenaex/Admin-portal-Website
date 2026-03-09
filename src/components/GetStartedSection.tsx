import { useState } from 'react';
import stepVideo from '../assets/features/stepVideo.mp4';

const steps = [
  {
    title: 'Download the Zena App',
    description:
      'Get Zena from the App Store or Google Play and open your digital finance hub instantly.',
  },
  {
    title: 'Create your account and verify',
    description:
      'Sign up with your email or phone number and complete quick identity verification. It takes just a few minutes.',
  },
  {
    title: 'Fund your wallet',
    description:
      'Deposit crypto or receive funds directly into your Zena wallet from anywhere in the world.',
  },
  {
    title: 'Start using your money',
    description:
      'Convert currencies, pay bills, trade gift cards, access eTrade features, or activate global eSIM all from one powerful platform.',
  },
];

export function GetStartedSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#F0F2F4] py-24" id="get-started">
      <div className="mx-auto max-w-[1100px] px-8">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* ── Left: Unified Big White Card ── */}
          <div className="flex h-full w-full flex-col justify-center rounded-[2rem] bg-white p-8 shadow-sm lg:p-12 md:aspect-square">
            <h2 className="mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.15] text-primary-black">
              Get started in under 3 minutes
            </h2>

            <div className="flex flex-col gap-2">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`w-full cursor-pointer rounded-2xl p-4 text-left transition-colors duration-300 ${
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
            <div className="relative w-full aspect-square overflow-hidden rounded-[2rem] bg-primary-black shadow-lg">
              <video
                src={stepVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
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
                      ? 'bg-primary-green text-primary-black'
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
