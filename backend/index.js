import express from "express";
import connectToMongo from "./Database/db.js"
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
import seller from "./routes/Seller.js"
import path from "path";
import { fileURLToPath } from 'url';

const app = express()
dotenv.config()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,     
    optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions));

app.use(cookieParser())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
})

app.options('*', cors());
app.use("/api",Authentication)
app.use("/api/products",product)
app.use("/api/user",authenticateJWT,UserInfo)
app.use("/api/admin",authenticateJWT,admin)
app.use("/api/seller",authenticateJWT,seller)


// app.get("/api/products", async (req,res)=>{
//     const products = await Product.find({})
//     res.send(products)
// })

const PORT = process.env.PORT || 5000

try {
    connectToMongo()
    app.listen(PORT,(err)=>{
    if(!err) console.log(`server start at ${PORT}`)
})
    
} catch (error) {
    console.log(err.message)
}
