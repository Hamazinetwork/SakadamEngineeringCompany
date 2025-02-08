import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'


const Hero = () => {
  return (
    <div id="Hero" className=' w-full lg:h[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' style={{ backgroundImage: `url(/assets/homeimg.webp)`,}}>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-0 gap-4'
        >
            <motion.h1 
            variants={slideUpVariants}
            className='text-white text-2xl'
            >
                Who We Are
            </motion.h1>
            <motion.h1 
            variants={slideUpVariants}
            className='text-white text-[20px] font-bold'
            >
                At Sakadam, innovation is at the heart of everything we do. We continuously adopt the latest technologies and techniques to ensure Quality, Safety,Integrity

            </motion.h1>
            <div className='w-[120px] h-[6px] bg-yellow-200 '></div>
            <p className='text-white text-[15px] lg:p-[5px]'>Quality: Maintaining the highest standards in design, construction, and materials</p>
            <p className='text-white text-[15px] lg:p-[5px]'>Safety: Prioritizing the well-being of workers, clients, and communities.</p>
            <p className='text-white text-[15px] lg:p-[5px]'>Integrity: Upholding honesty and transparency in all business dealings.</p>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='flex justify-center items-center gap-5'
            >
                <motion.button
                variants={zoomInVariants}
                className='bg-yellow-200 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'
                >
                    READ MORE
                </motion.button>
            </motion.div>
        </motion.div>
        <div className=' w-[40%] flex flex-col justify-end items-end '>
            <motion.img 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            src={`/assets/ASakadam .JPG`} alt="hero image" className='lg:h[800px] h-[200px] lg:mb-[-50px] rounded-full '
            />
            </div> 
    </div>
  )
}

export default Hero
