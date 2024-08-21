import CartaPlatillos from "./components/CartaPlatillos";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Mission from "./components/Mission";


function App() {
  
  return (
    <main className="overflow-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <CartaPlatillos />
      <About />
      <Mission />
    </main>
  )
}

export default App
