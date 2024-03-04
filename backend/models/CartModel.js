import mongoose, { Schema } from "mongoose";

const Cartschema = new Schema({
    user_id :{
        type : mongoose.Schema.Types.model.ObjectId,
        ref:"User"
    },
    products:{
        type: Array,
        default: []
    }
})

export const Cart = mongoose.model("Cart",Cartschema)