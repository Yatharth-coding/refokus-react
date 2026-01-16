import React from 'react'

function Work() {

  var images = [ 
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" , top:"50%" , left:"40%" , isActive : false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" , top:"56%" , left:"43%" , isActive : false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" , top:"59%" , left:"52%" , isActive : false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" , top:"64%" , left:"42%" , isActive : false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" , top:"68%" , left:"55%" , isActive : false},
    {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" , top:"72%" , left:"48%" , isActive : false},

  ]
  return (
    <div>
    <div className="w-full">
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[35vw] font-[santoshi] font-semibold leading-none tracking-tight select-none'>work</h1>
        <div className='w-full  rouded-lg bg-sky-400 '>
          {images.map((elem,index)=>{
          return elem.isActive && <img className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} alt="" style={{top : elem.top , left : elem.left}} />
          })}
        </div>
      </div>
      </div>
    </div>
      
      
  )
}

export default Work
