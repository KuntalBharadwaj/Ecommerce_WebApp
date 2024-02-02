import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard(props) {
  return (
    <div>
      <Grid container className=' space-x-12 sm:space-x-4'>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,heigth:56,bgcolor:"black" }}>K</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                <p className='font-semibold text-lg'>{props.message.name}</p>
                <p className='opacity-70'>{props.message.date}</p>
                </div>
            </div>
            <Rating value={props.message.rating} name='half-rating' readOnly></Rating>
            <p>{props.message.description}</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
