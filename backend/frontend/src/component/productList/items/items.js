import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Items() {
  const { catagory } = useParams();
  const { ProductList, filteredProductList, setfilteredProductList } =
    useContext(ProductContext);
  const [product, setProduct] = useState([]);
  const [ItemCount, setItemCount] = useState(0)

  useEffect(() => {
    // edit extracting products filtering by their catagory
    setProduct(
      ProductList.filter((e) => {
        return e.thirdLavelCategory === catagory || e.title.includes(catagory);
      })
    );
  }, [ProductList, catagory]);

  useEffect(() => {
    setfilteredProductList(product);
    setItemCount(8);
  }, [product, setfilteredProductList]);

  const fetchData = ()=>{
    if(filteredProductList.length < ItemCount+8) setItemCount(pre=>(filteredProductList.length))
    else setItemCount(pre=>(ItemCount+8))
  }
  
  return (
    <div className=" bg-white m-1 ml-3 rounded-md shadow-lg shadow-slate-400">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <InfiniteScroll
          dataLength={ItemCount} //This is important field to render the next data
          next={fetchData}
          hasMore={ItemCount != filteredProductList.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProductList.slice(0,ItemCount-1).map((e, i) => (
              <div
                key={i}
                className="rounded-sm pb-2 shadow-lg shadow-slate-300"
              >
                {/* edit */}
                <NavLink to={`/product/${catagory}/${e._id}`} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={e.image ? e.image : ""}
                      alt="not found"
                      className="h-[200px] sm:h-[340px] w-full object-cover object-top group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 ml-3 text-md font-semibold text-gray-900">
                    {e.brand}
                  </h3>
                  <h3 className="mt-3 ml-3 text-sm text-gray-700">{e.title}</h3>
                  <span className="mt-1 ml-3 text-md font-medium text-gray-900">
                    ₹{e.selling_price}
                  </span>
                  <span className="mt-1 ml-3 text-md font-medium text-gray-400 line-through">
                    {e.price}
                  </span>
                  <span className="mt-1 ml-3 text-sm font-bold text-green-500">
                    {e.disscount}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
