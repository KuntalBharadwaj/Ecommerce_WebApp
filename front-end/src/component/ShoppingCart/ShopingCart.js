import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { additems, removeitems } from '../redux/CartSlice';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Add, Remove } from '@mui/icons-material';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function ShoppingCart() {

  const cartProduct = useSelector(store => store.cart.items)
  const navigate = useNavigate();

  const {Totalprice, setTotalprice} = useContext(ProductContext)

  const [actualprice, setActualPrice] = useState();
  const [discount, setDiscount] = useState();
  const [Delivery, setDelivery] = useState()

  let tempActual = 0
  let tempDelivery = 0;
  let tempdiscount = 0
  let tempTotal = 0
  let TotalWithDelivery = 0

  const updatingPrice = ()=>{
  cartProduct.forEach(e => {
    tempActual = tempActual + parseInt(e.price) * e.count
  });
  if (tempActual !== actualprice) setActualPrice(tempActual)

  cartProduct.forEach(e => {
    tempDelivery = tempDelivery + 40 * e.count
  });
  if (tempDelivery !== Delivery) setDelivery(tempDelivery)

  cartProduct.forEach(e => {
    tempdiscount = tempdiscount + parseInt(e.price) * e.count - parseInt(e.selling_price) * e.count
  })
  if (tempdiscount !== discount) setDiscount(tempdiscount)

  cartProduct.forEach(e => {
    tempTotal = tempTotal + parseInt(e.selling_price) * e.count
  });

  if (tempTotal !== Totalprice) setTotalprice(tempTotal)
  TotalWithDelivery = Totalprice + Delivery
}

useEffect(()=>{
  updatingPrice()
},[])


  const dispatch = useDispatch()

  const removeFromDb = async (item) => {

    try {
      await axios.post("http://127.0.0.1:4000/api/user/cart/removecart",
        { _id: item._id },
        { withCredentials: true })
        updatingPrice()
    } catch (error) {
      console.log(error.message)
    }

  }

  const handleRemove = (item) => {
    removeFromDb(item)
    dispatch(removeitems(item))
  }


  const addindb = async (item) => {
    try {
      await axios.post("http://127.0.0.1:4000/api/user/cart/addCart",
        { _id: item._id },

        { withCredentials: true })
        updatingPrice()
    } catch (error) {
      console.log(error.message)
    }
  }



  const handleAdd = (item) => {
    addindb(item)
    dispatch(additems(item))
  }

  return (
    <div className='m-2 bg-white'>

      {cartProduct.length === 0 ?
        <section>
          <div className='w-full h-[95vh] flex flex-col justify-center items-center'>
            <AddShoppingCartIcon
              sx={{ fontSize: '80px' }}
              className='mb-5'
            />
            <NavLink to="/"><h1 className=' text-3xl font-semibold text-orange-600'>Go to Shop Now</h1></NavLink>
          </div>
        </section>
        :
        <section className='mt-4'>

          <Grid container className='flex justify-center sm:space-x-8 space-y-5 sm:space-y-0'>
            <Grid item xs={12} sm={6} className='bg-white'>
              {cartProduct.map((e, i) => {

                return (<div key={i} className='border-b-2 mb-4'>
                  <div className='flex items-center'>
                    <div>
                      <NavLink to={`/product/${e.thirdLavelCategory}/${e.id}`}><img src={e.image} alt='not found' className='m-2 w-[200px] h-[200px]'></img></NavLink>
                    </div>
                    <div>
                      <NavLink to={`/product/${e.thirdLavelCategory}/${e.id}`}><h1 className='mx-4'>{e.title}</h1></NavLink>
                      <div className='flex'>
                        <p className='mx-4'>₹{e.selling_price}</p>
                        <p className='text-green-500 line-through'>₹{e.price}</p>
                      </div>

                      <div className='flex mt-5'>
                        <button className='w-[40px] h-[40px] rounded-[50%] m-4 bg-[#b7acd6] text-black text-center mb-2' onClick={() => handleAdd(e)}><Add /></button>
                        <p className='flex items-center font-medium'>{e.count}</p>
                        <button className='w-[40px] h-[40px] rounded-[50%] m-4 bg-[#1c0a39] text-white text-center mb-2' onClick={() => handleRemove(e)}><Remove /></button>
                      </div>
                    </div>
                  </div>
                </div>)
              })}

              <div className='flex justify-end m-4'>
                <button className='h-[40px] w-[200px] bg-[#7411e6b1] rounded-sm shadow-lg text-gray-50 text-lg font-semibold' onClick={() => { navigate('/checkout') }}>Place to Order</button>
              </div>
            </Grid>

            <Grid item xs={12} sm={3} className=' bg-white'>
              <div className='p-5'>
                <h1 className=' text-xl font-bold text-gray-500'>Price Details</h1>
                <hr className='mt-2 mb-2'></hr>
                <div className='flex justify-between mt-4 text-lg'>
                  {cartProduct.length === 1 ? <p>{`Price ( ${cartProduct.length} item)`}</p> :
                    <p>{`Price ( ${cartProduct.length} items)`}</p>}
                  <p>{`₹${actualprice}`}</p>
                </div>

                <div className='flex justify-between mt-4 text-lg'>
                  <p>Discount</p>
                  <p className='text-green-500'>{`- ₹${discount}`}</p>
                </div>

                <div className='flex justify-between mt-4 text-lg'>
                  <p>Delivery charge</p>
                  {Totalprice >= 500 ?
                    <p>Free</p> :
                    <p>₹40</p>
                  }

                </div>
                <hr className='mt-4 mb-4'></hr>
                <div className='flex justify-between mt-4 text-lg'>
                  <p>Total Price</p>
                  {(Totalprice >= 500) ?
                  <p>{`₹${Totalprice}`}</p>:
                  <p>{`₹${TotalWithDelivery}`}</p>
                  }
                </div>
              </div>
            </Grid>

          </Grid>

        </section>
      }
    </div>
  )
}
