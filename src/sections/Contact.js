import React from 'react'


const Contact = () => {
  return (
    <div id="Contact" className='flex min-h-[70vh] min-w-full items-center justify-center '>
      <div className='flex flex-col items-center justify-center gap-3 space-y-5 p-14 '>
        <h1 className='text-center text-5xl md:tx-7xl'>
          <span>Get In Touch</span>
        </h1>
        <p className='text-center text-lg font-semibold text-grey-500'>Click the button below to send us an email</p>
        <a href="mailto:sakadamengineering@gmail.com" className='text-nowrap rounded-lg border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white'>Contact</a>
      </div>
      
    </div>
  )
}

export default Contact
