import React from 'react'
import { productInDetails } from "../ItemDataSet";
import leaf1 from "../assets/leaf1.png";
import Navbar from '../component/Navbar';

export default function MainMenu() {
  return (
    <div>
        <Navbar/>
         <div className="py-4 bg-[url('https://i.etsystatic.com/18975710/r/il/07267a/2234476041/il_300x300.2234476041_lnrv.jpg')] bg-no-repeat bg-cover grid grid-cols-2 px-2 gap-4 md:grid-cols-4">
        {productInDetails.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-black flex flex-col items-center justify-center border-2 border-[#FF7D05] hover:scale-105 transition-transform mt-3 p-2 relative rounded cursor-pointer"
            >
              <div className="bg-red-600 absolute w-[40px] h-[50px] top-0 left-0 text-white">
                {product.id}
              </div>
              <h3 className="text-white">{product.title}</h3>
              <img src={product.img} alt={product.title} />
              <p className='text-white'>{product.info}</p>
             
              <div className="flex flex-row items-center justify-between w-full">

              <p className='text-white text-xl'>{product.price}</p>
                <button  className="bg-red-800 px-2 py-1 rounded my-4 text-white">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
  
      
    </div>
  )
}
