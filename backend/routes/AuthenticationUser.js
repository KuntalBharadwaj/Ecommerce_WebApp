import express from "express";
import { User } from "../models/Usermodel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";

let SECRET_KEY = "kuntal@123"

const router = express.Router()

router.post("/register", async (req, res) => {
    
    try {
        let salt = await bcrypt.genSalt(10)
        let SecPass = await bcrypt.hash(req.body.Password,salt)

        const userobj = {
            "UserName": req.body.UserName,
            "Email" : req.body.email,
            "Password": SecPass
        }
        const user = await User.findOne({Email: req.body.email})
        if (!user) {
            User.insertMany([userobj])
            res.json({message:"true"})
        }
        else res.json({message:"false"})
    } catch (error) {
        res.send(error.message)
    }

})

router.post("/login", async (req, res) => {
    const userobj = {
        "Email": req.body.email,
        "Password": req.body.password
    }

    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpsOnly: true
    }

    try {
        const user = await User.findOne({Email:userobj.Email})
        
        if(user) {
            const isvalid = await bcrypt.compare(userobj.Password,user.Password)
            if(isvalid) {
                const token = Jwt.sign({email: user.Email, "_id": user._id},SECRET_KEY)
                res.cookie("token",token,options)
                res.json({user: user,message: "true"})
            }
            else res.json({message: "false"})
        }

        else {
            res.json({message: "false"})
        }

    } catch (error) {
        res.send(error.message)
    }
})


router.post("/login", async (req, res) => {
    const userobj = {
        "Email": req.body.email,
        "Password": req.body.Password
    }

    try {
        const user = await User.findOne({Email:userobj.Email})

        if(user) {
            const isvalid = bcrypt.compare(userobj.Password,user.Password,(err,res)=>{
                if(err) console.log(err)
                else if(res) console.log(res)
            })

            if(isvalid) {
                
                const token = Jwt.sign({email: user.Email, "_id": user._id},SECRET_KEY)
                res.cookie("token",token,options)
                res.json({user: user,message: "true"})
            }
            else res.json({message: "false"})
        }

        else {
            res.json({message: "false"})
        }

    } catch (error) {
        res.send(error.message)
    }
})

export default router
