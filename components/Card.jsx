import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import {motion} from "framer-motion"

function Card({width , head , para , hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor : hover===true && "#7443ff" , padding : "25px"}} className= {`bg-zinc-800 p-5 rounded-xl ${width}  min-h-[30rem] flex flex-col justify-between`}>
      <div className='w-full '>
            <div className='w-full flex justify-between '>
                <h3>one heading</h3>
                <div className='text-2xl'>
                < IoIosArrowRoundForward />
                </div>
            </div>
      <h1 className='text-3xl font-medium mt-10'>new heading</h1>
      </div>

      <div className='w-full '>
        {
            head && (
                <>
                <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a project</h1>
                <button className='rounded-full py-2 px-4 mt-4 border-1 border-zinc-60'>Contact Us</button>
                </>
            )
        }

        {
            para && (
                <p className='text-sm text-zinc-500 tracking-tight font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            )
        }

      </div>
    </motion.div>
  )
}

export default Card
