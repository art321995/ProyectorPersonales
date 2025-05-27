import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { SiNetlify } from "react-icons/si";
import { useTranslation } from "react-i18next";



const enviarMensajeWhatsApp = () => {
  const mensaje = 'Buen dia! Me interesa tu perfil profesional';
  const url = `https://wa.me/+5213316110106/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank')
}

const Contact = () => {

   const { t } = useTranslation("translate");

  return (
    <div className="border-t-2 border-neutral-900 pb-24">
        <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1.5 }}   
          className="my-10 text-center text-4xl">
            {t("contact")}
        </motion.h2>
        <motion.div 
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: 100}}
          transition={{ duration: 2 }}
          className="text-center tracking-tighter">
            <p className="my-4">
              {CONTACT.address}
            </p>
            <div className="my-4 hover:text-neutral-500">
                <a
                onClick={enviarMensajeWhatsApp} 
                className="hover:cursor-pointer">{CONTACT.phone}
                </a>
            </div>
            <div>
              <a className="hover:text-neutral-500" href="mailto:art270112@gmail.com?Subject=Me interesa tu Perfil Profesional">
                {CONTACT.email}
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4 text-3xl">
              <a href="https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995" className='hover:text-neutral-500'> <FaLinkedin /> </a>
              <a href="https://github.com/art321995" className='hover:text-neutral-500'> <FaGithub /> </a>
              <a href="https://app.netlify.com/teams/art321995" className='hover:text-neutral-500'> <SiNetlify /> </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Contact