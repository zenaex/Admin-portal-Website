import { Header } from './Header';
import { Footer } from './Footer';
import { FAQSection } from './FAQSection';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col font-sans">
      <Header variant="dark" />
      
      <main className="flex-grow pt-32 pb-12 w-full">
        <FAQSection 
          preTitle="Frequently Asked Question"
          title={<>Got questions? We've<br/>got answers</>}
          subtitle="Find answers to common queries and get the information you need to navigate your journey with confidence"
          className="bg-transparent flex flex-col items-center" 
        />
      </main>

      <Footer />
    </div>
  );
}
