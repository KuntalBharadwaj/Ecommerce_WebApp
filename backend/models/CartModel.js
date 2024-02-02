import mongoose from "mongoose";
import { Schema } from "mongoose";

const Cartschema = mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.model.ObjectId,
        ref:"User"
    },
    products:{
        type: Array,
        default: []
    }
})

export const Cart = mongoose.model("Cart",Cartschema)