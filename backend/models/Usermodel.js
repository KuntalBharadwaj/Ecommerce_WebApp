import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true
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
    Avatar:{
        type: String,
    },

    Address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Address"
    }]
})

export const User = mongoose.model("User", UserSchema);