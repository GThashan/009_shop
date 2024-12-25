import React from "react";
import manuitem from "../assets/main.png";

export default function Menu() {
  return (
    <div className="mt-[100px]">
      <h1 className="text-center text-[50px] text-white font-bold">
        Choose Our Menu
      </h1>

      <div className="grid grid-cols-4 px-10 mt-6 gap-4">
        <div className="max-w-[400px] relative bg-[#333333] flex flex-col items-center justify-center p-4 rounded shadow-lg cursor-pointer hover:scale-105 transition-transform">
         
          <img
            src={manuitem}
            alt="Delicious medium beef and chili dish"
            className="w-[200px] absolute top-[-50px]  rounded-md "
          />
         
          <p className="text-white text-[20px] mt-40 text-center">
            Medium Beef and Chili Soft
          </p>


          <div className="flex items-center justify-center space-x-2">
  {/* Price */}
  <span className="text-[50px] text-[#F58D38] font-bold">$34</span>
  

  <span className="text-[50px] text-black bg-white cursor-pointer hover:text-white rounded-full">
    +
  </span>
</div>

        </div>

       
      </div>
    </div>
  );
}
