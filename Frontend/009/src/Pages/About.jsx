import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
    <Navbar/>
    <div className='h-[100vh] bg-[url("https://i0.wp.com/cafe007.lk/wp-content/uploads/2021/04/DSC_0903-scaled.jpg?ssl=1")]
     bg-cover bg-no-repeat flex items-center justify-center
    '>
    <div className='flex flex-col items-center'>
        <h1 className='text-white font-bold uppercase text-[60px]'>About Our Cafe</h1>
        <p className='text-white font-bold text-[35px]'>Fresh | Fast | Best</p>
        </div>
    </div>
        
        

  
    <Footer/>
    </>
  )
}
