import { Copyright, Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
    return (
        <div>
            <div className='pt-10 pl-5 pr-8 text-white bg-black flex flex-col justify-between'>
                <div className='flex justify-between align-middle'>
                    <div className='ml-10 mb-4'>
                        <h1 className='text-xl font-semibold mb-8'>Company</h1>
                        <ul className='flex flex-col align-middle'>
                            <li className='flex justify-center'>About Us</li>
                            <li className='flex justify-center'>blog</li>
                            <li className='flex justify-center'>Jobs</li>
                            <li className='flex justify-center'>Partners</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h1 className=' text-xl font-semibold mb-8'>Connect with us</h1>
                        <ul >
                            <li className='flex justify-center'>facebook &nbsp;<Facebook /></li>
                            <li className='flex justify-center'>Instagram &nbsp;<Instagram /></li>
                            <li className='flex justify-center'>Twitter &nbsp;<Twitter /></li>
                        </ul>
                    </div>
                    <div className=' mb-4'>
                        <h1 className='text-xl font-semibold mb-8'>Policy</h1>
                        <ul>
                            <li className='flex justify-center'>Privacy</li>
                            <li className='flex justify-center'>Terms</li>
                        </ul>
                    </div>
                    <div className='mr-10 mb-4'>
                        <h1 className='text-xl font-semibold mb-8'>Documentation</h1>
                        <ul>
                            <li className='flex justify-center'>Guides</li>
                            <li className='flex justify-center'>API</li>
                        </ul>
                    </div>
                </div>

                <div className='mb-4 flex justify-center align-middle'>
                    <p><Copyright/> 2023 My Company All right reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
