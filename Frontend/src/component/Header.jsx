import React from "react";
import mainimg from "../assets/main.avif";
import chef from "../assets/chef.png";

export default function Header() {
  return (
<div className="flex flex-col items-center justify-center ">

      <div className="text-white flex flex-col items-center justify-center   px-10  md:max-w-[800px]">
        <h1 className="text-[40px] text-center font-extrabold md:text-[70px]">Fresh and Healthy Food</h1>
        <img src={chef} alt="" className="w-[100px]"/>
        <p className="text-center font-thin">
          Variety of fresh and fresh food served just for you, your solution
          when hungry in full day with super fast delivery
          
        </p>
        
      </div>

      <div className="">
        <img src={mainimg} alt="" className="md:w-[1000px]" />
      </div>
    </div>
  );
}
