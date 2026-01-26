import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='max-w-screen-xl mx-auto w-full flex gap-3 py-12'>
      <Card width={"basis-1/3"} head={false} para={true}/>
      <Card width={"basis-2/3"} head={true} para={false} hover={"bg-purple-500"}/>

    </div>
  )
}

export default Cards
