import mongoose from "mongoose"
let Database
async function connectToMongo(){
    Database = await mongoose.connect("mongodb://localhost:27017/ecommerce").
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
