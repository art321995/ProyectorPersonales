import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const enviarMensajeWhatsApp = () => {
  const mensaje = '¡Hola! Estoy interesado en realizar un Pedido en Dulcería Imperial';
  const url = `https://wa.me/+5213312250883/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = 80;
    
    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem]  lg:shadow-lg">
        <div className="hidden space-x-6 lg:flex"> 
          <a href="#" className="hover:opacity-50 hover:underline cursor-pointer">Inicio</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={() => handleScroll("about")} className="hover:opacity-50 hover:underline cursor-pointer">Acerca De</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={() => handleScroll("brands")} className="hover:opacity-50 hover:underline cursor-pointer">Marcas</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={() => handleScroll("pinatas")} className="hover:opacity-50 hover:underline cursor-pointer">Piñatas</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={() => handleScroll("mor")} className="hover:opacity-50 hover:underline cursor-pointer">Más...</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={() => handleScroll("footer")} className="hover:opacity-50 hover:underline cursor-pointer">Contacto</a> 
        </div>
        <div className="hidden space-x-6 lg:flex"> 
          <a onClick={enviarMensajeWhatsApp} className="hover:opacity-50 hover:underline text-yellow-600 font-bold cursor-pointer">Haz tu Pedido!</a> 
        </div>
        <div className="flex lg:hidden">
          <button onClick={toggleMobileMenu} className="flex items-center">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <p className="flex pl-3 text-yellow-600 font-bold">Dulcería Imperial</p>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
          <a href="#" className="block p-3 tracking-tighter cursor-pointer">Inicio</a>
          <a onClick={() => handleScroll("about")} className="block p-3 tracking-tighter cursor-pointer">Acerca De</a>
          <a onClick={() => handleScroll("brands")} className="block p-3 tracking-tighter cursor-pointer">Marcas</a>
          <a onClick={() => handleScroll("pinatas")} className="block p-3 tracking-tighter cursor-pointer">Piñatas</a>
          <a onClick={() => handleScroll("mor")} className="block p-3 tracking-tighter cursor-pointer">Más...</a>
          <a onClick={() => handleScroll("footer")} className="block p-3 tracking-tighter cursor-pointer">Contacto</a>
          <a onClick={enviarMensajeWhatsApp} className="block p-3 tracking-tighter text-yellow-600 font-bold cursor-pointer">Haz tu Pedido!</a>
        </div>
        )}
      </nav>
      <motion.div 
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{ duration: 1.5, delay: 0.2}}
        className="flex flex-wrap lg:w-[500px] lg:h-[500px] mx-auto my-20 ">
          <img src="./img/Portada.png" alt="Portada" className="w-full rounded-3xl p-4"></img>
      </motion.div>
    </div>
    
  );
};

export default Navbar;