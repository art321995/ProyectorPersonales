import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { SiNetlify } from "react-icons/si";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1.5 }}   
          className="my-20 text-center text-4xl">
            Contacto
        </motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -100}}
              transition={{ duration: 1 }}
              className="my-4">{CONTACT.address}
            </motion.p>
            <motion.p 
              whileInView={{opacity: 1, x: 0}}
              initial={{ opacity: 0, x: 100}}
              transition={{ duration: 1 }} 
              className="my-4">{CONTACT.phone}
            </motion.p>
            <a className="border-b">{CONTACT.email}</a>
            <div className="mt-10 flex items-center justify-center gap-4 text-3xl">
              <a href="https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995" className='hover:text-neutral-500'> <FaLinkedin /> </a>
              <a href="https://github.com/art321995" className='hover:text-neutral-500'> <FaGithub /> </a>
              <a href="https://app.netlify.com/teams/art321995" className='hover:text-neutral-500'> <SiNetlify /> </a>
            </div>
        </div>
    </div>
  )
}

export default Contact