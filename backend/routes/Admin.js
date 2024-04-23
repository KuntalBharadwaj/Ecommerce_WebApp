import express from "express"
import { Product } from "../models/Productmodel.js"
const router = express.Router()

router.get("/getProduct",async (req,res)=>{
    try {
        const products = await Product.find({})
        res.json({success: true,data: products})
    } catch (error) {
        console.log("error in product fetch" + error.message)
        res.json({success: false})
    }
})

router.post("/AddItem",async (req,res)=>{
    // console.log(req.body)

    const obj = req.body

    obj.disscount = obj.disscount + "% off"
    obj.selling_price = parseInt(obj.selling_price)
    obj.price = parseInt(obj.price)

    console.log(obj)

    try {
        const response = await Product.insertMany([req.body])
        res.json({success: true, message: "successfully Added"});
    } catch (error) {
        console.log("Error in AddItem endpoint" + error.message)
        res.json({success: false});
    }
})

export default router