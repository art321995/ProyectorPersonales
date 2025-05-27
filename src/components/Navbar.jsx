import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaWhatsapp, FaLinkedin} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiNetlify } from "react-icons/si";

const enviarMensajeWhatsApp = () => {
  const mensaje = 'Buen dia! Me interesa tu perfil profesional';
  const url = `https://wa.me/+5213316110106/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank')
}

const Navbar = () => {

  const {t, i18n } = useTranslation (["translate"]);
  const [language, setLenguage] = useState(i18n.language);

  useEffect(() => {
    setLenguage(i18n.language);
  },[i18n.language]);

  const changeLanguage = (lang) =>{
    i18n.changeLanguage(lang);
    setLenguage(lang);
  }

  const basetext = "text-sm hover:cursor-pointer transition font-semibold";
  const active = "font-bold underline";
  const inactive = "text-neutral-500 hover:underline";

  return (
    <>
      <div className="flex justify-end w-full gap-2 pt-4 px-6">
        <button className={`${basetext} ${language === "es" ? active : inactive}`}
          onClick={() => changeLanguage ("es")}>
          {t("spanish")}
        </button>
        <p> - </p>
        <button className={`${basetext} ${language === "en" ? active : inactive}`}
          onClick={() => changeLanguage ("en")}>
          {t("english")}
        </button>
      </div>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center text-5xl">
          AEM
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
          <a href="https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995" className='hover:text-neutral-500'> <FaLinkedin /> </a>
          <a href="https://github.com/art321995" className='hover:text-neutral-500'> <FaGithub /> </a>
          <a href="https://app.netlify.com/teams/art321995" className='hover:text-neutral-500'> <SiNetlify /> </a>
          <a onClick={enviarMensajeWhatsApp} className='hover:text-neutral-500 hover:cursor-pointer'> <FaWhatsapp /> </a>
          <a href="mailto:art270112@gmail.com?Subject=Me interesa tu Perfil Profesional" className='hover:text-neutral-500'><MdOutlineMail /></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
