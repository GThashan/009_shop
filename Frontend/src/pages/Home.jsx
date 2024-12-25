import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Menu from '../component/Menu'

export default function Home() {
  return (
    <>
    <div className="bg-[url('https://wallpapercave.com/wp/wp9506465.jpg')] bg-no-repeat bg-cover shadow-b-lg">
      <Navbar/>
      <Header/>
    
    </div>
    <div>
        <Menu/>
    </div>
    </>
  )
}
