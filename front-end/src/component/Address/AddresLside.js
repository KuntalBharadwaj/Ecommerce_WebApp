import React from 'react'

function AddresLside(props) {
  return (
    <div className='p-4'>
      <ul>
        <hr className='mb-4'></hr>

        {(!props.address.length) ?
          <div className='flex justify-start items-centre'>
            <p className=' text-lg'>We havn't any Saved Address</p>
          </div>: ""
        }
        {console.log(props.address)}
        {props.address.map(e => {
          return (<li>
            <div>
              <h1 className=' font-semibold mb-2'>Name</h1>
              <p>Bangaon, Assam , 781375</p>
              <h1 className='font-semibold mt-2'>Phone No.</h1>
              <p>77777777</p>
              <button className='px-4 py-2 my-2 rounded-sm bg-slate-300'>Deliver Here</button>
            </div>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default AddresLside
