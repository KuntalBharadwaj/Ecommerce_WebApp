import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: {
        type: String
    },
    amount: {
        type: Number
    },

    order_id:{
        type: String
    },
    razorpay_payment_id:{
        type:String,
        default:null
    },
    razorpay_order_id:{
        type:String,
        default:null
    },
    razorpay_signature:{
        type:String,
        default:null
    }
})

export const Order = mongoose.model("order",schema)