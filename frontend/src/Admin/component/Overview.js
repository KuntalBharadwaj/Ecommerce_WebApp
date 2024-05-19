import axios from "axios";
import React, { useEffect, useState } from "react";
import TablerData from "./TablerData";
import { Grid } from "@mui/material";
import { Close } from "@mui/icons-material";

function Overview() {
  const [TotalProduct, setTotalProduct] = useState(0);
  const [TotalPending, setTotalPending] = useState(0);
  const [TotalSuccessfull, setTotalSuccessful] = useState(0);

  const [SuccessfullProduct, setSucccesfullProduct] = useState([]);
  const [pendingProduct, setPendingProduct] = useState([]);

  const [IsopenSuccess, setIsopenSuccess] = useState(false);
  const [IsopenPending, setIsopenPending] = useState(false);

  const fetch = async () => {
    const response = await axios.get(
      "http://127.0.0.1:4000/api/admin/noofproduct",
      { withCredentials: true }
    );

    if (response.data.success) {
      setTotalProduct(response.data.data.TotalProduct);
      setTotalPending(response.data.data.TotalPending);
      setTotalSuccessful(response.data.data.TotalSucces);
    }
  };

  const fetch2 = async () => {
    const response = await axios.get(
      "http://127.0.0.1:4000/api/admin/pending&successProduct",
      { withCredentials: true }
    );
    if (response.data.success) {
      setSucccesfullProduct(pre=>(response.data.data.Success));
      setPendingProduct(pre=>(response.data.data.Pending));
    }
  };

  const handleAccepted = () => {
    if (IsopenSuccess) setIsopenSuccess(false);
    else setIsopenSuccess(true);
  };

  const handlePending = () => {
    if (IsopenPending) setIsopenPending(false);
    else setIsopenPending(true);
  };

  const handConfirm = async (e) => {
    //API call
    try {
      const response = await axios.put("http://127.0.0.1:4000/api/admin/confirmOrder",
      e,
      {withCredentials:true})

      if(response.data.success) {
        const filterData = pendingProduct.filter(ele=>{
          return(e !== ele)
        })
        
        setPendingProduct(pre=>(filterData))
      }

    } catch (error) {
      console.log(error.message)
    }
    
  };

  const handReject = async (e) => {
    //API call
    try {
      const response = await axios.put("http://127.0.0.1:4000/api/admin/rejectOrder",
      e,
      {withCredentials:true})

      if(response.data.status) {
        const filterData = pendingProduct.filter(ele=>{
          return(e !== ele)
        })

        setPendingProduct(pre=>(filterData))
      }

    } catch (error) {
      console.log(error.message)
    }

  };

  useEffect(() => {
    fetch();
    fetch2();
  },[]);

  return (
    <div>
      {IsopenSuccess ? (
        <Grid container className="bg-slate-200 pl-4 pt-4">
        <Grid item xs={11}>
          {SuccessfullProduct.map((e, i) => {
            return (
              <div key={i} className="mb-5 bg-white shadow-sm shadow-slate-300 p-4 rounded-sm">
                <TablerData Data={e} />
              </div>
            );
          })}
        </Grid>
        <Grid item xs={1}>
          <div
            onClick={handleAccepted}
            className="ml-2 flex justify-center items-center pointer cursor-pointer w-[35px] h-[35px] shadow-sm rounded-md shadow-slate-500 bg-white"
          >
            <Close />
          </div>
        </Grid>
      </Grid>
      ) : (
        ""
      )}

      {IsopenPending ? (
        <Grid container className="bg-slate-200 pl-4 pt-4">
          <Grid item xs={11}>
            {pendingProduct.map((e, i) => {
              return (
                <div key={i} className="mb-5 bg-white shadow-sm shadow-slate-300 p-4 rounded-sm">
                  <TablerData Data={e} />
                  <div className="flex mt-2">
                    <button
                      onClick={()=>{handConfirm(e)}}
                     className="w-[100px] h-[35px] rounded-sm text-sm font-bold mr-2 bg-[#d0affd]">
                      Confirm
                    </button>
                    <button
                      onClick={()=>{handReject(e)}}
                     className="w-[100px] h-[35px] rounded-sm text-sm font-bold bg-[#d3b5fc]">
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={1}>
            <div
              onClick={handlePending}
              className="ml-2 flex justify-center items-center pointer cursor-pointer w-[35px] h-[35px] shadow-sm rounded-md shadow-slate-500 bg-white"
            >
              <Close />
            </div>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {!IsopenPending && !IsopenSuccess ? (
        <div>
          <div className="w-full h-[200px] flex flex-col justify-center items-center bg-[#b088fc] mb-16">
            <div className="flex flex-col items-center hover:cursor-pointer">
              <p>Total Number of Orders</p>
              <p>{TotalProduct}</p>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="bg-[#b088fc] w-[45%] h-[200px] mr-12 flex flex-col justify-center items-center">
              <div className="flex flex-col items-center hover:cursor-pointer">
                <p onClick={handlePending}>Total Number of Pending Orders</p>
                <p>{TotalPending}</p>
              </div>
            </div>
            <div className="bg-[#b088fc] w-[45%] h-[200px] flex flex-col justify-center items-center">
              <div className="flex flex-col items-center hover:cursor-pointer">
                <p onClick={handleAccepted}>Total Number of Accepted Orders</p>
                <p>{TotalSuccessfull}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Overview;
