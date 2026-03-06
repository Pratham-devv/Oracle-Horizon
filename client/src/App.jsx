import { Starfield } from './components/ui compononents/LiveBg';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';




export default function App() {

  return (
    <div className="relative min-h-screen text-[#f0e8d0] font-['Manrope'] overflow-x-hidden pb-20">
      <Starfield />
      <NavBar/> 
      <Home/>
      <Footer />
      {/* --- HEADER --- */}
      
      
     </div>
  );
}