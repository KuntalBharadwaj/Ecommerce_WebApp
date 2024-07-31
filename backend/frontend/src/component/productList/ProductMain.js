import React from 'react'
import Items from './items/items'
import Sidebar from './sidebar/Sidebar'

function ProductMain() {
  return (
    <>
    <div className='lg:flex lg:justify-between bg-black-100 p-2'>
      <Sidebar/>
      <Items/>
    </div>
    </>
  )
}

export default ProductMain
