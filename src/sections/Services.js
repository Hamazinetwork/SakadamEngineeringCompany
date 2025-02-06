import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'
import { allservices } from '../export'

const Services = () => {
  return (
    <div id="Services" className='w-full bg-gray'>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
        >
            <motion.h1
            variants={slideUpVariants}
            className='text-black uppercase text-[40px] font-bold text-center'
            >
                Our Services
            </motion.h1>
            
            <motion.div 
            variants={slideUpVariants}
            className='bg-yellow-500 w-[120px] h-[6px]'
            >

            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            classname='w-full grid lg:grid-cols-3 grid-col-1 justify-center items-start gap-[20px] mt-[30px]'
            >
                {
                    allservices.map((items, index) =>(
                        <motion.div 
                        variants={zoomInVariants}
                        className='flex justify-center items-start gap-5 p-8'
                        key={index}>
                            <img src={items.icon} alt="" className='w-[70px] border-2 border-yellow-500 rounded-lg p-2'/>
                            <div className='flex flex-col justify-center items-start gap-3'>
                                <h1 className='text-xl font-bold text-black'>{items.title}</h1>
                                <p className='text-[18px]'>{items.about}</p>
                            </div>
                        </motion.div>
                    ))
                }

            </motion.div>
        </motion.div>
      
    </div>
  )
}

export default Services
