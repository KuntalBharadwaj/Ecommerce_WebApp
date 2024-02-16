import express from "express";
import connectToMongo from "./Database/db.js"
import { Database } from "./Database/db.js";
import cors from "cors"
import Authentication from "./routes/AuthenticationUser.js";
import UserInfo from "./routes/UserInfo.js"
import { User } from "./models/Usermodel.js";
import { Product } from "./models/Productmodel.js"


const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",Authentication)
app.use("/api/user",UserInfo)

app.get("/api/products", async (req,res)=>{
    const products = await Product.find({})
    res.send(products)
})

try {
    connectToMongo()
    app.listen(4000,(err)=>{
    if(!err) console.log("server start")
})
    
} catch (error) {
    console.log(err.message)
}
