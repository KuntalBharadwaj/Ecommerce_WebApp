import express from "express";
import { User } from "../models/Usermodel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";

let SECRET_KEY = "kuntal@123"

const router = express.Router()

router.post("/register", async (req, res) => {

    try {

        let salt = await bcrypt.genSalt(10)
        let SecPass = await bcrypt.hash(req.body.Password, salt)

        const userobj = {
            "UserName": req.body.UserName,
            "Email": req.body.email,
            "Password": SecPass
        }
        const user = await User.findOne({ Email: req.body.email })
        if (!user) {
            User.insertMany([userobj])
            res.json({success: true , message: "User Successfully LoggedIn" })
        }
        else res.json({ success: false, message: "User Already Registered" })
    }

    catch (error) {
        res.json({success: false, message: error.message})
    }
})

router.post("/login", async (req, res) => {

    const userobj = {
        "Email": req.body.email,
        "Password": req.body.password
    }
    
    try {
        const user = await User.findOne({ Email: userobj.Email })
        
        if (user) {
            const isvalid = await bcrypt.compare(userobj.Password, user.Password)
            if (isvalid) {
                
                const token = Jwt.sign({ email: user.Email, "_id": user._id }, SECRET_KEY)
                res.cookie('token', token, { maxAge: 86400000, httpOnly: true, secure:true, sameSite: "none" },{path:"/"});
                res.json({success: true , message: "User Successfully Registered", user: user})
            }

            else res.json({success: false , message: "Invalid Username or Passsword" })

        }

        else res.json({success: false , message: "Invalid Username or Passsword" })

    } catch (error) {
        res.json({success: false , message: error.message })
    }
})


export default router
