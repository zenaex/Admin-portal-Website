import ibedcLogo from '../assets/ibedc.svg';
import ekedcLogo from '../assets/ekedc.svg';
import ikejaElectricLogo from '../assets/ikeja-electric.svg';
import gotvLogo from '../assets/gotv.svg';
import showmaxLogo from '../assets/showmax.svg';
import dstvLogo from '../assets/dstv.svg';
import betkingLogo from '../assets/betking.svg';
import onexbetLogo from '../assets/1xbet.svg';
import bet9jaLogo from '../assets/bet9ja.svg';
import sportybetLogo from '../assets/sportybet.svg';
import ninemobileLogo from '../assets/9mobile.svg';
import gloLogo from '../assets/glo.svg';
import airtelLogo from '../assets/airtel.svg';

const svgLogos = [
  { name: 'ibedc', src: ibedcLogo },
  { name: 'ekedc', src: ekedcLogo },
  { name: 'ikeja-electric', src: ikejaElectricLogo },
  { name: 'gotv', src: gotvLogo },
  { name: 'showmax', src: showmaxLogo },
  { name: 'dstv', src: dstvLogo },
  { name: 'betking', src: betkingLogo },
  { name: '1xbet', src: onexbetLogo },
  { name: 'bet9ja', src: bet9jaLogo },
  { name: 'sportybet', src: sportybetLogo },
  { name: '9mobile', src: ninemobileLogo },
  { name: 'glo', src: gloLogo },
  { name: 'airtel', src: airtelLogo },
];

export function FeaturedServices() {
  // Duplicate for seamless loop
  const marqueeItems = [...svgLogos, ...svgLogos];

  return (
    <section className="bg-[#f5f5f5] py-12" id="featured-services">
      {/* Heading */}
      <h2 className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-primary-black/60">
        Featured Services
      </h2>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f5f5f5] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f5f5f5] to-transparent" />

        {/* Scrolling track */}
        <div className="marquee-track flex w-max items-center gap-6">
          {marqueeItems.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex shrink-0 items-center">
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-14 w-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
