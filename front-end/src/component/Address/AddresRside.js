import React, { useState } from 'react'
import axios from 'axios'

function AddresRside(props) {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [phoneno, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState()

  const handleDeliver = async()=>{

    const addressObj = {
      fname: fname,
      lname: lname,
      phoneno: phoneno,
      city: city,
      pincode: pincode
    }

    const response = await axios.post("http://127.0.0.1:4000/api/user/checkout",{addressObj},
    {withCredentials:true})

    if(response.data.success) {
      let addresdata = props.address
      addresdata.push(response.data.data)
      props.setaddress(addresdata)
    }
  }

  return (
    <div>
      <form className='flex items-center flex-col p-2'>
        <div className='flex w-full m-2 mb-4'>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full mr-1 p-2 rounded-sm' placeholder='First Name' name="fname" onChange={(e)=>{setFname(e.target.value)}}></input>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full ml-1 p-2 rounded-sm' placeholder='Last Name' name='lname' onChange={(e)=>{setLname(e.target.value)}}></input>
        </div>
        <div className='flex w-full m-2 mb-4'>
          <input type='text' className=' bg-slate-200 text-black font-semibold h-[50px] w-full mr-1 p-2 rounded-sm' placeholder='City/Village' name='city' onChange={(e)=>{setCity(e.target.value)}}></input>
          <input type='number' className=' bg-slate-200 text-black font-semibold h-[50px] w-full ml-1 p-2 rounded-sm' placeholder='Pincode' name='pincode' onChange={(e)=>{setPincode(e.target.value)}}></input>
        </div>
        <input type='number' className=' bg-slate-200 text-black font-semibold h-[50px] w-full ml-1 p-2 rounded-sm' placeholder='Phone No.' name='phoneno' onChange={(e)=>{setPhone(e.target.value)}}></input>
      </form>
      <button className='px-4 py-2 mx-2 my-2 rounded-sm bg-slate-300' onClick={handleDeliver}>Deliver Here</button>
    </div>
  )
}

export default AddresRside
