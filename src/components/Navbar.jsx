import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-5xl">
        AEM
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995"> <FaLinkedin /> </a>
        <a href="https://github.com/art321995"> <FaGithub /> </a>
        <a href="https://app.netlify.com/teams/art321995"> <SiNetlify /> </a>
      </div>
    </nav>
  )
}

export default Navbar;
