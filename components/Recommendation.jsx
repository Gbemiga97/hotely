"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { AutoPlay } from 'swiper/modules'
import 'swiper/css'

import { Button } from './ui/button'
import Image from 'next/image'

import { motion } from 'framer-motion'


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
    <section>
        {/* slide */}
        <div>
            <Swiper>
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
                                    <div>
                                        <p>{testimonial.msg}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Recommendation