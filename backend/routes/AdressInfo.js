import express from "express";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { User } from "../models/Usermodel.js"

let SECRET_KEY = "kuntal@123"

const router = express.Router()


router.get("/allAddress", async (req, res) => {
    try {
        const token = req.cookies.token

        const userData = Jwt.verify(token, SECRET_KEY)

        if (!userData) res.json({ success: false })

        else {
            const user = await User.findById(userData._id)

            if(user) {
                let addresdata = user.Address
                res.json({success:true, data: addresdata})
            }
        }

    } catch (error) {

    }
})

router.post("/addAddress", async (req, res) => {
    try {
        const token = req.cookies.token

        const userData = Jwt.verify(token, SECRET_KEY)

        if (!userData) res.json({ success: false })

        else {
            const addressData = await User.find({ _id: userData._id })
            addressData[0].Address.push(req.body.addressObj)
            const acknowledged = await User.updateMany({ _id: userData._id }, { Address: addressData[0].Address })

            if (acknowledged.acknowledged) {
                res.json({ success: true })
            }

            else res.json({ success: false })
        }

    } catch (err) {
        console.log(err)
        res.json({ success: false })
    }
})

export default router