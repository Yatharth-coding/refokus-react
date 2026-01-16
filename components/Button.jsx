import React from 'react'
import { IoIosReturnRight } from "react-icons/io"

function Button({title = "Get started"}) {
  return (
    <div className='min-w-36 px-3 py-2 rounded-full bg-zinc-100 text-black  flex items-center  justify-between'>
      <span className="text-sm font-regular">{title}</span>
      <IoIosReturnRight />
    </div>
  )
}

export default Button
