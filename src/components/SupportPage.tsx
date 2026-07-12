import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './Button';

import { MessageCircle, Users, Mail, ChevronDown } from 'lucide-react';

export function SupportPage() {
  useEffect(() => {
    document.title = 'Zenaex Support | Get Help with Crypto Trading & App Features';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Need help with your Zenaex account? Chat with our support team, join the community, or send us a message. Fast, friendly help for all crypto, gift card, and bill payment queries.');
    }
    return () => {
      document.title = 'Zenaex | Buy Crypto, Trade Gift Cards & Pay Bills in Nigeria';
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Buy and sell Bitcoin, USDT & more. Trade gift cards, pay bills, and withdraw in Naira. Zenaex is Nigeria\'s all-in-one crypto and digital finance app. Download free.');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col font-sans">
      <Header variant="dark" />
      
      <main className="flex-grow pt-32 pb-24 px-8 md:px-12 lg:px-[110px] w-full max-w-[1440px] mx-auto">
        
        {/* Hero Section */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#A3A3A3] text-sm font-medium mb-3">Support</p>
          <h1 className="text-primary-black text-[60px] font-semibold tracking-tight leading-[1.1] mb-6">
            How Can We Help You Today?
          </h1>
          <p className="text-[#666666] text-lg">
            The Zenaex support team is ready whenever you need us. Choose how you'd like to reach out.
          </p>
        </section>

        {/* Support Options Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto">
          
          {/* Card 1: Chat with Support */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-start min-h-[220px]">
            <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-primary-black" />
            </div>
            <h3 className="text-xl font-bold text-primary-black mb-2">Chat with Support</h3>
            <p className="text-[#666666] mb-8 flex-grow">
              Get real-time answers from the Zenaex support team. Available whenever you need us.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-black hover:opacity-80 transition-opacity mt-auto">
              Start Chat
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Card 2: Ask the Community */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-start min-h-[220px]">
            <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary-black" />
            </div>
            <h3 className="text-xl font-bold text-primary-black mb-2">Ask the Community</h3>
            <p className="text-[#666666] mb-8 flex-grow">
              Connect with other Zenaex users, discover tips, and find solutions from people who've been there.
            </p>
            <a href="#" className="flex items-center gap-2 text-sm font-bold text-primary-black hover:opacity-80 transition-opacity mt-auto">
              Join Community
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Card 3: Contact Support */}
          <div className="bg-white rounded-lg p-8 flex flex-col items-start min-h-[220px]">
            <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-primary-black" />
            </div>
            <h3 className="text-xl font-bold text-primary-black mb-2">Contact Support</h3>
            <p className="text-[#666666] mb-8 flex-grow">
              Tell us what you need help with and our team will get back to you as fast as possible.
            </p>
            <a href="#contact-form" className="flex items-center gap-2 text-sm font-bold text-primary-black hover:opacity-80 transition-opacity mt-auto">
              Send a Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-white rounded-lg p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="text-center mb-12 max-w-lg mx-auto">
            <h2 className="text-primary-black text-3xl font-bold mb-4">Contact Support</h2>
            <p className="text-[#666666] text-sm leading-relaxed">
              Tell us what you need help with and our team will get back to you as fast as possible.
            </p>
          </div>

          <form className="max-w-3xl mx-auto flex flex-col gap-6">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-2 w-full">
                <div className="bg-[#F2F4F7] rounded-md px-4 py-4 flex items-center gap-2 min-w-[100px] shrink-0">
                  <span className="text-lg">🇳🇬</span>
                  <span className="text-primary-black font-medium text-sm">+234</span>
                  <ChevronDown className="w-4 h-4 text-[#A3A3A3] ml-auto" />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] focus:outline-none focus:ring-2 focus:ring-primary-green"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full">
              <select 
                className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] appearance-none focus:outline-none focus:ring-2 focus:ring-primary-green cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled className="text-[#A3A3A3]">Category of issue</option>
                <option value="account">Account Access</option>
                <option value="transaction">Transaction Issue</option>
                <option value="card">Card Management</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3A3A3] pointer-events-none" />
            </div>

            {/* Textarea */}
            <textarea 
              placeholder="Briefly describe your issue" 
              rows={5}
              className="w-full bg-[#F2F4F7] rounded-md px-5 py-4 text-primary-black placeholder:text-[#A3A3A3] resize-none focus:outline-none focus:ring-2 focus:ring-primary-green"
            />

            {/* Submit */}
            <Button variant="primary" className="w-full mt-4 flex justify-center items-center gap-2">
              Submit
            </Button>

          </form>
        </section>

      </main>

      <Footer />
    </div>
  );
}
