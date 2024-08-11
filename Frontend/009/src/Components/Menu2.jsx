import React from 'react'
import { Rice } from '../assets/Item'

export default function Menu2() {
  return (
    <div className='px-8 py-8 mt-10'>
    <h1 className='text-center font-bold text-[50px] uppercase text-slate-800'>FUSION SUBMARINE</h1>
    <p className='text-center text-[15px] font-semibold py-5 text-slate-600'>Dive into a culinary adventure with our fusion submarine! Stacked with the freshest ingredients and bursting with flavors, every bite takes you on a journey beneath layers of deliciousness. Get ready to submerge your cravings!</p>

    <div className='grid grid-cols-4 mx-auto gap-4'>
   {Rice.map((rice,index)=>(
        <div key={index} className='shadow uppercase font-bold cursor-pointer'>
        <img src={rice.url} alt="" />
        <p className='text-gray-500'>__FUSION SUBMARINE</p>
        <h1>{rice.name}</h1>
        <h1 className='text-red-800 text-[20px]'>{rice.price}</h1>

      </div>
   ))}
      

    </div>
  </div>
  )
}

