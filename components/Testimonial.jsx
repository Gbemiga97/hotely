"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'



import { Button } from './ui/button'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'


const testimonialData = [
    {
        img: '/testimonials/img-1.png',
        location: 'Singapore',
        personName: 'Robert Rene',
        msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa explicabo provident dolorum autem commodi consequuntur aspernatur quo quos! Corporis, animi earum. Dolorem, quas labore? Soluta obcaecati ea, velit qui quos culpa dolore molestias, maxime nesciunt saepe est ullam. Maxime, illo nesciunt! Corporis labore, dolorum non qui ea quasi.'
    },
    {
        img: '/testimonials/img-2.png',
        location: 'Singapore',
        personName: 'Robert Rene',
        msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sed repudiandae ipsum ducimus, nostrum sit fugiat, eligendi doloribus iure voluptates inventore cumque voluptatum maiores nisi dolorum voluptatem harum. Optio, voluptate nesciunt recusandae obcaecati quam similique error! Incidunt dolor, error dolorum molestiae quis ea architecto eum nulla quisquam similique.'
    },
]



const Testimonial = () => {
  return (
    <motion.section
    variants={fadeIn('up', 0.2)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once: false, amount: 0}}
    className='bg-soft_green xl:h-[800px]'
    >
        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0}}
        className="container mx-auto">
        <Swiper
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='xl:h-[680px] overflow-hidden'
            >
                {
                    testimonialData.map(({img, msg, location, personName}, i) => (
                     <SwiperSlide key={i}>
                        <div className='grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24'>
                            <Image 
                            src={img}
                            width={470}
                            height={470}
                            alt={personName}
                            className='hidden xl:flex'
                            />
                            <div className='flex-1 bg-white/20 text-white p-12'>
                                <p className='text-lg leading-9 mb-8'>
                                    {msg}</p>
                                <p className='text-xl font-bold'>
                                    {personName}</p>
                                <p>{location}</p>
                            </div>
                        </div>
                     </SwiperSlide>
                    ))
                }
            </Swiper>
        </motion.div>
    </motion.section>
  )
}

export default Testimonial