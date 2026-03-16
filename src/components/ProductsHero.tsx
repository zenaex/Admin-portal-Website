import { motion } from 'framer-motion';
import { Button } from './Button';
import designImage from '../assets/Frame 2147227920.png';

export function ProductsHero() {
  return (
    <section id="products-hero" className="relative min-h-screen w-full overflow-hidden bg-[#F2F4F7] flex items-center pt-24 pb-20">
      <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-[110px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content: Text and CTA */}
          <div className="flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 font-medium mb-4 text-sm uppercase tracking-wider"
            >
              Products
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[60px] font-semibold leading-[1.05] tracking-tight text-primary-black mb-8"
            >
              Earn global.<br />Spend anywhere
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-10 max-w-[480px]"
            >
              Zena combines crypto wallets, trading, bill payments, gift card exchange, eTrade access, global eSIM connectivity, and seamless withdrawals to any bank account so you can manage and use your money in one place.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="dark" className="!px-8 !py-3.5 !text-sm">
                Learn more about Zena
              </Button>
            </motion.div>
          </div>

          {/* Right Content: Design Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[55%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[700px]">
              <img 
                src={designImage} 
                alt="Product Design Collage" 
                className="w-full h-auto object-contain"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
