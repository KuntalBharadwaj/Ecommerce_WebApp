import axios from "axios";
import React, { useEffect, useState } from "react";

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
      "http://127.0.0.1:4000/api/admin/noofproduct"
    );

    setTotalProduct(response.data.data.TotalProduct);
    setTotalPending(response.data.data.TotalPending);
    setTotalSuccessful(response.data.data.TotalSucces);
  };

  const fetch2 = async () => {
    const response = await axios.get(
      "http://127.0.0.1:4000/api/admin/pending&successProduct"
    );
    setSucccesfullProduct(response.data.data.Success);
    setPendingProduct(response.data.data.Pending);
  };

  const handleAccepted = () => {
    if (IsopenSuccess) setIsopenSuccess(false);
    else setIsopenSuccess(true);
  };

  const handlePending = () => {
    if (IsopenPending) setIsopenPending(false);
    else setIsopenPending(true);
  };

  const Accept = ()=>{
    //API call
  }

  const Reject = ()=>{
    //API call
  }

  useEffect(() => {
    fetch();
    fetch2();
  }, []);

  return (
    <div>
      {IsopenSuccess ? (
        <div className="w-[80%] bg-blue-400">
          <h1 onClick={handleAccepted}>Hello Accepted</h1>
          {SuccessfullProduct.map((e,i) => {
            return (
              <div key={i} className="flex mr-4">
                <p>{e.UserName}</p>
                <p>{e.product.length}</p>
              </div>
            );
          })}
          <div>
              <button onClick={handleAccepted} className="">{`Go Back -->>`} </button>
            </div>
        </div>
      ) : (
        ""
      )}

      {IsopenPending ? (
        <div className="w-[80%] bg-blue-400">
          <h1 onClick={handleAccepted}>Hello Accepted</h1>
            {pendingProduct.map((e,i) => {
              return (
                <div key={i} className="flex">
                  <p className="mr-4">{e.UserName}</p>
                  <p className="mr-4">{e.product.length}</p>
                  <p className="">{e.razor}</p>
                  <button onClick={Accept} className="mr-4">Accept</button>
                  <button onClick={Reject}>Reject</button>
                </div>
              );
            })}
            <div>
              <button onClick={handlePending} className="">{`Go Back -->>`} </button>
            </div>
        </div>
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
