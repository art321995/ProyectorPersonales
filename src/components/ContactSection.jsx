import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="container mx-auto py-6 pt-20" id="contact"> 
        <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contacto</h2>
        <motion.div 
          initial={{opacity: 0, x: -150}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{ duration: 1.5, delay: 0.5}}
          className="text-neutral-400">
            {CONTACT.map((detail) =>(
                <p key={detail.key} className="my-10 border-b-2 border-collapse border-neutral-700 pb-6 text-center text-2xl 
                 tracking-tighter lg:text-3xl">
                    {detail.value}
                 </p>
            ))}
        </motion.div>
    </section>
  )
}

export default ContactSection;