import mongoose from "mongoose"
let Database
async function connectToMongo(){
    Database = await mongoose.connect(process.env.MONGO_URI).
    then((data)=>{
        console.log("connected to database")
        return data
    }).catch(e=>{
        console.log("Error in databse connection")
        console.log(e.message)
    })
}

export default connectToMongo
export {Database}

// connectToMongo()
