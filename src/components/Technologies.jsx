import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { COURSES, COURSES_EN, EDUCATION, EDUCATION_EN } from "../constants";

const iconVariants = (duration) => ({
  initial: {y: -12},
  animate: {
    y: [12, -12],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
});


const Technologies = () => {

  const { t, i18n } = useTranslation("translate");
  const educationData = i18n.language === "es" ? EDUCATION : EDUCATION_EN;
  const coursesData = i18n.lenguage === "es" ? COURSES : COURSES_EN;
  
  return (
    <div className="border-b border-neutral-900 pb-24">
        <div>
          <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1.5 }} 
          className="my-20 text-4xl text-center">{t("education")}
        </motion.h2>
          {educationData.map((education, index) =>(
            <div key={index} className="mb-8 flex-wrap text-center">
                  <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 1.5 }} 
                    className=" m-auto">
                    <p className="mb-2 text-xl font-bold">{education.name}</p>
                  </motion.div>
                  <motion.div
                   whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 1.5 }} 
                    className="flex justify-center ">
                    <p className="mb-2 text-sm">{education.degree} | </p>
                    <p className="mb-2 text-sm pl-2 text-purple-800 "> {education.year}</p>
                  </motion.div>
              </div>
          ))}
        </div>
        <div>
          <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1.5 }} 
          className="my-20 text-4xl text-center">{t("courses")}
        </motion.h2>
          {coursesData.map((courses, index) =>(
            <div key={index} className="mb-8 flex-wrap lg:justify-center">
                  <motion.div
                    whileInView={{opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: -100}}
                    transition={{ duration: 1.5 }} 
                    className="w-full text-center">
                    <a href={courses.url} className="mb-2 text-xl hover:text-neutral-500">{courses.name}</a>
                  </motion.div>
            </div>
            ))}
        </div>
        <div>
        <motion.h2
          whileInView={{opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100}}
          transition={{ duration: 1.5 }} 
          className="my-20 text-center text-4xl">{t("technologies")}
        </motion.h2>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{ opacity: 0, x: -100}}
          transition={{ duration: 1.5 }} 
          className="flex flex-wrap items-center justify-center gap-4">
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-6xl text-orange-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Line className="text-6xl text-blue-500" />
          </motion.div>
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-6xl text-yellow-500" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsLine className="text-6xl " />
          </motion.div>
          <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-6xl text-sky-400" />
          </motion.div>
          <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"  
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSass className="text-6xl text-pink-400" />
          </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default Technologies;