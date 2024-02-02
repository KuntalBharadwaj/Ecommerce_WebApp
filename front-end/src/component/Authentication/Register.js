import React from 'react'

function Register() {
    return (
        <div className='flex items-center justify-center h-[91vh]'>
        <div className='flex flex-col justify-center items-center relative  w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white'>
            <h1 className='absolute top-5 text-4xl font-bold font-sans'>Register</h1>
            <div className='flex flex-col items-center justify-center'>
            <input type='email' placeholder='Enter your email' className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
            <input type='password' placeholder='Enter your Password' className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
            <button type='submit' className='w-[300px] h-[45px] my-2 bg-purple-500'>Submit</button>
            </div>
        </div>
        </div>
      )
}

export default Register
