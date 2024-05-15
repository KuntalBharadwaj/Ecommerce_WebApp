import express from "express";
import { Product } from "../models/Productmodel.js";
import { Order } from "../models/OrdersModel.js";
import { SellerProduct } from "../models/SellerRequest.model.js";
const router = express.Router();

router.get("/getProduct", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log("error in product fetch" + error.message);
    res.json({ success: false });
  }
});

router.post("/AddItem", async (req, res) => {
  // console.log(req.body)

  const obj = req.body;

  obj.disscount = obj.disscount + "% off";
  obj.selling_price = parseInt(obj.selling_price);
  obj.price = parseInt(obj.price);

  try {
    const response = await Product.insertMany([req.body]);
    res.json({ success: true, message: "successfully Added" });
  } catch (error) {
    console.log("Error in AddItem endpoint" + error.message);
    res.json({ success: false });
  }
});

router.get("/noofproduct", async (req, res) => {
  try {
    const TotalProduct = await Order.find();
    const TotalPending = await Order.find({ order: "pending" });
    const TotalSucces = await Order.find({ order: "accepted" });

    const data = {
        TotalProduct: TotalProduct.length,
        TotalPending: TotalPending.length,
        TotalSucces: TotalSucces.length
    }

    res.status(200).json({success: true, data:data})

  } catch (err) {
    console.log("error in noofproduct");
    console.log(err.message);
    res.status(500).json({ success: false });
  }
});

router.get("/pending&successProduct",async(req,res)=>{
  try {
    const TotalPending = await Order.find({ order: "pending" });
    const TotalSucces = await Order.find({ order: "accepted" });

    const Obj = {
      Pending: TotalPending,
      Success: TotalSucces,
    }

    res.status(200).json({success:true,data:Obj})

  } catch (err) {
    console.log("error in pending&successProduct route")
    console.log(err.message)
    res.status(500).json({success:false,message:"some internal error occur"})
  }
})

router.get("/getSellerReq",async(req,res)=>{
  try {
    const response = await SellerProduct.find({})
    res.json({success: true, data:response})
    
  } catch (error) {
    res.json({success: false})
  } 
})

export default router;
