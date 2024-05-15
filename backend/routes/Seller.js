import express from "express";
import { SellerProduct } from "../models/SellerRequest.model.js";
import { Seller } from "../models/Seller.model.js";
const router = express.Router();

router.get("/getProduct/:id", async (req, res) => {
    try {
        const products = await SellerProduct.find({S_id:req.params.id})
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
    const response = await SellerProduct.insertMany([req.body]);    
    res.json({ success: true, message: "successfully Added" });
  } catch (error) {
    console.log("Error in AddItem endpoint" + error.message);
    res.json({ success: false });
  }
});

// router.get("/noofproduct", async (req, res) => {
//   try {
//     const TotalProduct = await Order.find();
//     const TotalPending = await Order.find({ order: "pending" });
//     const TotalSucces = await Order.find({ order: "accepted" });

//     const data = {
//         TotalProduct: TotalProduct.length,
//         TotalPending: TotalPending.length,
//         TotalSucces: TotalSucces.length
//     }

//     res.status(200).json({success: true, data:data})

//   } catch (err) {
//     console.log("error in noofproduct");
//     console.log(err.message);
//     res.status(500).json({ success: false });
//   }
// });

// router.get("/pending&successProduct",async(req,res)=>{
//   try {
//     const TotalPending = await Order.find({ order: "pending" });
//     const TotalSucces = await Order.find({ order: "accepted" });

//     const Obj = {
//       Pending: TotalPending,
//       Success: TotalSucces,
//     }

//     res.status(200).json({success:true,data:Obj})

//   } catch (err) {
//     console.log("error in pending&successProduct route")
//     console.log(err.message)
//     res.status(500).json({success:false,message:"some internal error occur"})
//   }
// })

export default router;
