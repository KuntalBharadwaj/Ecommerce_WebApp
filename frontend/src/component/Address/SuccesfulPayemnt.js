import React from 'react'
import { NavLink } from 'react-router-dom'

function SuccesfulPayment() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-[#cab5ff] w-full h-[100vh]'>
            <img src='/assets/payment/paymentimg.png' alt='not found'></img>
            <p className='font-bold text-white text-3xl'>Payment Successfull</p>
            <NavLink to={"/"} className="text-xl underline font-medium mt-4 text-white">Go To Home</NavLink>
        </div>
    </div>
  )
}

export default SuccesfulPayment
