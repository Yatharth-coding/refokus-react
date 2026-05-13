import React from 'react'

function Footer() {
  return (
    <div>
      <div className='max-w-screen-xl mx-auto flex  '>
      <div className='text-[11rem] font-semibold tracking-tighter mr-32'>refokus.</div>
      <div className='flex  '>
          <div className='flex flex-col basis-1/4'>
            <h4 className='text-zinc-500 mb-12'>Socials</h4>
            {["Instagram",  "Twitter (x?)", "LinkedIn"].map((item,index) => <a key={index} className='mt-3 text-zinc-500 tracking-tighter'>{item}</a>)}
          </div>

          <div className='flex flex-col basis-1/4'>
            <h4 className='text-zinc-500 mb-12'>Sitemap</h4>
            {["Home" , "Work" ,"Carrer" , "Contact" ].map((item,index)=><a key={index} className='mt-3 text-zinc-200'>{item}</a> )}
          </div>

          <div className='flex flex-col mt-22 basis-1/2 items-end'>
            <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology</p>
            <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="image of enterprise partner" className='w-32 mt-5'  />
          </div>
      </div>
    </div>
    <div className='max-w-screen-xl mx-auto'>
      {["Privacy Policy", "Terms of Service", "Cookie Policy" , "Impression"].map((item,index)=><span key={index} className='text-zinc-600 text-sm mr-7'>{item}</span> )}
    </div>
    </div>
  )
}

export default Footer
