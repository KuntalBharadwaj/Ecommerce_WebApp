import express from "express";
import connectToMongo from "./Database/db.js"
import cors from "cors"
import Authentication from "./routes/Authentication.User.js";
import UserInfo from "./routes/UserInfo.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",Authentication)
app.use("/api/user",UserInfo)

app.get("/api/products",(req,res)=>{
    res.send("home")
})

connectToMongo()
app.listen(4000,(err)=>{
    if(!err) console.log("server start")
})