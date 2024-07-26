import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src="./img/Logo1.PNG" alt="logo" className="mx-2 w-20"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin />
        <FaGithub />
        <SiNetlify />
      </div>
    </nav>
  )
}

export default Navbar;
