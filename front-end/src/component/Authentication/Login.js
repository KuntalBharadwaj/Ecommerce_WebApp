import React from 'react'

function Login() {

const OnSubmit = (e)=>{
    e.preventDefault()
    let { email , password } = document.form[0]
    console.log(email)
    console.log(password)
}


  return (
    <div className='flex items-center justify-center h-[91vh]'>
    <div className='flex flex-col justify-center items-center relative w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white'>
        <h1 className='absolute top-5 text-3xl font-semibold font-sans'>Login</h1>
        <form className='flex flex-col items-center justify-center' onSubmit={OnSubmit}>
        <input type='email' placeholder='Enter your email' className='pl-2 w-[250px] md:w-[300px] h-[45px] my-3 bg-slate-300' name='email' id='email' required></input>
        <input type='password' placeholder='Enter your Password' className='pl-2 w-[250px] md:w-[300px] h-[45px] my-3 bg-slate-300' name="password" id='password' required></input>
        <button className='w-[300px] h-[45px] my-2 bg-purple-500'>Submit</button>   
        </form>
    </div>
    </div>
  )
}

export default Login
