import mongoose from "mongoose";

const adminProductSchema = new mongoose.Schema({
    Sname: {
        type: String,
    },
    S_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

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
    
    status : {
        type: String,
        default: "false"
    }

})

export const AdminProduct = mongoose.model("AdminProduct", adminProductSchema)