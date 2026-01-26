import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function Card() {
  return (
    <div className='w-1/2 bg-zinc-800 p-5 rounded-xl'>
      <div className='w-full '>
            <div className='w-full flex justify-between '>
                <h3>one heading</h3>
                <div className='text-2xl'>
                < IoIosArrowRoundForward />
                </div>
            </div>
      <h1 className='text-3xl font-medium mt-10'>new heading</h1>
      </div>

      <div className='w-full mt-40 '>
        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
        <button className='rounded-full py-2 px-4 mt-4 border-1 border-zinc-60'>Contact Us</button>
        <p className='text-sm text-zinc-500 tracking-tight font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}

export default Card
