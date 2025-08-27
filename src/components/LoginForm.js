import React, { useState } from 'react'

function LoginForm() {
    const [isSignIN, setIsSignIn] = useState(true)
    const handelSignUp = ()=>{
        setIsSignIn(!isSignIN)
    }
  return (
    <div className=' bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-80 w-2/6'>
      <form className='text-white m-8 p-8  '>
        <h1 className=' font-bold text-4xl py-4'>{isSignIN?"Sign In":"Sign Up"}</h1>
        {!isSignIN && <input type='text' placeholder='Name' className='p-4 my-2 w-full bg-slate-800 rounded-lg' />}
        <input type='text' placeholder='Email' className='p-4 my-2 w-full bg-slate-800 rounded-lg' /><br></br>
        <input type='password' placeholder='password'  className='p-4 my-2 w-full bg-slate-800 rounded-lg' />
        <br></br>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg '>{isSignIN?"Sign In":"Sign Up"}</button>
        <p className='cursor-pointer' onClick={handelSignUp}>{isSignIN?"New to Netflix?Sign up now.":"sign in now"}</p>
      </form>
    </div>
  )
}

export default LoginForm
