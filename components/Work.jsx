import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "10%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "46%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "59%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "89%",
      left: "42%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "100%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "140%",
      left: "45%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", Math.floor(latest*100))

    function showHiddenImages(arr) {
      setImages((prev) => {
        return prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true },
        );
      });
    }

    switch (Math.floor(latest * 100)) {
      case 0:
        showHiddenImages([]);
        break;
      case 1:
        showHiddenImages([0]);
        break;
      case 2:
        showHiddenImages([1, 0]);
        break;
      case 3:
        showHiddenImages([1, 2, 0]);
        break;
      case 4:
        showHiddenImages([1, 2, 3, 0]);
        break;
      case 5:
        showHiddenImages([1, 2, 3, 4, 0]);
        break;
      case 6:
        showHiddenImages([1, 2, 3, 4, 5, 0]);
        break;
    }
  });

  return (
    <div>
      <div className="w-full mt-0 ">
        <div className="relative max-w-screen-xl mx-auto text-center">
          <h1 className="text-[12vw] scale-[3] origin-center font-semibold leading-none select-none mt-40 mb-40">
            work
          </h1>

          <div className="w-full  rouded-lg  ">
            {images.map((elem, index) => {
              return (
                elem.isActive && (
                  <img
                    key={index}
                    className="w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]"
                    src={elem.url}
                    alt=""
                    style={{ top: elem.top, left: elem.left }}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
