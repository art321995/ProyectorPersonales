import About from "./components/About";
import Brands from "./components/Brands";
import Navbar from "./components/Navbar"
import Pinatas from "./components/Pinatas";

function App() {
  

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-600 selection:text-cyan-950">
    <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
      </div>
    </div>
    <div className="container mx-auto px-8">
      <Navbar />
      <About />
      <Brands />
      <Pinatas />
    </div>
   
  </div>
  )
}

export default App;
