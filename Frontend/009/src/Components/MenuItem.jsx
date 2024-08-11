import React from 'react'
import Items from '../assets/Item'

export default function MenuItem() {
  return (
    <div className='grid grid-cols-6 gap-4 px-8 py-10 shadow-md mt-[50px]'>
        {Items.map((item,index)=>(
            <div key={index}>  <img className='cursor-pointer hover:animate-bounce ' src={item.url} alt="" /></div>
          
        ))}
      
    </div>
  )
}
