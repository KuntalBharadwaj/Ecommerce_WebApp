const MONGOURL = "mongodb+srv://Demo:Kbdlking@098@cluster0.j8j3chd.mongodb.net/?retryWrites=true&w=majority"

import mongoose from "mongoose"
let Database
async function connectToMongo(){
    Database = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce").
    then((data)=>{
        console.log("connected to database")
        return data
    }).catch(e=>{
        console.log(e.message)
    })
}

export default connectToMongo
export {Database}

// connectToMongo()
