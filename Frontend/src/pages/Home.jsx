import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Menu from '../component/Menu'
import Service from '../component/Service'
import About from '../component/About'
import Footer from '../component/Footer'
// import Blog from '../component/Blog'

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <About/>
    
    </div>
    <div>
        
        <Service/>
        <Menu/>
        <Footer/>
    </div>
    </>
  )
}
