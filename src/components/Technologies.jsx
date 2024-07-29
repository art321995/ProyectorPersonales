import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiSass } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiHtml5Line className="text-6xl text-orange-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiCss3Line className="text-6xl text-blue-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiJavascriptLine className="text-6xl text-yellow-500" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiNextjsLine className="text-6xl " />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-6xl text-sky-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiSass className="text-6xl text-pink-400" />
          </div>
        </div>
    </div>
  )
}

export default Technologies;