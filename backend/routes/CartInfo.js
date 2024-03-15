import express from "express";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { Cart } from "../models/CartModel.js";
import Payment from "./Payment.js"

let SECRET_KEY = "kuntal@123"

const router = express.Router()

router.use("/payment",Payment)

router.get("/", async(req,res)=>{
    const token = req.cookies.token

    try {
        const userData = Jwt.verify(token,SECRET_KEY)

        if(!userData) res.status(200).json({success: false})

        const cart = await Cart.find({user_id:userData._id})

        if(cart.length) res.json({success:true, data:cart[0].products})
        else {
            res.json({success:false})
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).json({success: false, message: error.message})
    }

})

router.post("/addCart",async(req,res)=>{
    const token = req.cookies.token
    try {
        const userData = Jwt.verify(token,SECRET_KEY)

        if(!userData) res.status(200).json({success: false})

        else {
            const cartUser = await Cart.find({user_id: userData._id}) 
            
            if(cartUser.length) {
                cartUser[0].products.forEach(e=>{
                    if(e.product_id == req.body._id) {
                        e.count+=1;
                    }
                })

                const acknowledged = await Cart.updateOne({user_id:cartUser[0].user_id},{products: cartUser[0].products})
                
                if(acknowledged.modifiedCount==0) {
                    cartUser[0].products.push({product_id:req.body._id,count:1})
                    const acknowledged2 = await Cart.updateOne({user_id:cartUser[0].user_id},{products: cartUser[0].products})
                }

                res.json({success:true})
            }

            else {
                let cartobj = {
                    user_id : userData._id,
                    products: []
                }
                
                cartobj.products.push({product_id: req.body._id,count: 1})
                
                const Acknowledge = await Cart.insertMany([cartobj])
                
                if(Acknowledge.acknowledged) res.json({success:true})
                else res.json({success: false})
            }
        }
    } catch (error) {
        console.log(error.message)
        res.end()   
    }
    
})

router.post("/removecart",async(req,res)=>{
    const token = req.cookies.token
    try {
        const userData = Jwt.verify(token,SECRET_KEY)
        if(!userData) res.status(200).json({success:false,message:"Authentication failed"})

        else {
            const cartitem = await Cart.findOne({user_id:userData._id})
            if(!cartitem) res.json({success:false})

            else {
                cartitem.products.forEach((e,i)=>{
                    if(e.product_id === req.body._id) {
                        e.count-=1;
                    }
                    if(e.count === 0) cartitem.products.splice(i,1)
                })

                const acknowledged = await Cart.updateOne({user_id:userData._id},{products:cartitem.products})
                res.json({success:true})
            }
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false})
    }
})

export default router