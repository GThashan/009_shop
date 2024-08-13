import React from 'react'
import { Rice } from '../assets/Item'

export default function Menu3() {
  return (
    <div className='px-8 py-8 mt-10'>
    <h1 className='text-center font-bold text-[50px] uppercase text-slate-800'>DELUXE BURGER</h1>
    <p className='text-center text-[15px] font-semibold py-5 text-slate-600'>Explore our diverse burger range! With gourmet patties, fresh buns, and unique toppings, each bite is a taste adventure. Whether you’re classic or adventurous, we have the perfect burger for you. Experience the best in town!</p>

    <div className='lg:grid grid-cols-4 mx-auto gap-4'>
   {Rice.map((rice,index)=>(
        <div key={index} className='shadow uppercase font-bold cursor-pointer'>
        <img src={rice.url} alt="" />
        <p className='text-gray-500'>__DELUXE BURGER</p>
        <h1>{rice.name}</h1>
        <h1 className='text-red-800 text-[20px]'>{rice.price}</h1>

      </div>
   ))}
      

    </div>
  </div>
  )
}
