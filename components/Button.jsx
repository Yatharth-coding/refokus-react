import React from 'react'
import { IoIosReturnRight } from "react-icons/io"

function Button() {
  return (
    <div className='min-w-36 px-3 py-2 rounded-full bg-zinc-100 text-black  flex items-center  justify-between'>
      <span className="text-sm font-regular">Get started</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button
