import React from 'react'


import {motion} from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './Animation'
const Portfolio = () => {
  return (
    <div id="project" className='w-full'>
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
                      Portfolio
                  </motion.h1>
                  <motion.div 
                  variants={slideUpVariants}
                  className='bg-yellow-500 w-[120px] h-[6px]'
                  >
      
                  </motion.div>
               
      </motion.div>
      <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={zoomInVariants}
                  className='w-full m-auto p-[20px] grid lg:grid-cols-2 grid-cols-1'
                  >
                    <img src="../assets/centralmosque.jpg" alt="Buildings" className='h-[350px] p-[20px] w-full' />
                    <img src="../assets/fountain1.jpg" alt="Road" className='h-[350px] p-[20px] w-full '/>
                  </motion.div>
    </div>
  )
}

export default Portfolio
