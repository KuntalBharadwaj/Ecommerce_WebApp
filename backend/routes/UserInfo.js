import express from "express"
import { User } from "../models/Usermodel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import CartRoute from "../routes/CartInfo.js"
import AddressInfo from "./AdressInfo.js"

let SECRET_KEY = "kuntal@123"

const router = express.Router()

router.use("/cart",CartRoute)
router.use("/checkout",AddressInfo)

router.get("/", async(req,res)=>{
    const token = req.cookies.token

    try {
        const userData = Jwt.verify(token,SECRET_KEY)

        if(!userData) res.status(200).json({success: false})

        const user = await User.findById(userData._id)
        res.status(200).json({success: true, user: user})

    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }

})

router.get("/logout",(req,res)=>{
    
    try {
        res.clearCookie('token',{path:"/", secure:true, sameSite: "none" });
        res.status(200).json({success:true})

    } catch (error) {
        console.log(error.message)
    }
})

router.patch("/updateDetails", async (req, res) => {

    let updateDataObj = {
        _id: req.body._id,
        Name: req.body.username,
        CurrEmail: req.body.curremail,
        NewEmail: req.body.newemail,
        CurrentPass: req.body.currpassword,
        NewPass: req.body.newpassword
    }

    try {

        const userData = await User.findOne({ Email: updateDataObj.CurrEmail })
        if (userData) {
            const isvalid = await bcrypt.compare(updateDataObj.CurrentPass, userData.Password)
            console.log(isvalid)

            if (isvalid) {
                let salt = await bcrypt.genSalt(10)
                let SecPass = await bcrypt.hash(updateDataObj.NewPass, salt)
    
                const Acknowledge = await User.updateOne({ "_id":updateDataObj._id }, { Email: updateDataObj.NewEmail, UserName: updateDataObj.Name, Password: SecPass })            
                const user = await User.findOne({"_id":updateDataObj._id})
    
                if(Acknowledge.acknowledged) res.status(200).json({ success: true, message: "Successfully Updated", user})
                else res.status(200).json({ success: false, message: "Try Again Not Update" })
            }

            else {
                res.status(200).json({ success: false, message: "Invalid Password" })
            }
        }

        else {
            res.status(200).json({ success: false, message: "Some Internal error try Again" })
        }

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ success: false, message: error.message })
    }
})

export default router