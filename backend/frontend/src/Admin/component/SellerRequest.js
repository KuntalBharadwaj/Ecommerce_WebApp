import { Close } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function SellerRequest() {
  const [IsopenDoc, setIsopenDoc] = useState(false);
  const [openDoc, setOpenDoc] = useState({});
  const [SellerReqPro, setSellerReqPro] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `${window.location.origin}/api/admin/getSellerReq`,
      { withCredentials: true }
    );
    if (response.data.success) setSellerReqPro(response.data.data);
  };

  const handleSellerReq = (e) => {
    if (e == null) {
      setIsopenDoc(false);
      setOpenDoc(null);
    } else {
      setIsopenDoc(true);
      setOpenDoc(e);
    }
  };

  const handleAccept = async () => {
    try {
      openDoc.Seller_Product_id = openDoc._id
      let response;
      if (openDoc.request === "Adding") {
        response = await axios.post(
          `${window.location.origin}/api/admin/AddItem`,
          openDoc,
          { withCredentials: true }
        );
      } else if (openDoc.request === "remove") {
        response = await axios.delete(
          `${window.location.origin}/api/admin/removeSellerItem/${openDoc._id}`,
          { withCredentials: true }
        );
        console.log(response)
      } else if (openDoc.request === "update") {
        response = await axios.post(
          `${window.location.origin}/api/admin/UpdateSellerItem`,
          openDoc,
          { withCredentials: true }
        );
      }

      if (response.data.success) {
        setIsopenDoc(false);
        let filterData = SellerReqPro.filter((e) => {
          return e !== openDoc;
        });
        setSellerReqPro(filterData);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleReject = async () => {
    try {
      const response = await axios.put(
        `${window.location.origin}/api/admin/reject`,
        openDoc,
        { withCredentials: true }
      );

      if (response.data.success) {
        let filterData = SellerReqPro.filter((e) => {
          return e !== openDoc;
        });
        setSellerReqPro(filterData);
        setIsopenDoc(false)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative flex flex-col justify-center">
      <div className="">
        <div className="flex">
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Seller_Name</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Brand Name</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Product Name</h1>
          </div>
          <div className="flex justify-center w-[200px] lg:w-[250px]">
            <h1 className="font-bold text-md">Catagory</h1>
          </div>
        </div>
        {SellerReqPro.map((e, i) => {
          return (
            <div
              onClick={() => handleSellerReq(e)}
              className="flex mt-4 cursor-pointer bg-slate-200 hover:bg-[#e2d2f9] pt-1 pb-1 mb-2"
              key={i}
            >
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                <p>{e.Sname}</p>
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                <p>{e.brand}</p>
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                <p>{e.title}</p>
              </div>
              <div className="flex justify-center w-[200px] lg:w-[250px]">
                <p>{e.thirdLavelCategory}</p>
              </div>
            </div>
          );
        })}
      </div>

      {IsopenDoc ? (
        <div className="absolute top-0 z-10 w-full bg-slate-200 shadow-2xl shadow-slate-500 flex justify-around">
          <div className="p-3 flex flex-col justify-evenly sm:flex-row items-center">
            <table>
              <tbody>
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
                    Seller Request:{" "}
                  </td>
                  <td className="text-sm sm:text-base">{openDoc.request}</td>
                </tr>
                <tr className=" flex justify-start mb-3 border-b p-1 border-slate-400">
                  <td className="w-[150px] sm:w-[200px] text-sm sm:text-base">
                    Product_Pricing:{" "}
                  </td>
                  <td className="text-sm sm:text-base">₹{openDoc.price}</td>
                </tr>
              </tbody>
            </table>
            <div className="ml-10">
              <img
                className="object-fill w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]"
                src={openDoc.image}
                alt="not found"
              ></img>
              <div className="flex mr-3">
                {console.log(openDoc)}
                <button
                  className="mt-4 mr-4 w-[80px] h-[30px] rounded-sm font-bold text-white items-center flex justify-center bg-[#a487fa]"
                  onClick={() => handleAccept()}
                >
                  Accept
                </button>
                <button
                  className="mt-4 mr-4 w-[80px] h-[30px] rounded-sm font-bold text-white items-center flex justify-center bg-[#a487fa]"
                  onClick={() => handleReject()}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="mt-3 cursor-pointer bg-white rounded-sm shadow-sm shadow-slate-400 w-[40px] h-[30px] flex justify-center items-center"
          onClick={()=>handleSellerReq(null)}>
          <Close/>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SellerRequest;
