import mongoose from "mongoose"
let Database
async function connectToMongo(){
    Database = await mongoose.connect("mongodb+srv://group_Project:G1234@cluster0.rgflqb4.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"). //mongodb+srv://group_Project:G1234@cluster0.rgflqb4.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0
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
