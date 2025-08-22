import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {

    const { t } = useTranslation("translate");

  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">{t("about")} <span className="text-neutral-500">{t("me")}</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/2 lg:p-8" >
                <div className="flex items-center justify-center">
                    <img  className="rounded-2xl" src="./img/About2.jpg" alt="AcercaDe" width={500} />
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{t("aboutText")}</p>
                </div>
                <div className="text-center lg:text-start">
                    <a
                    className="text-2xl hover:underline" 
                    href="/img/CV_ArturoEsqueda_Frontend.pdf" 
                    download="CV_ArturoEsqueda_Frontend.pdf">
                        {t("download")}
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;