import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext()

export { ProductContext }

function ProductProvider(props) {

  let AllProduct = [{"name": "Kuntal", "image": "kkk"}]
  const [ProductList, setProductList] = useState(AllProduct)
  const [filteredProductList, setfilteredProductList] = useState([])
  const [isdropMen, setIsdropMen] = useState(false)
  const [IsClose, setIsClose] = useState(true)
  const [isdropWoman, setIsdropWoman] = useState(false)


  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/api/products");
      setProductList(response.data); // Update ProductList with response data
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  }
  
  useEffect(()=>{
    fetchProduct()
  },[])


  return (
    <ProductContext.Provider value={{ ProductList, setProductList, filteredProductList, setfilteredProductList,isdropMen,setIsdropMen,IsClose, setIsClose,isdropWoman, setIsdropWoman}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductProvider }


