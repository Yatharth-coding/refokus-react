import React from 'react'
import Button from './Button'

function Product({detail}) {
  return (
    <div className='w-full py-20 text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between mt-10 px-10'>
      <h1 className='text-6xl capitalize font-semibold'>{detail.heading}</h1>
      <div className=' w-1/3'>
          <p className='mb-10'>{detail.desc}</p>
          <div className='flex items-center gap-10 '> 
            {detail.live && <Button  />}
            {detail.live && <Button title="Case Study" />}
 
            
          </div>
      </div>
    </div>
    </div>
  )
}


export default Product
