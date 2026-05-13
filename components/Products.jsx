import React, { useRef, useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import arqitelVideo from "../src/assets/videos/arqitelVideo.webm";
import culaVideo from "../src/assets/videos/culaVideo.mp4";
import layoutVideo from "../src/assets/videos/layoutVideo.mp4";
import manivVideo from "../src/assets/videos/manivVideo.mp4";
import ttrVideo from "../src/assets/videos/ttrVideo.webm";

function Products() {
  const data = [
    {
      heading: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
      video: arqitelVideo,
      backgroundColor: "bg-indigo-700",
    },
    {
      heading: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: false,
      case: false,
      video: culaVideo,
      backgroundColor: "bg-blue-200",
    },
    {
      heading: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: false,
      case: false,
      video: layoutVideo,
      backgroundColor: "bg-slate-500",
    },
    {
      heading: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends and design.",
      live: false,
      case: false,
      video: ttrVideo,
      backgroundColor: "bg-indigo-700",
    },
    {
      heading: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: false,
      case: false,
      video: manivVideo,
      backgroundColor: "bg-emerald-700",
    },
    {
      heading: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: false,
      case: false,
      video: culaVideo,
      backgroundColor: "bg-blue-200",
    },
    {
      heading: "Yahoo!",
      desc: "We enhanced the New York Fashion Week by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen.",
      live: false,
      case: false,
      video: ttrVideo,
      backgroundColor: "bg-indigo-700",
    },
  ];

  const [pos, setPos] = useState(0);
  const [hovered, setHovered] = useState(null);

  const videoRefs = useRef([]);

  const mover = (val) => {
    setPos(val * 20);
    setHovered(val);

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === val) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  const leaveHandler = () => {
    setHovered(null);

    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  return (
    <div className="mt-50 relative">
      {data.map((elem, index) => (
        <Product
          key={index}
          detail={elem}
          count={index}
          mover={mover}
          leaveHandler={leaveHandler}
          hovered={hovered}
        />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
  animate={{
    y: pos + "rem",
    opacity: hovered !== null ? 1 : 0,
    scale: hovered !== null ? 1 : 0.8,
  }}
          transition={{
            ease: [0.87, 0, 0.13, 1],
            duration: 0.6,
          }}
          className="window absolute w-[26rem] h-[20rem] left-[32%] overflow-hidden rounded-2xl"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{
                ease: [0.87, 0, 0.13, 1],
                duration: 0.5,
              }}
              className="w-full h-full"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                loop
                muted
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;