import React from 'react'
import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'
import { clients } from '../export'

const Testimonia = () => {
  return (
    <div id="working" className='w-full bg-gray'>
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
            LEADERSHIP
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
        classname='lg:w-full w-[90%] grid lg:grid-cols-3 grid-col-1 justify-center items-start gap-8 mt-[30px]'
        >
            {
                clients.map((item, index) =>(
                    <div key={index} className='flex flex-col justify-center items-center'>
                        <div className='border-2 border-black hover:bg-gray-500 pb-[100px] pt-[30px]'>
                        <p className='text-black text-lg text-center'>{item.about}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-[5px]'>
                        <img className='mt-[-50px] rounded-full h-[240px] ' src={item.image} alt=''/>
                        <h1 className='text-black text-[27px] font-semibold uppercase'>{item.h1}</h1>
                        <h1 className='text-yellow-500 text-[22px]'>{item.post}</h1>
                    </div>
                    </div>
                ))
            }

        </motion.div>
    </motion.div>
  
</div>
  )
}

export default Testimonia
