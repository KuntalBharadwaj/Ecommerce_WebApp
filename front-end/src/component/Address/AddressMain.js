import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddresLside from './AddresLside'
import AddresRside from './AddresRside'
import axios from 'axios'

function AddressMain() {

  const [AddressArray, setAddressArray] = useState([])

  const fetchAdrress = async()=>{

    const response = await axios.get("http://127.0.0.1:4000/api/user/checkout/allAddress",
    {withCredentials: true})
    
    if(response.data.success) setAddressArray(response.data.data)
  }


  useEffect(()=>{
    fetchAdrress()
  },[])


  return (
    <div>
      <Grid container spacing={2} marginTop={10} rowGap={10}>
      <Grid item xs={10} md={5} marginLeft={10} marginRight={5} bgcolor={"white"}>
        <AddresLside address={AddressArray}/>
      </Grid>
      <Grid item xs={10} md={5} marginRight={5} marginLeft={5} bgcolor={'white'}>
        <AddresRside address={AddressArray} setaddress={setAddressArray}/>
      </Grid>
      </Grid>
    </div>
  )
}

export default AddressMain
