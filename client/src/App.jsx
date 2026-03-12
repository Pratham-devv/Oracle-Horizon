import { Starfield } from './components/ui compononents/LiveBg';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';




import { MobileCTA } from './components/MobileCTA';

export default function App() {

  return (
    <div className="relative min-h-screen text-[#f0e8d0] font-['Manrope'] overflow-x-hidden">
      <Starfield />
      <NavBar/> 
      <Home/>
      <MobileCTA />
      <Footer />
      {/* --- HEADER --- */}
      
      
     </div>
  );
}