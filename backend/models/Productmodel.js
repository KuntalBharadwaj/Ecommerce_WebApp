import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    title: {
        type: String
    },

    brand: {
        type: String
    },

    selling_price: {
        type: Number
    },

    price: {
        type: Number
    },

    disscount: {
        type: String
    },

    image:{
        type: String,
    },

    thirdLavelCategory:{
        type: String,
    },
    
    Seller_Product_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seller"
    }
})

export const Product = mongoose.model("Product", ProductSchema);