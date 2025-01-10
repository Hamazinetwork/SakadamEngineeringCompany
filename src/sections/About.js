import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'

const About = () => {
  return (
    <div className='ld:w-[80%] w-[90%] m-auto py-[60] flex lg:flex-row flex-col justify-between items-start gap-[50px]'id='About'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
        >
            <motion.h1
            variants={slideUpVariants}
            className='text-3xl text-blue-900'
            >
                Welcome to 
            </motion.h1>
            <motion.h1
            variants={slideUpVariants}
            className='text-black font-bold uppercase text-2xl'>
            Sakadam Engineering Construction Company Limited
            </motion.h1>
            <div className='lg:w-[80%] w-full flex flex-col justify-center items-start lg:items-center gap-6'>
                <p className='text-lg italic text-black-50 text-justify'>
                With over 25 years of excellence, Sakadam Engineering Company stands as a trusted name in engineering and construction. From road and building constructions to project planning, design, management, supervision, and maintenance, we offer a comprehensive range of services. Our expertise spans civil, mechanical, electrical, telecommunication, and computer engineering. As an importer and exporter, we bring global standards to every project we undertake.
                </p>

            </div>

        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] '
        >

        </motion.div>
      
    </div>
  )
}

export default About
