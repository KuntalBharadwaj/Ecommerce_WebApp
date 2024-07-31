import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../../component/context/LoginContext";
import { Circle, Close } from "@mui/icons-material";

function Overview() {
  const [IsopenDoc, setIsopenDoc] = useState(false);
  const [openDoc, setOpenDoc] = useState({});
  const [sellerProduct, setSellerProduct] = useState([]);

  const { user } = useContext(LoginContext);

  const handleSellerReq = (e) => {
    if (e == null) {
      setIsopenDoc(false);
      setOpenDoc(null);
    } else {
      setIsopenDoc(true);
      setOpenDoc(e);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${window.location.origin}/api/seller/getProduct/${user._id}`,
        { withCredentials: true }
      );
      if (response.data.success) setSellerProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveReq = async () => {
    try {
      const response = await axios.put(
        `${window.location.origin}/api/seller/removeReq`,
        openDoc,
        { withCredentials: true }
      );
      if (response.data.success) {
        setIsopenDoc(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col justify-center">
      <div className="p-4 text-2xl font-bold">All Products</div>
      <div className="">
        <div className="flex">
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Product</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Brand Name</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Catagory</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Approval</h1>
          </div>
        </div>
        {sellerProduct.map((e, i) => {
          return (
            <div
              onClick={() => handleSellerReq(e)}
              className={`${(e.status === "reject")? "opacity-50 flex mt-4 cursor-pointer bg-slate-200 hover:bg-[#e2d2f9] pt-1 pb-1 mb-2":"flex mt-4 cursor-pointer bg-slate-300 hover:bg-[#e2d2f9] pt-1 pb-1 mb-2"}`}
              key={i}
            >
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                {e.Sname}
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                {e.brand}
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                {e.thirdLavelCategory}
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                {e.status === "success" ? (
                  <Circle style={{ color: "green" }} />
                ) : (
                  ""
                )}
                {e.status === "reject" ? (
                  <Circle style={{ color: "red" }} />
                ) : (
                  ""
                )}
                {e.status === "pending" ? (
                  <Circle style={{ color: "yellow" }} />
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>

      {IsopenDoc ? (
        <div className="absolute top-0 z-10 w-full bg-slate-200 shadow-2xl flex justify-around">
          <div className="p-3 flex flex-col justify-evenly sm:flex-row items-center">
            <table className="md:mr-5">
              <tr className="flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Seller_Id:
                </td>
                <td className="text-sm sm:text-base">{openDoc.S_id}</td>
              </tr>
              <tr className="flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Seller_Name:
                </td>
                <td className="text-sm sm:text-base">{openDoc.Sname}</td>
              </tr>
              <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Product_ Name:
                </td>
                <td className="text-sm sm:text-base">{openDoc.title}</td>
              </tr>
              <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Product_ Brand:{" "}
                </td>
                <td className="text-sm sm:text-base">{openDoc.brand}</td>
              </tr>
              <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Product_Catagory:{" "}
                </td>
                <td className="text-sm sm:text-base">
                  {openDoc.thirdLavelCategory}
                </td>
              </tr>
              <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Product_Status:{" "}
                </td>
                <td className="text-sm sm:text-base">{openDoc.status}</td>
              </tr>
              <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                  Product_Pricing:{" "}
                </td>
                <td className="text-sm sm:text-base">₹{openDoc.price}</td>
              </tr>
            </table>
            <div className="ml-3">
              <img
                className="object-fill w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]"
                src={openDoc.image}
                alt="not found"
              ></img>
              {openDoc.status === "success" ? (
                <div className="flex mt-3" onClick={handleRemoveReq}>
                  <button className="w-[100px] h-[35px] rounded-sm text-sm text-slate-800 font-bold bg-[#d3b5fc]">
                    Remove
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="mt-3 cursor-pointer bg-white rounded-sm shadow-sm shadow-slate-400 w-[40px] h-[30px] flex justify-center items-center"
            onClick={() => handleSellerReq(null)}
          >
            <Close />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Overview;
