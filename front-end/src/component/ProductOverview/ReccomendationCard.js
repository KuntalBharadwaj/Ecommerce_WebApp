import { NavLink } from "react-router-dom"
 
  export default function Items(props) {
    let catagory = props.item.thirdLavelCategory

    // edit extracting products filtering by their catagory

    return (
      <div className=" bg-blue-50 m-1 rounded-md w-[140px] md:w-[220px]">
              <div className="border-2 border-zinc-300 rounded-md pb-2">
                
                {/* edit */}
              <NavLink to={`/product/${catagory}/${props.item._id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img  
                    src={props.item.image}
                    alt="not found"
                    className="h-[100px] md:h-[250px] w-full object-cover object-top group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 ml-3 text-md font-semibold text-gray-900">{props.item.brand}</h3>
                <h3 className="mt-3 ml-3 text-sm text-gray-700">{props.item.title}</h3>
                <span className="mt-1 ml-3 text-md font-medium text-gray-900">₹{props.item.selling_price}</span>
                <span className="mt-1 ml-3 text-md font-medium text-gray-400 line-through">{props.item.price}</span>
                <span className="mt-1 ml-3 text-sm font-bold text-green-500">{props.item.disscount}</span>
              </NavLink>
              </div>
      </div>
    )
  }
  