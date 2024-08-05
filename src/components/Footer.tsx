import { FOOTER } from '@/constants';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";


const Footer = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div className="container mx-auto">
            <div className="flex flex-wrap border-b border-neutral-700">
                <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                    <h2>CasasMX</h2>
                    <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
                    <div className="flex flex-wrap gap-4 my-10 text-3xl">
                        <a href="https://www.linkedin.com/in/arturo-esqueda-morales-3feb1995" className='hover:text-neutral-500'> <FaLinkedin /> </a>
                        <a href="https://github.com/art321995" className='hover:text-neutral-500'> <FaGithub /> </a>
                        <a href="https://app.netlify.com/teams/art321995" className='hover:text-neutral-500'> <SiNetlify /> </a> 
                    </div>
                </div>
                {FOOTER.categories.map((category, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-2/12 p-4">
                        <h3 className="font-semibold uppercase pb-4">{category.name}</h3>
                        <ul>
                            {category.links.map((link, index) =>(
                                <li key={index} className="my-4">
                                    <Link href={link.url} className='text-sm hover:text-neutral-500'>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className='p-5 text-center text-sm text-neutral-500'>{FOOTER.copyright}</p>
        </div>
    </div>
  )
}

export default Footer;