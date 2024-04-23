import express from "express";
import connectToMongo from "./Database/db.js"
import { Database } from "./Database/db.js";
import cors from "cors"
import Authentication from "./routes/AuthenticationUser.js";
import product from "./routes/ProductInfo.js"
import UserInfo from "./routes/UserInfo.js"
import { User } from "./models/Usermodel.js";
import { Product } from "./models/Productmodel.js"
import cookieParser from "cookie-parser";
import authenticateJWT from "./middleware/isLoginmiddleware.js"
import dotenv from "dotenv"
import admin from "./routes/Admin.js"

const app = express()
dotenv.config()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions));

app.use(cookieParser())


app.options('*', cors());
app.use("/api",Authentication)
app.use("/api/user",authenticateJWT,UserInfo)
app.use("/api/products",product)
app.use("/api/admin",admin)


// app.get("/api/products", async (req,res)=>{
//     const products = await Product.find({})
//     res.send(products)
// })

try {
    connectToMongo()
    app.listen(4000,(err)=>{
    if(!err) console.log("server start")
})
    
} catch (error) {
    console.log(err.message)
}
