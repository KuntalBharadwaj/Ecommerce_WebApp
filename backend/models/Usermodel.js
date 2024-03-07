import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
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
        required: true,
        default: "CUSTOMER"
    },
    Address:{
        type: Array,
        default: []
    },
    Avatar:{
        type: String,
    },
})

export const User = mongoose.model("User", UserSchema);