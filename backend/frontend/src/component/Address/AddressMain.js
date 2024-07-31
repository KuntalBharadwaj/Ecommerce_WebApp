import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddresLside from "./AddresLside";
import AddresRside from "./AddresRside";
import axios from "axios";
import { ProductContext } from "../context/ProductContext";

function AddressMain() {
  const [AddressArray, setAddressArray] = useState([]);
  const { isPaymentError } = useContext(ProductContext);

  const fetchAdrress = async () => {
    const response = await axios.get(
      `${window.location.origin}/api/user/checkout/allAddress`,
      { withCredentials: true }
    );

    if (response.data.success) setAddressArray(response.data.data);
  };

  useEffect(() => {
    fetchAdrress();
  }, []);

  return (
    <div>
      <div className="flex justify-end">
      {(isPaymentError !== "") ? (
        <div className="w-[250px] h-[30px] mt-2 mr-16 bg-red-500 flex justify-center font-semibold items-center text-white">{isPaymentError}</div>
      ) : (
        ""
      )}
      </div>

      <Grid container spacing={2} marginTop={2} rowGap={10}>
        <Grid
          item
          xs={10}
          md={5}
          marginLeft={10}
          marginRight={5}
          bgcolor={"white"}
        >
          <AddresLside address={AddressArray} />
        </Grid>
        <Grid
          item
          xs={10}
          md={5}
          marginRight={5}
          marginLeft={5}
          bgcolor={"white"}
        >
          <AddresRside address={AddressArray} setaddress={setAddressArray} />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddressMain;
