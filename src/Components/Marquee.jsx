import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full bg-green-900 p-5'>
        <div className='flex border-t-2 border-b-2 border-zinc-500 whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity, duration:4}} className='text-[15vw] font-semibold leading-none'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity, duration:4}} className='text-[15vw] font-semibold leading-none'>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity, duration:4}} className='text-[15vw] font-semibold leading-none'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee