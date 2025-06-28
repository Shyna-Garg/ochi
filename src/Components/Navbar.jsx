import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] w-full flex justify-between p-8'>

<div className='font-semibold text-xl'>ochi</div>
<div className='links flex gap-8 '>
    {["Services","Our Work","About Us","Insights","Contact Us"].map((item,index)=>(
        <a className={`font-light ${index===4 && "ml-40" }`} key={index}>{item}</a>
    ))}
</div>
</div>
  )
}

export default Navbar 