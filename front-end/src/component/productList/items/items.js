import { useContext, useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { ProductContext } from "../../context/ProductContext"
 
  export default function Items() {
    const {catagory} = useParams()
    const { ProductList , filteredProductList , setfilteredProductList } = useContext(ProductContext)
    const [ product , setProduct] = useState([]);

    useEffect(()=>{
      // edit extracting products filtering by their catagory
        setProduct(ProductList.filter(e=>{
        return (e.thirdLavelCategory === catagory || e.title.includes(catagory))
      }))
    },[catagory])

    useEffect(()=>{
      setfilteredProductList(product)
    },[product])

    return (
      <div className=" bg-blue-50 m-1 rounded-md">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProductList.map((product,i) => (
              <div key={i} className="border-2 border-zinc-300 rounded-md pb-2">
                
                {/* edit */}
              <NavLink to={`/product/${catagory}/${product.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img  
                    src={product.image}
                    alt="not found"
                    className="h-[40vh] w-full object-cover object-top group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 ml-3 text-md font-semibold text-gray-900">{product.brand}</h3>
                <h3 className="mt-3 ml-3 text-sm text-gray-700">{product.title}</h3>
                <span className="mt-1 ml-3 text-md font-medium text-gray-900">₹{product.selling_price}</span>
                <span className="mt-1 ml-3 text-md font-medium text-gray-400 line-through">{product.price}</span>
                <span className="mt-1 ml-3 text-sm font-bold text-green-500">{product.disscount}</span>
              </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  