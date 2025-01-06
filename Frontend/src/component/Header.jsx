import React from "react";
import animate from "../assets/main.avif";
import chef from "../assets/chef.png";
import Fresh from "../assets/Fresh.png";

export default function Header() {
  return (
    <div className="bg-[#1E1E1E] flex flex-col md:flex-row items-center  py-2 px-8 md:px-5 ">
      <img src={Fresh} alt="" className="absolute w-full top-0 opacity-[0.45]"/>
     
      <div className=" text-white flex flex-col items-center justify-between md:max-w-[50%]  h-full">
        <div className="flex flex-col  justify-between items-start gap-2">
         
          <img 
            src={chef} 
            alt="Chef" 
            className="w-[100px] transition-transform duration-500 transform hover:scale-110"
          />
          <h1 className="text-white text-[40px] md:text-[60px] font-extrabold text-center md:text-left transform transition-all duration-500  animate-fadeIn">
            WHERE EVERY BITE <span className="text-[#FF7D05] ">IS A MOMENT</span> OF DELIGHT
          </h1>
          <p className="mb-8 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ipsum doloremque sunt unde iusto illo voluptatibus repellat aspernatur autem eos.</p>
          <button className='bg-[#FF7D05] text-white font-medium px-6 py-3 rounded-full hover:bg-[#DFBD20] cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 justify-satrt'>
            Order Now
          </button>
        </div>
      </div>

     
      <div className="flex-1 flex justify-center items-center md:justify-end">
        <img 
          src={animate} 
          alt="Fly Image" 
          className="md:w-[600px] transition-transform duration-500 transform hover:rotate-3 hover:scale-110"
        />
      </div>
    </div>
  );
}
