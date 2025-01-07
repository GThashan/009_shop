import React from 'react'
import Navbar from '../component/Navbar'
import { productInDetails } from "../ItemDataSet";

export default function Card() {
    return (
        <>
        <Navbar/>
         <div>
        <h1 className="text-center font-bold text-[30px]">Your Cart</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border border-gray-300">Image</th>
                <th className="p-4 border border-gray-300">Product Name</th>
                <th className="p-4 border border-gray-300">Price</th>
                <th className="p-4 border border-gray-300">Quantity</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productInDetails.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-300">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-4 border border-gray-300">{product.title}</td>
                  <td className="p-4 border border-gray-300">{product.price}</td>
                  <td className="p-4 border border-gray-300">
                    <input
                      type="number"
                      min="1"
                      value={product.count}
                      className="w-16 border border-gray-300 rounded p-1 text-center"
                      onChange={(e) => onQuantityChange(product.id, e.target.value)}
                    />
                  </td>
                  <td className="p-4 border border-gray-300">
                    <button
                      onClick={() => onDelete(product.id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        
        
        </>
     
    );
  }
  