"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import Stats from "./Stats"
import { useMediaQuery } from "react-responsive"

const About = () => {


    const isMobile =  useMediaQuery+({
        query: '(max-width: 768px)'
    })

    const [ref, inView] = useInView({
        threshold: !isMobile ? 0.5 : null
    })

   

    

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
        <div className="container mx-auto">
            <div className="flex flex-col items-center xl:flex-row"> 
               {/* img */}
                <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.4}}
                className="flex-1 relative">
                    <Image 
                    src='/about/img2.png'
                    width={559}
                    height={721}
                    alt="about_img"
                    />
                </motion.div>
                {/* text */}
                <motion.div
                 variants={fadeIn('left', 0.5)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.4}} 
                className="xl:max-w-[470px] max-w-[400px] text-center my-16 xl:my-0 flex flex-col items-center xl:items-start">
                    <h2 className="h2 mb-[2.4rem]">
                        About Hotely
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dignissimos voluptatibus quaerat commodi eveniet praesentium molestias
                         nihil iusto, soluta aspernatur error.
                    </p>
                    {/* stats */}
                    <div
                    className="my-5 xl:my-10 min-h-[2.3rem]"
                    >
                        {
                            inView &&  <Stats />
                        }
                    </div>
                    <p className="mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus unde sequi corrupti eaque minima eum 
                        facere similique provident ea hic.
                    </p>
                    <Button variant='accent'>
                        Explore more
                    </Button>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default About