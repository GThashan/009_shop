import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Menu from '../component/Menu'
import Service from '../component/Service'
// import Blog from '../component/Blog'

export default function Home() {
  return (
    <>
    <div className="relative">
      <Navbar/>
      <Header/>
    
    </div>
    <div>
        <Menu/>
        <Service/>
        {/* <Blog/> */}
    </div>
    </>
  )
}
