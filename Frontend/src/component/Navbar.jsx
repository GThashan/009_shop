import React from 'react'

export default function Navbar() {
  return (
    <div className='text-white flex flex-row justify-between items-center px-10 pt-8'>
        <span>009</span>
      <nav>
        <ul className='flex flex-row items-center gap-5'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>Menu</li>
            <li className='hover:underline cursor-pointer'>Service</li>
            <li className='hover:underline cursor-pointer'>Contact</li>
        </ul>
      </nav>
      <button className='bg-[#F58D38] text-white font-medium px-3 py-1 rounded-full hover:bg-[#DFBD20] cursor-pointer'>Support</button>
    </div>
  )
}
