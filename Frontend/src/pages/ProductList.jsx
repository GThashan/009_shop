import React from "react";
import { productInDetails } from "../ItemDataSet";
import Navbar from "../component/Navbar";
import leaf1 from "../assets/leaf1.png";

export default function ProductList() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 px-2 gap-4 md:grid-cols-4">
        {productInDetails.map((product, index) => {
          return (
            <div
              key={index}
              className="bg-[#333333] flex flex-col items-center justify-center text-white p-2 relative rounded cursor-pointer"
            >
              <img src={leaf1}  className="absolute w-[80px] top-3 left-0"/>
              <h3>{product.title}</h3>
              <img src={product.img} alt={product.title} />
              <p>{product.info}</p>
              <div className="flex flex-row items-center justify-between w-full">
                <button className="bg-green-800 px-2 py-1 rounded my-4 text-white">View</button>

                <button  className="bg-red-800 px-2 py-1 rounded my-4 text-white">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      ))
    </div>
  );
}
