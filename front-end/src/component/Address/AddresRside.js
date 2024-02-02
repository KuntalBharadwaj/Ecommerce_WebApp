import React from 'react'

function AddresRside() {
  return (
    <div>
      <form className='flex items-center flex-col p-2'>
        <div className='flex w-full m-2 mb-4'>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full mr-1 p-2 rounded-sm' placeholder='First Name'></input>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full ml-1 p-2 rounded-sm' placeholder='Last Name'></input>
        </div>
        <textarea className='bg-slate-200 text-black font-semibold h-[80px] w-full mb-4 p-2 rounded-sm' placeholder='Address'></textarea>
        <div className='flex w-full m-2 mb-4'>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full mr-1 p-2 rounded-sm' placeholder='City'></input>
          <input type='number' className=' bg-slate-200 text-black font-semibold h-[50px] w-full ml-1 p-2 rounded-sm' placeholder='Pincode'></input>
        </div>
      </form>
      <button className='px-4 py-2 mx-2 my-2 rounded-sm bg-slate-300'>Deliver Here</button>
    </div>
  )
}

export default AddresRside
