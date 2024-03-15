import express from "express"
import Razorpay from "razorpay";
import crypto from "crypto";

const router = express.Router()

router.post("/orders", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.json({ success: false, message: "Something Went Wrong!" });
			}
			res.status(200).json({success: true, data: order });
		});
	} catch (error) {
		res.json({success: false, message: "Internal Server Error!" });
		console.log(error);
	}
});

router.post("/verify", async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
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
		res.json({success: false, message: "Internal Server Error!" });
		console.log(error);
	}
});

export default router