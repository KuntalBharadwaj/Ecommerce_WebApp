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
  const [TotalPriceWithDelivery, setTotalPriceWithDelivery] = useState(0);

  const [isPaymentError, setIsPaymenterror] = useState("")
  const [isProductFetched, setIsProductFetched] =  useState(false);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/api/products`);
	  if(response.data.success === true) {
      setProductList(pre=>(response.data.data)); // Update ProductList with response data
      setIsProductFetched(true);
    }
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }
  
  useEffect(()=>{
    fetchProduct()
  },[])


  return (
    <ProductContext.Provider value={{ProductList, setProductList, filteredProductList, setfilteredProductList,isdropMen,setIsdropMen,IsClose, setIsClose,isdropWoman, setIsdropWoman,Totalprice, setTotalprice, isPaymentError, setIsPaymenterror, TotalPriceWithDelivery, setTotalPriceWithDelivery,isProductFetched}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductProvider }


