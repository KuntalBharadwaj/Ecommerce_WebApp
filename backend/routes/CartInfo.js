import express from "express";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { Cart } from "../models/CartModel.js";

const router = express.Router()

router.get("/", async(req,res)=>{
    const token = req.cookies.token

    try {
        const userData = Jwt.verify(token,SECRET_KEY)

        if(!userData) res.status(200).json({success: false})

        const cart = await Cart.find({user_id:userData})
        res.send(cart)

    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }

})

export default router