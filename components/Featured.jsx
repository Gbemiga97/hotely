"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"



const Featured = () => {
  return (
    <motion.section 
    variants={fadeIn('left', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0.2}}
    className="bg-soft_green-secondary xl:h-[240px] max-w-[1305px] ml-auto
    xl:-top-[120px] relative rounded-tl-[1.8rem] rounded-bl-[1.8rem] px-[80px] py-[60px]">
        <div className="flex flex-col xl:flex-row items-center h-full gap-x-[1.8rem] text-center xl:text-left ">
            <Image
            className="xl:mr-[50px ]" 
            src='/featured/icon.svg'
            width={73}
            height={84}
            alt="love" />
        <h2 className="h2 flex-1 text-soft_green leading-relaxed">
            Book an awesome room in less than a minute
        </h2>
        <p className="flex-1 text-soft_green leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing 
            elit. Explicabo adipisci iste, suscipit provident, 
            voluptatum dolore distinctio laborum placeat vero in 
            praesentium culpa quas exercitationem fuga tempora?
        </p>
        </div>
    </motion.section>
  )
}

export default Featured