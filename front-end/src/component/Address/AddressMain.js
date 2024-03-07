import { Grid } from '@mui/material'
import React, { useState } from 'react'
import AddresLside from './AddresLside'
import AddresRside from './AddresRside'

function AddressMain() {

  const [AddressArray, setAddressArray] = useState([])

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
