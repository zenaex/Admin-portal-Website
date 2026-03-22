import { useCallback, useEffect, useRef, useState } from 'react';
import { getStartedSteps } from './GetStartedSection';

const SLIDE_GAP_PX = 12;

function getSlideStride(scrollEl: HTMLDivElement): number {
  const first = scrollEl.querySelector<HTMLElement>('[data-get-started-slide]');
  if (!first) return scrollEl.clientWidth;
  return first.offsetWidth + SLIDE_GAP_PX;
}

export function GetStartedMobile() {
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const syncIndexFromScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const stride = getSlideStride(el);
    if (stride <= 0) return;
    const idx = Math.round(el.scrollLeft / stride);
    const clamped = Math.max(0, Math.min(idx, getStartedSteps.length - 1));
    setActiveStep((prev) => (prev === clamped ? prev : clamped));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncIndexFromScroll, { passive: true });
    return () => el.removeEventListener('scroll', syncIndexFromScroll);
  }, [syncIndexFromScroll]);

  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx === activeStep) void v.play().catch(() => {});
      else v.pause();
    });
  }, [activeStep]);

  const goToSlide = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const stride = getSlideStride(el);
    el.scrollTo({ left: i * stride, behavior: 'smooth' });
    setActiveStep(i);
  };

  return (
    <div className="relative z-20 bg-[#F5F5F5] py-12">
      <div className="mx-auto mb-8 max-w-[1440px] px-4">
        <h2 className="text-center text-[22px] font-semibold leading-tight text-primary-black">
          Get started in under 3 minutes
        </h2>
      </div>

      <div className="px-4">
        <div
          ref={scrollRef}
          className="flex w-full flex-row snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {getStartedSteps.map((step, i) => (
            <div
              key={i}
              data-get-started-slide
              className="flex min-w-0 shrink-0 snap-start snap-always flex-col flex-[0_0_calc(100%-1.5rem)]"
            >
              <div className="relative w-full overflow-hidden rounded-2xl bg-primary-black">
                <div className="relative aspect-[9/16] w-full max-h-[min(70vh,480px)]">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={step.video}
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-3 w-full rounded-2xl bg-[#E8EBEE] p-5">
                <h3 className="text-[17px] font-bold text-primary-black">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1440px] px-4">
        <div className="flex items-center justify-center gap-3">
          {getStartedSteps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToSlide(i)}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                activeStep === i
                  ? 'bg-[#CCFF00] text-primary-black'
                  : 'bg-[#E8EBEE] text-gray-500 active:bg-gray-300'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
