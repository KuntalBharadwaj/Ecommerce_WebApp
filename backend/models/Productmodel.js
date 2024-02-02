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
        type: String
    },

    color: {
        type: String
    },

    disscount: {
        type: String
    },

    color: {
        type: String
    },

    image:{
        type: String,
    },

    size: {
        type: String
    },

    topLavelCategory:{
        type: String,
    },

    secondLavelCategory:{
        type: String,
    },

    thirdLavelCategory:{
        type: String,
    }

})

export const Product = mongoose.model("Product", ProductSchema);