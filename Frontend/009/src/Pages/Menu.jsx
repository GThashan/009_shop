import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Items } from '../assets/Item'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <Navbar/>
        <Link to='/select'>
        <div className='grid grid-cols-4 gap-4 px-8 py-10  mt-[50px]'>
        {Items.map((item,index)=>(
            <div key={index}>  <img className='cursor-pointer hover:animate-bounce ' src={item.url} alt="" /></div>
          
        ))}
      
    </div>

        </Link>
       
        <Footer/>
    </div>
  )
}

export default Menu
