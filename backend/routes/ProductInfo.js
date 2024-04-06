import express from "express"
import { Product } from "../models/Productmodel.js"

const app = express()
const router = express.Router()

router.get("/",async (req,res)=>{
    try {
        const products = await Product.find({})
        res.json({success: true,data: products})
    } catch (error) {
        console.log("error in product fetch" + error.message)
        res.json({success: false})
    }
})

router.post("/id", async(req,res)=>{
    try {
        const product = await Product.findById(req.body._id)
        res.json({success:true, data: product})

    } catch (error) {
        console.log("error in fetch product from id" + error.message)
    }
})

export default router