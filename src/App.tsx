import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';

function App() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Header />
      <Hero />
      <FeaturedServices />
    </div>
  );
}

export default App;
