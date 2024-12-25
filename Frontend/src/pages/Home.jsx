import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Menu from '../component/Menu'

export default function Home() {
  return (
    <>
    <div className='bg-fixed'>
      <Navbar/>
      <Header/>
    
    </div>
    <div>
        <Menu/>
    </div>
    </>
  )
}
