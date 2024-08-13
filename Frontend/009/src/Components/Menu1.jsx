import React from 'react'
import { Rice } from '../assets/Item'
export default function Menu1() {
  return (
    <div className='px-8 py-8 mt-10'>
      <h1 className='text-center font-bold text-[50px] uppercase text-slate-800'>pop rice</h1>
      <p className='text-center text-[15px] font-semibold py-5 text-slate-600'>Savor the pop with every bite! Our pop rice is a delightful fusion of crunch and flavor, making each grain a mini explosion of taste. Dive into this unique gastronomic experience and let your taste buds dance with joy!</p>

      <div className='lg:grid grid-cols-4 mx-auto gap-4'>
     {Rice.map((rice,index)=>(
          <div key={index} className='shadow uppercase font-bold cursor-pointer'>
          <img src={rice.url} alt="" />
          <p className='text-gray-500'>__POP RICE</p>
          <h1>{rice.name}</h1>
          <h1 className='text-red-800 text-[20px]'>{rice.price}</h1>

        </div>
     ))}
        

      </div>
    </div>
  )
}
