import mongoose from "mongoose";
import express from "express";
import { User } from "../models/Usermodel.js"

const router = express.Router()

router.post("/register", async (req, res) => {
    const userobj = {
        "UserName": req.body.UserName,
        "Email" : req.body.email,
        "Password": req.body.Password
    }

    try {
        const user = await User.findOne(userobj)
        if (!user) {
            User.insertMany([userobj])
            res.send("user Successfully created")
        }
        else res.send("user Already exist")
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
        const user = await User.findOne(userobj)
        if(user) {
            res.json({user: user,message: "true"})
        }

        else {
            res.json({message: "false"})
        }

    } catch (error) {
        res.send(error.message)
    }
})

export default router



