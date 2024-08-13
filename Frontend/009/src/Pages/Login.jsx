import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
    <Navbar/>
    <div className='max-w-[500px] p-10  border-1 shadow-md mx-auto  my-5'>
      <h1 className='text-center font-bold text-[40px] text-slate-800 uppercase'>Login</h1>
      <form action="" className='flex flex-col mx-auto  justify-center'>
          <label htmlFor="" className='my-3 text-[18px] font-semibold'>Enter Username</label>
          <input type="text" name='name' placeholder='Username'  className='p-2 rounded-sm outline-none border' />
          
          <label htmlFor="" className='my-3 text-[18px] font-semibold'>Enter Password</label>
          <input type="text" name='password' placeholder='Password'  className='p-2 rounded-sm outline-none border'/>
          
          <button className='px-3 py-4 bg-slate-600 hover:bg-slate-800 text-white my-3'>Register</button>
          <p>Already You have an account ? <Link to='/register' className='text-blue-900'>Register</Link></p>
      </form>
    </div>
    <Footer/>
  </div>
  )
}
