import React from "react";
import mainimg from "../assets/main.avif";
import chef from "../assets/chef.png";
import side from "../assets/side-4.png";
import side2 from "../assets/side-3.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('https://wallpapercave.com/wp/wp9506465.jpg')] bg-no-repeat bg-cover shadow-b-lg">
    

      <div className="absolute z-10   text-white flex flex-col items-center justify-center  px-8    md:max-w-[800px]">
        <div className=" flex flex-col items-center justify-start">
          <img src={chef} alt="" className="w-[100px] " />
          <h1 className="bg-gradient-to-r from-[#F58D38] to-white inline-block text-transparent bg-clip-text  text-[40px] md:text-[60px] font-extrabold text-center">
            WHERE EVERY BITE IS A MOMENT OF DELIGHT
          </h1>
          <button className='bg-[#F58D38] text-white font-medium px-4 py-2 rounded-full hover:bg-[#DFBD20] cursor-pointer hover:scale-105 transition-transform mt-10'>Order Now</button>
        </div>
      </div>

      <div className="">
        <img src={mainimg} alt="" className="md:w-[500px] opacity-25  mt-0" />
      </div>
    </div>
  );
}
