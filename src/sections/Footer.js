import React from 'react'
import { FaCopyright } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className=' bg-black text-white flex justify-center items-center gap-2 p-5 '>
      <FaCopyright className='lg:size-5 size-8 fill-white-500'/><p className='text-lg text-center'>Copyright 2024 Sakadam Engineering Construction Company Limited</p>
    </div>
  )
}

export default Footer
