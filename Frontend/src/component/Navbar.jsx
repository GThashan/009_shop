import React, { useState } from "react";
import logo from "../assets/logo1.png";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";




export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white flex flex-row justify-between items-center px-5 border-b border-b-1 mb-8">
   
      <img src={logo} alt="Logo" className="w-[80px]" />

     
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } text-right md:block absolute md:static top-16 left-0 w-full md:w-auto bg-[#121617] md:bg-transparent shadow-md md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-5 p-4 md:p-0">
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">Home</li>
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">Menu</li>
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">About Us</li>
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">Blog</li>
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">Contact</li>
          <li className="hover:underline cursor-pointer py-2 md:py-0 font-bold">My Account</li>
        </ul>
      </nav>

     
      <div className="flex flex-row items-center gap-3">
    
        <FaShoppingCart
          className="text-[20px] cursor-pointer hover:text-[#F58D38]"
          title="Cart"
        />
      
   
            <FaSearch
            className="text-[20px] cursor-pointer hover:text-[#F58D38]"
            title="Search" 
          />
        
        
    
        <div
          className="text-[20px] cursor-pointer hover:text-[#F58D38] md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
