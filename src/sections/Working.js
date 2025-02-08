import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'
import {planning} from '../export'

const Working = () => {
  return (
    <div id="Working" className='w-full bg-gray'>
    <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideUpVariants}
    className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
    >
        <motion.h1
        variants={slideUpVariants}
        className='text-black uppercase text-[40px] font-bold text-center'
        >
            Our Projects
        </motion.h1>
        <motion.h3
                    variants={slideUpVariants}
                    className='text-black uppercase text-[20px] font-bold text-center'
                    >
                        Here’s a glimpse of some notable projects we’ve delivered:
                    </motion.h3>
        <motion.div 
        variants={slideUpVariants}
        className='bg-yellow-500 w-[120px] h-[6px]'
        >

        </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        classname='w-full grid lg:grid-cols-4 grid-col-1 justify-center items-start gap-[20px] mt-[30px]'
        >
            {
                planning.map((items, index) =>(
                    <motion.div 
                    variants={zoomInVariants}
                    className='flex justify-center items-start gap-5 p-2'
                    key={index}>
                        
                        <div className='flex flex-col justify-center items-start gap-3 w-[80%]'>
                            <h1 className='text-lg font-bold text-black text-left'>{items.title}</h1>
                            <p className='text-[16px] text-left'>{items.about}</p>
                        </div>
                    </motion.div>
                ))
            }

        </motion.div>
    </motion.div>
  
</div>

  )
}

export default Working
