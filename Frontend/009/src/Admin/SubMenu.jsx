import React from 'react'
import {Rice} from '../assets/Item'

export default function SubMenu() {
  return (
    <div className="relative overflow-x-auto my-5 px-8">
    <div className='flex flex-row justify-between align-center mb-4'>
    <h1 className='font-bold text-[20px] py-5'>Main Menu Details</h1>
    <button className='my-3 px-3 rounded-md bg-blue-950 text-white text-[15px] font-bold'>Add New</button>
  
    </div>
   
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Item Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Item Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      Item Price
                  </th>
                 
                  <th scope="col" className="px-6 py-3">
                      Action
                  </th>
              </tr>
          </thead>
         
          <tbody>
            {Rice.map((item,index)=>{
              return(
                
                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img src={item.url} alt="" className='w-[80px] h-[80px]' />
                  </th>
                  <td className="px-6 py-4">
                      {item.name}
                  </td>
                  <td className="px-6 py-4">
                      {item.price}
                  </td>
                  
                  <td className="px-6 py-4 ">
                  
                      <a href="#" className="font-medium text-green-800 dark:text-green-600 hover:underline">Edit</a>
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-3">View</a>
                      <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Delete</a>
                  </td>
              </tr>
             
              )
            })}
             </tbody>
              
          
      </table>
  </div>
  
  
  )
}
