import React from 'react';
import { motion } from 'framer-motion';
import rewardsImage from '../assets/Frame 2147227997.svg';

export function RewardsSection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-[110px] flex flex-col items-center">
        
        {/* Text Content */}
        <div className="text-center mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-white mb-6"
          >
            Unlock rewards through your network
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed px-4"
          >
            Bring others into the Zena experience and earn rewards as your network expands.
          </motion.p>
        </div>

        {/* Rewards Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <img 
            src={rewardsImage} 
            alt="Rewards Network Visual" 
            className="w-full max-w-[1200px] h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
