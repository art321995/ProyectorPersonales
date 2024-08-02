import { HERO } from "@/constants";
import SearchForm from "./ui/SearchForm";

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center ">
        <div className="flex mx-w-4xl flex-col items-center gap-6 pb-10 pt-14 sm:pt-14">
            <div className="space-y-4">
                <h1 className="m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl ">
                    {HERO.title}
                </h1>
                <p className="p-4 text-center text-white ">{HERO.description}</p>
            </div>
            <SearchForm />
        </div>
    </div>
  )
}

export default Hero;