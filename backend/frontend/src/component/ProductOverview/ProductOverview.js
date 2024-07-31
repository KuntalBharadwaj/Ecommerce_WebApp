import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { additems } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { ProductContext } from "../context/ProductContext"
import { LoginContext } from "../context/LoginContext"
import axios from 'axios'

const product = {
  name: 'Basic Tee 6-Pack',
  price: 192,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductOverview() {
  const { filteredProductList } = useContext(ProductContext)
  const { isUserLogin } = useContext(LoginContext)
  const [item, setItem] = useState({})

  const navigate = useNavigate()

  const dispatchEvent = useDispatch()

  const { id } = useParams();

  const fetchproduct = async () => {
    const response = await axios.post(`${window.location.origin}/api/products/id`, {
      _id: id
    })

    if (response.data.success === true) {
      setItem(response.data.data)
    }
  }

  useEffect(() => {
    fetchproduct(id)
  }, [id])


  const storeInDb = async (item) => {
    try {
      await axios.post(`${window.location.origin}/api/user/cart/addCart`,
        { _id: item._id },
        { withCredentials: true })

    } catch (error) {
      console.log(error.message)
    }
  }

  const handleAddtocart = (e, item) => {
    e.preventDefault();
    if (!isUserLogin) navigate("/login")
    else {
      storeInDb(item)
      dispatchEvent(additems(item))
    }
  }

  return (
    <>
      {(item) ?
        <div className="bg-white mx-3 mb-3 rounded-sm">
            <div className="mx-auto flex flex-col md:flex-row md:justify-center lg:justify-center mt-6 p-6 shadow-md">

              {/* Image gallery */}
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 mx-auto md:mx-10 lg:mx-20 shadow-md">
                <img
                  src={(item.image) ? item.image : ""}
                  alt="not found"
                  className="object-cover object-top h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] w-[75vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
                />
              </div>

              {/* title, description of product */}
              <div className="sm:rounded-lg">
                <div className="ml-2 mt-4 lg:row-span-3 lg:mt-0">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>

                  <div className="py-10 border-b border-gray-200 pb-16 pr-8 pt-6">

                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">{item.description}</p>
                      </div>

                      {/* price */}
                      <div className='flex'>
                        <p className="text-3xl my-3 mr-5 font-semibold tracking-tight text-gray-900">₹{item.selling_price}</p>
                        <p className="text-xl mr-3 line-through my-auto tracking-tight text-gray-500">₹{item.price}</p>
                        <p className="text-xl my-auto tracking-tight font-semibold text-green-500">{Math.round(100-(item.selling_price/item.price)*100)}% off</p>
                      </div>
                    </div>

                    <div className="mt-6">

                      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                      <div className="mt-4">
                        <ul className="list-disc space-y-2 pl-4 text-sm">
                          {product.highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h2 className="text-sm font-medium text-gray-900">Details</h2>
                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Add to cart button */}
                    <button
                    onClick={(e) => handleAddtocart(e, item)}
                    className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-[#9b5efd] px-8 py-3 text-base font-medium text-white shadow-md"
                  >
                    Add to bag
                  </button>

                  </div>
                  
                </div>
              </div>
            </div>
        </div> : ""
      }


    </>
  )
}
