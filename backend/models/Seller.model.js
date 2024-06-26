import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Email : {
        type : String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    
    role: {
        type: String,
        default: "Seller"
    },

    Avatar:{
        type: String,
    }
})

export const Seller = mongoose.model("Seller",SellerSchema)