import React from 'react'
import { useState , useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setIsLogin, setUser } = useContext(LoginContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("http://127.0.0.1:4000/api/login", {
      email: email,
      Password: password
    })

    if(data.data.message === "true") {
      setIsLogin(true)
      await setUser(data.data.user)
    }
    else {
      console.log("false")
      console.log(data)
    }
  }

  return (
    <div className='flex items-center justify-center h-[91vh]'>
      <div className='flex flex-col justify-center items-center relative  w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white'>
        <h1 className='absolute top-5 text-4xl font-bold font-sans'>Login</h1>
        <div className='flex flex-col items-center justify-center'>
          <input type='email' name='email' placeholder='Enter your email' required onChange={(e) => { setEmail(e.target.value) }} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
          <input type='password' name='password' placeholder='Enter your Password' required onChange={(e) => { setPassword(e.target.value) }} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
          <button type='submit' className='w-[300px] h-[45px] my-2 bg-purple-500' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
