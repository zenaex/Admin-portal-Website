import { motion } from 'framer-motion';
import rewardsImage from '../assets/Frame 2147227997.svg';
import rewardsVisualMobile from '../assets/Group 1321314265 copy.svg';

export function RewardsSection() {
  return (
    <section id="rewards" className="relative w-full overflow-hidden bg-black py-16 md:bg-[#0A0A0A] md:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-4 md:px-12 lg:px-[110px]">
        <div className="mb-10 max-w-3xl text-center md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white md:mb-6 md:text-[clamp(2rem,5vw,3.5rem)]"
          >
            Unlock rewards through your network
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base leading-relaxed text-gray-400 md:px-4 md:text-lg"
          >
            Bring others into the Zena experience and earn rewards as your network expands.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex w-full justify-center"
        >
          <img
            src={rewardsVisualMobile}
            alt="Refer and earn — invite friends and grow your network"
            className="h-auto w-full max-w-[min(100%,420px)] object-contain md:hidden"
            loading="lazy"
            decoding="async"
          />
          <img
            src={rewardsImage}
            alt="Rewards Network Visual"
            className="hidden h-auto w-full max-w-[1200px] object-contain md:block"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
