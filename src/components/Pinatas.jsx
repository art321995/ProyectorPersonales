import { motion } from "framer-motion";

const enviarMensajeWhatsApp = () => {
  const mensaje = '¡Hola! Me gustaría cotizar una Piñata';
  const url = `https://wa.me/+5213312250883/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
};

const Pinatas = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="pinatas" >
      <motion.div
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 2, delay: 0.2}}  
      >
        <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Piñatas</h2>
        <div className="lg:mb-8 mb-4 h-2 w-20 bg-yellow-600 m-auto"></div>
      </motion.div>
        
        <div className="flex flex-wrap">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 2, delay: 0.2}}
            className="w-full px-2 tracking-tighter">
              <p className="m-auto p-8 lg:text-3xl text-center leading-loose">Contamos con una gran existencia de Piñatas 
                para entrega inmediata o con la opcion de realizar Piñatas personalizadas, 
                solo compartenos una foto y te la  
                 <a href="#"
                  onClick={enviarMensajeWhatsApp} 
                  className="text-yellow-600 font-bold hover:underline"> Cotizamos!
                </a>
              </p>
          </motion.div>
            <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-5" >
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata1.jpg" alt="Pinata1" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata2.jpg" alt="Pinata2" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata3.jpg" alt="Pinata3" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata4.jpg" alt="Pinata4" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata5.jpg" alt="Pinata5" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata6.jpg" alt="Pinata6" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata7.jpg" alt="Pinata7" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata8.jpg" alt="Pinata8" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata9.jpg" alt="Pinata9" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
                <a onClick={enviarMensajeWhatsApp}><img src="./img/Pinata10.jpg" alt="Pinata10" className="rounded-3xl opacity-70 hover:opacity-100 transition duration-300" ></img></a>
            </div>
        </div>
    </section>
  )
}

export default Pinatas;