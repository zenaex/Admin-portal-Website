import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { SupportPage } from './components/SupportPage';
import { FAQPage } from './components/FAQPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/FAQ" element={<FAQPage />} />
    </Routes>
  );
}

export default App;
