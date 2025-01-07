import React from "react";
import manuitem from "../assets/main.png";
import leaf1 from "../assets/leaf1.png";

export default function Menu() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <h1 className="text-center text-[30px] font-bold slide-in-up">
        Choose Our Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-6 gap-8 items-center">
        <div className="p-5 fade-in-left relative   bg-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md  relative"
          />

          <p className=" text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>
          <ul>
            <li>4 piece chicken</li>
            <li>4 piece chicken</li>
            <li>Rs.300/=</li>
          </ul>

          <div className="flex items-center justify-center w-full">
        
           <button className="px-3 py-2 w-full bg-[#FF7D05] text-white">View</button>
          </div>
        </div>
       
        <div className="p-5 fade-in-left relative   bg-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md  relative"
          />

          <p className=" text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>
          <ul>
            <li>4 piece chicken</li>
            <li>4 piece chicken</li>
            <li>Rs.300/=</li>
          </ul>

          <div className="flex items-center justify-center w-full">
        
           <button className="px-3 py-2 w-full bg-[#FF7D05] text-white">View</button>
          </div>
        </div>
       
        <div className="p-5 fade-in-left relative   bg-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <img src={leaf1} alt="" className="absolute  top-[-30px] left-[-30px] w-[900px]" />
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px]  rounded-md  relative"
          />

          <p className=" text-[20px] text-center">
            Medium Beef and Chili Soft
          </p>
          <ul>
            <li>4 piece chicken</li>
            <li>4 piece chicken</li>
            <li>Rs.300/=</li>
          </ul>

          <div className="flex items-center justify-center w-full">
        
           <button className="px-3 py-2 w-full bg-[#FF7D05] text-white">View</button>
          </div>
        </div>
       
       
       
       
      </div>
      <button className='bg-[#F58D38] text-white font-medium px-3 py-2 rounded-full hover:bg-[#DFBD20] cursor-pointer my-10 hover:scale-105 transition-transform'>Find More</button>
    </div>
  );
}
