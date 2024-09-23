import { motion } from "framer-motion";

const iconVariants = () => ({
  initial: {y: -12},
  animate: {
    x: [12, -12],
    transition:{
      duration: 2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});

const Brands = () => {
  return (
    <section className="container mx-auto mb-8 mt-20" id="brands" >
      <motion.div
        initial={{opacity: 0, y: -50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 2, delay: 0.2}}  
      >
        <h2 className="mb-1 text-center text-3xl tracking-tighter lg:text-4xl">Marcas Que Manejamos</h2>
        <div className="h-2 w-36 bg-yellow-600 m-auto lg:mb-2 mb-10"></div>
      </motion.div>
      <div className="grid grid-cols-2 lg:gap-8 gap-2 md:grid-cols-5">
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca1.png" className="m-auto w-1/2">        
        </motion.img>
        <motion.img
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          src="./img/Marca2.png" className="m-auto">
        </motion.img>
        <motion.img
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          src="./img/Marca3.png" className="m-auto">
        </motion.img>
        <motion.img
          variants={iconVariants(5)}
          initial="initial"
          animate="animate" 
          src="./img/Marca4.png" className="m-auto w-1/2">
        </motion.img>
        <motion.img
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca10.png" className="m-auto">
        </motion.img>
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca5.png" className="m-auto w-2/3">
        </motion.img>
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca6.png" className="m-auto w-2/3">
        </motion.img>
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca7.png" className="m-auto">
        </motion.img>
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca8.png" className="m-auto">
        </motion.img>
        <motion.img 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          src="./img/Marca9.png" className="m-auto">
        </motion.img>
      </div>
    </section>
  )
}

export default Brands;
