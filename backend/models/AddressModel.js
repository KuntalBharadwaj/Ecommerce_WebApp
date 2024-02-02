import mongoose from "mongoose";
import { Schema } from "mongoose";

const AddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },

    StreetAddress: {
        type: String,
        require: true
    },

    PhoneNo: {
        type: Number,
        require: true 
    }
})

export const Address = mongoose.model("Address",AddressSchema);