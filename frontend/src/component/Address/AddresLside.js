import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useSelector } from 'react-redux';

function AddresLside(props) {

  const {Totalprice, setIsPaymenterror} = useContext(ProductContext)
  const {user} = useContext(LoginContext)

  const cartProduct = useSelector(store => store.cart.items)

  const navigate = useNavigate()

  // payment gateway
  const initPayment = (data) => {
		const options = {
			key: process.env.KEY_SECRET,
			amount: data.amount,
			description: "Test Transaction",
			order_id: data._id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://127.0.0.1:4000/api/user/payment/verify";
					const data = await axios.post(verifyUrl, response,{withCredentials:true});

					if(data.data.success === true) {

						const obj = response
						obj.product = cartProduct
						obj.user_id = user._id
						obj.usename = user.UserName;

						const res = await axios.post("http://127.0.0.1:4000/api/user/payment/saveorder",
						obj,
						{withCredentials:true}
						)

						if(res.data.success === true) {
              				navigate("/payment")
						}
						else {
							console.log("something went wrong")
						}
					}



				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const loadScript = (src)=>{
		return new Promise((resolve)=>{
			const script = document.createElement('script')
			script.src = src
			
			script.onload = ()=>{
				resolve(true)
			}

			script.onerror = () =>{
				resolve(false)
			}

			document.body.appendChild(script)
		})
	}

  const handlePayment = async () => {
		try {
			const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
			if(!res) {
				alert("Something Wrong is Happennng")
				return;
			}
			
			const response = await axios.post("http://127.0.0.1:4000/api/user/payment/orders", 
			{ amount: Totalprice },
			{withCredentials:true}
		);

			if(response.data.success){
				initPayment(response.data.data);
			} 
			else {
				setIsPaymenterror(response.data.message)
				setTimeout(() => {
					setIsPaymenterror("")
				}, 3000);
			}
		} catch (error) {
			console.log(error);
		}
	};


  const handleClick = async ()=>{
    await handlePayment();
  }

  const handleClickDelete = (e)=>{
    console.log(e)
  }


  return (
    <div className='p-4'>
      <ul>
        <hr className='mb-4'></hr>

        {(!props.address.length) ?
          <div className='flex justify-start items-centre'>
            <p className=' text-lg'>You havn't any Saved Address</p>
          </div>: ""
        }
        {props.address.map((e,i) => {
          return (<li key={i} className='my-10'>
            <div>
              <h1 className=' font-semibold mb-2'>{`${e.fname} ${e.lname}`}</h1>
              <p>{`${e.city} ${e.pincode}`}</p>
              <h1 className='font-semibold mt-2'>Phone No. <span className=' font-normal'>{`${e.phoneno}`}</span> </h1>
              <div className='flex'>
              <button className='px-2 py-1 my-3 mr-3 rounded-sm w-[100px] text-sm bg-slate-300 hover:bg-[#c89cf9]' onClick={handleClick}>Deliver Here</button>
              <button className='px-2 py-1 my-3 ml-3 rounded-sm w-[100px] bg-slate-300 hover:bg-[#c89cf9]' onClick={(e) => {handleClickDelete()}}><DeleteIcon/></button>
              </div>
            </div>
            <hr className='mb-4'></hr>
          </li>)
        })}
      </ul>
    </div>
  )
}

export default AddresLside
