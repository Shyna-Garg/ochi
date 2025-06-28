import React from 'react'

const Featured = () => {
  return (
    <div className='py-20 w-full bg-zinc-800 text-white'>
        <div className='text'>
            <h1 className='px-10 text-8xl'>Featured Projects</h1>
            <div className='mt-20 border-b-2 border-zinc-700'></div>
        </div>
        <div className='cards py-20 flex w-full gap-10 p-10'>
            <div className='firstCardContainer w-1/2 h-[70vh] bg-zinc-700 rounded-2xl'></div>
            <div className='secondCardContainer w-1/2 h-[70vh] bg-zinc-700 rounded-2xl'></div>
        </div>
    </div>
  )
}

export default Featured