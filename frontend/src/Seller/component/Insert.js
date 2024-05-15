import React, { useState,useContext } from 'react'
import axios from 'axios'
import { LoginContext } from '../../component/context/LoginContext'

function Insert() {

    const [imgString, setImgString] = useState("")
    const [BrandName, setBrandName] = useState("")
    const [Title, setTitle] = useState("")
    const [Color, setColor] = useState("")
    const [SellingPrice, setSellingPrice] = useState("")
    const [Price, setPrice] = useState("")
    const [Discount,setDiscount] = useState("")
    const [TopCata, setTopCata] = useState("")
    const [ThirdCata, setThirdCata] = useState("")
    const [Descri,setDesci] = useState("")

    const {user} = useContext(LoginContext)

    const [ispopup, setIspopup] = useState("")

    const handleAddItem = async()=>{
        const obj = {
          "Sname": user.UserName,
          "S_id": user._id,
          "image": imgString,
          "brand": BrandName,
          "title": Title,
          "color": Color,
          "selling_price": SellingPrice,
          "price": Price,
          "disscount": Discount,
          "topLavelCategory": TopCata,
          "thirdLavelCategory": ThirdCata,
          "description": Descri
        }

        const response = await axios.post("http://127.0.0.1:4000/api/seller/AddItem",
        obj,
        {withCredentials:true}
      )

      if(response.data.success === true) {
        setIspopup("Item Successfully Added")
        setTimeout(() => {
          setIspopup("")
        }, 2000);
      }

      else{
        setIspopup("Some Internal Error Occur")
        setTimeout(() => {
          setIspopup("")
        }, 2000);
      }

      }

  return (
    <div>
      {(ispopup!=="")?<div className='w-full flex justify-center items-center bg-[#c88dfb] h-[35px] font-serif font-semibold'>{ispopup}</div>:""}
          <div className="flex flex-col">
            <div className="flex m-4 items-center justify-between">
              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm">Product Image String:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter the Image of the Product" onChange={(e)=>{setImgString(e.target.value)}}></input>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm mr-6">Brand Name:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter the name of the Brand" onChange={(e)=>{setBrandName(e.target.value)}}></input>
              </div>
            </div>

            <div className="flex m-4 items-center justify-between">
              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm">Product Title: </label>
                <input type="text" className="bg-slate-200 left-60 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter the name of the Product" onChange={(e)=>{setTitle(e.target.value)}}></input>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm mr-6">Color:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter the Color of the Product" onChange={(e)=>{setColor(e.target.value)}}></input>
              </div>
            </div>

            <div className="flex m-4 items-center justify-between">
              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm">Product Selling Price: </label>
                <input type="number" className="bg-slate-200 left-60 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter the Selling Price" onChange={(e)=>{setSellingPrice(e.target.value)}}></input>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm mr-6">Product Price: </label>
                <input type="number" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter Actual the Price" onChange={(e)=>{setPrice(e.target.value)}}></input>
              </div>
            </div>

            <div className="flex m-4 items-center justify-between">
              <div className="flex flex-col">
                <label className="font-semibold md:text-lg text-md">Disscount:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter Disscount%" onChange={(e)=>{setDiscount(e.target.value)}}></input>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm mr-6">Top Lavel Catagory:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[150px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter Top Lavel Catagory" onChange={(e)=>{setTopCata(e.target.value)}}></input>
              </div>
            </div>

            <div className="flex m-4 items-center justify-between">
              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm">Third Lavel Catagory:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[100px] p-5 lg:h-[50px] h-[30px]" placeholder="Enter Third Lavel Catagory" onChange={(e)=>{setThirdCata(e.target.value)}}></input>
              </div>

              <div className="flex flex-col">
                <label className="font-semibold md:text-lg sm:text-md text:sm mr-6">Description:</label>
                <input type="text" className="bg-slate-200 lg:w-[300px] w-[100px] p-5 lg:h-[50px] h-[30px]" placeholder="Write the description" onChange={(e)=>{setDesci(e.target.value)}}></input>
              </div>
            </div>
          </div>
          <button className="rounded-sm ml-4 mt-4 h-[35px] w-[100px] bg-[#ac61fc] text-white font-semibold" onClick={handleAddItem}>Add Items</button>
          </div>
  )
}

export default Insert
