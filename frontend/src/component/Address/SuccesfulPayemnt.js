import React from "react";
import { NavLink } from "react-router-dom";

function SuccesfulPayment() {
  return (
    <div>
      <div className="flex justify-center h-[690px] bg-[#321055]">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <img
            className="object-cover"
            src="/assets/payment/paymentgif.gif"
            alt=""
          ></img>
          <NavLink
            to={"/"}
            className="text-xl underline font-medium mt-4 text-white"
          >
            Go To Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SuccesfulPayment;
