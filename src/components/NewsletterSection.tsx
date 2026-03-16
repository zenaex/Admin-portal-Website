import arrowRight from '../assets/shared/ArrowRight.svg';

export const NewsletterSection = () => {
  return (
    <section className="bg-[#F0F2F4] py-20 flex flex-col items-center justify-center border-t border-gray-100" id="newsletter">
      <div className="w-full max-w-[1440px] px-8 md:px-12 lg:px-[110px] text-center">
        <div className="mx-auto max-w-[800px]">

        {/* Header content */}
        <h2 className="text-[48px] font-semibold tracking-tight text-primary-black mb-4">
          Newsletter
        </h2>
        <p className="text-[#666666] text-sm md:text-base font-medium mb-12">
          Subscribe to our amazing newsletter to receive all the latest news & updates.
        </p>

        {/* Newsletter Input Container */}
        <div className="mx-auto max-w-[600px] relative flex rounded-full overflow-hidden bg-white border border-gray-100 p-1.5 focus-within:ring-2 focus-within:ring-black/10 focus-within:border-black/20 transition-all">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full pl-6 pr-4 py-3 bg-transparent text-sm text-primary-black placeholder:text-gray-400 focus:outline-none"
            aria-label="Email Address"
          />
          <button className="flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 rounded-full font-medium text-xs whitespace-nowrap hover:bg-gray-800 transition-colors shrink-0">
            Subscribe
            <img src={arrowRight} alt="" className="w-3.5 h-3.5" />
          </button>
        </div>

        </div>
      </div>
    </section>
  );
};
