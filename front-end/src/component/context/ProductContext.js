import { createContext , useState } from "react";
import AllProduct from "../productsArray/AllProduct";

const ProductContext = createContext()

export { ProductContext }

function ProductProvider(props) {

  const [ProductList , setProductList] = useState(AllProduct)
  const [filteredProductList , setfilteredProductList] = useState([])

  return (
    <ProductContext.Provider value={{ProductList , setProductList , filteredProductList , setfilteredProductList}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export { ProductProvider }


