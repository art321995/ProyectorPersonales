import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const container = (delay) =>({
    hidden:{x: -100, opacity:0},
    visible:{x: 0, opacity: 1, transition:{duration: 2, delay} }
});

const Hero = () => {

    const { t } = useTranslation("translate"); 
  

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Arturo Esqueda
                    </motion.h1>
                    <motion.span 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight
                        text-transparent">
                        {t('developer')}
                    </motion.span>
                    <motion.p
                        variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                        className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {t('herocontent')}
                    </motion.p>
                </div>
            </div>
            <div className="w-1/2 m-auto lg:w-1/5 lg:p-2">
                <div className="flex">
                    <motion.img 
                        initial={{x: 100, opacity:0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 2}}
                        className="rounded-2xl" 
                        src="./img/PerfilAEM.jpeg" 
                        alt="Arturo Esqueda"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;