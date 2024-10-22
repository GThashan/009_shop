import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function Register() {
  const [userName, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpaswword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    // e.preventDefault();
    // if (!username | !email || !password) {
    //   alert("All feild are required");
    //   return;
    // }
    // if (username.length < 3) {
    //   alert("Username is very short");
    //   return;
    // }
    // if (password.length < 5) {
    //   alert("Password is weak");
    //   return;
    // }

    try {
      const userData = {
        userName,
        email,
        password,
      };
      console.log(userData)
      const res = await axios.post("http://localhost:3000/api/register", userData);
      if (res.data.status === 300) {
        console.log(res.data.message);
        navigate('/login');
      } else {
        console.log(res.data.message);
      
      }
    } catch (error) {
      alert("An error occurred during registration. Please try again.");
    }
  };
  
  return (
    <div>
      <Navbar/>
      <div className='max-w-[500px] p-10  border-1 shadow-md mx-auto  my-5'>
        <h1 className='text-center font-bold text-[40px] text-slate-800 uppercase'>Register</h1>
        <form action="" className='flex flex-col mx-auto  justify-center' onSubmit={handleRegister}>
            <label htmlFor="" className='my-3 text-[18px] font-semibold'>Enter Username</label>
            <input type="text" name='name' placeholder='Username'  className='p-2 rounded-sm outline-none border' onChange={(e)=>setUsername(e.target.value)} value={userName} />

            <label htmlFor="" className='my-3 text-[18px] font-semibold'>Enter Email Address</label>
            <input type="emai" name='email' placeholder='Email address'  className='p-2 rounded-sm outline-none border' onChange={(e)=>setemail(e.target.value)} value={email}/>

            <label htmlFor="" className='my-3 text-[18px] font-semibold'>Enter Password</label>
            <input type="text" name='password' placeholder='Password'  className='p-2 rounded-sm outline-none border' onChange={(e)=>setpaswword(e.target.value)} value={password}/>

            <span className='text-gray-500 text-[10px]'>our personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</span>
            <button className='px-3 py-4 bg-slate-600 hover:bg-slate-800 text-white my-3'>Register</button>
            <p>Don't You have an account <Link to='/login' className='text-blue-900'>Login</Link></p>
        </form>
      </div>
      <Footer/>
    </div>
  )
}
