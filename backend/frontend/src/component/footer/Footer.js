import { Copyright, Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='pt-10 pl-5 pr-8 text-white bg-black flex flex-col justify-between'>
                <div className='flex flex-col md:flex-row justify-between align-middle'>
                    <div className='md:ml-10 mb-6'>
                        <h1 className='text-xl font-semibold md:mb-4 mb-2 text-center'>Company</h1>
                        <ul className='flex flex-col align-middle'>
                            <li className='flex justify-center'><Link to="/">About Us</Link></li>
                            <li className='flex justify-center'><Link to="/">blog</Link></li>
                            <li className='flex justify-center'><Link to="/">Jobs</Link></li>
                            <li className='flex justify-center'><Link to="/">Partners</Link></li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <h1 className=' text-xl font-semibold md:mb-4 mb-2 text-center'>Connect with us</h1>
                        <ul >
                            <li className='flex justify-center'><Link to="/">facebook &nbsp;<Facebook /></Link></li>
                            <li className='flex justify-center'><Link to="/">Instagram &nbsp;<Instagram /></Link></li>
                            <li className='flex justify-center'><Link to="/">Twitter &nbsp;<Twitter /></Link></li>
                        </ul>
                    </div>
                    <div className='mb-6'>
                        <h1 className='text-xl font-semibold md:mb-4 mb-2 text-center'>Policy</h1>
                        <ul>
                            <li className='flex justify-center'><Link to="/">Privacy</Link></li>
                            <li className='flex justify-center'><Link to="/">Terms</Link></li>
                        </ul>
                    </div>
                    <div className='md:mr-10 mb-6'>
                        <h1 className='text-xl font-semibold md:mb-4 mb-2 text-center'>Documentation</h1>
                        <ul>
                            <li className='flex justify-center'><Link to="/">Guides</Link></li>
                            <li className='flex justify-center'><Link to="/">API</Link></li>
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
