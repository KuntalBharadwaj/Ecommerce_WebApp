import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import ProfileSide from './ProfileSide'
import { useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'
// import Cookies from 'js-cookie'

function Profile() {

    const { user, setUser } = useContext(LoginContext)

    const [ isActive, setIsActive] = useState("Account")
    const [ isError, setIsError ] = useState("")
    const [ isSuccess, setIsSuccess ] = useState("")

    const [email, setEmail] = useState(user.Email)
    const [username, setUsername] = useState(user.UserName)
    const [currpassword, setCurrPassword] = useState("")
    const [newpassword, setNewPassword] = useState("")

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const Acknowledge = await axios.patch("http://127.0.0.1:4000/api/user/updateDetails",
                {
                    _id: user._id,
                    username: username,
                    curremail: user.Email,
                    newemail: email,
                    currpassword: currpassword,
                    newpassword: newpassword
                },
                { withCredentials: true })

            if (Acknowledge.data.success) {
                setIsSuccess(Acknowledge.data.message)
                setUser(Acknowledge.data.user)

                setTimeout(() => {
                    setIsSuccess("")
                }, 4000);
            }
            else {
                setIsError(Acknowledge.data.message)

                setTimeout(() => {
                    setIsError("")
                }, 4000);
            }

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <Grid container spacing={5} className='flex justify-around'>
                <Grid item md={3} xs={12} marginTop={2}>
                    <ProfileSide section={{ isActive, setIsActive }} />
                </Grid>
                <Grid item md={6} xs={12} marginTop={2}>
                    <div className=' rounded-sm shadow-md pl-10 bg-white min-h-[85vh] min'>
                        <form className='flex flex-col'>
                            <label className='mt-5' >Name:</label>
                            <input type='text' name='username' required onChange={(e) => { setUsername(e.target.value) }} className='mt-3 w-80 h-[50px] rounded-sm bg-slate-200 p-4' value={username}></input>
                            <label className='mt-5'>Email:</label>
                            <input type='email' name='email' required onChange={(e) => { setEmail(e.target.value) }} className='mt-3 w-80 h-[50px] bg-slate-200 rounded-sm p-4' value={email}></input>
                            <label className='mt-5'>Current Password:</label>
                            <input type='password' name='currpass' required onChange={(e) => { setCurrPassword(e.target.value) }} className='mt-3 w-80 h-[50px] bg-slate-200 rounded-sm p-4'></input>
                            <label className='mt-5'>New Password</label>
                            <input type='password' name='newpass' required onChange={(e) => { setNewPassword(e.target.value) }} className='mt-3 w-80 h-[50px] bg-slate-200 rounded-sm p-4'></input>
                            <button type='submit' className='mt-3 w-[120px] h-[30px] bg-[#a893f6] rounded-sm' onClick={handleUpdate}>Update</button>
                            {(isError !== "") ?
                                <div className='w-[300px] h-10 bg-white border-2 shadow-sm border-red-300 mt-5 text-sm font-semibold text-red-600 flex items-center justify-center'>{isError}</div> : ""}
                            {(isSuccess !== "") ?
                                <div className='w-[300px] h-10 bg-white border-2 shadow-sm border-green-300 mt-5 text-sm font-semibold text-green-600 flex items-center justify-center'>{isSuccess}</div> : ""}
                        
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile
