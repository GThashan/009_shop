import React from 'react'
import chef from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";


export default function About() {
  return (
    <div className="my-8 flex flex-col md:flex-row items-center  py-2 px-8 md:px-5 gap-3 ">
   
   
    <div className=" text-white flex flex-col items-center justify-between md:max-w-[50%]  h-full">
      <div className="flex flex-col  justify-between items-center gap-2">
        <div className='relative'>
        <img src={chef2} alt="" className="rounded absolute top-[-20px] md:right-[-50px] right-0 w-[150px] md:w-[200px]  z-[10]"/>
        <img 
          src={chef} 
          alt="Chef" 
          className="w-full transition-transform duration-500 transform hover:scale-110 rounded"
        />
        </div>
     
       
      </div>
    </div>

    <div className='flex-1 my-3 flex flex-col items-center justify-center md:items-start md:ml-12 md:justify-start gap-4 md:max-w-1/4 '>
        <h1 className='font-bold text-[30px] text-center md:text-start'>About Us</h1>
        <p className='text-center md:text-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quasi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae officia eaque dolor? Numquam odio tenetur nulla quam. Commodi quo blanditiis modi iste similique ad iusto laborum laudantium. Laborum, veniam?</p>
        <button className='px-3 py-2 border-2 border-[#1E1E1E] hover:border-none hover:text-white hover:bg-[#FF7D05] hover:scale-105 transition-transform ease-in-out duration-300'>Read More</button>
    </div>

   
    
  </div>
  )
}
