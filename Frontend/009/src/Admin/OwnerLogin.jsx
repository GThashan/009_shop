import React from 'react'

export default function OwnerLogin() {
  return (
    <div className='flex align-center items-center justify-center h-[100vh]'>
        <div className=' bg-slate-800 w-[500px] p-5 rounded-md'>
            <h1 className='font-bold text-[30px] text-center text-white'>Admin Login</h1>
            <form action="" className='flex flex-col text-white'>
                <label htmlFor="" className='uppercase'>Username</label>
                <input className='outline-none p-2 my-2' type="text" placeholder='Enter User name' />
                <label htmlFor="" className='uppercase'>Password</label>
                <input className='outline-none p-2 my-2' type="text" placeholder='Enter password' />
                <label htmlFor="" className='uppercase'>Type Of Owner</label>
                <select name="" id="" className='text-black outline-none p-2 my-2'>
                <option value="">Admin</option>
                <option value="">Kitchen</option>
                </select>
                <button className='p-2 bg-gray-400 text-white my-3 hover:bg-slate-600'>Login</button>
              
            </form>

        </div>
      
    </div>
  )
}
