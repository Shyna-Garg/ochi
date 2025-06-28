import React from 'react'

const Footer = () => {
  return (
    <div className='bg-zinc-800 p-24 h-screen w-full flex gap-20 '>
        <div className='w-1/2 h-full flex flex-col justify-between '>
        <div> 
        <h1 className='text-8xl font-semibold tracking-tighter '>EYE-</h1>
        <h1 className='text-8xl font-semibold tracking-tighter'>OPENING</h1>
        </div>
        <div>
            <h2 className='text-3xl font-medium text-zinc-600'>ochi.</h2>
        </div>
        </div>

        <div className='w-1/2 h-full'>
        <h1 className='text-7xl tracking-tighter'>PRESENTATIONS</h1>

        </div>
    </div>
  )
}

export default Footer