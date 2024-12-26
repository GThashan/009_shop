import React from "react";
import manuitem from "../assets/main.png";
import leaf1 from "../assets/leaf1.png";

export default function Menu() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <h1 className="text-center text-[50px] text-white font-extrabold">
        Choose Our Menu
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 px-10 mt-6 gap-4 ietms-center">
        <div className="relative max-w-[200px]  bg-[#333333] flex flex-col items-center justify-center p-4 rounded shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md shadow-lg relative"
          />

          <p className="text-white text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>

          <div className="flex items-center justify-center space-x-2">
        
            <span className="text-[50px] text-[#F58D38] font-bold">$34</span>
          </div>
        </div>
       
        <div className="relative max-w-[200px]  bg-[#333333] flex flex-col items-center justify-center p-4 rounded shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md shadow-lg relative"
          />

          <p className="text-white text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>

          <div className="flex items-center justify-center space-x-2">
        
            <span className="text-[50px] text-[#F58D38] font-bold">$34</span>
          </div>
        </div>
       
        <div className="relative max-w-[200px]  bg-[#333333] flex flex-col items-center justify-center p-4 rounded shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md shadow-lg relative"
          />

          <p className="text-white text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>

          <div className="flex items-center justify-center space-x-2">
        
            <span className="text-[50px] text-[#F58D38] font-bold">$34</span>
          </div>
        </div>
       
        <div className="relative max-w-[200px]  bg-[#333333] flex flex-col items-center justify-center p-4 rounded shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md shadow-lg relative"
          />

          <p className="text-white text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>

          <div className="flex items-center justify-center space-x-2">
        
            <span className="text-[50px] text-[#F58D38] font-bold">$34</span>
          </div>
        </div>
       
       
      </div>
      <button className='bg-[#F58D38] text-white font-medium px-3 py-2 rounded-full hover:bg-[#DFBD20] cursor-pointer my-10 hover:scale-105 transition-transform'>Find More</button>
    </div>
  );
}
