import React from "react";
import Button from "./Button";

function Product({ detail, mover, count, leaveHandler, hovered }) {
  return (
    <div
      onMouseEnter={() => mover(count)}
      onMouseLeave={leaveHandler}
      className={`w-full h-[20rem] ${detail.heading === "Layout Land" ? "py-0" : "py-5"}  text-white relative overflow-hidden`}
    >
      <div
        className={`absolute left-0 top-[5%] w-full h-[85%] transition-all duration-500 ${
          hovered === count ? detail.backgroundColor : "bg-transparent"
        }`}
      ></div>
      <div className=" relative z-10 max-w-screen-xl mx-auto flex items-center justify-between px-10">
        <h1
          className={`text-6xl capitalize font-semibold ${
            detail.heading === "Layout Land" ? "tracking-tighter" : ""
          }`}
        >
          {detail.heading}
        </h1>

        <div className="w-1/3">
          <p className="mb-10">{detail.desc}</p>

          <div className="flex items-center gap-10">
            {detail.live && <Button />}
            {detail.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
