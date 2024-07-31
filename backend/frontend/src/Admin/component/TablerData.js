import React from 'react'

function TablerData(props) {
  return (
    <div>
        <table>
            <tbody>
            <tr className='flex justify-start mb-3 border-b p-1 border-slate-400'>
                <td className='w-[150px] sm:w-[200px] text-sm sm:text-base'>Customer Name:</td>
                <td className='text-sm sm:text-base'>{props.Data.UserName}</td>
            </tr>
            <tr className='flex justify-start mb-3 border-b p-1 border-slate-400'>
                <td className='w-[150px] sm:w-[200px] text-sm sm:text-base'>Product Quantity:</td>
                <td className='text-sm sm:text-base'>{props.Data.product.length}</td>
            </tr>
            <tr className=' flex justify-start mb-3 border-b p-1 border-slate-400'>
                <td className='w-[150px] sm:w-[200px] text-sm sm:text-base'>Payment id:</td>
                <td className='text-sm sm:text-base'>{props.Data.razorpay_payment_id}</td>
            </tr>
            <tr className=' flex justify-start mb-3 border-b p-1 border-slate-400'>
                <td className='w-[150px] sm:w-[200px] text-sm sm:text-base'>Order id: </td>
                <td className='text-sm sm:text-base'>{props.Data.razorpay_order_id}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TablerData
