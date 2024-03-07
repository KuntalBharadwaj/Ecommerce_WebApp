import express from "express";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import {User} from "../models/Usermodel.js"

let SECRET_KEY = "kuntal@123"

const router = express.Router()

router.post("/", async(req, res) => {
    try {
        const token = req.cookies.token

        const userData = Jwt.verify(token, SECRET_KEY)

        if (!userData) res.json({ success: false })

        else {
            const obj = {
                _id: userData._id,
                fname: req.body.fname,
                lname: req.body.lname,
                phoneno: req.body.phoneno,
                city: req.body.city,
                pincode: req.body.pincode
            }

            const addressData = await User.find({_id:userData._id})
            addressData[0].Address.push(obj)
            const acknowledged = User.updateMany({_id:userData._id},{Address:addressData.Address})
            if(acknowledged) res.json({success: true})
            else res.json({success: false})
        }

    } catch (err) {
        console.log(err)
        res.json({ success: false })
    }
})

export default router