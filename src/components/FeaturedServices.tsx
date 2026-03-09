import ibedcLogo from '../assets/brands/ibedc.svg';
import ekedcLogo from '../assets/brands/ekedc.svg';
import ikejaElectricLogo from '../assets/brands/ikeja-electric.svg';
import gotvLogo from '../assets/brands/gotv.svg';
import showmaxLogo from '../assets/brands/showmax.svg';
import dstvLogo from '../assets/brands/dstv.svg';
import betkingLogo from '../assets/brands/betking.svg';
import onexbetLogo from '../assets/brands/1xbet.svg';
import bet9jaLogo from '../assets/brands/bet9ja.svg';
import sportybetLogo from '../assets/brands/sportybet.svg';
import ninemobileLogo from '../assets/brands/9mobile.svg';
import gloLogo from '../assets/brands/glo.svg';
import airtelLogo from '../assets/brands/airtel.svg';

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
    <section className="bg-[#F0F2F4] py-12" id="featured-services">
      {/* Heading */}
      <h2 className=" mt-[-10px] mb-10 text-center font-['Schibsted_Grotesk'] text-[18px] font-semibold leading-[1.2] tracking-normal uppercase text-primary-black">
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
