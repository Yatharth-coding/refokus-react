import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitelVideo from "../src/assets/videos/arqitelVideo.webm";
import culaVideo from "../src/assets/videos/culaVideo.mp4";
import layoutVideo from "../src/assets/videos/layoutVideo.mp4";
import manivVideo from "../src/assets/videos/manivVideo.mp4";
import ttrVideo from "../src/assets/videos/ttrVideo.webm";

function Products() {
  var data = [
    {
      heading: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
      live: true,
      case: true,
      video: arqitelVideo,
    },
    {
      heading: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates. ",
      live: false,
      case: false,
      video: culaVideo,
    },
    {
      heading: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow. ",
      live: false,
      case: false,
      video: layoutVideo,
    },
    {
      heading: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. ",
      live: false,
      case: false,
      video: ttrVideo,
    },
    {
      heading: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods. ",
      live: false,
      case: false,
      video: manivVideo,
    },
    {
      heading: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate. ",
      live: false,
      case: false,
      video: culaVideo,
    },
    {
      heading: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.. ",
      live: false,
      case: false,
      video: ttrVideo,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="mt-50 relative">
      {data.map((elem, index) => (
        <Product key={index} detail={elem} count={index} mover={mover} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          // initial={{y: pos , x:"-50%"}}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.87, 0, 0.13, 1], duration: 0.5 }}
          className="window absolute w-[26rem] h-[20rem] left-[32%] overflow-hidden rounded-xl"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{
                ease: [0.87, 0, 0.13, 1],
                duration: 0.5,
              }}
              className="w-full h-full "
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover overflow-hidden  "
              />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
}

export default Products;
