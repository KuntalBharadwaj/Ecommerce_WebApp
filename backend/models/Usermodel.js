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
    Address:{
        type: Array,
        default: []
    },

    Type: {
        type: String
    },

    Avatar:{
        type: String,
        default: ""
    },
    
    orders: {
        type: mongoose.Types.ObjectId,
        default: []
    }
})

export const User = mongoose.model("User", UserSchema);