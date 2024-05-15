import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { LoginContext } from '../../component/context/LoginContext'
import { Circle } from '@mui/icons-material'

const obj = [{
    "S_id": 1,
    "Sname": "abc",
    "brand": "Xyz",
    "productcatagory": "abc",
    "title": "Xyz",
},
{
    "S_id": 2,
    "Sname": "abc2",
    "brand": "Xyz2",
    "productcatagory": "abc2",
    "title": "Xyz2",
    "price": 199
}]

function Overview() {

    const [IsopenDoc,setIsopenDoc] = useState(false)
    const [openDoc, setOpenDoc] = useState({})
    const [sellerProduct,setSellerProduct] = useState([])

    const {user} = useContext(LoginContext)

    const handleSellerReq = (e)=>{
        if(e==null) {
            setIsopenDoc(false)
            setOpenDoc(null)
        }
        else {
        setIsopenDoc(true)
        setOpenDoc(e)
        }
    }

    const fetchData = async ()=>{
        try {
            const response = await axios.get(`http://127.0.0.1:4000/api/seller/getProduct/${user._id}`)
            if(response.data.success) setSellerProduct(response.data.data)
            console.log(sellerProduct)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='relative flex flex-col justify-center'>
      <div className="p-4 text-2xl font-bold">All Products</div>
        <div className=''>
            <div className='flex'>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Product</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Brand Name</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Catagory</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Approval</h1></div>
            </div>
            {sellerProduct.map((e,i)=>{
                return ( 
                    <div onClick={()=>handleSellerReq(e)} className='flex mt-4 cursor-pointer bg-slate-200 hover:bg-[#e2d2f9] pt-1 pb-1 mb-2' key={i}>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'>{e.Sname}</div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'>{e.brand}</div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'>{e.title}</div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'>{(e.status === "true")?<Circle style={{color: "green"}}/>:<Circle style={{color: "red"}}/>}</div>
                    </div>
                )
            })}
        </div>

        {(IsopenDoc)?<div className='absolute top-0 z-10 w-full h-full bg-slate-200 shadow-2xl'>
            <div className='flex flex-col items-center justify-center'>
            <p>{openDoc.Sname}</p>
            <p>{openDoc.brand}</p>
            <p>{openDoc.productcatagory}</p>
            <p>₹{openDoc.price}</p>
            <button onClick={()=>handleSellerReq(null)}>{`GoBack->>`}</button>
            </div>
        </div>:""}
    </div>
  )
}

export default Overview
