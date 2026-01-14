import React from 'react'
import Button from "../components/Button"

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto  py-6 flex item-center justify-between border-b-2 border-zinc-400 '>
        <div className="nleft flex items-center ">
            <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='links flex gap-10 ml-15  items-center font-[santoshi_variable]'>
            {["Home" , "Work", "Culture" ,"" ,"News" ].map((elem,index)=>
                <a key={index} className='flex items-center gap-1 '  href="#">
                    {index === 1 && <span style={{boxShadow:"0 0 0.75em rgb(0,255,25)"}} className=' w-[5px] h-[5px] bg-green-600 rounded-full border-solid'></span>}
                    {elem ==="" ? <span className='inline-block h-6.5 w-0.5 bg-zinc-400 opacity-90 '></span> : elem}</a>
            )}
            </div>
        </div>
        <Button/>
    </div>
  )
}

export default Navbar
