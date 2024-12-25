import React from "react";
import mainimg from "../assets/main.avif";
import main from "../assets/main.avif";

export default function Header() {
  return (
    <div className="relative flex flex-row items-center justify-between mt-[100px] fixed">
      <div className="text-white flex flex-col items-start justify-start z-10 relative ml-8 bg-[#F58D38] p-3">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#121617] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-[#121617]"></span>
        </span>
        <h1 className="text-[50px] text-center font-extrabold">Food Zone</h1>

        <p className="text-left max-w-[200px]">
          Variety of fresh and fresh food served just for you, your solution
          when hungry in full day with super fast delivery
        </p>
      </div>

      <div className="absolute z-[-3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={mainimg} alt="" className="w-[1000px]" />
      </div>

      <div className="flex flex-col gap-4 items-end z-10 relative">
        <div className="bg-[#F58D38] text-white w-[400px] rounded-l-full flex flex-row">
          <img src={main} alt="" className="w-[100px] animate-spin-slow" />
        </div>
        <div className="bg-[#F58D38] text-white w-[350px] rounded-l-full flex flex-row">
          <img src={main} alt="" className="w-[100px] animate-spin-slow" />
        </div>
        <div className="bg-[#F58D38] text-white w-[300px] rounded-l-full flex flex-row">
          <img src={main} alt="" className="w-[100px] animate-spin-slow" />
        </div>
      </div>
    </div>
  );
}
