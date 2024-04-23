import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext()

export { ProductContext }

function ProductProvider(props) {

  const [ProductList, setProductList] = useState([])
  const [filteredProductList, setfilteredProductList] = useState([])
  const [isdropMen, setIsdropMen] = useState(false)
  const [IsClose, setIsClose] = useState(true)
  const [isdropWoman, setIsdropWoman] = useState(false)
  const [Totalprice, setTotalprice] = useState();

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/api/products");
	  if(response.data.success === true) setProductList(response.data.data); // Update ProductList with response data
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }


  const initPayment = (data) => {
		const options = {
			key: process.env.KEY_SECRET,
			amount: data.amount,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:4000/api/user/Payment/verify";
					const { data } = await axios.post(verifyUrl, response,{withCredentials:true});
					console.log(data);
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


  const handlePayment = async () => {
		try {
			console.log("start")
			const orderUrl = "http://127.0.0.1:4000/api/user/payment/orders";
			const response = await axios.post(orderUrl, { amount: Totalprice },{withCredentials:true});
			console.log(response);
			initPayment(response.data);
		} catch (error) {
			console.log(error);
		}
	};
  
  useEffect(()=>{
    fetchProduct()
  },[])


  return (
    <ProductContext.Provider value={{ ProductList, setProductList, filteredProductList, setfilteredProductList,isdropMen,setIsdropMen,IsClose, setIsClose,isdropWoman, setIsdropWoman,Totalprice, setTotalprice, handlePayment}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductProvider }


