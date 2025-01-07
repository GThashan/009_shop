import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-white">
      <div className="text-gray-900 flex justify-between items-center px-5 py-4 border-b">
      
        <Link to="/">
          <div className="w-20">
           
            <div className="h-8 w-20 bg-gray-200 rounded" />
          </div>
        </Link>

        
        <nav className={`
          ${isMenuOpen ? 'flex' : 'hidden'}
          md:flex
          absolute md:relative
          top-full left-0
          w-full md:w-auto
          flex-col md:flex-row
          bg-white md:bg-transparent
          shadow-lg md:shadow-none
          z-50
        `}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-8 p-4 md:p-0">
            {['Home', 'Menu', 'About Us', 'Contact', 'My Account'].map((item) => (
              <li key={item} className="py-2 md:py-0">
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="font-bold hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

       
        <div className="flex items-center gap-6">
          <FaShoppingCart 
            className="text-xl cursor-pointer hover:text-orange-500 transition-colors"
            title="Cart"
          />
          <FaSearch 
            className="text-xl cursor-pointer hover:text-orange-500 transition-colors"
            title="Search"
          />
          <button
            className="text-xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;