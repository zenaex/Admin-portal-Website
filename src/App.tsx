import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { SupportPage } from './components/SupportPage';
import { FAQPage } from './components/FAQPage';
import { WaitlistPage } from './components/WaitlistPage';
import { ScrollToHash } from './components/ScrollToHash';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
