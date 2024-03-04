import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [ userName , setUsername] = useState("")
    const [isError, setIsError] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const data = await axios.post("http://127.0.0.1:4000/api/register", {
            UserName: userName,
            email : email,
            Password: password
        })

        if(data.data.success === true) navigate('/login')
        else {
            setIsError(data.data.message)
        }
    }


    return (
        <div className='flex items-center justify-center h-[91vh]'>
        <div className='flex flex-col justify-center items-center relative  w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white'>
            <h1 className='absolute top-5 text-4xl font-bold font-sans'>Register</h1>
            <div className='flex flex-col items-center justify-center'>
            <input type='text' name='username' placeholder='Enter your Name' required onChange={(e)=>{setUsername(e.target.value)}} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
            <input type='email' name='email' placeholder='Enter your email' required onChange={(e)=>{setEmail(e.target.value)}} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
            <input type='password' name='password' placeholder='Enter your Password' required onChange={(e)=>{setPassword(e.target.value)}} className='pl-2 w-[300px] h-[45px] my-3 bg-slate-300'></input>
            <button type='submit' className='w-[300px] h-[45px] my-2 bg-purple-500' onClick={handleSubmit}>Submit</button>
            
            {(isError !== "")?
            <div className='w-[300px] h-10 bg-white border-2 shadow-md border-red-300 mt-5 text-sm font-semibold text-red-600 flex items-center justify-center'>{isError}</div>:""}
            </div>
            
        </div>
        </div>
      )
}

export default Register
