"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'


import { Button } from './ui/button'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'


const recommendationData = [
    {
        name: 'Shanghai Hotel',
        image: '/recommendation/hotel-1.png',
        location: 'Shanghai, China',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus obcaecati animi minus. Officia vel quis perspiciatis obcaecati?',
        price: 40,
        testimonial: {
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae rem id, quidem dolor corrupti voluptatum.',
            personName: 'Robert Rene',
        }           
    },
    {
        name: 'Peaks Lodge',
        image: '/recommendation/hotel-2.png',
        location: 'Aspen, USA',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus obcaecati animi minus. Officia vel quis perspiciatis obcaecati?',
        price: 80,
        testimonial: {
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae rem id, quidem dolor corrupti voluptatum.',
            personName: 'Emily Johnson',
        }           
    },
    {
        name: 'Tropival Oasis Resort',
        image: '/recommendation/hotel-3.png',
        location: 'Bali Indonesia',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus obcaecati animi minus. Officia vel quis perspiciatis obcaecati?',
        price: 120,
        testimonial: {
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae rem id, quidem dolor corrupti voluptatum.',
            personName: 'Micheal Anderson',
        }           
    },
]

const Recommendation = () => {
  return (
    <motion.section 
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0 }}
        className='pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative'>
        {/* slide */}
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0 }}
        >
            <Swiper
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            loop
            speed={2000}
            modules={[Autoplay]}
            >
                {
                    recommendationData.map(({name, image, price, desc, testimonial, location}, i) => (
                        <SwiperSlide key={i}>
                            <div className='flex flex-col-reverse xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0'>
                                {/* text */}
                                <div className='max-w-[345px] xl:pt-8 text-center mx-auto xl:text-left xl:mx-0 '>
                                    <h2 className='h2 mb-4'>
                                        {name}</h2>
                                        <p className='text-soft_green text-sm mb-6'>
                                            {location}</p>
                                            <p className='mb-[60px]'>
                                                {desc}</p>
                                         <div className='flex items-center gap-x-[50px]'>
                                            <Button 
                                            className='px-[44px]'
                                            variant='accent'>
                                                Book Now</Button>
                                                <div className='text-black'>
                                                    <span className='font-bold text-2xl'>
                                                        {price}</span>
                                                    <span className='text-sm'>/night</span>
                                                </div>
                                            </div>       
                                </div>
                                {/* image & testimonial */}
                                <div className='flex-1 flex justify-center xl:justify-end relative h-[634px]'>
                                <div>
                                    <Image
                                    src={image}
                                    width={905}
                                    height={528}
                                    quality={100}
                                    alt={name}
                                    className='xl:rounded-tl-[20px] xl:rounded-bl-[20px]'
                                    />
                                    <div className='bg-soft_green p-0 text-white text-center xl:text-left xl:max-w-[468px]
                                    xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10 '>
                                        <p className='mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6'>
                                        {testimonial.msg}</p>
                                        <p className='text-xl font-bold'>
                                            {testimonial.personName}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </motion.div>
        <Image 
        src={'/recommendation/pattern.svg'}
        width={240}
        height={240}
        alt='pattern'
        className='hidden xl:flex absolute left-[135px] -bottom-[120px]'
        />
    </motion.section>
  )
}

export default Recommendation