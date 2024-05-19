import express from "express";
import { Product } from "../models/Productmodel.js";
import { Order } from "../models/OrdersModel.js";
import { SellerProduct } from "../models/SellerRequest.model.js";
// import { AdminProduct } from "../models/AdminProduct.model.js";
const router = express.Router();

router.put("/confirmOrder",async (req,res)=>{
  try {
    const id = req.body._id
    await Order.updateOne({_id:id},{order:"confirm"})

    res.json({success: true})
  } catch (error) {

    console.log("error in confirmOrder")
    console.log(error.message)

    res.json({success: false})
  }
})

router.put("/rejectOrder",async (req,res)=>{

  try {
    const id = req.body._id
    await Order.updateOne({_id:id},{order:"reject"})

    res.json({success: true})

  } catch (error) {
    console.log("error in rejectOrder")
    console.log(error.message)

    res.json({success: false})
  }
})

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
  try {
    const obj = req.body;
    const response = await Product.insertMany([obj]);
    await SellerProduct.updateOne({_id:obj._id},{status: 'success'});
    res.json({ success: true, message: "successfully Added" });

  } catch (error) {
    console.log("Error in AddItem endpoint" + error.message);
    res.json({ success: false });
  }
});

router.delete("/removeSellerItem/:id",async (req,res)=>{
  try {
    const id = req.params.id;
    await Product.deleteOne({Seller_Product_id:id})
    await SellerProduct.deleteOne({_id:id})
    res.json({success: true})
  
  } catch (error) {
    console.log("error in deleteItem")
    console.log(error.mesage)
    res.json({success: false})
  }
})

router.put("/reject", async(req,res)=>{
  try {
    const obj = req.body

    await SellerProduct.updateOne({_id: obj._id},{status: "reject"})
    res.json({success: true})
  } catch (error) {
    console.log("error in reject endpoint")
    console.log(error.message)
    res.json({success: false})
  }
})

router.get("/noofproduct", async (req, res) => {
  try {
    const TotalProduct = await Order.find();
    const TotalPending = await Order.find({ order: "pending" });
    const TotalSucces = await Order.find({ order: "confirm" });

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
    const TotalSucces = await Order.find({ order: "confirm" });

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
    const response = await SellerProduct.find({status: 'pending'})
    res.json({success: true, data:response})
    
  } catch (error) {
    res.json({success: false})
  } 
})


export default router;
