
"use client"


import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"


const hotelData = [
    {
        image: '/find/hotel-1.png',
        name: 'Hotel Del Luna ',
        location: 'Singapore'
    },
    {
        image: '/find/hotel-2.png',
        name: 'Ina Trets Hotel',
        location: 'Singapore'
    },
    {
        image: '/find/hotel-3.png',
        name: 'Delight Hotel',
        location: 'Singapore'
    },
    {
        image: '/find/hotel-4.png',
        name: 'Marcusuar Hotel',
        location: 'Singapore'
    },
]

const Find = () => {
  return (
    <section className='py-12 xl:py-36'>
        <div className="container mx-auto">
            {/* text */}
            <div className='text-center' >
                <motion.h2 
                 variants={fadeIn('up', 0.2)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.2}}
                className='h2 mb-6'>
                    Find your best hotel
                </motion.h2>
                <motion.p
                 variants={fadeIn('up', 0.4)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.2}}
                className="max-w-[638px] mx-auto mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium ea soluta impedit quaerat qui natus dolore sed architecto odio doloremque corrupti cumque nam explicabo, quasi enim totam voluptatem? Aliquam?
                </motion.p>
                <motion.div
                 variants={fadeIn('up', 0.6)}
                 initial='hidden'
                 whileInView={'show'}
                 viewport={{once: false, amount: 0.2}}
                >
                    <Button variant='accent' className='px-12 mb-14 xl:mb-28' >
                        View All
                    </Button>
                </motion.div>
            </div>

            {/* hotel grid */}
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="grid gap-y-10 xl:gap-y-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[1.8rem]">
                {
                    hotelData.map(({image, name, location}, i) => (
                        <div 
                        className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden
                         hover:cursor-pointer group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
                        key={i}>
                            <Image
                            src={image}
                            width={270}
                            height={270}
                            alt="" />
                            <div className="p-6 ">
                                <h4 className="h4 group-hover:text-white transition-all duration-300">
                                    {name}</h4>
                                <p className="group-hover:text-white transition-all duration-300">
                                    {location}</p>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Find