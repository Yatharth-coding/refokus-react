import React from "react";
import Button from "./Button";

function Product({ detail, mover, count }) {
  return (
    <div className="w-full h-[20rem] py-5 text-white">
      <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between px-10">
        <h1 className={`text-6xl capitalize font-semibold ${detail.heading === "Layout Land" ? "tracking-tighter" : ""}`}>
          {detail.heading}
        </h1>
        <div className=" w-1/3">
          <p className="mb-10">{detail.desc}</p>
          <div className="flex items-center gap-10 ">
            {detail.live && <Button />}
            {detail.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
