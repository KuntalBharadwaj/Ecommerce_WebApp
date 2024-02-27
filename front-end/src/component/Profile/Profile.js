import { Grid } from '@mui/material'
import React from 'react'
import ProfileSide from './ProfileSide'
import { useState } from 'react'

function Profile() {

    const [isActive, setIsActive] = useState("Account")

    return (
        <div>
            <Grid container spacing={5} className='flex justify-center'>
                <Grid item xs={3} marginTop={2}>
                    <ProfileSide section={{ isActive, setIsActive }} />
                </Grid>
                <Grid item xs={6} marginTop={2}>
                    <div className=' rounded-sm shadow-md pl-10 bg-white min-h-[85vh] min'>
                        <div className='flex flex-col'>
                            <label className='mt-5'>Name</label>
                            <input type='text' name='username' className='mt-3 w-80 h-[50px] rounded-sm bg-slate-200'></input>
                            <label className='mt-5'>Current Password</label>
                            <input type='email' name='email' className='mt-3 w-80 h-[50px] bg-slate-200 rounded-sm'></input>
                            <label className='mt-5'>New Password</label>
                            <input type='password' name='password' className='mt-3 w-80 h-[50px] bg-slate-200 rounded-sm'></input>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile
