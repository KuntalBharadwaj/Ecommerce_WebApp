import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function AddresLside(props) {

  const { handlePayment } = useContext(ProductContext)

  const handleClick = ()=>{
    handlePayment();
  }


  return (
    <div className='p-4'>
      <ul>
        <hr className='mb-4'></hr>

        {(!props.address.length) ?
          <div className='flex justify-start items-centre'>
            <p className=' text-lg'>We havn't any Saved Address</p>
          </div>: ""
        }
        {props.address.map((e,i) => {
          return (<li key={i} className='my-10'>
            <div>
              <h1 className=' font-semibold mb-2'>{`${e.fname} ${e.lname}`}</h1>
              <p>{`${e.city} ${e.pincode}`}</p>
              <h1 className='font-semibold mt-2'>Phone No. <span className=' font-normal'>{`${e.phoneno}`}</span> </h1>
              <button className='px-4 py-2 my-2 rounded-sm bg-slate-300' onClick={handleClick}>Deliver Here</button>
            </div>
            <hr className='mb-4'></hr>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default AddresLside
