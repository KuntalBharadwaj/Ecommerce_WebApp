import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
    user_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    username: {
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
    },
    product:{
        type: Array,
        default: []
    },
    order: {
        type: String,
        default: "pending"
    }
})

export const Order = mongoose.model("order",schema)