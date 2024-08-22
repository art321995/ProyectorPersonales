import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="container mx-auto mt-12" id="review">
        <div className="flex flex-col">
            <div className="flex  items-center justify-center gap-6">
                <motion.img
                     initial={{opacity: 0, x: -100}}
                     whileInView={{opacity: 1, x: 0}}
                     viewport={{once: true}}
                     transition={{ duration: 1.2, delay: 0.5}} 
                    src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
                <motion.div 
                    initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{ duration: 1.2, delay: 0.5}}
                    className="tracking-tighter">
                    <h6>{REVIEW.name}</h6>
                    <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                </motion.div>
            </div>  
            <p className="m-10  text-xl font-light leading-normal tracking-tighter lg:mx-20 lg:mt-10 lg:text-[3.5rem] ">
                {REVIEW.content}
            </p>
            
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
            {[customer1, customer2, customer3, customer4].map((customer, index) =>(
                <img key={index} src={customer} alt="cutomer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" />
            ))}
        </div>
    </section>
  )
}

export default Review;