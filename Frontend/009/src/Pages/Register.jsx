import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Register() {
  return (
    <div>
      <Navbar/>
      <div className='w-[500px] p-10 bg-slate-500 mx-auto my-6'>
        <h1 className='text-center font-bold text-[30px]'>Register</h1>
        <form action="" className='flex flex-col mx-auto items-center justify-center'>
            <label htmlFor="">Enter Username</label>
            <input type="text" name='name' placeholder='Username' />
            <label htmlFor="">Enter Email Address</label>
            <input type="emai" name='email' placeholder='Email address' />
            <label htmlFor="">Enter Password</label>
            <input type="text" name='password' placeholder='Password' />
            <button>Register</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
