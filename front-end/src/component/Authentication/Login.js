import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'
import { useNavigate, useLocation } from 'react-router-dom'


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState("");

  const { setIsLogin, setUser } = useContext(LoginContext)
  const navigate = useNavigate()

  // for dynamic redirect
  const location = useLocation();
  const from = location.state || '/'

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const data = await axios.post("http://127.0.0.1:4000/api/login", {
        email: email,
        password: password
      },{withCredentials: true})

      if (data.data.success) {
        setIsLogin(true)
        await setUser(data.data.user)
        navigate(`${from}`)
      }

      else {
        setIsError(data.data.message)

        setTimeout(() => {
          setIsError("")
        }, 4000);
      }

    } catch (error) {
      setIsError("Some Internal Error Occur")

    }

  }

  return (
    <div className='flex items-center justify-center h-[91vh]'>
      <div className='flex flex-col justify-center items-center relative  w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white '>
        <h1 className='absolute top-5 text-4xl font-bold font-sans'>Login</h1>
        <div className='flex flex-col items-center justify-center'>
          <input type='email' name='email' placeholder='Enter your email' required onChange={(e) => { setEmail(e.target.value) }} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
          <input type='password' name='password' placeholder='Enter your Password' required onChange={(e) => { setPassword(e.target.value) }} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
          <button type='submit' className='w-[300px] h-[45px] my-2 bg-purple-500' onClick={handleSubmit}>Submit</button>
        </div>
        {(isError !== "")?
      <div className='w-[300px] h-10 bg-white border-2 shadow-md border-red-300 mt-5 text-sm font-semibold text-red-600 flex items-center justify-center'>{isError}</div>:""}
      </div>
    </div>
  )
}

export default Login
