import express from "express";
import { User } from "../models/Usermodel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { Seller } from "../models/Seller.model.js";

dotenv.config()

let SECRET_KEY = process.env.SECRET_KEY

const router = express.Router()

router.post("/register", async (req, res) => {

    try {
        let salt = await bcrypt.genSalt(10)
        let SecPass = await bcrypt.hash(req.body.Password, salt)

        const userobj = {
            "UserName": req.body.UserName,
            "Email": req.body.email,
            "Password": SecPass,
            "role": req.body.role
        }
        
        const user = await User.findOne({ Email: req.body.email }) 
        const user2 = await Seller.findOne({Email:req.body.email})
        
        if (user == null && user2==null) {
            if(userobj.role == "Seller") await Seller.insertMany([userobj])
            else await User.insertMany([userobj])
            // console.log("kjjbjbj")
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
        "Password": req.body.password,
        "role": req.body.role
    }
    
    try {
        const user = await User.findOne({ Email: userobj.Email,role: userobj.role }) || await Seller.findOne({ Email: userobj.Email,role: userobj.role })
        if (user) {
            const isvalid = await bcrypt.compare(userobj.Password, user.Password)
            if (isvalid) {
                const token = Jwt.sign({ email: user.Email, _id: user._id, role: userobj.role }, SECRET_KEY)
                res.cookie('token', token, { maxAge: 86400000, httpOnly: true, secure:true, sameSite: "none" },{path:"/"});
                res.json({success: true , message: "User Successfully LoggedIn", user: user})
            }

            else res.json({success: false , message: "Invalid Username or Passsword" })

        }

        else res.json({success: false , message: "Invalid Username or Passsword" })

    } catch (error) {
        console.log("Error in login" + error.message )
        res.json({success: false , message: error.message })
    }
})


export default router
