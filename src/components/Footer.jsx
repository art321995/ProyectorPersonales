import { motion } from "framer-motion";
import { FaDirections, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


const enviarMensajeWhatsApp = () => {
    const mensaje = '¡Hola! Estoy interesado en realizar un Pedido en Dulcería Imperial';
    const url = `https://wa.me/+5213312250883/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };


const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 py-12 " id="footer">
        <motion.div 
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2, delay: 0.2}}
            className="lg:flex w-full ">
            <div className="lg:w-1/2 flex-wrap px-4 lg:text-start text-center" >
                <h4 className="font-bold text-3xl lg:mb-8 ">Contacto</h4>
                <div className="flex lg:text-xl lg:justify-start justify-center">
                    <FaDirections className="pt-1 lg:text-start text-center"/>
                    <a className=" hover:text-yellow-600 px-2 hover:underline lg:text-start text-center" href="https://www.google.com.mx/maps/place/Dulceria+Imperial/@20.614482,-103.2060376,17z/data=!3m1!4b1!4m6!3m5!1s0x8428b54f1ae064ef:0xeed52abab3e57cbe!8m2!3d20.614477!4d-103.2034627!16s%2Fg%2F11llhd_x2s?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">
                        Colina Imperial 1028, 45417 Tonalá, Jal.
                    </a>
                </div>
                <div className="flex lg:py-4 lg:text-xl lg:justify-start justify-center">
                    <FaWhatsapp className="lg:text-start text-center"/>
                    <a onClick={enviarMensajeWhatsApp} className=" hover:text-yellow-600 px-2 hover:underline lg:text-start text-center">
                        33 1225 0883
                    </a>
                </div>
            </div>
            <div className="lg:w-1/2 flex-wrap px-4 mt-4 lg:mt-0">
                <h4 className="font-bold text-3xl lg:mb-8 lg:text-end text-center">Horario</h4>
                <p className="lg:text-end text-center">L-V 10:45 a 20:30</p>
                <p className="lg:text-end text-center">S 10:45 a 20:00</p>
                <p className="lg:text-end text-center">D 11:00 a 14:30</p>
            </div>
        </motion.div>
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2, delay: 0.2}} 
            className="flex m-auto justify-center items-center mt-8 lg:mt-0">
                <a href="" onClick={enviarMensajeWhatsApp} className="px-2"><FaWhatsapp className="w-10 h-10 hover:text-yellow-600"/></a>
                <a href="https://www.instagram.com/dulceriaimperial.1028/" className="px-2"><FaInstagram className="w-10 h-10 hover:text-yellow-600"/></a>
                <a href="https://www.facebook.com/profile.php?id=100063669514255&locale=es_LA" className="px-2"><FaFacebook className="w-10 h-10 hover:text-yellow-600"/></a>
        </motion.div>
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2, delay: 0.2}} 
            className="mt-10 border-t border-neutral-700">
            <p className='p-5  text-center text-sm text-neutral-500 '>©Created by Arturo Esqueda M.</p>
        </motion.div>
       
    </footer>
  )
}

export default Footer;