import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

function SellerRequest() {
    const [IsopenDoc,setIsopenDoc] = useState(false)
    const [openDoc, setOpenDoc] = useState({})
    const [SellerReqPro, setSellerReqPro] = useState([])


    const fetchData = async()=>{
        const response = await axios.get("http://localhost:4000/api/admin/getSellerReq")
        if(response.data) setSellerReqPro(response.data.data)
        console.log(response.data.data)
    }

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


    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='relative flex flex-col justify-center'>
        <div className=''>
            <div className='flex'>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Seller_Name</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Brand Name</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Product Name</h1></div>
                <div className='flex justify-center w-[200px] lg:w-[300px]'><h1 className='font-bold text-md'>Catagory</h1></div>
            </div>
            {SellerReqPro.map((e,i)=>{
                return ( 
                    <div onClick={()=>handleSellerReq(e)} className='flex mt-4 cursor-pointer bg-slate-200 hover:bg-[#e2d2f9] pt-1 pb-1 mb-2' key={i}>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'><p>{e.Sname}</p></div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'><p>{e.brand}</p></div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'><p>{e.title}</p></div>
                        <div className='flex justify-center w-[200px] lg:w-[300px]'><p>{e.thirdLavelCategory}</p></div>
                    </div>
                )
            })}
        </div>

        {(IsopenDoc)?<div className='absolute top-0 z-10 w-full bg-slate-200 shadow-2xl shadow-slate-500'>
            <div className='flex flex-col items-center justify-center'>
            <table>
            <tr>
                <td>Seller_Id:</td>
                <td>{openDoc.S_id}</td>
            </tr>
            <tr>
                <td>Seller_Name:</td>
                <td>{openDoc.Sname}</td>
            <p></p>
            </tr>
            <tr>
                <td>Product_ Name:</td>
                <td>{openDoc.title}</td>
            <p></p>
            </tr>
            <tr>
                <td>Product_ Brand: </td>
                <td>{openDoc.brand}</td>
            </tr>
            <tr>
                <td>Product_Catagory: </td>
                <td>{openDoc.thirdLavelCategory}</td>
            </tr>
            <tr>
                <td>Product_Status: </td>
                <td>{openDoc.status}</td>
            </tr>
            <tr>
                <td>Product_Pricing: </td>
                <td>₹{openDoc.price}</td>
            </tr>
            </table>
            <button onClick={()=>handleSellerReq(null)}>{`GoBack->>`}</button>
            </div>
        </div>:""}
    </div>
  )
}

export default SellerRequest
