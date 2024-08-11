import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='flex justify-between px-8 py-2 items-center bg-white shadow-sm'>
      <img 
      className='w-[80px] h-[80px]'
      src="data:image/jpeg;base64,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" alt="" />
      <ul className='flex font-bold gap-4 text-[20px] uppercase'>
        <li className='cursor-pointer hover:underline'> <Link to='/'>Home</Link></li>
        <li className='cursor-pointer hover:underline'><Link to='/menu'>Menu</Link></li>
        <li className='cursor-pointer hover:underline'>About Us</li>
        <li className='cursor-pointer hover:underline'>Blog</li>
        <li className='cursor-pointer hover:underline'>Contact Us</li>
      </ul>
      <div className='flex gap-4 font-bold text-[20px]'>
      <Link to='/register'><FontAwesomeIcon icon={faUser}  className='cursor-pointer'/></Link>
      <FontAwesomeIcon icon={faShoppingCart}  className='cursor-pointer'/>
      </div>
    
    </div>
  )
}
