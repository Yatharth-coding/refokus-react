import React from 'react'

function Stripe({data}) {
    
  return (
    <div className='flex w-[17%] justify-between items-center max-w-70 py-5 px-5 border-zinc-600 border-1'>
      <img src={data.img} alt="" />
      <span className=' font-semibold'>{data.number}</span>
      
    </div>
  )
}

export default Stripe
