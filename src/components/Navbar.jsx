import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () =>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

  return (
    <nav className="relative top-4  z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem]  lg:shadow-lg">
        <div className="hidden space-x-6 lg:flex"> 
        <a href="#" className="hover:opacity-50 hover:underline">Inicio</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a href="#" className="hover:opacity-50 hover:underline">Acerca De</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a href="#" className="hover:opacity-50 hover:underline">Marcas</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a href="#" className="hover:opacity-50 hover:underline">Piñatas</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a href="#" className="hover:opacity-50 hover:underline text-yellow-600 font-bold">Haz tu Pedido!</a> 
        </div>
        <div className="flex lg:hidden">
                <button onClick={toggleMobileMenu} className="flex items-center">
                     {isMobileMenuOpen ? <FaTimes /> : <FaBars />} 
                </button>
                <p className="flex pl-3 text-yellow-600 font-bold">Dulceria Imperial</p>
        </div>
        

      </div>
      {isMobileMenuOpen && (
              <div className="w-full backdrop-blur-lg lg:hidden">
                <a href="#" className="block p-3 tracking-tighter">Inicio</a>
                <a href="#" className="block p-3 tracking-tighter">Acerca De</a>
                <a href="#" className="block p-3 tracking-tighter">Marcas</a>
                <a href="#" className="block p-3 tracking-tighter">Piñatas</a>
                <a href="#" className="block p-3 tracking-tighter text-yellow-600 font-bold">Haz tu Pedido!</a>
              </div>
        )}
      <div className="relative flex items-center justify-center mb-20">
        <img src="./img/Portada.png" alt="Portada" className="w-full rounded-3xl p-4"></img>
      </div>
    </nav>
    
  )
}

export default Navbar;