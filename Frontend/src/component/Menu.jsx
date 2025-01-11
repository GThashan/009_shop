import React from "react";
import rice from "../assets/rice.png";
import Juice from "../assets/juice1.png";
import bun from "../assets/bun.png";
import {  FaSearch } from 'react-icons/fa';

const category = [
  {
    img:Juice,
    name:"Drinks"
  },
  {
    img:rice,
    name:"Rice & Pizza"
  },
  {
    img:bun,
    name:"Tea & Bun"
  },
]

export default function Menu() {
  return (
    <div className="bg-[url('https://i.etsystatic.com/18975710/r/il/07267a/2234476041/il_300x300.2234476041_lnrv.jpg')] bg-no-repeat bg-cover  flex flex-col items-center justify-center py-8">
      <h1 className="text-center text-[20px] font-bold slide-in-up text-white">
        Select Category
      </h1>
      <div className="w-full flex items-center justify-center my-4">
        <div className="md:w-1/2 flex items-center justify-center gap-4 bg-white px-3 rounded-lg">
        <FaSearch
            className="text-md cursor-pointer hover:text-orange-500 transition-colors"
            title="Cart"
          />
      <input type="text" placeholder="Seach category" 
      className="py-2 px-1 w-full outline-none "
      />
        </div>
     
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3  mt-6 gap-8 items-center">

        {category.map((item,index)=>{
          return(
            <div key={index} className="border p-5 fade-in-left relative   bg-black flex flex-col items-center justify-center p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
            <p className=" text-[20px] text-center text-white">
              {item.name}
            </p>
            <img
              src={item.img}
              alt="Delicious medium beef and chili dish"
              className="w-[200px] max-h-[200px]  rounded-md"
            />
  
            
          
            <div className="flex items-center justify-center w-full">
          
             <button className="px-3 py-2 w-full bg-[#FF7D05] text-white">View</button>
            </div>
          </div>
          )
        })}
       
     </div>
     </div>  
    
  );
}
