import express from "express"
import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv"
import {Order} from "../models/OrdersModel.js"

dotenv.config()

const router = express.Router()

const razorpay = new Razorpay({
	key_id: process.env.KEY_ID,
	key_secret: process.env.KEY_SECRET,
});

router.post("/orders", async (req, res) => {

	try {
		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		const response = await razorpay.orders.create(options);

		const data = {
			_id:response.id,
			amount: response.amount,
			currency: response.currency, 
		}

		res.status(200).json({success: true,data})

	} catch (error) {
		res.json({success: false, message: "Internal Server Error!" });
		console.log("error in orders ");
		console.log(error)
	}
});

router.post("/verify", async (req, res) => {
	try {

		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.json({success: true, message: "Payment verified successfully" });
		} else {
			return res.json({success: false, message: "Invalid signature sent!" });
		}
	} catch (error) {
		console.log("message in verify" + error.message);
		res.json({success: false, message: "Internal Server Error!" });
	}
});

router.post("/saveorder",async (req,res)=>{
	try {

		await Order.insertMany([req.body])
		res.status(200).json({success:true, message:"data successfully added to database"})
	} catch (err) {
		console.log("error in saveorder")
		console.log(err.message)
		res.status(500).json({success:false, message:"some database error"})
	}
})

export default router