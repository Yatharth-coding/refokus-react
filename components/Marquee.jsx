import React from "react";
import { motion } from "framer-motion";

function Marquee({ imagesUrl, index, direction }) {
  return (
    <div className="w-full flex overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex flex-shrink-0 gap-40 pr-40 py-15 gap-10"
      >
        {imagesUrl.map((url, index) => {
          return (
            <img
              key={index}
              src={url}
              alt=""
              className=""
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
        className="flex flex-shrink-0 gap-40 pr-40 py-15 gap-10"
      >
        {imagesUrl.map((url, index) => {
          return (
            <img
              key={index}
              src={url}
              alt=""
              className=" "
            />
          );
        })}
      </motion.div>
    </div>
  );
}

export default Marquee;