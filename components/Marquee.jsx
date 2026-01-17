import React from 'react'

function Marquee({imagesUrl}) {
    return (
        <div className='flex gap-10 py-10 overflow-hidden'>
            {imagesUrl.map((url) => { return <img src={url} alt="" className='w-[8vw] flex-shrink-0'/> })}
            {imagesUrl.map((url) => { return <img src={url} alt="" className='w-[8vw] flex-shrink-0'/> })}
        </div>

    )
}

export default Marquee