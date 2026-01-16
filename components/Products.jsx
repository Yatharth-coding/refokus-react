import React from 'react'
import Product from './Product'

function Products() {
    var data=[
        {heading :"Arqitel" , desc:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. " , live:true , case : true
        },
        {heading :"Cula" , desc:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates. " , live:false , case : false
        },
        {heading :"Layout Land" , desc:"An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow. " , live:false , case : false
        },
        {heading :"TTR" , desc:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. " , live:false , case : false
        },
        {heading :"Maniv" , desc:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods. " , live:false , case : false
        },
        {heading :"YIR 2022" , desc:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate. " , live:false , case : false
        },
        {heading :"Yahoo!" , desc:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.. " , live:false , case : false
        },
    ]
  return (
    <div>
      {data.map((elem,index)=>(<Product detail={elem} />))}
    </div>
  )
}

export default Products
