import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { imglog } from '../assets/Item';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={imglog} className="h-[50px] w-[50px]" alt="009 Logo" />
      
        <button 
          onClick={handleToggle} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" 
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg 
            className="w-5 h-5 text-black" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 17 14"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div 
          className={`w-full md:w-auto ${isNavOpen ? 'block' : 'hidden'} md:block`} 
          id="navbar-default"
        >
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  text-[20px]">
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/menu">Menu</Link>
            </li>
            <li>
             <Link to="/about">About Us</Link>
            </li>
            <li>
             <Link to="/about">Contact</Link>
            </li>
            <li>
             <Link to="/about">Blog</Link>
            </li>
            
            <li>
              <Link to='/register'>
                <FontAwesomeIcon icon={faUser} className='cursor-pointer' />
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} className='cursor-pointer' />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
